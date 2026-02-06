import GUI from 'lil-gui';
import * as THREE from 'three';
import { backgroundPresets, getPresetNames } from './presets.js';

/**
 * DevGUI - Development mode GUI for background shader parameters
 * Only loads in development mode (localhost or ?debug=true)
 */
export class DevGUI {
  constructor(backgroundManager) {
    this.backgroundManager = backgroundManager;
    this.shaderController = backgroundManager.getShaderController();
    this.material = backgroundManager.getRenderer()?.getMaterial();
    
    if (!this.material) {
      console.warn('DevGUI: Material not available');
      return;
    }

    this.gui = null;
    this.folders = {};
    this.params = this.createParamsProxy();
    
    this.init();
  }

  /**
   * Check if we should show the GUI (dev mode)
   */
  static isDev() {
    return (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.search.includes('debug=true')
    );
  }

  /**
   * Create a proxy object that syncs with shader uniforms
   */
  createParamsProxy() {
    const uniforms = this.material.uniforms;
    
    return {
      // Colors (convert THREE.Color to hex strings for GUI)
      highlightColor: '#' + uniforms.u_color1.value.getHexString(),
      midtoneColor: '#' + uniforms.u_color2.value.getHexString(),
      lowlightColor: '#' + uniforms.u_color3.value.getHexString(),
      baseColor: '#' + uniforms.u_baseColor.value.getHexString(),
      
      // Noise parameters
      zoom: uniforms.u_zoom.value,
      noiseScale: uniforms.u_noiseScale.value,
      octaves: uniforms.u_octaves.value,
      lacunarity: uniforms.u_lacunarity.value,
      gain: uniforms.u_gain.value,
      turbulence: uniforms.u_turbulence.value,
      warpOctaves: uniforms.u_warpOctaves.value,
      ridgeAmount: uniforms.u_ridgeAmount.value,
      detailScale: uniforms.u_detailScale.value,
      detailAmount: uniforms.u_detailAmount.value,
      
      // Animation
      speed: uniforms.u_speed.value,
      directionX: uniforms.u_directionX.value,
      directionY: uniforms.u_directionY.value,
      
      // Organic modulation
      modulationSpeed: uniforms.u_modulationSpeed.value,
      modulationIntensity: uniforms.u_modulationIntensity.value,
      turbulenceModulation: uniforms.u_turbulenceModulation.value,
      zoomModulation: uniforms.u_zoomModulation.value,
      colorModulation: uniforms.u_colorModulation.value,
      rotationModulation: uniforms.u_rotationModulation.value,
      noiseScaleModulation: uniforms.u_noiseScaleModulation.value,
      gainModulation: uniforms.u_gainModulation.value,
      colorSpreadModulation: uniforms.u_colorSpreadModulation.value,
      colorShiftModulation: uniforms.u_colorShiftModulation.value,
      
      // Visual quality
      softness: uniforms.u_softness.value,
      contrast: uniforms.u_contrast.value,
      brightness: uniforms.u_brightness.value,
      exposure: uniforms.u_exposure.value,
      blackLevel: uniforms.u_blackLevel.value,
      
      // Color mixing
      colorMix1: uniforms.u_colorMix1.value,
      colorMix2: uniforms.u_colorMix2.value,
      colorSpread: uniforms.u_colorSpread.value,
      colorSeparation: uniforms.u_colorSeparation.value,
      colorBands: uniforms.u_colorBands.value,
      
      // Film grain
      grainIntensity: uniforms.u_grainIntensity.value,
      grainSpeed: uniforms.u_grainSpeed.value,
      grainSize: uniforms.u_grainSize.value,
      grainBlendMode: uniforms.u_grainBlendMode.value,
      grainAspect: uniforms.u_grainAspect.value,
      grainComplexity: uniforms.u_grainComplexity.value,

      // Artistic Controls
      rippleFrequency: uniforms.u_rippleFrequency ? uniforms.u_rippleFrequency.value : 0.0,
      rippleStrength: uniforms.u_rippleStrength ? uniforms.u_rippleStrength.value : 0.0,
      quantizeStep: uniforms.u_quantizeStep ? uniforms.u_quantizeStep.value : 0.0,
      mirrorX: uniforms.u_mirrorX ? (uniforms.u_mirrorX.value > 0.5) : false,
      mirrorY: uniforms.u_mirrorY ? (uniforms.u_mirrorY.value > 0.5) : false,

      // Spectral Separation (Phase 1)
      baseWeight: uniforms.u_baseWeight ? uniforms.u_baseWeight.value : 1.0,
      midWeight: uniforms.u_midWeight ? uniforms.u_midWeight.value : 0.5,
      highWeight: uniforms.u_highWeight ? uniforms.u_highWeight.value : 0.25,

      // Phase 2: Flow & Warp
      warpScale: uniforms.u_warpScale ? uniforms.u_warpScale.value : 1.0,
      flowType: uniforms.u_flowType ? (uniforms.u_flowType.value > 0.5) : false,

      // Phase 3: Texture & Structure
      noiseType: uniforms.u_noiseType ? (uniforms.u_noiseType.value > 0.5) : false,
      cellScale: uniforms.u_cellScale ? uniforms.u_cellScale.value : 2.0,
      cellJitter: uniforms.u_cellJitter ? uniforms.u_cellJitter.value : 1.0,

      // Phase 4: Composition & Masking
      vignetteStrength: uniforms.u_vignetteStrength ? uniforms.u_vignetteStrength.value : 0.0,
      vignetteRadius: uniforms.u_vignetteRadius ? uniforms.u_vignetteRadius.value : 0.5,
      centerMaskStrength: uniforms.u_centerMaskStrength ? uniforms.u_centerMaskStrength.value : 0.0,
      centerMaskSize: uniforms.u_centerMaskSize ? uniforms.u_centerMaskSize.value : 0.5,
      centerMaskSize: uniforms.u_centerMaskSize ? uniforms.u_centerMaskSize.value : 0.5,
      detailMasking: uniforms.u_detailMasking ? uniforms.u_detailMasking.value : 0.0,

      // Phase 5: Stylization
      edgeEnhance: uniforms.u_edgeEnhance ? uniforms.u_edgeEnhance.value : 0.0,
      postPosterize: uniforms.u_postPosterize ? uniforms.u_postPosterize.value : 0.0,

      // Phase 6: Liquid-Chromatic
      iridescenceStrength: uniforms.u_iridescenceStrength ? uniforms.u_iridescenceStrength.value : 0.0,
      fresnelStrength: uniforms.u_fresnelStrength ? uniforms.u_fresnelStrength.value : 0.0,
      specularStrength: uniforms.u_specularStrength ? uniforms.u_specularStrength.value : 0.0,
      flakeStrength: uniforms.u_flakeStrength ? uniforms.u_flakeStrength.value : 0.0,
      flakeScale: uniforms.u_flakeScale ? uniforms.u_flakeScale.value : 1500.0,
    };
  }

