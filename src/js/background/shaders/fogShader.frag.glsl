// Fog shader with multi-color blending and noise
// Phase 2: Noise & Colors implementation

// ===== NOISE FUNCTIONS =====
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

// ULTRA-OPTIMIZED domain warping - uses sine instead of FBM
// Old version: 2 FBM calls = 4+ snoise calculations
// New version: 2 sine calls = ~2 GPU instructions!
vec2 domainWarp(vec2 p, float time, float warpAmount, int warpOctaves) {
    // Use simple sine waves instead of expensive FBM for warping
    // This gives organic movement without the massive computational cost
    float t1 = time * 0.05;
    float t2 = time * 0.03;
    
    vec2 q = vec2(
        sin(p.x * 0.5 + t1) + sin(p.y * 0.3 + t1 * 1.3),
        sin(p.x * 0.3 + t2) + sin(p.y * 0.5 + t2 * 0.7)
    ) * 0.5;
    
    return p + warpAmount * q;
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
float detailNoise(vec2 st, float time, float scale, float speed) {
    vec2 offset = vec2(time * speed * 0.05, time * speed * 0.03);
    return snoise((st + offset) * scale) * 0.5 + 0.5;
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
// ===== END NOISE FUNCTIONS =====

// Time and resolution
uniform float u_time;
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

// Artistic controls (NEW - Phase 4)
uniform float u_rippleFrequency;           // Frequency of sine ripple distortion
uniform float u_rippleStrength;            // Strength of sine ripple distortion
uniform float u_quantizeStep;              // Noise quantization steps (0 = smooth)
uniform float u_mirrorX;                   // 0 or 1 to enable X mirroring
uniform float u_mirrorY;                   // 0 or 1 to enable Y mirroring

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

varying vec2 vUv;

void main() {
    // Normalized coordinates accounting for aspect ratio
    vec2 uv = vUv;
    vec2 st = (uv - 0.5) * 2.0;
    st.x *= u_resolution.x / u_resolution.y;
    
    // Apply precomputed modulation
    st *= u_zoomEffective;
    
    // ARTISTIC CONTROL 1: Coordinate Mirroring (Kaleidoscope/Rorschach)
    if (u_mirrorX > 0.5) st.x = abs(st.x);
    if (u_mirrorY > 0.5) st.y = abs(st.y);
    
    // ARTISTIC CONTROL 2: Sine Ripple Distortion (Liquid/Glass effect)
    if (u_rippleStrength > 0.001) {
        float rippleSpeed = u_time * u_speed * 2.0;
        st.x += sin(st.y * u_rippleFrequency + rippleSpeed) * u_rippleStrength;
        st.y += cos(st.x * u_rippleFrequency + rippleSpeed * 0.8) * u_rippleStrength;
    }
    
    // VFX TECHNIQUE 1: Organic circular motion - NOW MODULATABLE
    // Creates natural swirling fog movement
    float timeFlow = u_time * u_speed;
    vec2 circularMotion = vec2(
        sin(timeFlow * 0.3) * 0.5,
        cos(timeFlow * 0.23) * 0.5
    ) * u_circularMotionIntensity; // User-controllable intensity
    vec2 movement = u_directionEffective * timeFlow + circularMotion;
    st += movement;
    
    // VFX TECHNIQUE 2: Temporal noise evolution - NOW MODULATABLE
    // Industry standard: add time offset to noise coordinates for evolution
    float evolution = timeFlow * u_evolutionSpeed; // User-controllable speed
    vec2 evolvedSt = st + vec2(
        sin(evolution * 0.7) * 0.3,
        cos(evolution * 0.5) * 0.3
    );
    
    // Apply domain warping for organic distortion
    vec2 warpedPos = evolvedSt * u_noiseScaleEffective;
    if(u_turbulenceEffective > 0.01) {
        warpedPos = domainWarp(warpedPos, u_time * u_speed, u_turbulenceEffective, u_warpOctaves);
    }
    
    // VFX TECHNIQUE 3: Dual-layer FBM - NOW MODULATABLE
    // Primary layer: slow evolution for large forms
    float noisePrimary = fbm(warpedPos, u_octaves, u_lacunarity, u_gainEffective);
    
    // Secondary layer: faster evolution for dynamic detail
    float noiseSecondary = fbm(warpedPos * 1.7 + evolution * 0.5, max(1, u_octaves - 1), u_lacunarity, u_gainEffective);
    
    // Blend layers with user-controllable amount
    float noise = mix(noisePrimary, noiseSecondary, u_layerBlend);
    
    // Ridge noise option for sharper features
    if(u_ridgeAmount > 0.01) {
        float ridgeNoise = ridgedFbm(warpedPos, u_octaves, u_lacunarity, u_gainEffective);
        noise = mix(noise, ridgeNoise, u_ridgeAmount);
    }
    
    // Optional detail layer
    if(u_detailAmount > 0.01) {
        float detail = detailNoise(st, u_time, u_detailScale, u_speed);
        noise += detail * u_detailAmount;
    }
    
    // Normalize noise to 0-1 range
    noise = noise * 0.5 + 0.5;

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
        float grain = filmGrain(vUv, u_time, u_grainSize, u_grainSpeed, grainAspectRatio, u_grainComplexity, u_grainFrameHold);
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
    
    gl_FragColor = vec4(finalColor, 1.0);
}
