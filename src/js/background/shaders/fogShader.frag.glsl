// Fog shader with multi-color blending and noise
// Phase 2: Noise & Colors implementation

// ===== NOISE FUNCTIONS =====
varying vec2 vUv;

// Time and resolution
uniform float u_time;
uniform float u_timeAbsolute;
uniform vec2 u_resolution;

// Color uniforms
uniform vec3 u_color1;          // Highlight color
uniform vec3 u_color2;          // Midtone color
uniform vec3 u_color3;          // Lowlight color
uniform vec3 u_baseColor;       // Background base color

// Noise parameters
uniform float u_zoom;           // Overall scale
uniform float u_noiseScale;     // Fine noise scale
uniform int u_octaves;          // FBM octaves (complexity)
uniform float u_lacunarity;     // Frequency multiplier per octave
uniform float u_gain;           // Amplitude multiplier per octave
uniform float u_turbulence;     // Domain warping amount
uniform int u_warpOctaves;      // Octaves for domain warping
uniform float u_ridgeAmount;    // Ridge noise amount (0=smooth, 1=ridged)
uniform float u_detailScale;    // Secondary detail noise scale
uniform float u_detailAmount;   // Secondary detail noise amount

// Animation parameters
uniform float u_speed;          // Animation speed multiplier
uniform float u_directionX;     // Horizontal flow direction
uniform float u_directionY;     // Vertical flow direction

// Organic modulation parameters (for time-based evolution)
uniform float u_modulationSpeed;    // Global speed multiplier for all modulations
uniform float u_modulationIntensity; // Global intensity multiplier (0=none, 1=full)
uniform float u_turbulenceModulation; // Amount of turbulence breathing (0=static, 1=full)
uniform float u_zoomModulation;     // Amount of zoom pulsing (0=static, 1=full)
uniform float u_colorModulation;    // Amount of color shifting (0=static, 1=full)
uniform float u_rotationModulation; // Amount of flow rotation (0=static, 1=full)
uniform float u_noiseScaleModulation; // Noise scale pulsing (0=static)
uniform float u_gainModulation;       // Gain modulation (0=static)
uniform float u_colorSpreadModulation; // Color spread modulation
uniform float u_colorShiftModulation;  // Palette shift modulation

// Precomputed modulation outputs (set from CPU for performance)
uniform float u_noiseScaleEffective;
uniform float u_gainEffective;
uniform float u_zoomEffective;
uniform float u_turbulenceEffective;
uniform vec2 u_directionEffective;
uniform float u_colorMix1Effective;
uniform float u_colorMix2Effective;
uniform float u_colorSpreadEffective;
uniform float u_colorShiftOffset;

// Organic motion parameters (NEW - for VFX techniques)
uniform float u_circularMotionIntensity;  // Strength of circular swirling (0-1)
uniform float u_evolutionSpeed;            // Speed of temporal noise evolution (0-1)
uniform float u_layerBlend;                // Blend between primary and secondary noise layers (0-1)
uniform float u_colorEvolutionSpeed;       // Speed of color morphing (0-1)

// Phase 1: Spectral Separation Controls
uniform float u_baseWeight;                // Weight of low-frequency noise
uniform float u_midWeight;                 // Weight of mid-frequency noise
uniform float u_highWeight;                // Weight of high-frequency noise

// Phase 2: Advanced Distortion & Flow
uniform float u_warpScale;                 // Scale of the warp noise
uniform float u_flowType;                  // 0 = Standard (Sine/Linear), 1 = Curl (Fluid)

// Phase 3: Texture & Structure (Worley)
uniform float u_noiseType;                 // 0 = FBM (Cloudy), 1 = Worley (Cellular)
uniform float u_cellScale;                 // Scale of the cellular patterns
uniform float u_cellJitter;                // Randomness of the cells (0=grid, 1=organic)

// Phase 4: Composition & Masking
uniform float u_vignetteStrength;          // Darkness of the corners
uniform float u_vignetteRadius;            // Size of the vignette
uniform float u_centerMaskStrength;        // Clarity of the center (for text)
uniform float u_centerMaskSize;            // Size of the center mask

uniform float u_detailMasking;             // Amount that Base layer masks High layer (0=none, 1=full)

// Phase 5: Post-Processing & Stylization
uniform float u_edgeEnhance;               // Highlight edges (derivative)
uniform float u_postPosterize;             // Final color posterization steps (0=none, >0=steps)

// Phase 6: Liquid-Chromatic Post-Processing
uniform float u_iridescenceStrength;       // Strength of Thin-Film Interference
uniform float u_fresnelStrength;           // Strength of Fresnel Edge Tint
uniform float u_specularStrength;          // Strength of Clear-Coat Specular
uniform float u_flakeStrength;             // Strength of Metallic Flakes
uniform float u_flakeScale;                // Scale (density/size) of Flakes

// Artistic controls (NEW - Phase 4)
uniform float u_rippleFrequency;           // Frequency of sine ripple distortion
uniform float u_rippleStrength;            // Strength of sine ripple distortion
uniform float u_quantizeStep;              // Noise quantization steps (0 = smooth)
uniform float u_mirrorX;                   // 0 or 1 to enable X mirroring
uniform float u_mirrorY;                   // 0 or 1 to enable Y mirroring

// Dynamic Pattern Modulation (root-level noise generation changes)
uniform float u_patternMorph;              // Master intensity for all pattern morphing (0=off, 1=full)
uniform float u_lacunarityOscillation;     // Animate lacunarity over time (0=static, 1=full range)
uniform float u_gainOscillation;           // Animate gain over time (0=static, 1=full range)
uniform float u_warpFeedback;              // Noise feeds back into domain warp (0=none, 1=full)
uniform float u_spectralBreathing;         // Spectral band weights oscillate (0=static, 1=full)