  /**
   * Initialize the GUI
   */
  init() {
    this.gui = new GUI({ title: '🎨 Background Shader Controls', width: 320 });
    
    // Make GUI visible
    this.gui.domElement.style.position = 'fixed';
    this.gui.domElement.style.top = '10px';
    this.gui.domElement.style.right = '10px';
    this.gui.domElement.style.zIndex = '10000';
    
    // Add folders
    this.addColorsFolder();
    this.addNoiseFolder();
    this.addSpectralFolder();
    this.addSpectralFolder();
    this.addFlowFolder();
    this.addTextureFolder();
    this.addCompositionFolder();
    this.addStylizationFolder();
    this.addLiquidMetalFolder();
    this.addAnimationFolder();
    this.addOrganicModulationFolder();
    this.addArtisticFolder();
    this.addFilmGrainFolder();
    this.addVisualQualityFolder();
    this.addColorMixingFolder();
    this.addPresetsFolder();
    this.addPageConfigsFolder();
    this.addPerformanceFolder();
    this.addUtilitiesFolder();
    
    // Add keyboard shortcut to toggle GUI
    this.addKeyboardShortcut();
    
    // Start live sync loop
    this.startLiveSync();
    
    console.log('🎨 DevGUI initialized - Press "G" to toggle');
  }

  /**
   * Start live synchronization of GUI with uniforms
   */
  startLiveSync() {
    const syncLoop = () => {
      // Only update if GUI exists and is visible (performance)
      if (this.gui && !this.gui._hidden) {
        this.updateGUIFromUniforms();
      }
      requestAnimationFrame(syncLoop);
    };
    syncLoop();
  }

  /**
   * Colors folder
   */
  addColorsFolder() {
    const folder = this.gui.addFolder('🎨 Colors');
    this.folders.colors = folder;
    
    folder.addColor(this.params, 'highlightColor')
      .name('Highlight')
      .onChange((value) => {
        this.shaderController.updateUniform('u_color1', new THREE.Color(value));
      });
    
    folder.addColor(this.params, 'midtoneColor')
      .name('Midtone')
      .onChange((value) => {
        this.shaderController.updateUniform('u_color2', new THREE.Color(value));
      });
    
    folder.addColor(this.params, 'lowlightColor')
      .name('Lowlight')
      .onChange((value) => {
        this.shaderController.updateUniform('u_color3', new THREE.Color(value));
      });
    
    folder.addColor(this.params, 'baseColor')
      .name('Base Color')
      .onChange((value) => {
        this.shaderController.updateUniform('u_baseColor', new THREE.Color(value));
      });
    
    folder.close();
  }

  /**
   * Noise folder
   */
  addNoiseFolder() {
    const folder = this.gui.addFolder('🌫️ Noise Parameters');
    this.folders.noise = folder;
    
    folder.add(this.params, 'zoom', 0.1, 5.0, 0.1)
      .name('Zoom')
      .onChange((value) => {
        this.shaderController.updateUniform('u_zoom', value);
      });
    
    folder.add(this.params, 'noiseScale', 0.5, 10.0, 0.1)
      .name('Noise Scale')
      .onChange((value) => {
        this.shaderController.updateUniform('u_noiseScale', value);
      });
    
    folder.add(this.params, 'octaves', 1, 8, 1)
      .name('Octaves')
      .onChange((value) => {
        this.shaderController.updateUniform('u_octaves', value);
      });
    
    folder.add(this.params, 'lacunarity', 1.0, 12.0, 0.1)
      .name('Lacunarity')
      .onChange((value) => {
        this.shaderController.updateUniform('u_lacunarity', value);
      });
    
    folder.add(this.params, 'gain', 0.1, 1.0, 0.05)
      .name('Gain')
      .onChange((value) => {
        this.shaderController.updateUniform('u_gain', value);
      });
    
    folder.add(this.params, 'turbulence', 0.0, 2.0, 0.05)
      .name('Turbulence')
      .onChange((value) => {
        this.shaderController.updateUniform('u_turbulence', value);
      });
    
    folder.add(this.params, 'warpOctaves', 1, 5, 1)
      .name('Warp Octaves')
      .onChange((value) => {
        this.shaderController.updateUniform('u_warpOctaves', value);
      });
    
    folder.add(this.params, 'ridgeAmount', 0.0, 1.0, 0.05)
      .name('Ridge Amount')
      .onChange((value) => {
        this.shaderController.updateUniform('u_ridgeAmount', value);
      });
    
    folder.add(this.params, 'detailScale', 1.0, 20.0, 0.5)
      .name('Detail Scale')
      .onChange((value) => {
        this.shaderController.updateUniform('u_detailScale', value);
      });
    
    folder.add(this.params, 'detailAmount', 0.0, 1.0, 0.05)
      .name('Detail Amount')
      .onChange((value) => {
        this.shaderController.updateUniform('u_detailAmount', value);
      });
    
    folder.close();
  }

  /**
   * Spectral Separation folder (Phase 1)
   */
  addSpectralFolder() {
    const folder = this.gui.addFolder('🌈 Spectral Separation');
    this.folders.spectral = folder;
    
    folder.add(this.params, 'baseWeight', 0.0, 2.0, 0.05)
      .name('Base (Low Freq)')
      .onChange((value) => {
        this.shaderController.updateUniform('u_baseWeight', value);
      });
      
    folder.add(this.params, 'midWeight', 0.0, 2.0, 0.05)
      .name('Mid (Std Detail)')
      .onChange((value) => {
        this.shaderController.updateUniform('u_midWeight', value);
      });
      
    folder.add(this.params, 'highWeight', 0.0, 2.0, 0.05)
      .name('High (Fine Detail)')
      .onChange((value) => {
        this.shaderController.updateUniform('u_highWeight', value);
      });
      
    folder.close();
  }

