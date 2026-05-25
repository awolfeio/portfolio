import * as THREE from "three";
import { getActiveBackgroundFrameRateCap } from "./frameRateCap.js";
import vertexShader from "./shaders/fogShader.vert.glsl";
import fragmentShader from "./shaders/fogShader.frag.glsl";

/**
 * BackgroundRenderer - Manages Three.js scene and rendering
 * Handles fullscreen quad with custom shader material
 */
export class BackgroundRenderer {
  constructor(containerId = "viewport", performanceMonitor = null) {
    this.container = document.getElementById(containerId);

    if (!this.container) {
      console.error(`Container #${containerId} not found`);
      return;
    }

    // Check WebGL support
    if (!this.isWebGLAvailable()) {
      console.warn("WebGL not supported, falling back to CSS");
      this.applyFallback();
      return;
    }

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.material = null;
    this.mesh = null;
    this.animationId = null;
    this.clock = new THREE.Clock();
    this.performanceMonitor = performanceMonitor;
    this.qualityLevel = 'high'; // 'low', 'medium', 'high'
    this.lastQualityChange = 0;
    
    // Dirty flags for optimized uniform updates
    this.uniformsDirty = {
      time: true,
      modulation: true,
      colors: false,
      noise: false,
      grain: false
    };

    // PERFORMANCE: Preallocate math cache to avoid per-frame GC
    this._modulationCache = {
      modTime: 0,
      turbCycle: 0,
      zoomCycle: 0,
      angle: 0,
      cosA: 1,
      sinA: 0,
      c1: 0.5,
      c2: 0.5,
      noiseCycle: 0,
      gainCycle: 0,
      spreadCycle: 0,
      // Cached effective values
      modNoiseScale: 0.5,
      modGain: 0.35,
      modZoom: 0.3,
      modTurbulence: 0.2,
      modDirX: 0.5,
      modDirY: 0.3,
      modColorMix1: 0.5,
      modColorMix2: 0.5,
      modColorSpread: 0.66,
      colorShift: 0
    };
    
    // PERFORMANCE: Track last update to throttle modulation calculations
    this._lastModulationUpdate = 0;
    this._modulationUpdateInterval = 16; // Update modulation every ~60fps worth of time
    
    // ACCUMULATION: Track time integration on CPU to prevent shader derivative jumps
    // BOUNDED: These wrap at LOOP_DUR (600s) to match the shader's bounded time system
    this.LOOP_DUR = 600.0; // Must match LOOP_DUR in fogShader.frag.glsl
    this.accumulatedTime = 0;
    this.accumulatedModulationTime = 0;
    this.accumulatedRotation = 0;
    // PERF FIX: Track absolute time independently using dt accumulation.
    // clock.getElapsedTime() calls getDelta() internally (THREE.js r174), updating oldTime
    // twice per frame and causing u_timeAbsolute to grow slightly faster than real time.
    // More critically, getElapsedTime() returns an unbounded value — filmGrain's fastHash()
    // computes sin() of values in the hundreds of thousands after minutes of use, well beyond
    // reliable mobile GPU sin precision. Bounding to LOOP_DUR keeps values numerically stable.
    this.accumulatedAbsoluteTime = 0;

    // PERF FIX: Debounce resize handler. Mobile browsers fire window.resize continuously
    // while the address bar animates in/out (iOS Safari, Android Chrome), changing innerHeight
    // by ~56px every few seconds. Without debouncing, each event triggers setSize() and a
    // GPU framebuffer reallocation (150–300ms stall). 150ms settles the animation completely.
    this._resizeDebounceTimer = null;

    /** @see frameRateCap.js — last time updateUniforms + GPU render ran when capped */
    this._lastCapDrawAt = 0;

    // PERFORMANCE: Bind render once to avoid per-frame allocation
    this.render = this.render.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);