// Base Pattern Complexity (structural, not temporal)
uniform float u_warpLayers;                // Recursive warp passes (0=none, 1-3=layers)
uniform float u_noiseDistortion;           // Spatial FBM parameter variance (0=uniform, 1=varied)
uniform float u_turbulentFbm;              // Absolute-value folding in FBM (0=smooth, 1=turbulent)
uniform float u_layerInteraction;          // Spectral blend mode (0=additive, 1=multiplicative)

// Animation Balance
uniform float u_translationScale;          // Translation vs evolution ratio (0=evolve in place, 1=normal movement)

// Visual quality parameters
uniform float u_softness;       // Edge softness
uniform float u_contrast;       // Overall contrast
uniform float u_brightness;     // Overall brightness
uniform float u_exposure;       // Overall exposure (multiplicative)
uniform float u_blackLevel;     // Additional darkening (0 = none, 1 = full black)

// Color mixing parameters
uniform float u_colorMix1;      // Mix between color1 and color2
uniform float u_colorMix2;      // Mix between result and color3
uniform float u_colorSpread;    // Color distribution/contrast (0=tight, 1=spread)
uniform float u_colorSeparation; // Color distinctness (0=smooth blend, 0.85+=distinct zones)
uniform float u_colorBands;     // Posterization amount (0=smooth, 1=strong banding)

// Film grain parameters
uniform float u_grainIntensity; // Grain strength (0-1)
uniform float u_grainSpeed;     // Grain animation speed
uniform float u_grainSize;      // Grain particle size
uniform int u_grainBlendMode;   // 0: overlay, 1: multiply, 2: add, 3: screen
uniform float u_grainAspect;    // 0: match viewport, 1: square grains
uniform float u_grainComplexity; // 0: base pattern, 1: maximum detail
uniform float u_grainFrameHold;  // Frame hold for performance (1.0 = every frame, 2.0+ = skip frames)
// Simplex 2D noise
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

// Fractional Brownian Motion
float fbm(vec2 st, int octaves, float lacunarity, float gain) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 8; i++) {
        if(i >= octaves) break;
        
        value += amplitude * snoise(st * frequency);
        frequency *= lacunarity;
        amplitude *= gain;
    }
    
    return value;
}

// Enhanced FBM with turbulence option (absolute-value folding for structural complexity)
// NOTE: Called only by legacy paths — main() uses the unrolled fbmTurb dispatcher below.
float fbmEnhanced(vec2 st, int octaves, float lacunarity, float gain, float turbulence) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 8; i++) {
        if(i >= octaves) break;
        
        float n = snoise(st * frequency);
        n = mix(n, abs(n) * 2.0 - 1.0, turbulence);
        
        value += amplitude * n;
        frequency *= lacunarity;
        amplitude *= gain;
    }
    
    return value;
}

// ===== PERF: STATICALLY UNROLLED FBM VARIANTS =====
// Replaces the dynamic-break loop in fbmEnhanced for the main spectral layers.
// Many mobile GPU drivers (Mali/Adreno) compile `for(i<8){ if(i>=octaves) break; }` as
// a full 8-iteration loop, ignoring the early exit. Unrolled variants eliminate this.

// 1-octave turbulent FBM (always used for noiseBase)
float fbmT1(vec2 st, float lacunarity, float gain, float turb) {
    float n = snoise(st);
    return mix(n, abs(n) * 2.0 - 1.0, turb) * 0.5;
}

// 2-octave turbulent FBM
float fbmT2(vec2 st, float lacunarity, float gain, float turb) {
    float n, v = 0.0, a = 0.5, f = 1.0;
    n = snoise(st * f); v += a * mix(n, abs(n) * 2.0 - 1.0, turb); f *= lacunarity; a *= gain;
    n = snoise(st * f); v += a * mix(n, abs(n) * 2.0 - 1.0, turb);
    return v;
}

// 3-octave turbulent FBM
float fbmT3(vec2 st, float lacunarity, float gain, float turb) {
    float n, v = 0.0, a = 0.5, f = 1.0;
    n = snoise(st * f); v += a * mix(n, abs(n) * 2.0 - 1.0, turb); f *= lacunarity; a *= gain;
    n = snoise(st * f); v += a * mix(n, abs(n) * 2.0 - 1.0, turb); f *= lacunarity; a *= gain;
    n = snoise(st * f); v += a * mix(n, abs(n) * 2.0 - 1.0, turb);
    return v;
}

// Dispatcher: selects the correct unrolled variant based on u_octaves.
// u_octaves is a uniform — this branch resolves once per draw call, not per fragment.
float fbmTurb(vec2 st, int octaves, float lacunarity, float gain, float turb) {
    if (octaves <= 1) return fbmT1(st, lacunarity, gain, turb);
    if (octaves == 2) return fbmT2(st, lacunarity, gain, turb);
    return fbmT3(st, lacunarity, gain, turb);
}
// ===== END UNROLLED FBM VARIANTS =====

// Curl Noise - calculates the curl of a 2D potential field (pseudo-derivative)
// Creates fluid-like, non-divergent rotation
vec2 curlNoise(vec2 p) {
    const float e = 0.1;
    float n1 = snoise(p + vec2(e, 0.0));
    float n2 = snoise(p - vec2(e, 0.0));
    float n3 = snoise(p + vec2(0.0, e));
    float n4 = snoise(p - vec2(0.0, e));
    
    float x = n2 - n1;
    float y = n4 - n3;
    
    // Curl = (dF/dy, -dF/dx)
    return vec2(y, -x) * (1.0 / (2.0 * e)); // Normalize derivative
}