  /**
   * Flow & Warp folder (Phase 2)
   */
  addFlowFolder() {
    const folder = this.gui.addFolder('🌀 Flow & Warp');
    this.folders.flow = folder;
    
    folder.add(this.params, 'flowType')
      .name('Curl Noise (Fluid)')
      .onChange((value) => {
        this.shaderController.updateUniform('u_flowType', value ? 1.0 : 0.0);
      });
      
    folder.add(this.params, 'warpScale', 0.1, 5.0, 0.1)
      .name('Warp Scale')
      .onChange((value) => {
        this.shaderController.updateUniform('u_warpScale', value);
      });
      
    // Reference/Alias to existing turbulence (Warp Strength)
    // We update the original parameter which updates the uniform
    folder.add(this.params, 'turbulence', 0.0, 2.0, 0.05)
      .name('Warp Strength')
      .onChange((value) => {
        this.shaderController.updateUniform('u_turbulence', value);
      });
      
    folder.close();
  }

  /**
   * Texture & Structure (Phase 3)
   */
  addTextureFolder() {
    const folder = this.gui.addFolder('🕸️ Texture & Structure');
    this.folders.texture = folder;
    
    // Switch between FBM (Clouds) and Worley (Cells/Stones)
    folder.add(this.params, 'noiseType')
      .name('Cellular Noise (Worley)')
      .onChange((value) => {
        this.shaderController.updateUniform('u_noiseType', value ? 1.0 : 0.0);
      });
      
    // Scale of the cells
    folder.add(this.params, 'cellScale', 0.5, 10.0, 0.1)
      .name('Cell Scale')
      .onChange((value) => {
        this.shaderController.updateUniform('u_cellScale', value);
      });
      
    // Jitter (Randomness)
    // 0 = Grid 1 = Organic, >1 = Chaotic
    folder.add(this.params, 'cellJitter', 0.0, 2.0, 0.05)
      .name('Cell Randomness')
      .onChange((value) => {
        this.shaderController.updateUniform('u_cellJitter', value);
      });
      
    folder.close();
  }

  /**
   * Composition & Masking (Phase 4)
   */
  addCompositionFolder() {
    const folder = this.gui.addFolder('🖼️ Composition & Masking');
    this.folders.composition = folder;
    
    // Vignette
    folder.add(this.params, 'vignetteStrength', 0.0, 1.0, 0.01)
      .name('Vignette Darken')
      .onChange((value) => {
        this.shaderController.updateUniform('u_vignetteStrength', value);
      });
      
    folder.add(this.params, 'vignetteRadius', 0.0, 1.0, 0.01)
      .name('Vignette Radius')
      .onChange((value) => {
        this.shaderController.updateUniform('u_vignetteRadius', value);
      });
      
    // Center Mask (Text protection)
    folder.add(this.params, 'centerMaskStrength', 0.0, 1.0, 0.01)
      .name('Center Clarity')
      .onChange((value) => {
        this.shaderController.updateUniform('u_centerMaskStrength', value);
      });
      
    folder.add(this.params, 'centerMaskSize', 0.0, 1.0, 0.01)
      .name('Center Size')
      .onChange((value) => {
        this.shaderController.updateUniform('u_centerMaskSize', value);
      });
      
    // Detail Masking (Complex noise interaction)
    folder.add(this.params, 'detailMasking', 0.0, 1.0, 0.01)
      .name('Detail Clumping')
      .onChange((value) => {
        this.shaderController.updateUniform('u_detailMasking', value);
      });
      
    folder.close();
  }

  /**
   * Post-Processing & Stylization (Phase 5)
   */
  addStylizationFolder() {
    const folder = this.gui.addFolder('✨ Stylization & VFX');
    this.folders.stylization = folder;
    
    // Edge Enhancement (Neon/Sketch edges)
    folder.add(this.params, 'edgeEnhance', 0.0, 10.0, 0.1)
      .name('Edge Glow')
      .onChange((value) => {
        this.shaderController.updateUniform('u_edgeEnhance', value);
      });
      
    // Posterization (steps)
    folder.add(this.params, 'postPosterize', 0.0, 32.0, 1.0)
      .name('Posterize Steps')
      .onChange((value) => {
        this.shaderController.updateUniform('u_postPosterize', value);
      });
      
    folder.close();
  }

  /**
   * Liquid-Chromatic & Oil Slick (Phase 6)
   */
  addLiquidMetalFolder() {
    const folder = this.gui.addFolder('💧 Liquid Metal & Oil');
    this.folders.liquid = folder;
    
    // Step 1: Iridescence
    folder.add(this.params, 'iridescenceStrength', 0.0, 1.0, 0.01)
      .name('Oil Slick (Iridescence)')
      .onChange((value) => {
        this.shaderController.updateUniform('u_iridescenceStrength', value);
      });
      
    // Step 2: Fresnel Edge Tint
    folder.add(this.params, 'fresnelStrength', 0.0, 250.0, 0.1)
      .name('Metallic Edge (Fresnel)')
      .onChange((value) => {
        this.shaderController.updateUniform('u_fresnelStrength', value);
      });
      
    // Step 3: Clear-Coat Specular
    folder.add(this.params, 'specularStrength', 0.0, 2.0, 0.001)
      .name('Glossy Clear-Coat (Specular)')
      .onChange((value) => {
        this.shaderController.updateUniform('u_specularStrength', value);
      });
      
    // Step 4: Metallic Flakes
    folder.add(this.params, 'flakeStrength', 0.0, 5.0, 0.01)
      .name('Glitter (M. Flakes)')
      .onChange((value) => {
        this.shaderController.updateUniform('u_flakeStrength', value);
      });
      
    folder.add(this.params, 'flakeScale', 100.0, 5000.0, 10.0)
      .name('Glitter Size')
      .onChange((value) => {
        this.shaderController.updateUniform('u_flakeScale', value);
      });
      
    folder.close();
  }

  /**
   * Animation folder
   */
  addAnimationFolder() {
    const folder = this.gui.addFolder('⚡ Animation');
    this.folders.animation = folder;
    
    folder.add(this.params, 'speed', 0.0001, 0.25, 0.0001)
      .name('Speed')
      .onChange((value) => {
        this.shaderController.updateUniform('u_speed', value);
      });
    
    folder.add(this.params, 'directionX', -1.0, 1.0, 0.05)
      .name('Direction X')
      .onChange((value) => {
        this.shaderController.updateUniform('u_directionX', value);
      });
    
    folder.add(this.params, 'directionY', -1.0, 1.0, 0.05)
      .name('Direction Y')
      .onChange((value) => {
        this.shaderController.updateUniform('u_directionY', value);
      });
    
    folder.close();
  }