    this.init();
  }

  /**
   * Compute the target pixel ratio for the WebGL renderer.
   * Matches the device's physical pixel density so the canvas isn't upscaled
   * by the browser. Upscaling at DPR > 1 turns each rendered fragment into a
   * 2×2 (or larger) block of physical pixels, which produces the stairstepped
   * edges visible on diagonal curves.
   *
   * Capped at 2.0: beyond this the fragment shader runs 4×+ pixels with
   * diminishing visual returns. Mobile is capped at 1.5 to avoid GPU overload
   * on 3× screens (e.g. modern Android flagships).
   */
  _getTargetPixelRatio() {
    const dpr = window.devicePixelRatio || 1.0;
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent);
    return isMobile ? Math.min(dpr, 1.5) : Math.min(dpr, 2.0);
  }

  /**
   * Check if WebGL is available
   */
  isWebGLAvailable() {
    try {
      const canvas = document.createElement("canvas");
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
    } catch (e) {
      return false;
    }
  }

  /**
   * Apply CSS gradient fallback for non-WebGL browsers
   */
  applyFallback() {
    this.container.style.background = `
      linear-gradient(135deg, 
        #ADFFF5 0%, 
        #DEC1FF 50%, 
        #9367FF 100%
      )
    `;
  }

  /**
   * Initialize Three.js scene, camera, renderer, and shader material
   */
  init() {
    // Create scene
    this.scene = new THREE.Scene();

    // Create orthographic camera for fullscreen quad
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Create WebGL renderer with MAXIMUM PERFORMANCE settings
    this.renderer = new THREE.WebGLRenderer({
      antialias: false, // We'll handle smoothness in shader
      alpha: false, // CRITICAL: No alpha blending = massive speedup
      depth: false, // No depth buffer needed for 2D quad
      stencil: false, // No stencil needed
      powerPreference: 'high-performance', // Force discrete GPU
      failIfMajorPerformanceCaveat: false,
      precision: 'highp', // Force high precision for quality
    });
    
    const targetRatio = this._getTargetPixelRatio();
    this.renderer.setPixelRatio(targetRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    console.log(`BackgroundRenderer: pixel ratio set to ${targetRatio.toFixed(2)} (device: ${(window.devicePixelRatio || 1).toFixed(2)})`);

    // Style canvas for fixed positioning
    const canvas = this.renderer.domElement;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "-1"; // Behind all content
    canvas.style.pointerEvents = "none"; // Don't block interactions

    // Append renderer to container
    this.container.appendChild(canvas);

    // Create shader material with uniforms
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        // Time and resolution
        u_time: { value: 0.0 },
        u_timeAbsolute: { value: 0.0 }, // Absolute time for independent animations (grain)
        // Use drawing buffer size to avoid startup artifacts from DPI/resolution mismatch
        u_resolution: { value: new THREE.Vector2(this.renderer.domElement.width, this.renderer.domElement.height) },

        // Color uniforms
        u_color1: { value: new THREE.Color(0x80fff0) },      // Highlight: #80fff0
        u_color2: { value: new THREE.Color(0x4e2bda) },      // Midtone: #4e2bda
        u_color3: { value: new THREE.Color(0x20cf95) },      // Lowlight: #20cf95
        u_baseColor: { value: new THREE.Color(0x2e9aff) },   // Base: #2e9aff

        // Noise parameters (OPTIMIZED FOR HIGH FPS - 165fps+)
        u_zoom: { value: 0.1 },
        u_noiseScale: { value: 1.6 },
        u_octaves: { value: 2 },
        u_lacunarity: { value: 2.5 },
        u_gain: { value: 0.35 },
        u_turbulence: { value: 2.0 },        // Warping for organic fog motion
        u_warpOctaves: { value: 1 },          // REDUCED: 1 warp octave instead of 2 (but using sine now anyway)
        u_ridgeAmount: { value: 0.0 },        // 0 = smooth fog, 1 = sharp ridges
        u_detailScale: { value: 1.0 },        // Secondary detail scale
        u_detailAmount: { value: 0.0 },       // Disabled for performance

        // Animation parameters
        u_speed: { value: 0.04 },
        u_directionX: { value: 0.5 },
        u_directionY: { value: 0.3 },

        // Organic modulation parameters
        u_modulationSpeed: { value: 0.28 },         // Global modulation speed multiplier
        u_modulationIntensity: { value: 12.0 },    // Global modulation intensity multiplier
        u_turbulenceModulation: { value: 0.0 },    // Turbulence breathing amount
        u_zoomModulation: { value: 0.0 },          // Zoom pulsing amount
        u_colorModulation: { value: 0.0 },         // Color shifting amount
        u_rotationModulation: { value: 0.01 },     // Flow rotation amount

        // Visual quality
        u_softness: { value: 0.2 },
        u_contrast: { value: 0.75 },
        u_brightness: { value: 1.5 },
        u_exposure: { value: 1.0 },
        u_blackLevel: { value: 0.0 },

        // Color mixing
        u_colorMix1: { value: 0.5 },
        u_colorMix2: { value: 0.5 },
        u_colorSpread: { value: 0.66 },       // Color distribution (0=tight, 1=spread)
        u_colorSeparation: { value: 0.3 },    // Color distinctness (0=blended, 1=separated)
        u_colorBands: { value: 0.0 },         // Posterization amount (0=smooth, 1=banded)
        u_noiseScaleModulation: { value: 0.0 }, // Organic modulation additions
        u_gainModulation: { value: 0.0 },
        u_colorSpreadModulation: { value: 0.0 },
        u_colorShiftModulation: { value: 0.0 },
        // Precomputed modulation outputs (updated per frame)
        u_noiseScaleEffective: { value: 0.5 },
        u_gainEffective: { value: 0.35 },
        u_zoomEffective: { value: 0.3 },
        u_turbulenceEffective: { value: 0.2 },
        u_directionEffective: { value: new THREE.Vector2(0.5, 0.3) },
        u_colorMix1Effective: { value: 0.5 },
        u_colorMix2Effective: { value: 0.5 },
        u_colorSpreadEffective: { value: 0.66 },
        u_colorShiftOffset: { value: 0.0 },
        
        // Organic motion controls (NEW - VFX techniques)
        u_circularMotionIntensity: { value: 0.3 },  // Circular swirl strength (0-1)
        u_evolutionSpeed: { value: 0.15 },          // Noise evolution speed (0-1)
        u_layerBlend: { value: 0.3 },               // Secondary layer blend (0-1)
        u_colorEvolutionSpeed: { value: 0.1 },      // Color morphing speed (0-1)

        // Phase 1: Spectral Separation
        u_baseWeight: { value: 1.2 },               // Default: 0.3
        u_midWeight: { value: 0.7 },                // Default: 1.0
        u_highWeight: { value: 0.25 },              // Default: 0.25

        // Phase 2: Advanced Distortion & Flow
        u_warpScale: { value: 1.0 },                // Scale of the warp noise
        u_flowType: { value: 0.0 },                 // 0 = Standard, 1 = Curl

        // Phase 3: Texture & Structure (Worley)
        u_noiseType: { value: 0.0 },                // 0 = FBM, 1 = Worley
        u_cellScale: { value: 2.0 },                // Scale of cells
        u_cellJitter: { value: 1.0 },               // Jitter (1.0 = organic)

        // Phase 4: Composition & Masking
        u_vignetteStrength: { value: 0.12 },         // Darkness of corners (0-1)
        u_vignetteRadius: { value: 0.12 },           // Size of clear area (0-1)
        u_centerMaskStrength: { value: 0.0 },       // Clarity of center (0-1)
        u_centerMaskSize: { value: 0.5 },           // Size of center mask (0-1)
        u_detailMasking: { value: 0.0 },            // Detail masking amount (0-1)

        // Phase 5: Post-Processing & Stylization
        u_edgeEnhance: { value: 0.0 },              // Edge highlight strength (0-1)
        u_postPosterize: { value: 0.0 },            // Posterization steps (0=off)

        // Phase 6: Liquid-Chromatic Post-Processing
        u_iridescenceStrength: { value: 0.14 },      // Iridescence strength (0-1)
        u_iridescenceSmoothness: { value: 0.0 },     // Hue-cycle width: 0=crisp bands, 1=soft wash
        u_iridescenceBlendMode: { value: 0 },        // 0=Add 1=Screen 2=Overlay 3=Multiply 4=Soft Light
        u_fresnelStrength: { value: 250.0 },          // Fresnel edge tint strength (0-1)
        u_specularStrength: { value: 0.44 },         // Clear-Coat Specular strength (0-1)
        u_flakeStrength: { value: 0.0 },            // Metallic flakes strength (0-1)
        u_flakeScale: { value: 1500.0 },             // Metallic flakes scale

        // Artistic controls (NEW - Phase 4)
        u_rippleFrequency: { value: 23.8 },          // Frequency of ripple distortion
        u_rippleStrength: { value: 0.1 },           // Strength of ripple distortion
        u_quantizeStep: { value: 0.0 },             // Noise quantization (0-1)
        u_mirrorX: { value: 0.0 },                  // X Reflection (0 or 1)
        u_mirrorY: { value: 0.0 },                  // Y Reflection (0 or 1)

        // Dynamic Pattern Morphing (root-level noise modulation)
        u_patternMorph: { value: 0.0 },             // Master control for all pattern morphing (0=off, 1=full)
        u_lacunarityOscillation: { value: 0.5 },    // Lacunarity variation intensity (0-1)
        u_gainOscillation: { value: 0.3 },          // Gain variation intensity (0-1)
        u_warpFeedback: { value: 0.2 },             // Noise-into-warp feedback (0-1)
        u_spectralBreathing: { value: 0.4 },        // Spectral band weight oscillation (0-1)

        // Base Pattern Complexity (structural, not temporal)
        u_warpLayers: { value: 0.0 },               // Recursive warp passes (0=none, 1-3=layers)
        u_noiseDistortion: { value: 0.0 },          // Spatial FBM parameter variance (0-1)
        u_turbulentFbm: { value: 0.0 },             // Absolute-value folding in FBM (0-1)
        u_layerInteraction: { value: 0.0 },         // Spectral blend mode (0=add, 1=multiply)

        // Animation Balance
        u_translationScale: { value: 1.0 },         // Translation vs evolution (0=evolve in place, 1=normal movement)

        // Film grain
        u_grainIntensity: { value: 0.2 },     // Film grain intensity
        u_grainSpeed: { value: 20.0 },        // Grain animation speed
        u_grainSize: { value: 2100.0 },       // Grain particle size
        u_grainBlendMode: { value: 2 },       // 0: overlay, 1: multiply, 2: add, 3: screen
        u_grainAspect: { value: 1.0 },        // 0 = match viewport, 1 = square grains
        u_grainComplexity: { value: 1.0 },    // 0 = base pattern, 1 = richer pattern
        u_grainFrameHold: { value: 1.0 },     // Frame hold for performance (1.0 = update every frame)
      },
      extensions: {
        derivatives: true, // Enable GL_OES_standard_derivatives
      },
      // PERF FIX: transparent must be false — the shader always outputs alpha=1.0.
      // transparent:true routes the mesh through THREE.js's transparent queue (sorted),
      // enables per-pixel alpha blending on the GPU, and forces framebuffer read-back on
      // mobile tile-based GPUs (Adreno, Mali, Apple), all of which are unnecessary.
      transparent: false,
    });

    this.baseQualitySettings = {
      modulationIntensity: this.material.uniforms.u_modulationIntensity.value,
      colorModulation: this.material.uniforms.u_colorModulation.value,
      grainComplexity: this.material.uniforms.u_grainComplexity.value,
      grainIntensity: this.material.uniforms.u_grainIntensity.value,
    };

    // Apply initial quality tuning and precompute modulation outputs
    this.applyQualitySettings(this.qualityLevel);
    // Initialize accumulation with 0 delta
    this.updateModulationUniforms(0);

    // Create fullscreen quad geometry
    const geometry = new THREE.PlaneGeometry(2, 2);
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.mesh);

    // Setup event listeners
    this.setupEventListeners();

    // Setup touch prevention
    this.setupTouchPrevention();

    console.log("BackgroundRenderer initialized successfully");
  }

  /**
   * Setup window resize handler
   */
  setupEventListeners() {
    window.addEventListener("resize", this.handleResize);

    // Pause rendering when tab is not visible (performance optimization)
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }

  /**
   * Handle window resize — debounced to prevent GPU stalls on mobile.
   *
   * Mobile browsers (iOS Safari, Android Chrome) fire window.resize repeatedly while
   * the address bar animates in/out, which genuinely changes innerHeight. Without debouncing
   * each event triggers setSize() which flushes the GPU command buffer and reallocates the
   * framebuffer — a 150–300ms stall per event.
   *
   * The 150ms debounce absorbs the burst of events during the address-bar animation, then
   * applies a single resize only if the drawing-buffer dimensions actually changed.
   * setPixelRatio() calls setSize() internally (THREE.js r174) so we never call setSize twice.
   */
  handleResize() {
    if (!this.renderer) return;

    clearTimeout(this._resizeDebounceTimer);
    this._resizeDebounceTimer = setTimeout(() => {
      if (!this.renderer) return; // Guard: renderer may have been destroyed during the delay

      const targetRatio = this._getTargetPixelRatio();
      const canvas = this.renderer.domElement;
      const newW = Math.floor(window.innerWidth * targetRatio);
      const newH = Math.floor(window.innerHeight * targetRatio);

      // Only touch the GPU framebuffer when the drawing-buffer size actually changes
      if (canvas.width === newW && canvas.height === newH && this.renderer.getPixelRatio() === targetRatio) return;

      this.renderer.setPixelRatio(targetRatio); // calls setSize internally — no second call

      // Update resolution uniform to match new drawing-buffer size
      if (this.material && this.material.uniforms.u_resolution) {
        this.material.uniforms.u_resolution.value.set(canvas.width, canvas.height);
      }
    }, 150);
  }

  /**
   * Handle visibility change (pause/resume rendering)
   */
  handleVisibilityChange() {
    if (document.hidden) {
      this.pause();
    } else {
      this.resume();
    }
  }

  /**
   * Prevent touch events from interfering with page scroll
   */
  setupTouchPrevention() {
    const canvas = this.renderer.domElement;

    ["touchstart", "touchmove", "touchend", "touchcancel"].forEach((eventType) => {
      canvas.addEventListener(
        eventType,
        (e) => {
          console.log("canvas preventDefault fired");
          e.preventDefault();
        },
        { passive: false }
      );
    });
  }

  /**
   * Update uniforms (called each frame)
   */
  updateUniforms() {
    if (!this.material) return;

    // Use getDelta() for time integration
    const dt = this.clock.getDelta();
    
    // Accumulate total time based on current speed
    // This integration prevents "velocity scrub" artifacts when u_speed changes via transition
    const speed = this.material.uniforms.u_speed.value;
    this.accumulatedTime += dt * speed;
    // BOUNDED: Wrap accumulated time to prevent float precision decay
    // Must match LOOP_DUR in the shader (600s)
    if (this.accumulatedTime > this.LOOP_DUR) {
      this.accumulatedTime -= this.LOOP_DUR;
    }
    
    // Update modulation dynamics with delta time
    this.updateModulationUniforms(dt);

    // Accumulate absolute time from dt (avoids the getElapsedTime() double-getDelta() call)
    // BOUNDED: wrap at LOOP_DUR to prevent float precision loss in filmGrain's fastHash()
    this.accumulatedAbsoluteTime += dt;
    if (this.accumulatedAbsoluteTime > this.LOOP_DUR) {
      this.accumulatedAbsoluteTime -= this.LOOP_DUR;
    }

    // Update time uniforms with accumulated values
    this.material.uniforms.u_time.value = this.accumulatedTime;
    this.material.uniforms.u_timeAbsolute.value = this.accumulatedAbsoluteTime;
  }

  /**
   * Precompute modulation outputs - DECOUPLED INTENSITY CONTROL
   * OPTIMIZED: Throttled to ~60fps and uses cached values to avoid GC pressure
   * @param {number} dt - Delta time since last frame
   */
  updateModulationUniforms(dt) {
    if (!this.material) return;

    const uniforms = this.material.uniforms;
    const cache = this._modulationCache;
    
    // PERFORMANCE: Throttle modulation updates to ~60fps
    // At 240fps, this reduces modulation CPU work by 75%
    const now = performance.now();
    const shouldUpdateModulation = (now - this._lastModulationUpdate) >= this._modulationUpdateInterval;
    
    // Global modulation control
    const modulationSpeed = uniforms.u_modulationSpeed.value;
    const masterIntensity = uniforms.u_modulationIntensity.value;
    
    // Integrator: Accumulate modulation time
    // Same fix as main time: avoid derivative jumps when modulationSpeed changes
    this.accumulatedModulationTime += dt * modulationSpeed;
    // BOUNDED: Wrap to prevent precision decay
    if (this.accumulatedModulationTime > this.LOOP_DUR) {
      this.accumulatedModulationTime -= this.LOOP_DUR;
    }

    // If modulation is effectively disabled, apply base values directly
    if (modulationSpeed < 0.00001) {
      uniforms.u_noiseScaleEffective.value = uniforms.u_noiseScale.value;
      uniforms.u_gainEffective.value = uniforms.u_gain.value;
      uniforms.u_zoomEffective.value = uniforms.u_zoom.value;
      uniforms.u_turbulenceEffective.value = uniforms.u_turbulence.value;
      uniforms.u_directionEffective.value.set(uniforms.u_directionX.value, uniforms.u_directionY.value);
      uniforms.u_colorMix1Effective.value = uniforms.u_colorMix1.value;
      uniforms.u_colorMix2Effective.value = uniforms.u_colorMix2.value;
      uniforms.u_colorSpreadEffective.value = uniforms.u_colorSpread.value;
      uniforms.u_colorShiftOffset.value = 0;
      return; 
    }

    // Only recalculate modulation values at throttled rate
    if (shouldUpdateModulation) {
      this._lastModulationUpdate = now;
      
      // Base values - read once per update
      const baseNoiseScale = uniforms.u_noiseScale.value;
      const baseGain = uniforms.u_gain.value;
      const baseZoom = uniforms.u_zoom.value;
      const baseTurbulence = uniforms.u_turbulence.value;
      const baseDirX = uniforms.u_directionX.value;
      const baseDirY = uniforms.u_directionY.value;
      const baseColorMix1 = uniforms.u_colorMix1.value;
      const baseColorMix2 = uniforms.u_colorMix2.value;
      const baseColorSpread = uniforms.u_colorSpread.value;

      // Use lower frequency time for slower, more organic feel
      // Use ACCUMULATED modulation time instead of time * modulationSpeed
      cache.modTime = this.accumulatedModulationTime * 0.2; 

      // 1. Turbulence Modulation
      cache.modTurbulence = baseTurbulence;
      const turbMod = uniforms.u_turbulenceModulation.value;
      if (turbMod > 0.01) {
        cache.turbCycle = Math.sin(cache.modTime * 1.5) * 0.5 + 0.5;
        const amount = turbMod * 0.8 * masterIntensity;
        cache.modTurbulence = baseTurbulence + (cache.turbCycle - 0.5) * amount;
        if (cache.modTurbulence < 0) cache.modTurbulence = 0;
      }

      // 2. Zoom Modulation
      cache.modZoom = baseZoom;
      const zoomMod = uniforms.u_zoomModulation.value;
      if (zoomMod > 0.01) {
        cache.zoomCycle = Math.sin(cache.modTime * 0.8) * 0.5 + 0.5; 
        const amount = zoomMod * 0.2 * masterIntensity;
        cache.modZoom = baseZoom * (1.0 + (cache.zoomCycle - 0.5) * amount);
      }

      // 3. Rotation/Direction Modulation
      cache.modDirX = baseDirX;
      cache.modDirY = baseDirY;
      const rotMod = uniforms.u_rotationModulation.value;
      
      if (rotMod > 0.01) {
        const amount = rotMod * 1.5 * masterIntensity;
        // Accumulate rotation incrementally to prevent jumping when intensity changes
        // Use the same time scale as modTime (0.2 * modulationSpeed)
        const dtMod = dt * modulationSpeed * 0.2;
        this.accumulatedRotation += dtMod * amount * 0.5;
        // BOUNDED: Wrap rotation to prevent precision decay
        const TWO_PI = 6.28318530718;
        if (this.accumulatedRotation > TWO_PI) {
          this.accumulatedRotation -= TWO_PI;
        } else if (this.accumulatedRotation < -TWO_PI) {
          this.accumulatedRotation += TWO_PI;
        }
        
        cache.angle = this.accumulatedRotation;
        cache.cosA = Math.cos(cache.angle);
        cache.sinA = Math.sin(cache.angle);
        cache.modDirX = baseDirX * cache.cosA - baseDirY * cache.sinA;
        cache.modDirY = baseDirX * cache.sinA + baseDirY * cache.cosA;
      }
      
      // 4. Color Mix Modulation
      cache.modColorMix1 = baseColorMix1;
      cache.modColorMix2 = baseColorMix2;
      const colorMod = uniforms.u_colorModulation.value;
      if (colorMod > 0.01) {
        cache.c1 = Math.sin(cache.modTime * 1.1) * 0.5 + 0.5;
        cache.c2 = Math.cos(cache.modTime * 0.7) * 0.5 + 0.5;
        const v = colorMod * 0.8 * masterIntensity;
        cache.modColorMix1 = baseColorMix1 + (cache.c1 - 0.5) * v;
        cache.modColorMix2 = baseColorMix2 + (cache.c2 - 0.5) * v;
        // Clamp inline
        if (cache.modColorMix1 < 0) cache.modColorMix1 = 0;
        if (cache.modColorMix1 > 1) cache.modColorMix1 = 1;
        if (cache.modColorMix2 < 0) cache.modColorMix2 = 0;
        if (cache.modColorMix2 > 1) cache.modColorMix2 = 1;
      }

      // 5. Palette Shift
      cache.colorShift = 0;
      const shiftMod = uniforms.u_colorShiftModulation.value;
      if (shiftMod > 0.01) {
        cache.colorShift = Math.sin(cache.modTime * 0.5) * shiftMod * 0.5 * masterIntensity;
      }

      // 6. Noise Scale Modulation
      cache.modNoiseScale = baseNoiseScale;
      const noiseMod = uniforms.u_noiseScaleModulation.value;
      if (noiseMod > 0.01) {
        cache.noiseCycle = Math.sin(cache.modTime * 0.6) * 0.5 + 0.5;
        const amount = noiseMod * 0.2 * masterIntensity;
        cache.modNoiseScale = baseNoiseScale * (1.0 + (cache.noiseCycle - 0.5) * amount);
      }

      // 7. Gain Modulation
      cache.modGain = baseGain;
      const gainMod = uniforms.u_gainModulation.value;
      if (gainMod > 0.01) {
        cache.gainCycle = Math.cos(cache.modTime * 0.9) * 0.5 + 0.5;
        const amount = gainMod * 0.3 * masterIntensity;
        cache.modGain = baseGain + (cache.gainCycle - 0.5) * amount;
        if (cache.modGain < 0.1) cache.modGain = 0.1;
        if (cache.modGain > 0.9) cache.modGain = 0.9;
      }

      // 8. Color Spread Modulation
      cache.modColorSpread = baseColorSpread;
      const spreadMod = uniforms.u_colorSpreadModulation.value;
      if (spreadMod > 0.01) {
        cache.spreadCycle = Math.sin(cache.modTime * 0.75) * 0.5 + 0.5;
        const amount = spreadMod * 0.3 * masterIntensity;
        cache.modColorSpread = baseColorSpread + (cache.spreadCycle - 0.5) * amount;
        if (cache.modColorSpread < 0.0) cache.modColorSpread = 0.0;
        if (cache.modColorSpread > 1.0) cache.modColorSpread = 1.0;
      }
    }

    // Apply cached values to uniforms (always, for smooth animation)
    uniforms.u_noiseScaleEffective.value = cache.modNoiseScale;
    uniforms.u_gainEffective.value = cache.modGain;
    uniforms.u_zoomEffective.value = cache.modZoom;
    uniforms.u_turbulenceEffective.value = cache.modTurbulence;
    uniforms.u_directionEffective.value.set(cache.modDirX, cache.modDirY);
    uniforms.u_colorMix1Effective.value = cache.modColorMix1;
    uniforms.u_colorMix2Effective.value = cache.modColorMix2;
    uniforms.u_colorSpreadEffective.value = cache.modColorSpread; 
    uniforms.u_colorShiftOffset.value = cache.colorShift;
    
    // Update settings for debug/feedback (only when modulation was recalculated)
    if (this.qualityLevel === 'high' && this.baseQualitySettings) {
      this.baseQualitySettings.modulationIntensity = masterIntensity;
    }
  }

  /**
   * Attach adaptive quality manager so its tick() runs inside this render loop.
   * Replaces the separate RAF monitoring loop in AdaptiveQualityManager, eliminating
   * a second concurrent requestAnimationFrame chain that competes for the 16ms frame budget.
   * @param {AdaptiveQualityManager} aqm
   */
  setAdaptiveQualityManager(aqm) {
    this.adaptiveQualityManager = aqm;
  }

  /**
   * Render loop. Optional cap in `frameRateCap.js` throttles CPU uniform work and GPU draws;
   * rAF still runs every vsync so the tab stays awake. Adaptive quality ticks every rAF
   * (cheap); performance stats count only real draws when capped.
   */
  render() {
    if (!this.renderer || !this.scene || !this.camera) return;

    this.animationId = requestAnimationFrame(this.render);

    if (this.adaptiveQualityManager) {
      this.adaptiveQualityManager.tick();
    }

    const cap = getActiveBackgroundFrameRateCap();
    const now = performance.now();
    if (cap > 0) {
      const minMs = 1000 / cap;
      if (this._lastCapDrawAt > 0 && now - this._lastCapDrawAt < minMs) {
        return;
      }
      this._lastCapDrawAt = now;
    }

    this.updateUniforms();
    this.renderer.render(this.scene, this.camera);

    if (this.performanceMonitor) {
      this.performanceMonitor.update();
    }
  }

  /**
   * Start rendering
   */
  start() {
    if (!this.renderer) {
      console.warn("Renderer not initialized, cannot start");
      return;
    }

    console.log("Starting background renderer");
    this.clock.start();
    this.render();
  }

  /**
   * Pause rendering
   */
  pause() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  /**
   * Resume rendering
   */
  resume() {
    if (!this.animationId && this.renderer) {
      this.render();
    }
  }

  /**
   * Stop rendering and cleanup
   */
  stop() {
    this.pause();

    if (this.renderer) {
      this.renderer.dispose();
      if (this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      }
    }

    if (this.material) {
      this.material.dispose();
    }

    if (this.mesh && this.mesh.geometry) {
      this.mesh.geometry.dispose();
    }

    window.removeEventListener("resize", this.handleResize);
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
    clearTimeout(this._resizeDebounceTimer);

    console.log("BackgroundRenderer stopped and cleaned up");
  }

  /**
   * Get shader material (for external uniform updates)
   */
  getMaterial() {
    return this.material;
  }

  /**
   * Get renderer canvas element
   */
  getCanvas() {
    return this.renderer ? this.renderer.domElement : null;
  }

  /**
   * Set quality level and apply settings
   */
  setQuality(level) {
    if (!['low', 'medium', 'high', 'ultra'].includes(level)) {
      console.warn(`Invalid quality level: ${level}`);
      return;
    }
    if (this.qualityLevel === level) {
      return;
    }

    const now = (typeof performance !== 'undefined' ? performance.now() : Date.now());
    if (this.lastQualityChange && now - this.lastQualityChange < 2000) {
      console.log(`Quality change throttled to avoid rapid adjustments (current: ${this.qualityLevel})`);
      return;
    }
    this.lastQualityChange = now;

    this.qualityLevel = level;
    console.log(`Background quality set to: ${level}`);

    // Match device pixel ratio so the canvas isn't upscaled by the browser.
    // PERF FIX: Guard canvas resize — setPixelRatio() already calls setSize() internally.
    // Calling both unconditionally causes two GPU framebuffer reallocations per quality change,
    // causing 150–300ms pipeline stalls on mobile even when dimensions are unchanged.
    if (this.renderer) {
      const targetRatio = this._getTargetPixelRatio();
      const canvas = this.renderer.domElement;
      const newW = Math.floor(window.innerWidth * targetRatio);
      const newH = Math.floor(window.innerHeight * targetRatio);
      if (canvas.width !== newW || canvas.height !== newH || this.renderer.getPixelRatio() !== targetRatio) {
        this.renderer.setPixelRatio(targetRatio); // internally calls setSize — no second call needed
        console.log(`Pixel ratio set to: ${targetRatio.toFixed(2)} (quality: ${level})`);
      }
    }

    // Apply quality-specific shader parameters
    this.applyQualitySettings(level);
    // Pass 0 as dt — setQuality() is called outside the frame loop (e.g. during initialization
    // or adaptive quality change). Passing clock.getElapsedTime() as dt here would pass the
    // entire wall-clock elapsed time (e.g. 17s) as a delta, causing a sudden large jump in
    // accumulatedModulationTime on the next frame.
    this.updateModulationUniforms(0);
  }

  /**
   * Apply quality-specific shader parameters
   */
  applyQualitySettings(level) {
    if (!this.material) return;

    const uniforms = this.material.uniforms;

    switch (level) {
      case 'low':
        // Reduce octaves for faster computation
        if (uniforms.u_octaves) uniforms.u_octaves.value = 2;
        if (uniforms.u_warpOctaves) uniforms.u_warpOctaves.value = 1;
        if (uniforms.u_detailAmount) uniforms.u_detailAmount.value = 0.0;
        if (uniforms.u_modulationIntensity) uniforms.u_modulationIntensity.value = Math.min(this.baseQualitySettings.modulationIntensity * 0.5, uniforms.u_modulationIntensity.value);
        if (uniforms.u_colorModulation) uniforms.u_colorModulation.value = Math.min(this.baseQualitySettings.colorModulation * 0.7, uniforms.u_colorModulation.value);
        if (uniforms.u_grainComplexity) uniforms.u_grainComplexity.value = Math.min(this.baseQualitySettings.grainComplexity * 0.55, uniforms.u_grainComplexity.value);
        if (uniforms.u_grainIntensity) uniforms.u_grainIntensity.value = Math.min(this.baseQualitySettings.grainIntensity * 0.85, uniforms.u_grainIntensity.value);
        if (uniforms.u_grainFrameHold) uniforms.u_grainFrameHold.value = 1.0; // 60fps
        console.log('Applied low quality: 2 octaves, 1 warp octave, no detail');
        break;

      case 'medium':
        // Medium settings
        if (uniforms.u_octaves) uniforms.u_octaves.value = 2;
        if (uniforms.u_warpOctaves) uniforms.u_warpOctaves.value = 1;
        if (uniforms.u_detailAmount) uniforms.u_detailAmount.value = 0.05;
        if (uniforms.u_modulationIntensity) uniforms.u_modulationIntensity.value = Math.min(this.baseQualitySettings.modulationIntensity * 0.7, uniforms.u_modulationIntensity.value);
        if (uniforms.u_colorModulation) uniforms.u_colorModulation.value = Math.min(this.baseQualitySettings.colorModulation * 0.8, uniforms.u_colorModulation.value);
        if (uniforms.u_grainComplexity) uniforms.u_grainComplexity.value = Math.min(this.baseQualitySettings.grainComplexity * 0.75, uniforms.u_grainComplexity.value);
        if (uniforms.u_grainIntensity) uniforms.u_grainIntensity.value = Math.min(this.baseQualitySettings.grainIntensity * 0.95, uniforms.u_grainIntensity.value);
        if (uniforms.u_grainFrameHold) uniforms.u_grainFrameHold.value = 1.5; // 90fps+
        console.log('Applied medium quality: 2 octaves, 1 warp octave, reduced detail');
        break;

      case 'high':
        // High quality (optimized for 60fps)
        if (uniforms.u_octaves) uniforms.u_octaves.value = 3;
        if (uniforms.u_warpOctaves) uniforms.u_warpOctaves.value = 2;
        if (uniforms.u_detailAmount) uniforms.u_detailAmount.value = 0.1;
        if (uniforms.u_modulationIntensity) uniforms.u_modulationIntensity.value = this.baseQualitySettings.modulationIntensity;
        if (uniforms.u_colorModulation) uniforms.u_colorModulation.value = this.baseQualitySettings.colorModulation;
        if (uniforms.u_grainComplexity) uniforms.u_grainComplexity.value = this.baseQualitySettings.grainComplexity;
        if (uniforms.u_grainIntensity) uniforms.u_grainIntensity.value = this.baseQualitySettings.grainIntensity;
        if (uniforms.u_grainFrameHold) uniforms.u_grainFrameHold.value = 2.0; // 120fps
        console.log('Applied high quality: 3 octaves, 2 warp octaves, optimized detail, grain hold 2.0');
        break;

      case 'ultra':
        // Ultra quality (optimized for 240fps)
        if (uniforms.u_octaves) uniforms.u_octaves.value = 2;
        if (uniforms.u_warpOctaves) uniforms.u_warpOctaves.value = 1;
        if (uniforms.u_detailAmount) uniforms.u_detailAmount.value = 0.0;
        if (uniforms.u_modulationIntensity) uniforms.u_modulationIntensity.value = this.baseQualitySettings.modulationIntensity * 0.8;
        if (uniforms.u_colorModulation) uniforms.u_colorModulation.value = this.baseQualitySettings.colorModulation * 0.9;
        if (uniforms.u_grainComplexity) uniforms.u_grainComplexity.value = this.baseQualitySettings.grainComplexity * 0.85;
        if (uniforms.u_grainIntensity) uniforms.u_grainIntensity.value = this.baseQualitySettings.grainIntensity;
        if (uniforms.u_grainFrameHold) uniforms.u_grainFrameHold.value = 3.0; // 240fps
        console.log('Applied ultra quality: 2 octaves, 1 warp octave, no detail, grain hold 3.0 (240fps optimized)');
        break;
    }
  }

  /**
   * Get current renderer pixel ratio
   */
  getPixelRatio() {
    return this.renderer ? this.renderer.getPixelRatio() : 1.0;
  }

  /**
   * Get current quality level
   */
  getQuality() {
    return this.qualityLevel;
  }

  /**
   * Get performance monitor
   */
  getPerformanceMonitor() {
    return this.performanceMonitor;
  }

  /**
   * Set target FPS
   * @param {number} fps - Target frames per second (60, 120, 165, 240)
   */
  setTargetFps(fps) {
    if (this.frameRateController) {
      this.frameRateController.setTargetFps(fps);
      
      // Auto-adjust grain frame hold based on FPS target
      if (this.material && this.material.uniforms.u_grainFrameHold) {
        if (fps >= 240) {
          this.material.uniforms.u_grainFrameHold.value = 3.0; // Update every 3rd frame at 240fps = 80 updates/sec
        } else if (fps >= 165) {
          this.material.uniforms.u_grainFrameHold.value = 2.5; // Update every 2.5 frames
        } else if (fps >= 120) {
          this.material.uniforms.u_grainFrameHold.value = 2.0; // Update every 2nd frame at 120fps = 60 updates/sec
        } else if (fps >= 90) {
          this.material.uniforms.u_grainFrameHold.value = 1.5;
        } else {
          this.material.uniforms.u_grainFrameHold.value = 1.0; // Update every frame at 60fps
        }
        console.log(`Grain frame hold set to ${this.material.uniforms.u_grainFrameHold.value} for ${fps}fps target`);
      }
    }
  }

  /**
   * Get target FPS
   */
  getTargetFps() {
    return this.frameRateController ? this.frameRateController.getTargetFps() : 60;
  }

  /**
   * Get frame rate controller metrics
   */
  getFrameRateMetrics() {
    return this.frameRateController ? this.frameRateController.getMetrics() : null;
  }

  /**
   * Set quality to ultra (optimized for 240fps)
   * This is a special quality tier for high-refresh displays
   */
  setQualityUltra() {
    if (!this.material) return;
    
    const uniforms = this.material.uniforms;
    
    // Ultra quality: maximum performance while maintaining visuals
    if (uniforms.u_octaves) uniforms.u_octaves.value = 2;
    if (uniforms.u_warpOctaves) uniforms.u_warpOctaves.value = 1;
    if (uniforms.u_detailAmount) uniforms.u_detailAmount.value = 0.0;
    if (uniforms.u_modulationIntensity) uniforms.u_modulationIntensity.value = this.baseQualitySettings.modulationIntensity * 0.8;
    if (uniforms.u_colorModulation) uniforms.u_colorModulation.value = this.baseQualitySettings.colorModulation * 0.9;
    if (uniforms.u_grainComplexity) uniforms.u_grainComplexity.value = this.baseQualitySettings.grainComplexity * 0.85;
    if (uniforms.u_grainIntensity) uniforms.u_grainIntensity.value = this.baseQualitySettings.grainIntensity;
    if (uniforms.u_grainFrameHold) uniforms.u_grainFrameHold.value = 3.0; // 240fps / 3 = 80 grain updates/sec
    
    // Use device pixel ratio so the framebuffer matches physical display resolution.
    // PERF FIX: Guard canvas resize — setPixelRatio() already calls setSize() internally.
    if (this.renderer) {
      const targetRatio = this._getTargetPixelRatio();
      const canvas = this.renderer.domElement;
      const newW = Math.floor(window.innerWidth * targetRatio);
      const newH = Math.floor(window.innerHeight * targetRatio);
      if (canvas.width !== newW || canvas.height !== newH || this.renderer.getPixelRatio() !== targetRatio) {
        this.renderer.setPixelRatio(targetRatio); // internally calls setSize
      }
    }

    this.qualityLevel = 'ultra';
    console.log(`Applied ultra quality: 2 octaves, 1 warp octave, grain hold 3.0, pixel ratio ${this._getTargetPixelRatio().toFixed(2)}`);
  }
}