// Ultra-fast hash function - single operation, optimized for grain
float fastHash(vec2 p) {
    // Single fract operation - much faster than hash3
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

// Optimized 2D hash for grain with better distribution
vec2 hash2(vec2 p) {
    p = fract(p * vec2(443.897, 441.423));
    p += dot(p, p.yx + 19.19);
    return fract(vec2(p.x * p.y, p.x + p.y));
}

// Worley Noise (Cellular/Voronoi) - creates cells, stones, scales
float worley(vec2 st, float jitter) {
    vec2 p = floor(st);
    vec2 f = fract(st);
    
    float min_dist = 1.0;  // Minimum distance to neighbors
    
    // Check 3x3 neighbor window
    for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
            vec2 neighbor = vec2(float(x), float(y));
            
            // Random point in neighbor cell
            vec2 point = hash2(p + neighbor);
            
            // Animate point (organic movement) - SLOWED DOWN
            // Reduced speed by 0.2x because 1.0 was way too frantic
            // BOUNDED: use mod to prevent precision decay at large time values
            point = 0.5 + 0.5 * sin(mod(u_time, 600.0) * 0.2 + 6.2831 * point);
            
            // Vector to point
            vec2 diff = neighbor + point * jitter - f;
            
            // Distance
            float dist = length(diff);
            
            // Keep minimum distance
            min_dist = min(min_dist, dist);
        }
    }
    
    return min_dist;
}

// ULTRA-OPTIMIZED domain warping
// Supports both fast Sine warping and advanced Curl warping
vec2 domainWarp(vec2 p, float time, float warpAmount, int warpOctaves) {
    if (u_flowType > 0.5) {
        // Phase 2: Curl Noise Flow
        // More expensive but creates beautiful fluid dynamics
        vec2 t = vec2(time * 0.1);
        vec2 q = curlNoise(p * u_warpScale + t);
        
        // Optional: Second octave of curl for detail (if octaves > 1)
        if (warpOctaves > 1) {
            q += curlNoise(p * u_warpScale * 2.0 - t) * 0.5;
        }
        
        return p + warpAmount * q;
        
    } else {
        // "Standard" Sine Warping (Optimized)
        // Gives organic movement without the massive computational cost of full FBM
        float t1 = time * 0.05;
        float t2 = time * 0.03;
        
        vec2 q = vec2(
            sin(p.x * 0.5 + t1) + sin(p.y * 0.3 + t1 * 1.3),
            sin(p.x * 0.3 + t2) + sin(p.y * 0.5 + t2 * 0.7)
        ) * 0.5;
        
        return p + warpAmount * q;
    }
}

// Ridge noise - creates sharper, more defined features
float ridge(float n) {
    return 1.0 - abs(n);
}

float ridgedFbm(vec2 st, int octaves, float lacunarity, float gain) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 8; i++) {
        if(i >= octaves) break;
        
        float n = ridge(snoise(st * frequency));
        value += amplitude * n;
        frequency *= lacunarity;
        amplitude *= gain;
    }
    
    return value;
}

// Secondary noise layer for depth
// BOUNDED: wrap time input to prevent coordinate drift at large values
float detailNoise(vec2 st, float time, float scale, float speed) {
    float t = mod(time, 600.0);
    vec2 offset = vec2(t * speed * 0.05, t * speed * 0.03);
    return snoise((st + offset) * scale) * 0.5 + 0.5;
}



// OPTIMIZED: Branchless film grain - eliminates GPU warp divergence
float filmGrain(vec2 st, float time, float size, float speed, float grainAspectRatio, float complexity, float frameHold) {
    // Apply frame hold for performance optimization at high FPS
    float t = time * speed / max(1.0, frameHold);
    float frame = floor(t);
    float interp = fract(t);
    
    // Scale UV by grain size
    vec2 pos = st * size;
    pos.x *= grainAspectRatio;
    vec2 cell = floor(pos);
    vec2 cellFract = fract(pos);
    
    // ANTI-REPETITION: Add unique offset per cell using second hash channel
    vec2 cellHash = hash2(cell);
    vec2 cellOffset = (cellHash - 0.5) * 0.3;
    vec2 adjustedCellFract = fract(cellFract + cellOffset);
    
    // Use time-based seed with cell variation
    vec2 seed1 = cell + frame * 0.1 + cellHash.x * 10.0;
    vec2 seed2 = cell + (frame + 1.0) * 0.1 + cellHash.y * 10.0;
    
    // Base grain pattern
    float grain1 = fastHash(seed1);
    float grain2 = fastHash(seed2);
    
    // BRANCHLESS complexity blending - always compute, blend by complexity factor
    // This avoids GPU warp divergence from conditional execution
    float microGrain1 = fastHash(seed1 * 2.7 + adjustedCellFract * 3.1);
    float microGrain2 = fastHash(seed2 * 2.7 + adjustedCellFract * 3.1);
    
    // Smooth blend instead of branching
    float complexityBlend = min(complexity * 0.5, 0.5);
    grain1 = mix(grain1, (grain1 + microGrain1) * 0.5, complexityBlend);
    grain2 = mix(grain2, (grain2 + microGrain2) * 0.5, complexityBlend);
    
    // Sparkle blended in always (becomes 0 effect when complexity is 0)
    float sparkle = fract(dot(adjustedCellFract, vec2(12.9898, 78.233)) * 43758.5453);
    sparkle = (sparkle - 0.5) * complexity * 0.2;
    grain1 += sparkle;
    grain2 += sparkle * 0.8;
    
    // Clamp to valid range
    grain1 = clamp(grain1, 0.0, 1.0);
    grain2 = clamp(grain2, 0.0, 1.0);
    
    // Linear interpolation for temporal smoothness
    return mix(grain1, grain2, interp);
}