  /**
   * Organic Modulation folder
   */
  addOrganicModulationFolder() {
    const folder = this.gui.addFolder('🌊 Organic Modulation');
    this.folders.organicModulation = folder;
    
    folder.add(this.params, 'modulationSpeed', 0.0001, 1.0, 0.0001)
      .name('Global Speed')
      .onChange((value) => {
        this.shaderController.updateUniform('u_modulationSpeed', value);
      });
    
    folder.add(this.params, 'modulationIntensity', 0.0, 50.0, 0.01)
      .name('Intensity')
      .onChange((value) => {
        this.shaderController.updateUniform('u_modulationIntensity', value);
      });
    
    folder.add(this.params, 'turbulenceModulation', 0.0, 10.0, 0.01)
      .name('Turbulence Breathing')
      .onChange((value) => {
        this.shaderController.updateUniform('u_turbulenceModulation', value);
      });
    
    folder.add(this.params, 'zoomModulation', 0.0, 10.0, 0.01)
      .name('Zoom Pulsing')
      .onChange((value) => {
        this.shaderController.updateUniform('u_zoomModulation', value);
      });
    
    folder.add(this.params, 'colorModulation', 0.0, 10.0, 0.01)
      .name('Color Shifting')
      .onChange((value) => {
        this.shaderController.updateUniform('u_colorModulation', value);
      });
    
    folder.add(this.params, 'rotationModulation', 0.0, 10.0, 0.01)
      .name('Flow Rotation')
      .onChange((value) => {
        this.shaderController.updateUniform('u_rotationModulation', value);
      });

    folder.add(this.params, 'noiseScaleModulation', 0.0, 10.0, 0.01)
      .name('Noise Scale Pulse')
      .onChange((value) => {
        this.shaderController.updateUniform('u_noiseScaleModulation', value);
      });

    folder.add(this.params, 'gainModulation', 0.0, 10.0, 0.01)
      .name('Gain Modulation')
      .onChange((value) => {
        this.shaderController.updateUniform('u_gainModulation', value);
      });

    folder.add(this.params, 'colorSpreadModulation', 0.0, 10.0, 0.01)
      .name('Color Spread Flux')
      .onChange((value) => {
        this.shaderController.updateUniform('u_colorSpreadModulation', value);
      });

    folder.add(this.params, 'colorShiftModulation', 0.0, 10.0, 0.01)
      .name('Palette Shift')
      .onChange((value) => {
        this.shaderController.updateUniform('u_colorShiftModulation', value);
      });
    
    folder.close();
  }

  /**
   * Artistic Controls folder
   */
  addArtisticFolder() {
    const folder = this.gui.addFolder('🎭 Artistic Controls');
    this.folders.artistic = folder;
    
    // Ripple Distortion
    folder.add(this.params, 'rippleStrength', 0.0, 0.5, 0.001)
      .name('Ripple Strength')
      .onChange((value) => {
        this.shaderController.updateUniform('u_rippleStrength', value);
      });
      
    folder.add(this.params, 'rippleFrequency', 0.0, 50.0, 0.1)
      .name('Ripple Freq')
      .onChange((value) => {
        this.shaderController.updateUniform('u_rippleFrequency', value);
      });
      
    // Quantization
    folder.add(this.params, 'quantizeStep', 0.0, 1.0, 0.01)
      .name('Topography Strength')
      .onChange((value) => {
        this.shaderController.updateUniform('u_quantizeStep', value);
      });
      
    // Mirroring
    folder.add(this.params, 'mirrorX')
      .name('Mirror X')
      .onChange((value) => {
        this.shaderController.updateUniform('u_mirrorX', value ? 1.0 : 0.0);
      });
      
    folder.add(this.params, 'mirrorY')
      .name('Mirror Y')
      .onChange((value) => {
        this.shaderController.updateUniform('u_mirrorY', value ? 1.0 : 0.0);
      });
      
    folder.close();
  }

  /**
   * Film Grain folder
   */
  addFilmGrainFolder() {
    const folder = this.gui.addFolder('🎬 Film Grain');
    this.folders.filmGrain = folder;
    
    folder.add(this.params, 'grainIntensity', 0.0, 1.0, 0.01)
      .name('Intensity')
      .onChange((value) => {
        this.shaderController.updateUniform('u_grainIntensity', value);
      });
    
    folder.add(this.params, 'grainSpeed', 0.0, 100.0, 0.01)
      .name('Speed')
      .onChange((value) => {
        this.shaderController.updateUniform('u_grainSpeed', value);
      });
    
    folder.add(this.params, 'grainSize', 10.0, 2500.0, 1.0)
      .name('Size')
      .onChange((value) => {
        this.shaderController.updateUniform('u_grainSize', value);
      });
    
    folder.add(this.params, 'grainBlendMode', {
      'Overlay': 0,
      'Multiply': 1,
      'Add': 2,
      'Screen': 3
    })
      .name('Blend Mode')
      .onChange((value) => {
        this.shaderController.updateUniform('u_grainBlendMode', value);
      });

    folder.add(this.params, 'grainAspect', 0.0, 1.0, 0.01)
      .name('Square Amount')
      .onChange((value) => {
        this.shaderController.updateUniform('u_grainAspect', value);
      });

    folder.add(this.params, 'grainComplexity', 0.0, 1.0, 0.01)
      .name('Complexity')
      .onChange((value) => {
        this.shaderController.updateUniform('u_grainComplexity', value);
      });
    
    folder.close();
  }

  /**
   * Visual Quality folder
   */
  addVisualQualityFolder() {
    const folder = this.gui.addFolder('✨ Visual Quality');
    this.folders.visualQuality = folder;
    
    folder.add(this.params, 'softness', 0.0, 1.0, 0.01)
      .name('Softness')
      .onChange((value) => {
        this.shaderController.updateUniform('u_softness', value);
      });
    
    folder.add(this.params, 'contrast', 0.5, 2.0, 0.05)
      .name('Contrast')
      .onChange((value) => {
        this.shaderController.updateUniform('u_contrast', value);
      });
    
    folder.add(this.params, 'brightness', 0.5, 1.5, 0.05)
      .name('Brightness')
      .onChange((value) => {
        this.shaderController.updateUniform('u_brightness', value);
      });
    
    folder.add(this.params, 'exposure', 0.5, 2.0, 0.05)
      .name('Exposure')
      .onChange((value) => {
        this.shaderController.updateUniform('u_exposure', value);
      });

    folder.add(this.params, 'blackLevel', 0.0, 1.0, 0.01)
      .name('Black Level')
      .onChange((value) => {
        this.shaderController.updateUniform('u_blackLevel', value);
      });
    
    folder.close();
  }

  /**
   * Color Mixing folder
   */
  addColorMixingFolder() {
    const folder = this.gui.addFolder('🎨 Color Mixing');
    this.folders.colorMixing = folder;
    
    folder.add(this.params, 'colorMix1', 0.0, 1.0, 0.01)
      .name('Mix 1 (Hi/Mid)')
      .onChange((value) => {
        this.shaderController.updateUniform('u_colorMix1', value);
      });
    
    folder.add(this.params, 'colorMix2', 0.0, 1.0, 0.01)
      .name('Mix 2 (Result/Low)')
      .onChange((value) => {
        this.shaderController.updateUniform('u_colorMix2', value);
      });
    
    folder.add(this.params, 'colorSpread', 0.0, 1.0, 0.01)
      .name('Color Spread')
      .onChange((value) => {
        this.shaderController.updateUniform('u_colorSpread', value);
      });
    
    folder.add(this.params, 'colorSeparation', 0.0, 1.0, 0.01)
      .name('Color Separation')
      .onChange((value) => {
        this.shaderController.updateUniform('u_colorSeparation', value);
      });
    
    folder.add(this.params, 'colorBands', 0.0, 1.0, 0.01)
      .name('Color Bands')
      .onChange((value) => {
        this.shaderController.updateUniform('u_colorBands', value);
      });
    
    folder.close();
  }

  /**
   * Presets folder
   */
  addPresetsFolder() {
    const folder = this.gui.addFolder('💾 Presets');
    this.folders.presets = folder;
    
    // Create buttons for each preset
    const presetNames = getPresetNames();
    const presetButtons = {};
    
    presetNames.forEach((presetName) => {
      const preset = backgroundPresets[presetName];
      presetButtons[preset.name] = () => {
        this.loadPreset(presetName);
      };
    });
    
    // Add a controller for each preset
    Object.keys(presetButtons).forEach((name) => {
      folder.add(presetButtons, name);
    });
    
    folder.close();
  }

  /**
   * Page configurations folder
   */
  addPageConfigsFolder() {
    const folder = this.gui.addFolder('📄 Page Configs');
    this.folders.pageConfigs = folder;
    
    const configManager = this.backgroundManager.getConfigManager();
    if (!configManager) {
      console.warn('ConfigManager not available');
      return;
    }
    
    const pageConfigs = configManager.getAllConfigs();
    const pageNames = Object.keys(pageConfigs).sort();
    
    // Create test page selector
    const pageState = {
      testPage: configManager.getCurrentPage() || 'index',
    };
    
    folder.add(pageState, 'testPage', pageNames)
      .name('Test Page Config')
      .onChange((pageName) => {
        console.log(`Testing page config: ${pageName}`);
        configManager.transitionToPage(pageName, 0.8);
        
        // Update GUI to show new values after transition
        setTimeout(() => {
          this.updateGUIFromUniforms();
        }, 850);
      });
    
    // Show current page (read-only, updated live)
    const currentPageState = {
      current: configManager.getCurrentPage() || 'none',
    };
    
    const currentPageController = folder.add(currentPageState, 'current')
      .name('Current Page')
      .disable();
    
    // Update current page display periodically
    setInterval(() => {
      const current = configManager.getCurrentPage();
      if (current) {
        currentPageState.current = current;
        currentPageController.updateDisplay();
      }
    }, 500);
    
    // Add button to show all page configs
    const pageUtils = {
      'Show All Configs': () => {
        console.log('=== Page Configurations ===');
        Object.entries(pageConfigs).forEach(([page, config]) => {
          console.log(`${page}: ${config.description || config.type}`);
          if (config.type === 'preset') {
            console.log(`  - Uses preset: "${config.preset}"`);
          }
        });
        console.log('===========================');
      },
    };
    
    folder.add(pageUtils, 'Show All Configs');
    
    folder.close();
  }

  /**
   * Performance and quality folder
   */
  addPerformanceFolder() {
    const folder = this.gui.addFolder('⚡ Performance');
    this.folders.performance = folder;
    
    const performanceMonitor = this.backgroundManager.getPerformanceMonitor();
    const renderer = this.backgroundManager.getRenderer();
    
    // Quality selector
    const qualityState = {
      quality: renderer ? renderer.getQuality() : 'high',
    };
    
    folder.add(qualityState, 'quality', ['low', 'medium', 'high'])
      .name('Quality Level')
      .onChange((value) => {
        this.backgroundManager.setQuality(value);
      });
    
    // FPS display (live updating)
    if (performanceMonitor) {
      const statsState = {
        fps: 0,
        avgFps: 0,
        minFps: 0,
      };
      
      const fpsController = folder.add(statsState, 'fps', 0, 120)
        .name('Current FPS')
        .disable()
        .listen();
      
      const avgController = folder.add(statsState, 'avgFps', 0, 120)
        .name('Average FPS')
        .disable()
        .listen();
      
      const minController = folder.add(statsState, 'minFps', 0, 120)
        .name('Min FPS')
        .disable()
        .listen();
      
      // Update stats periodically
      setInterval(() => {
        const metrics = performanceMonitor.getMetrics();
        statsState.fps = metrics.currentFps;
        statsState.avgFps = metrics.averageFps;
        statsState.minFps = metrics.minFps;
        
        // Color code FPS controller
        const fpsElement = fpsController.domElement.querySelector('input');
        if (fpsElement) {
          if (metrics.currentFps < 30) {
            fpsElement.style.color = '#ff0000';
          } else if (metrics.currentFps < 45) {
            fpsElement.style.color = '#ffff00';
          } else {
            fpsElement.style.color = '#00ff00';
          }
        }
      }, 500);
      
      // Toggle stats overlay
      const perfUtils = {
        'Toggle Stats Overlay': () => {
          performanceMonitor.toggle();
        },
        'Reset Stats': () => {
          performanceMonitor.reset();
          console.log('Performance stats reset');
        },
      };
      
      folder.add(perfUtils, 'Toggle Stats Overlay');
      folder.add(perfUtils, 'Reset Stats');
    }
    
    // Pixel ratio info
    const infoState = {
      devicePixelRatio: window.devicePixelRatio.toFixed(2),
      rendererPixelRatio: renderer && renderer.renderer ? renderer.renderer.getPixelRatio().toFixed(2) : '0',
    };
    
    folder.add(infoState, 'devicePixelRatio').name('Device Pixel Ratio').disable();
    folder.add(infoState, 'rendererPixelRatio').name('Renderer Pixel Ratio').disable();
    
    folder.close();
  }