// OPTIMIZED: Branchless grain blend - uses step functions instead of conditionals
vec3 applyGrain(vec3 base, float grain, float intensity, int mode) {
    // Precompute all blend modes (GPU executes all in parallel anyway due to SIMD)
    vec3 overlay = base * (1.0 + (grain - 0.5) * intensity * 0.5);
    vec3 multiply = base * mix(1.0, grain, intensity);
    vec3 add = base + (grain - 0.5) * intensity;
    vec3 screen = 1.0 - (1.0 - base) * (1.0 - grain * intensity);
    
    // Branchless selection using step functions
    // This avoids warp divergence on GPUs
    float isMode0 = 1.0 - min(float(mode), 1.0);  // 1 when mode=0, else 0
    float isMode1 = step(0.5, float(mode)) * step(float(mode), 1.5);  // 1 when mode=1
    float isMode2 = step(1.5, float(mode)) * step(float(mode), 2.5);  // 1 when mode=2
    float isMode3 = step(2.5, float(mode));  // 1 when mode>=3
    
    return overlay * isMode0 + multiply * isMode1 + add * isMode2 + screen * isMode3;
}

// Phase 6: Liquid-Chromatic Helpers
vec3 computeNormal(float field) {
  // Clamp derivatives to reduce harsh aliasing on steep slopes
  // 60.0 multiplier means we are boosting small derivatives, so we limit the input
  // to prevent single-pixel spikes
  float dx = clamp(dFdx(field), -0.02, 0.02) * 60.0;
  float dy = clamp(dFdy(field), -0.02, 0.02) * 60.0;
  return normalize(vec3(dx, dy, 1.0));
}

vec3 thinFilmIridescence(vec3 normal, float strength) {
  float fresnel = pow(1.0 - normal.z, 3.0);
  return vec3(
    sin(fresnel * 6.283 + 0.0),
    sin(fresnel * 6.283 + 2.1),
    sin(fresnel * 6.283 + 4.2)
  ) * strength;
}

vec3 fresnelTint(vec3 normal, vec3 tintColor, float strength) {
  // Lower power (1.5) to catch shallower slopes
  // Intensity boost removed (handled by uniform range 0-25)
  float f = pow(clamp(1.0 - normal.z, 0.0, 1.0), 1.5);
  return tintColor * f * strength;
}

float specularHighlight(vec3 normal, vec3 lightDir, float strength) {
  // Blinn-Phong specular with much higher shininess for "wet paint" look
  vec3 viewDir = vec3(0.0, 0.0, 1.0);
  vec3 halfDir = normalize(lightDir + viewDir);
  float NdotH = max(dot(normal, halfDir), 0.0);
  
  // Exponent 300.0 for very sharp, distinct highlights (vehicle clearcoat)
  float spec = pow(NdotH, 300.0);
  
  // Anti-Aliased Cutoff:
  // Instead of a hard threshold (0.05), use fwidth to determine the "blur edge" size
  // This creates a smooth transition at the pixel boundary
  float aa = fwidth(spec);
  float mask = smoothstep(0.05 - aa, 0.05 + aa, spec);
  
  // Also multiply by the mask instead of reshaping the value itself
  // This preserves the inner gradient while cleaning the edge
  return spec * mask * strength;
}

// Sparkle noise for metallic flakes
float sparkleNoise(vec2 uv) {
    float n = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
    return n;
}

vec3 metallicFlakes(vec2 uv, vec3 normal, float scale, float strength, float time, vec3 baseColor, float displacement) {
    // 1. High frequency grid for flakes
    vec2 flakeUV = uv * scale;
    
    // 2. Compute per-cell sparkle with JITTER for randomization
    vec2 cell = floor(flakeUV);
    vec2 local = fract(flakeUV);
    
    // Random position within the cell (0.2 to 0.8 to keep away from edges)
    vec2 randomCenter = hash2(cell) * 0.6 + 0.2;
    
    // Distance from current pixel to the random center
    float dist = distance(local, randomCenter);
    
    // 3. Jitter: Use the cell ID to get a random "orientation" for the flake
    float hash = sparkleNoise(cell);
    
    // Additional hash for color variation per flake
    float colorHash = sparkleNoise(cell + vec2(42.7, 13.3));
    
    // 4. Thresholding/Probability
    // Independent of displacement - uniform random distribution first
    float probability = smoothstep(0.97, 1.0, hash);
    
    // 5. Shape: Circular dot with larger radius to ensure visibility
    // expanded radius (0.8) ensures it fills the cell enough to be seen even at high scale
    float shape = 1.0 - smoothstep(0.2, 0.8, dist);
    
    // 6. Normal mask: modulated by light
    float light = max(dot(normal, vec3(0.0, 0.0, 1.0)), 0.0);
    
    // 7. Prominence modulation
    // Flakes are brighter on "peaks" (high displacement)
    // Displacement boosts strength from 1.0x to 3.0x
    float displacementFactor = smoothstep(0.2, 0.8, displacement);
    float prominence = 1.0 + 2.0 * displacementFactor;
    
    // 8. Color blending: "Holo Sparkle" Additive feel
    // Use much brighter base (x3.0) and mix with pure white
    vec3 sparkColor = mix(baseColor * 3.0, vec3(1.5), 0.6 + colorHash * 0.4);
    
    // Combine
    return sparkColor * probability * shape * strength * light * prominence;
}