  /**
   * Utilities folder
   */
  addUtilitiesFolder() {
    const folder = this.gui.addFolder('🛠️ Utilities');
    this.folders.utilities = folder;
    
    const utils = {
      'Export Config': () => this.exportConfig(),
      'Import Config': () => this.importConfig(),
      'Reset to Default': () => this.loadPreset('default'),
      'Copy Colors': () => this.copyColors(),
      'Randomize Colors': () => this.randomizeColors(),
      'Randomize Noise': () => this.randomizeNoise(),
      'Randomize Color Mixing': () => this.randomizeColorMixing(),
    };
    
    Object.keys(utils).forEach((name) => {
      folder.add(utils, name);
    });
    
    folder.open();
  }

  /**
   * Load a preset
   */
  loadPreset(presetName) {
    const preset = backgroundPresets[presetName];
    if (!preset) {
      console.warn(`Preset "${presetName}" not found`);
      return;
    }
    
    console.log(`Loading preset: ${preset.name}`);
    
    const params = preset.parameters;
    
    // Update all uniforms smoothly
    this.shaderController.transitionTo({
      u_zoom: params.u_zoom,
      u_noiseScale: params.u_noiseScale,
      u_octaves: params.u_octaves,
      u_lacunarity: params.u_lacunarity,
      u_gain: params.u_gain,
      u_turbulence: params.u_turbulence,
      u_warpOctaves: params.u_warpOctaves,
      u_ridgeAmount: params.u_ridgeAmount,
      u_detailScale: params.u_detailScale,
      u_detailAmount: params.u_detailAmount,
      u_speed: params.u_speed,
      u_directionX: params.u_directionX,
      u_directionY: params.u_directionY,
      u_modulationSpeed: params.u_modulationSpeed,
      u_modulationIntensity: params.u_modulationIntensity,
      u_turbulenceModulation: params.u_turbulenceModulation,
      u_zoomModulation: params.u_zoomModulation,
      u_colorModulation: params.u_colorModulation,
      u_rotationModulation: params.u_rotationModulation,
      u_noiseScaleModulation: params.u_noiseScaleModulation,
      u_gainModulation: params.u_gainModulation,
      u_colorSpreadModulation: params.u_colorSpreadModulation,
      u_colorShiftModulation: params.u_colorShiftModulation,
      u_rippleFrequency: params.u_rippleFrequency || 0.0,
      u_rippleStrength: params.u_rippleStrength || 0.0,
      u_quantizeStep: params.u_quantizeStep || 0.0,
      u_mirrorX: params.u_mirrorX || 0.0,
      u_mirrorY: params.u_mirrorY || 0.0,
      u_softness: params.u_softness,
      u_contrast: params.u_contrast,
      u_brightness: params.u_brightness,
      u_exposure: params.u_exposure,
      u_blackLevel: params.u_blackLevel,
      u_colorMix1: params.u_colorMix1,
      u_colorMix2: params.u_colorMix2,
      u_colorSpread: params.u_colorSpread,
      u_colorSeparation: params.u_colorSeparation,
      u_colorBands: params.u_colorBands,
      
      // Phase 1: Spectral Separation
      u_baseWeight: params.u_baseWeight !== undefined ? params.u_baseWeight : 1.0,
      u_midWeight: params.u_midWeight !== undefined ? params.u_midWeight : 0.5,
      u_highWeight: params.u_highWeight !== undefined ? params.u_highWeight : 0.25,
      
      // Phase 2: Flow & Warp
      u_warpScale: params.u_warpScale !== undefined ? params.u_warpScale : 1.0,
      u_flowType: params.u_flowType !== undefined ? params.u_flowType : 0.0,
      
      // Phase 3: Texture & Structure
      u_noiseType: params.u_noiseType !== undefined ? params.u_noiseType : 0.0,
      u_cellScale: params.u_cellScale !== undefined ? params.u_cellScale : 2.0,
      u_cellJitter: params.u_cellJitter !== undefined ? params.u_cellJitter : 1.0,
      
      // Phase 4: Composition & Masking
      u_vignetteStrength: params.u_vignetteStrength !== undefined ? params.u_vignetteStrength : 0.0,
      u_vignetteRadius: params.u_vignetteRadius !== undefined ? params.u_vignetteRadius : 0.5,
      u_centerMaskStrength: params.u_centerMaskStrength !== undefined ? params.u_centerMaskStrength : 0.0,
      u_centerMaskSize: params.u_centerMaskSize !== undefined ? params.u_centerMaskSize : 0.5,
      u_detailMasking: params.u_detailMasking !== undefined ? params.u_detailMasking : 0.0,
      
      // Phase 5: Stylization
      u_edgeEnhance: params.u_edgeEnhance !== undefined ? params.u_edgeEnhance : 0.0,
      u_postPosterize: params.u_postPosterize !== undefined ? params.u_postPosterize : 0.0,
      
      // Phase 6
      u_iridescenceStrength: params.u_iridescenceStrength !== undefined ? params.u_iridescenceStrength : 0.0,
      u_fresnelStrength: params.u_fresnelStrength !== undefined ? params.u_fresnelStrength : 0.0,
      u_specularStrength: params.u_specularStrength !== undefined ? params.u_specularStrength : 0.0,
      u_flakeStrength: params.u_flakeStrength !== undefined ? params.u_flakeStrength : 0.0,
      u_flakeScale: params.u_flakeScale !== undefined ? params.u_flakeScale : 150.0,
      
      u_grainIntensity: params.u_grainIntensity,
      u_grainSpeed: params.u_grainSpeed,
      u_grainSize: params.u_grainSize,
      u_grainBlendMode: params.u_grainBlendMode,
      u_grainAspect: params.u_grainAspect,
      u_grainComplexity: params.u_grainComplexity,
    }, 0.6);
    
    // Update GUI values after transition
    setTimeout(() => {
      this.updateGUIFromUniforms();
    }, 650);
  }

  /**
   * Update GUI controllers from current uniform values
   */
  updateGUIFromUniforms() {
    const uniforms = this.material.uniforms;
    
    // Update colors
    this.params.highlightColor = '#' + uniforms.u_color1.value.getHexString();
    this.params.midtoneColor = '#' + uniforms.u_color2.value.getHexString();
    this.params.lowlightColor = '#' + uniforms.u_color3.value.getHexString();
    this.params.baseColor = '#' + uniforms.u_baseColor.value.getHexString();

    // Update params object
    this.params.zoom = uniforms.u_zoom.value;
    this.params.noiseScale = uniforms.u_noiseScale.value;
    this.params.octaves = uniforms.u_octaves.value;
    this.params.lacunarity = uniforms.u_lacunarity.value;
    this.params.gain = uniforms.u_gain.value;
    this.params.turbulence = uniforms.u_turbulence.value;
    this.params.warpOctaves = uniforms.u_warpOctaves.value;
    this.params.ridgeAmount = uniforms.u_ridgeAmount.value;
    this.params.detailScale = uniforms.u_detailScale.value;
    this.params.detailAmount = uniforms.u_detailAmount.value;
    this.params.speed = uniforms.u_speed.value;
    this.params.directionX = uniforms.u_directionX.value;
    this.params.directionY = uniforms.u_directionY.value;
    this.params.modulationSpeed = uniforms.u_modulationSpeed.value;
    this.params.modulationIntensity = uniforms.u_modulationIntensity.value;
    this.params.turbulenceModulation = uniforms.u_turbulenceModulation.value;
    this.params.zoomModulation = uniforms.u_zoomModulation.value;
    this.params.colorModulation = uniforms.u_colorModulation.value;
    this.params.rotationModulation = uniforms.u_rotationModulation.value;
    this.params.noiseScaleModulation = uniforms.u_noiseScaleModulation.value;
    this.params.gainModulation = uniforms.u_gainModulation.value;
    this.params.colorSpreadModulation = uniforms.u_colorSpreadModulation.value;
    this.params.colorShiftModulation = uniforms.u_colorShiftModulation.value;
    this.params.rippleFrequency = uniforms.u_rippleFrequency ? uniforms.u_rippleFrequency.value : 0.0;
    this.params.rippleStrength = uniforms.u_rippleStrength ? uniforms.u_rippleStrength.value : 0.0;
    this.params.quantizeStep = uniforms.u_quantizeStep ? uniforms.u_quantizeStep.value : 0.0;
    this.params.mirrorX = uniforms.u_mirrorX ? (uniforms.u_mirrorX.value > 0.5) : false;
    this.params.mirrorY = uniforms.u_mirrorY ? (uniforms.u_mirrorY.value > 0.5) : false;
    this.params.softness = uniforms.u_softness.value;
    this.params.contrast = uniforms.u_contrast.value;
    this.params.brightness = uniforms.u_brightness.value;
    this.params.exposure = uniforms.u_exposure.value;
    this.params.blackLevel = uniforms.u_blackLevel.value;
    this.params.colorMix1 = uniforms.u_colorMix1.value;
    this.params.colorMix2 = uniforms.u_colorMix2.value;
    this.params.colorSpread = uniforms.u_colorSpread.value;
    this.params.colorSeparation = uniforms.u_colorSeparation.value;
    this.params.colorBands = uniforms.u_colorBands.value;
    this.params.grainIntensity = uniforms.u_grainIntensity.value;
    this.params.grainSpeed = uniforms.u_grainSpeed.value;
    this.params.grainSize = uniforms.u_grainSize.value;
    this.params.grainBlendMode = uniforms.u_grainBlendMode.value;
    this.params.grainAspect = uniforms.u_grainAspect.value;
    this.params.grainComplexity = uniforms.u_grainComplexity.value;
    
    // Update all GUI controllers
    this.gui.controllers.forEach(controller => controller.updateDisplay());
    Object.values(this.folders).forEach(folder => {
      folder.controllers.forEach(controller => controller.updateDisplay());
    });
  }

  /**
   * Export current configuration as JSON
   */
  exportConfig() {
    const uniforms = this.material.uniforms;
    
    const config = {
      colors: {
        highlight: '#' + uniforms.u_color1.value.getHexString(),
        midtone: '#' + uniforms.u_color2.value.getHexString(),
        lowlight: '#' + uniforms.u_color3.value.getHexString(),
        base: '#' + uniforms.u_baseColor.value.getHexString(),
      },
      noise: {
        zoom: uniforms.u_zoom.value,
        noiseScale: uniforms.u_noiseScale.value,
        octaves: uniforms.u_octaves.value,
        lacunarity: uniforms.u_lacunarity.value,
        gain: uniforms.u_gain.value,
        turbulence: uniforms.u_turbulence.value,
        warpOctaves: uniforms.u_warpOctaves.value,
        ridgeAmount: uniforms.u_ridgeAmount.value,
        detailScale: uniforms.u_detailScale.value,
        detailAmount: uniforms.u_detailAmount.value,
      },
      animation: {
        speed: uniforms.u_speed.value,
        directionX: uniforms.u_directionX.value,
        directionY: uniforms.u_directionY.value,
      },
      filmGrain: {
        intensity: uniforms.u_grainIntensity.value,
        speed: uniforms.u_grainSpeed.value,
        size: uniforms.u_grainSize.value,
        blendMode: uniforms.u_grainBlendMode.value,
        aspect: uniforms.u_grainAspect.value,
        complexity: uniforms.u_grainComplexity.value,
      },
      visual: {
        softness: uniforms.u_softness.value,
        contrast: uniforms.u_contrast.value,
        brightness: uniforms.u_brightness.value,
        exposure: uniforms.u_exposure.value,
        blackLevel: uniforms.u_blackLevel.value,
        colorMix1: uniforms.u_colorMix1.value,
        colorMix2: uniforms.u_colorMix2.value,
        colorSpread: uniforms.u_colorSpread.value,
      },
    };
    
    const json = JSON.stringify(config, null, 2);
    
    // Copy to clipboard
    navigator.clipboard.writeText(json).then(() => {
      console.log('✅ Configuration exported to clipboard!');
      alert('Configuration copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy:', err);
      // Fallback: show in console
      console.log('Configuration JSON:', json);
      alert('Check console for configuration JSON');
    });
  }