// ===== END NOISE FUNCTIONS =====


void main() {
    // Normalized coordinates accounting for aspect ratio
    vec2 uv = vUv;
    vec2 st = (uv - 0.5) * 2.0;
    st.x *= u_resolution.x / u_resolution.y;
    
    // Apply precomputed modulation
    st *= u_zoomEffective;
    
    // ===== BOUNDED TIME SYSTEM =====
    // All animation derives from these bounded signals to prevent precision decay.
    // 600.0s loop (~10 min) is long enough to feel infinite while keeping floats stable.
    // TWO_PI phase signals guarantee seamless cyclical motion at loop boundary.
    const float LOOP_DUR   = 600.0;
    const float TWO_PI     = 6.28318530718;
    
    // Core bounded time values — kept numerically small
    float tLoop   = mod(u_time, LOOP_DUR);           // 0–600 sawtooth
    float tNorm   = tLoop / LOOP_DUR;                // 0–1 normalized
    float tAngle  = tNorm * TWO_PI;                  // 0–2π for sin/cos
    
    // Reusable phase signals (perfectly periodic, zero-cost smooth loop)
    vec2  phase   = vec2(cos(tAngle), sin(tAngle));  // circular phase
    float pulse1  = sin(tAngle * 1.0);               // slow oscillator
    float pulse2  = cos(tAngle * 1.7);               // offset oscillator
    float pulse3  = sin(tAngle * 0.6 + 1.2);         // third oscillator
    // ===== END BOUNDED TIME SYSTEM =====
    
    // ARTISTIC CONTROL 1: Coordinate Mirroring (Kaleidoscope/Rorschach)
    if (u_mirrorX > 0.5) st.x = abs(st.x);
    if (u_mirrorY > 0.5) st.y = abs(st.y);
    
    // ARTISTIC CONTROL 2: Sine Ripple Distortion (Liquid/Glass effect)
    // BOUNDED: use tLoop instead of raw u_time
    if (u_rippleStrength > 0.001) {
        float rippleSpeed = tLoop * 2.0;
        st.x += sin(st.y * u_rippleFrequency + rippleSpeed) * u_rippleStrength;
        st.y += cos(st.x * u_rippleFrequency + rippleSpeed * 0.8) * u_rippleStrength;
    }
    
    // VFX TECHNIQUE 1: Organic circular motion - NOW MODULATABLE
    // Creates natural swirling fog movement
    // BOUNDED: derive from phase signals for perfect periodicity
    vec2 circularMotion = vec2(
        sin(tLoop * 0.3) * 0.5,
        cos(tLoop * 0.23) * 0.5
    ) * u_circularMotionIntensity; // User-controllable intensity
    
    // Apply translation scale to control movement vs evolution ratio
    // translationScale=1.0: normal movement, translationScale=0.0: pattern evolves in place
    // BOUNDED: use tLoop for directional movement
    vec2 movement = (u_directionEffective * tLoop + circularMotion) * u_translationScale;
    st += movement;
    
    // VFX TECHNIQUE 2: Temporal noise evolution - NOW MODULATABLE
    // Industry standard: add time offset to noise coordinates for evolution
    // BOUNDED: use tLoop for evolution base
    float evolution = tLoop * u_evolutionSpeed; // User-controllable speed
    vec2 evolvedSt = st + vec2(
        sin(evolution * 0.7) * 0.3,
        cos(evolution * 0.5) * 0.3
    );
    
    // Apply domain warping for organic distortion
    // BOUNDED: pass tLoop-based time to domainWarp
    vec2 warpedPos = evolvedSt * u_noiseScaleEffective;
    float warpTime = tLoop * u_speed;
    if(u_turbulenceEffective > 0.01) {
        warpedPos = domainWarp(warpedPos, warpTime, u_turbulenceEffective, u_warpOctaves);
    }
    
    // ===== BASE PATTERN COMPLEXITY (structural, not temporal) =====
    
    // Multi-layer warp: recursive warp passes for more folded structures
    // BOUNDED: all warp passes use warpTime derived from tLoop
    if (u_warpLayers > 0.5) {
        // Second warp pass - different scale/speed for variation
        warpedPos = domainWarp(warpedPos, warpTime * 0.7, u_turbulenceEffective * 0.6, 1);
    }
    if (u_warpLayers > 1.5) {
        // Third warp pass - finer detail warping
        warpedPos = domainWarp(warpedPos, warpTime * 1.3, u_turbulenceEffective * 0.3, 1);
    }
    if (u_warpLayers > 2.5) {
        // Fourth warp pass - subtle micro-warping
        warpedPos = domainWarp(warpedPos, warpTime * 2.0, u_turbulenceEffective * 0.15, 1);
    }
    
    // Noise Distortion: spatial variance of FBM parameters
    float distortionNoise = 0.0;
    if (u_noiseDistortion > 0.01) {
        distortionNoise = snoise(warpedPos * 0.3) * u_noiseDistortion;
    }
    // ===== END BASE PATTERN COMPLEXITY =====
    
    // ===== DYNAMIC PATTERN MORPHING =====
    // These modulations affect the core noise generation parameters over time
    // BOUNDED: morphTime derived from tLoop, never grows unbounded
    
    float morphTime = tLoop * 0.1 * u_patternMorph;
    
    // Dynamic lacunarity: oscillates around base value (affects pattern complexity)
    float dynamicLacunarity = u_lacunarity;
    if (u_lacunarityOscillation > 0.01 && u_patternMorph > 0.01) {
        // Oscillate between 0.7x and 1.3x of base lacunarity
        float lacOsc = sin(morphTime * 1.7) * 0.3 * u_lacunarityOscillation;
        dynamicLacunarity = u_lacunarity * (1.0 + lacOsc);
    }
    
    // Dynamic gain: oscillates around base value (affects amplitude decay)
    float dynamicGain = u_gainEffective;
    if (u_gainOscillation > 0.01 && u_patternMorph > 0.01) {
        // Oscillate between 0.6x and 1.4x of base gain
        float gainOsc = sin(morphTime * 1.3 + 1.5) * 0.4 * u_gainOscillation;
        dynamicGain = u_gainEffective * (1.0 + gainOsc);
    }
    
    // Warp Feedback: noise output feeds back into its own warp (self-similar distortions)
    // BOUNDED: use tLoop for all time references
    if (u_warpFeedback > 0.01 && u_patternMorph > 0.01) {
        // Sample preliminary noise at current position
        float feedbackNoise = snoise(warpedPos * 0.5 + tLoop * 0.02);
        
        // Use noise to create secondary warp offset
        vec2 feedbackOffset = vec2(
            sin(feedbackNoise * 6.28 + tLoop * 0.1),
            cos(feedbackNoise * 6.28 + tLoop * 0.13)
        ) * u_warpFeedback * u_patternMorph * 0.5;
        
        warpedPos += feedbackOffset;
    }
    // ===== END PATTERN MORPHING =====
    
    // Apply spatial distortion to FBM parameters for non-uniform detail
    float spatialLacunarity = dynamicLacunarity * (1.0 + distortionNoise * 0.3);
    float spatialGain = dynamicGain * (1.0 - distortionNoise * 0.2);
    
    // VFX TECHNIQUE 3: Spectral Separation (Phase 1)
    // Replace dual-layer with 3-band spectral composition
    // PERF: Uses statically-unrolled fbmTurb variants — no dynamic loop overhead.
    
    // Base layer: Low frequency, large soft shapes (always 1 octave — use fbmT1 directly)
    float noiseBase = fbmT1(warpedPos, 2.0, 0.5, u_turbulentFbm);
    
    // Mid layer: Mid frequency, standard detail (dispatcher picks correct unrolled variant)
    float noiseMid = fbmTurb(warpedPos * 2.5 + evolution * 0.15, u_octaves, spatialLacunarity, spatialGain, u_turbulentFbm);
    
    // High layer: High frequency, fine detail
    // Shifted position to avoid stacking artifacts — spatially-varied and turbulent
    float noiseHigh = fbmTurb(warpedPos * 5.0 + evolution * 0.3 + vec2(5.2, 1.3), u_octaves, spatialLacunarity, spatialGain, u_turbulentFbm);
    
    // Phase 4: Detail Masking
    // If enabled, high frequency noise only appears where base noise is strong
    // This creates "clumps" of detail rather than uniform static
    if (u_detailMasking > 0.01) {
        float mask = smoothstep(0.3, 0.8, noiseBase);
        noiseHigh *= mix(1.0, mask, u_detailMasking);
        noiseMid *= mix(1.0, smoothstep(0.2, 0.9, noiseBase), u_detailMasking * 0.5);
    }

    // Phase 3: Texture & Structure (Worley Layer)
    // Treated as an additive spectral layer "Structure"
    float worleyNoise = 0.0;
    float worleyWeight = 0.0;
    
    if (u_noiseType > 0.01) {
        // Calculate Worley noise
        // Use separate scaling for cells
        float cellScale = u_cellScale > 0.1 ? u_cellScale : 1.0;
        
        // Use user-defined jitter (0=grid, 1=organic)
        worleyNoise = worley(warpedPos * cellScale, u_cellJitter);
        
        // Invert for "cells" look (0=center, 1=edge) -> (1=center, 0=edge)
        worleyNoise = 1.0 - worleyNoise;
        
        // Use u_noiseType as the weight for this layer
        // This allows additive mixing with the other spectral bands
        worleyWeight = u_noiseType; // 0.0 or 1.0 (or variable if slider)
    }
    
    // ===== SPECTRAL BREATHING =====
    // Animate layer weights so different frequency bands take turns being prominent
    float breatheBase = u_baseWeight;
    float breatheMid = u_midWeight;
    float breatheHigh = u_highWeight;
    
    // BOUNDED: use tLoop instead of raw u_time
    if (u_spectralBreathing > 0.01 && u_patternMorph > 0.01) {
        float breatheTime = tLoop * 0.08;
        float intensity = u_spectralBreathing * u_patternMorph;
        
        // Each band breathes at different rates (creates shifting emphasis)
        breatheBase *= 1.0 + sin(breatheTime * 0.7) * 0.4 * intensity;
        breatheMid *= 1.0 + sin(breatheTime * 1.1 + 2.0) * 0.5 * intensity;
        breatheHigh *= 1.0 + sin(breatheTime * 1.7 + 4.0) * 0.6 * intensity;
    }
    // ===== END SPECTRAL BREATHING =====
    
    // ===== LAYER INTERACTION =====
    // Spectral composition with optional multiplicative blending
    float totalWeight = breatheBase + breatheMid + breatheHigh + worleyWeight + 0.001;
    float noise;
    
    if (u_layerInteraction > 0.01) {
        // Multiplicative: layers modulate each other (deeper contrast where they overlap)
        float additive = (noiseBase * breatheBase + noiseMid * breatheMid + noiseHigh * breatheHigh + worleyNoise * worleyWeight) / totalWeight;
        
        // Normalize layers to 0-1 range before multiplying
        float baseNorm = noiseBase * 0.5 + 0.5;
        float midNorm = noiseMid * 0.5 + 0.5;
        float highNorm = noiseHigh * 0.5 + 0.5;
        float multiplicative = baseNorm * midNorm * highNorm * 2.0 - 0.5; // Rescale result
        
        noise = mix(additive, multiplicative, u_layerInteraction);
    } else {
        // Standard additive weighted average
        noise = (noiseBase * breatheBase + noiseMid * breatheMid + noiseHigh * breatheHigh + worleyNoise * worleyWeight) / totalWeight;
    }
    // ===== END LAYER INTERACTION =====
    
    // Ridge noise option for sharper features
    if(u_ridgeAmount > 0.01) {
        float ridgeNoise = ridgedFbm(warpedPos, u_octaves, u_lacunarity, u_gainEffective);
        noise = mix(noise, ridgeNoise, u_ridgeAmount);
    }
    
    // Optional detail layer
    // BOUNDED: pass tLoop to detailNoise instead of raw u_time
    if(u_detailAmount > 0.01) {
        float detail = detailNoise(st, tLoop, u_detailScale, 1.0);
        noise += detail * u_detailAmount;
    }
    
    // Normalize noise to 0-1 range
    noise = noise * 0.5 + 0.5;

    // SAVE SMOOTH NOISE FOR PHYSICS (Liquid Metal)
    // This is calculating the "true" surface before any artistic posterization
    float physicsNoise = noise;

    // ARTISTIC CONTROL 3: Noise Quantization (Topographic map effect)
    if (u_quantizeStep > 0.01) {
        float steps = mix(50.0, 2.0, u_quantizeStep); 
        noise = floor(noise * steps) / steps;
    }
    
    // Apply contrast
    if (abs(u_contrast - 1.0) > 0.01) {
        noise = pow(noise, 1.0 / u_contrast);
    }
    
    // Apply softness (creates organic fog falloff)
    noise = smoothstep(0.0 - u_softness, 1.0 + u_softness, noise);
    
    // VFX TECHNIQUE 4: Dynamic color evolution - NOW MODULATABLE
    // Colors shift and flow with the fog, not locked to screen position
    float colorNoise = noise;
    
    // Add temporal color variation with user-controllable speed
    float colorEvolution = fract(evolution * u_colorEvolutionSpeed);
    colorNoise = mix(colorNoise, fract(colorNoise + colorEvolution * 0.2), 0.4);
    
    if (abs(u_colorSpreadEffective - 0.5) > 0.01) {
        colorNoise = pow(colorNoise, 1.0 / (1.0 + u_colorSpreadEffective));
    }
    
    // Palette shift modulation (precomputed on CPU)
    colorNoise = fract(colorNoise + u_colorShiftOffset);
    
    // Create smooth base color gradient (always smooth by default)
    // Use smoothstep for all transitions to ensure smooth blending
    vec3 baseGradient;
    float t1 = smoothstep(0.0, 0.5, colorNoise);
    float t2 = smoothstep(0.5, 1.0, colorNoise);
    
    // Three-color gradient with smooth transitions
    vec3 color1to2 = mix(u_color1, u_color2, t1);
    vec3 color2to3 = mix(u_color2, u_color3, t2);
    baseGradient = mix(color1to2, color2to3, smoothstep(0.3, 0.7, colorNoise));
    vec3 colorBlend = mix(
        mix(u_color1, u_color2, u_colorMix1Effective),
        u_color3,
        u_colorMix2Effective
    );
    baseGradient = mix(baseGradient, colorBlend, 0.5);
    
    // Apply colorSeparation (only becomes distinct at high values)
    vec3 separatedColors = baseGradient;
    if (u_colorSeparation > 0.01) {
        // Separation creates more distinct color regions, but with smooth edges
        // Only becomes harsh at very high values (0.85+)
        float sepPower = mix(1.0, 3.5, u_colorSeparation);
        
        // Create three smoothly separated zones
        float zone1 = smoothstep(0.0, 0.35, colorNoise) * (1.0 - smoothstep(0.2, 0.45, colorNoise));
        float zone2 = smoothstep(0.3, 0.5, colorNoise) * (1.0 - smoothstep(0.5, 0.7, colorNoise));
        float zone3 = smoothstep(0.55, 0.75, colorNoise);
        
        // Apply separation power to make zones more distinct at high values
        zone1 = pow(zone1, 1.0 / sepPower);
        zone2 = pow(zone2, 1.0 / sepPower);
        zone3 = pow(zone3, 1.0 / sepPower);
        
        // Normalize zones
        float totalWeight = zone1 + zone2 + zone3 + 0.001;
        zone1 /= totalWeight;
        zone2 /= totalWeight;
        zone3 /= totalWeight;
        
        // Mix colors based on zone weights
        separatedColors = u_color1 * zone1 + u_color2 * zone2 + u_color3 * zone3;
        
        // Blend between smooth gradient and separated based on separation amount
        separatedColors = mix(baseGradient, separatedColors, u_colorSeparation);
    }
    
    // Apply posterization/banding if enabled (with smoothing)
    vec3 finalColor = separatedColors;
    if (u_colorBands > 0.01) {
        // Apply banding to the noise value with smoothing
        float bands = mix(3.0, 12.0, u_colorBands); // 3-12 bands
        float bandedNoise = floor(colorNoise * bands) / bands;
        
        // Smooth the band edges based on how strong banding is
        float bandSmooth = mix(0.15, 0.02, u_colorBands); // More smoothing at low values
        float smoothBandNoise = mix(colorNoise, bandedNoise, smoothstep(0.0, bandSmooth, u_colorBands));
        
        // Recompute gradient with banded noise
        float bt1 = smoothstep(0.0, 0.5, smoothBandNoise);
        float bt2 = smoothstep(0.5, 1.0, smoothBandNoise);
        vec3 bandColor1to2 = mix(u_color1, u_color2, bt1);
        vec3 bandColor2to3 = mix(u_color2, u_color3, bt2);
        vec3 bandedGradient = mix(bandColor1to2, bandColor2to3, smoothstep(0.3, 0.7, smoothBandNoise));
        
        // Mix banded gradient with separated colors
        finalColor = mix(separatedColors, bandedGradient, u_colorBands);
    }
    
    // Blend with base color using smooth transition
    finalColor = mix(u_baseColor, finalColor, smoothstep(0.0, 0.3, colorNoise));
    
    // Apply brightness (only if different from 1.0)
    if (abs(u_brightness - 1.0) > 0.01) {
        finalColor *= u_brightness;
    }
    
    // Apply optimized film grain
    if(u_grainIntensity > 0.01) {
        float grainAspectRatio = mix(1.0, u_resolution.x / u_resolution.y, clamp(u_grainAspect, 0.0, 1.0));
        float grain = filmGrain(vUv, u_timeAbsolute, u_grainSize, u_grainSpeed, grainAspectRatio, u_grainComplexity, u_grainFrameHold);
        finalColor = applyGrain(finalColor, grain, u_grainIntensity, u_grainBlendMode);
    }
    
    // Apply exposure (only if different from 1.0)
    if (abs(u_exposure - 1.0) > 0.01) {
        finalColor *= u_exposure;
    }

    // Apply additional black level control (targets darker regions)
    if (u_blackLevel > 0.001) {
        float luma = dot(finalColor, vec3(0.2126, 0.7152, 0.0722));
        float darkFactor = pow(clamp(1.0 - luma, 0.0, 1.0), 1.4);
        float attenuation = clamp(1.0 - u_blackLevel * darkFactor, 0.0, 1.0);
        finalColor *= attenuation;
    }
    
    // Phase 6: Liquid-Chromatic Post-Processing
    // PERF: Compute surface normal ONCE and share across all Phase 6 effects.
    // Previously called computeNormal() (dFdx/dFdy + quad-sync) 3-4× per frame.
    // Since all effects use physicsNoise as input, one computation is identical.
    //
    // PERF FIX: Guard the normal computation — dFdx/dFdy require quad-synchronization in
    // the fragment pipeline (adjacent 2×2 pixel groups must stall to exchange values).
    // When all Phase 6 effects are zeroed this still ran for every pixel on every frame.
    // Default to a flat (0,0,1) normal when no Phase 6 effect is active.
    bool needsNormal = u_iridescenceStrength > 0.001 || u_fresnelStrength > 0.001
                    || u_specularStrength > 0.001 || u_flakeStrength > 0.001;
    vec3 sharedNormal = needsNormal ? computeNormal(physicsNoise) : vec3(0.0, 0.0, 1.0);

    // Step 1: Thin-Film Iridescence
    if (u_iridescenceStrength > 0.001) {
        finalColor += thinFilmIridescence(sharedNormal, u_iridescenceStrength);
    }
    
    // Step 2: Fresnel Edge Tint
    if (u_fresnelStrength > 0.001) {
        finalColor += fresnelTint(sharedNormal, u_color2, u_fresnelStrength);
    }
    
    // Step 3: Clear-Coat Specular
    if (u_specularStrength > 0.001) {
        vec3 lightDir = normalize(vec3(-0.5, 0.5, 1.0));
        float spec = specularHighlight(sharedNormal, lightDir, u_specularStrength);
        finalColor += vec3(spec);
    }
    
    // Step 4: Metallic Flakes
    if (u_flakeStrength > 0.001) {
        // Use evolvedSt (before warping) to prevent flakes from stretching
        float scale = u_flakeScale > 1.0 ? u_flakeScale : 80.0;
        vec3 flakes = metallicFlakes(evolvedSt / max(u_zoomEffective, 0.01), sharedNormal, scale, u_flakeStrength, tLoop, finalColor, physicsNoise);
        finalColor += flakes;
    }

    // Phase 4: Composition Masks (Vignette & Center)
    
    // Vignette
    if (u_vignetteStrength > 0.001) {
        float dist = distance(vUv, vec2(0.5));
        float vig = smoothstep(u_vignetteRadius, u_vignetteRadius + 0.5, dist);
        finalColor = mix(finalColor, vec3(0.0), vig * u_vignetteStrength);
    }
    
    // Center Mask (protects text legibility)
    if (u_centerMaskStrength > 0.001) {
        float dist = distance(vUv, vec2(0.5));
        // Inverse vignette: opaque in center, fades out
        float mask = 1.0 - smoothstep(0.0, u_centerMaskSize, dist);
        // Mix towards base color (clearing the fog) or just lower contrast
        // Here we mix towards base color to "clear" the fog
        finalColor = mix(finalColor, u_baseColor * u_brightness, mask * u_centerMaskStrength);
    }

    // Phase 5: Stylization

    // Edge Enhancement (Derivative/Sobel-like)
    if (u_edgeEnhance > 0.001) {
        // Calculate rate of change of the noise value
        // fwidth = abs(dFdx) + abs(dFdy) - standard way to get "steepness"
        float edge = fwidth(noise) * 5.0; // Multiplier to make it visible
        
        // Add edge brightness
        finalColor += vec3(edge * u_edgeEnhance);
    }
    
    // Post-Process Posterization (Graphic/Retro look)
    if (u_postPosterize > 0.1) {
        float steps = floor(u_postPosterize);
        finalColor = floor(finalColor * steps) / steps;
    }

    gl_FragColor = vec4(finalColor, 1.0);
}