  /**
   * Import configuration from JSON
   */
  importConfig() {
    const json = prompt('Paste configuration JSON:');
    if (!json) return;
    
    try {
      const config = JSON.parse(json);
      
      // Apply colors
      if (config.colors) {
        if (config.colors.highlight) {
          this.shaderController.updateUniform('u_color1', new THREE.Color(config.colors.highlight));
          this.params.highlightColor = config.colors.highlight;
        }
        if (config.colors.midtone) {
          this.shaderController.updateUniform('u_color2', new THREE.Color(config.colors.midtone));
          this.params.midtoneColor = config.colors.midtone;
        }
        if (config.colors.lowlight) {
          this.shaderController.updateUniform('u_color3', new THREE.Color(config.colors.lowlight));
          this.params.lowlightColor = config.colors.lowlight;
        }
        if (config.colors.base) {
          this.shaderController.updateUniform('u_baseColor', new THREE.Color(config.colors.base));
          this.params.baseColor = config.colors.base;
        }
      }
      
      // Apply all other parameters
      const flatConfig = {
        ...config.noise && Object.keys(config.noise).reduce((acc, key) => {
          acc['u_' + key] = config.noise[key];
          return acc;
        }, {}),
        ...config.animation && Object.keys(config.animation).reduce((acc, key) => {
          acc['u_' + key] = config.animation[key];
          return acc;
        }, {}),
        ...config.visual && Object.keys(config.visual).reduce((acc, key) => {
          acc['u_' + key] = config.visual[key];
          return acc;
        }, {}),
        ...config.filmGrain && {
          u_grainIntensity: config.filmGrain.intensity,
          u_grainSpeed: config.filmGrain.speed,
          u_grainSize: config.filmGrain.size,
          u_grainBlendMode: config.filmGrain.blendMode,
          ...(config.filmGrain.aspect !== undefined ? { u_grainAspect: config.filmGrain.aspect } : {}),
          ...(config.filmGrain.complexity !== undefined ? { u_grainComplexity: config.filmGrain.complexity } : {}),
        },
      };
      
      this.shaderController.updateUniforms(flatConfig);
      this.updateGUIFromUniforms();
      
      console.log('✅ Configuration imported successfully!');
      alert('Configuration imported!');
    } catch (err) {
      console.error('Failed to import configuration:', err);
      alert('Invalid JSON format');
    }
  }

  /**
   * Copy current colors to clipboard
   */
  copyColors() {
    const uniforms = this.material.uniforms;
    const colors = {
      highlight: '#' + uniforms.u_color1.value.getHexString(),
      midtone: '#' + uniforms.u_color2.value.getHexString(),
      lowlight: '#' + uniforms.u_color3.value.getHexString(),
      base: '#' + uniforms.u_baseColor.value.getHexString(),
    };
    
    const text = JSON.stringify(colors, null, 2);
    navigator.clipboard.writeText(text).then(() => {
      console.log('✅ Colors copied!', colors);
      alert('Colors copied to clipboard!');
    });
  }

  /**
   * Randomize colors
   */
  randomizeColors() {
    const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    const colors = {
      highlight: randomColor(),
      midtone: randomColor(),
      lowlight: randomColor(),
      base: randomColor(),
    };
    
    this.shaderController.transitionTo({
      u_color1: new THREE.Color(colors.highlight),
      u_color2: new THREE.Color(colors.midtone),
      u_color3: new THREE.Color(colors.lowlight),
      u_baseColor: new THREE.Color(colors.base),
    }, 0.6);
    
    setTimeout(() => {
      this.params.highlightColor = colors.highlight;
      this.params.midtoneColor = colors.midtone;
      this.params.lowlightColor = colors.lowlight;
      this.params.baseColor = colors.base;
      this.updateGUIFromUniforms();
    }, 650);
    
    console.log('🎨 Randomized colors:', colors);
  }

  /**
   * Randomize noise parameters
   */
  randomizeNoise() {
    // Generate random values within sensible ranges
    const noise = {
      zoom: Math.random() * 1.5 + 0.2,           // 0.2 - 1.7
      noiseScale: Math.random() * 4 + 0.5,       // 0.5 - 4.5
      octaves: Math.floor(Math.random() * 3) + 2, // 2 - 4
      lacunarity: Math.random() * 2 + 1.5,       // 1.5 - 3.5
      gain: Math.random() * 0.6 + 0.3,           // 0.3 - 0.9
      turbulence: Math.random() * 1.0,           // 0 - 1.0
      warpOctaves: Math.floor(Math.random() * 3) + 1, // 1 - 3
      ridgeAmount: Math.random() * 0.8,          // 0 - 0.8
      detailScale: Math.random() * 8 + 4,        // 4 - 12
      detailAmount: Math.random() * 0.3,         // 0 - 0.3
    };
    
    this.shaderController.transitionTo({
      u_zoom: noise.zoom,
      u_noiseScale: noise.noiseScale,
      u_octaves: noise.octaves,
      u_lacunarity: noise.lacunarity,
      u_gain: noise.gain,
      u_turbulence: noise.turbulence,
      u_warpOctaves: noise.warpOctaves,
      u_ridgeAmount: noise.ridgeAmount,
      u_detailScale: noise.detailScale,
      u_detailAmount: noise.detailAmount,
    }, 0.6);
    
    setTimeout(() => {
      this.updateGUIFromUniforms();
    }, 650);
    
    console.log('🌫️ Randomized noise:', noise);
  }

  /**
   * Randomize color mixing parameters
   */
  randomizeColorMixing() {
    const mixing = {
      colorMix1: Math.random(),           // 0 - 1
      colorMix2: Math.random(),           // 0 - 1
      colorSpread: Math.random(),         // 0 - 1
      colorSeparation: Math.random() * 0.6 + 0.4,  // 0.4 - 1.0 (favor separation)
      colorBands: Math.random() * 0.5,    // 0 - 0.5 (subtle banding)
    };
    
    this.shaderController.transitionTo({
      u_colorMix1: mixing.colorMix1,
      u_colorMix2: mixing.colorMix2,
      u_colorSpread: mixing.colorSpread,
      u_colorSeparation: mixing.colorSeparation,
      u_colorBands: mixing.colorBands,
    }, 0.6);
    
    setTimeout(() => {
      this.updateGUIFromUniforms();
    }, 650);
    
    console.log('🎨 Randomized color mixing:', mixing);
  }

  /**
   * Add keyboard shortcut (G key) to toggle GUI
   */
  addKeyboardShortcut() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'g' || e.key === 'G') {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
          return; // Don't toggle if typing in an input
        }
        
        if (this.gui._hidden) {
          this.gui.show();
        } else {
          this.gui.hide();
        }
      }
    });
  }

  /**
   * Destroy the GUI
   */
  destroy() {
    if (this.gui) {
      this.gui.destroy();
      this.gui = null;
    }
  }
}

/**
 * Initialize DevGUI if in development mode
 */
export function initDevGUI(backgroundManager) {
  if (!DevGUI.isDev()) {
    console.log('DevGUI: Not in development mode, skipping GUI');
    return null;
  }
  
  console.log('DevGUI: Initializing...');
  return new DevGUI(backgroundManager);
}

