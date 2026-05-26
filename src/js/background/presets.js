/**
 * Background Shader Presets
 * Phase 3: Parameter combinations for different visual styles
 */

export const backgroundPresets = {
  // Default fog appearance
  default: {
    name: "Default Fog",
    description: "Soft, billowing fog with gentle movement",
    parameters: {
      u_zoom: 0.1,
      u_noiseScale: 1.6,
      u_octaves: 2.0,
      u_lacunarity: 1.5,
      u_gain: 0.5,
      u_turbulence: 1.2,
      u_warpOctaves: 2,
      u_ridgeAmount: 0.0,
      u_detailScale: 1.0,
      u_detailAmount: 0.0,
      u_speed: 0.04,
      u_directionX: 0.5,
      u_directionY: 0.3,
      u_modulationSpeed: 0.28,
      u_modulationIntensity: 12.0,
      u_turbulenceModulation: 2.0,
      u_zoomModulation: 0.0,
      u_colorModulation: 0.0,
      u_rotationModulation: 0.01,
      u_noiseScaleModulation: 0.0,
      u_gainModulation: 0.0,
      u_colorSpreadModulation: 0.0,
      u_colorShiftModulation: 0.0,
      u_softness: 0.2,
      u_contrast: 0.75,
      u_brightness: 1.25,
      u_exposure: 1.0,
      u_blackLevel: 0.0,
      u_colorMix1: 0.5,
      u_colorMix2: 0.5,
      u_colorSpread: 0.66,
      u_colorSeparation: 0.3,
      u_colorBands: 0.0,
      u_grainIntensity: 0.26,
      u_grainSpeed: 20.0,
      u_grainSize: 2100.0,
      u_grainBlendMode: 2,
      u_grainAspect: 1.0,
      u_grainComplexity: 1.0,
      u_circularMotionIntensity: 0.3,
      u_evolutionSpeed: 0.15,
      u_layerBlend: 0.3,
      u_colorEvolutionSpeed: 0.1,
      u_rippleFrequency: 23.8,
      u_rippleStrength: 0.128,
      u_quantizeStep: 0.0,
      u_mirrorX: 0.0,
      u_mirrorY: 0.0,

      // Dynamic Pattern Morphing (off by default for stability)
      u_patternMorph: 0.0,
      u_lacunarityOscillation: 0.5,
      u_gainOscillation: 0.3,
      u_warpFeedback: 0.2,
      u_spectralBreathing: 0.4,

      // Base Pattern Complexity (off by default for backward compatibility)
      u_warpLayers: 0.0,
      u_noiseDistortion: 0.0,
      u_turbulentFbm: 0.0,
      u_layerInteraction: 0.0,

      // Animation Balance
      u_translationScale: 0.0,

      // Phase 6: Liquid-Chromatic
      u_iridescenceStrength: 0.3,
      u_iridescenceSmoothness: 5.0,
      u_iridescenceBlendMode: 1,
      u_fresnelStrength: 250.0,
      u_specularStrength: 7.5,
      u_flakeStrength: 0.0,
      u_flakeScale: 1600.0,

      // Phase 1: Spectral Separation overrides (for default preset usage)
      u_baseWeight: 0.3,
      u_midWeight: 1.0,
      u_highWeight: 0.68,

      // Composition
      u_vignetteStrength: 0.12,
      u_vignetteRadius: 0.12,
    },
  },

  // Smooth, dreamy fog
  dreamyFog: {
    name: "Dreamy Fog",
    description: "Very soft, ethereal fog with minimal detail",
    parameters: {
      u_zoom: 0.4,
      u_noiseScale: 1.5,
      u_octaves: 3,
      u_lacunarity: 2.0,
      u_gain: 0.6,
      u_turbulence: 0.3,
      u_warpOctaves: 2,
      u_ridgeAmount: 0.0,
      u_detailScale: 6.0,
      u_detailAmount: 0.1,
      u_speed: 0.15,
      u_directionX: 0.3,
      u_directionY: 0.4,
      u_modulationSpeed: 0.0,
      u_modulationIntensity: 1.0,
      u_turbulenceModulation: 0.0,
      u_zoomModulation: 0.0,
      u_colorModulation: 0.0,
      u_rotationModulation: 0.0,
      u_softness: 0.7,
      u_contrast: 0.8,
      u_brightness: 1.1,
      u_exposure: 1.0,
      u_blackLevel: 0.0,
      u_colorMix1: 0.6,
      u_colorMix2: 0.6,
      u_colorSpread: 0.7,
      u_colorSeparation: 0.6,
      u_colorBands: 0.0,
      u_grainIntensity: 0.05,
      u_grainSpeed: 0.8,
      u_grainSize: 120.0,
      u_grainBlendMode: 0,
      u_grainAspect: 0.0,
      u_grainComplexity: 0.6,
      u_circularMotionIntensity: 0.2,
      u_evolutionSpeed: 0.1,
      u_layerBlend: 0.2,
      u_colorEvolutionSpeed: 0.05,
    },
  },

  // Dense, heavy fog
  denseFog: {
    name: "Dense Fog",
    description: "Thick, heavy fog with more defined shapes",
    parameters: {
      u_zoom: 0.6,
      u_noiseScale: 2.5,
      u_octaves: 3,
      u_lacunarity: 2.1,
      u_gain: 0.4,
      u_turbulence: 0.6,
      u_warpOctaves: 2,
      u_ridgeAmount: 0.15,
      u_detailScale: 10.0,
      u_detailAmount: 0.2,
      u_speed: 0.18,
      u_directionX: 0.4,
      u_directionY: 0.2,
      u_modulationSpeed: 0.0,
      u_modulationIntensity: 1.0,
      u_turbulenceModulation: 0.0,
      u_zoomModulation: 0.0,
      u_colorModulation: 0.0,
      u_rotationModulation: 0.0,
      u_softness: 0.35,
      u_contrast: 1.2,
      u_brightness: 0.95,
      u_exposure: 1.0,
      u_blackLevel: 0.0,
      u_colorMix1: 0.4,
      u_colorMix2: 0.4,
      u_colorSpread: 0.3,
      u_colorSeparation: 0.8,
      u_colorBands: 0.0,
      u_grainIntensity: 0.12,
      u_grainSpeed: 1.2,
      u_grainSize: 180.0,
      u_grainBlendMode: 1,
      u_grainAspect: 0.0,
      u_grainComplexity: 0.6,
    },
  },

  // Wispy, fast-moving clouds
  wispyClouds: {
    name: "Wispy Clouds",
    description: "Fast, streaky clouds with sharp edges",
    parameters: {
      u_zoom: 0.7,
      u_noiseScale: 3.0,
      u_octaves: 3,
      u_lacunarity: 2.3,
      u_gain: 0.45,
      u_turbulence: 0.4,
      u_warpOctaves: 2,
      u_ridgeAmount: 0.4,
      u_detailScale: 12.0,
      u_detailAmount: 0.25,
      u_speed: 0.5,
      u_directionX: 0.8,
      u_directionY: 0.2,
      u_modulationSpeed: 0.0,
      u_modulationIntensity: 1.0,
      u_turbulenceModulation: 0.0,
      u_zoomModulation: 0.0,
      u_colorModulation: 0.0,
      u_rotationModulation: 0.0,
      u_softness: 0.25,
      u_contrast: 1.3,
      u_brightness: 1.0,
      u_exposure: 1.0,
      u_blackLevel: 0.0,
      u_colorMix1: 0.5,
      u_colorMix2: 0.5,
      u_colorSpread: 0.4,
      u_colorSeparation: 0.65,
      u_colorBands: 0.0,
      u_grainIntensity: 0.15,
      u_grainSpeed: 2.0,
      u_grainSize: 200.0,
      u_grainBlendMode: 0,
      u_grainAspect: 0.0,
      u_grainComplexity: 0.6,
    },
  },

  // Liquid-like, flowing appearance
  liquidFlow: {
    name: "Liquid Flow",
    description: "Liquid-like appearance with strong distortion",
    parameters: {
      u_zoom: 0.8,
      u_noiseScale: 2.2,
      u_octaves: 3,
      u_lacunarity: 2.2,
      u_gain: 0.5,
      u_turbulence: 1.2,
      u_warpOctaves: 2,
      u_ridgeAmount: 0.0,
      u_detailScale: 9.0,
      u_detailAmount: 0.2,
      u_speed: 0.35,
      u_directionX: 0.6,
      u_directionY: 0.5,
      u_modulationSpeed: 0.0,
      u_modulationIntensity: 1.0,
      u_turbulenceModulation: 0.0,
      u_zoomModulation: 0.0,
      u_colorModulation: 0.0,
      u_rotationModulation: 0.0,
      u_softness: 0.4,
      u_contrast: 1.1,
      u_brightness: 1.0,
      u_exposure: 1.0,
      u_blackLevel: 0.0,
      u_colorMix1: 0.5,
      u_colorMix2: 0.5,
      u_colorSpread: 0.6,
      u_colorSeparation: 0.5,
      u_colorBands: 0.0,
      u_grainIntensity: 0.06,
      u_grainSpeed: 0.8,
      u_grainSize: 140.0,
      u_grainBlendMode: 0,
      u_grainAspect: 0.0,
      u_grainComplexity: 0.6,
    },
  },

  // Turbulent, chaotic energy
  turbulent: {
    name: "Turbulent Energy",
    description: "Chaotic, energetic flow with high distortion",
    parameters: {
      u_zoom: 1.0,
      u_noiseScale: 2.8,
      u_octaves: 3,
      u_lacunarity: 2.4,
      u_gain: 0.45,
      u_turbulence: 1.5,
      u_warpOctaves: 2,
      u_ridgeAmount: 0.2,
      u_detailScale: 15.0,
      u_detailAmount: 0.3,
      u_speed: 0.6,
      u_directionX: 0.7,
      u_directionY: 0.6,
      u_modulationSpeed: 0.0,
      u_modulationIntensity: 1.0,
      u_turbulenceModulation: 0.0,
      u_zoomModulation: 0.0,
      u_colorModulation: 0.0,
      u_rotationModulation: 0.0,
      u_softness: 0.3,
      u_contrast: 1.4,
      u_brightness: 0.98,
      u_exposure: 1.0,
      u_blackLevel: 0.0,
      u_colorMix1: 0.4,
      u_colorMix2: 0.6,
      u_colorSpread: 0.5,
      u_colorSeparation: 0.75,
      u_colorBands: 0.0,
      u_grainIntensity: 0.18,
      u_grainSpeed: 3.0,
      u_grainSize: 220.0,
      u_grainBlendMode: 2,
      u_grainAspect: 0.0,
      u_grainComplexity: 0.6,
      u_circularMotionIntensity: 0.7,
      u_evolutionSpeed: 0.4,
      u_layerBlend: 0.7,
      u_colorEvolutionSpeed: 0.3,
    },
  },

  // Calm, smooth waves
  calmWaves: {
    name: "Calm Waves",
    description: "Gentle, wave-like undulations",
    parameters: {
      u_zoom: 0.3,
      u_noiseScale: 1.8,
      u_octaves: 3,
      u_lacunarity: 2.0,
      u_gain: 0.55,
      u_turbulence: 0.7,
      u_warpOctaves: 3,
      u_ridgeAmount: 0.0,
      u_detailScale: 7.0,
      u_detailAmount: 0.12,
      u_speed: 0.2,
      u_directionX: 0.2,
      u_directionY: 0.5,
      u_modulationSpeed: 0.0,
      u_modulationIntensity: 1.0,
      u_turbulenceModulation: 0.0,
      u_zoomModulation: 0.0,
      u_colorModulation: 0.0,
      u_rotationModulation: 0.0,
      u_softness: 0.6,
      u_contrast: 0.9,
      u_brightness: 1.05,
      u_exposure: 1.0,
      u_blackLevel: 0.0,
      u_colorMix1: 0.6,
      u_colorMix2: 0.5,
      u_colorSpread: 0.65,
      u_colorSeparation: 0.5,
      u_colorBands: 0.0,
      u_grainIntensity: 0.04,
      u_grainSpeed: 0.6,
      u_grainSize: 100.0,
      u_grainBlendMode: 3,
      u_grainAspect: 0.0,
      u_grainComplexity: 0.6,
      u_circularMotionIntensity: 0.2,
      u_evolutionSpeed: 0.1,
      u_layerBlend: 0.2,
      u_colorEvolutionSpeed: 0.05,
    },
  },

  // Sharp, defined ridges
  mountainRidges: {
    name: "Mountain Ridges",
    description: "Sharp, ridge-like features",
    parameters: {
      u_zoom: 0.6,
      u_noiseScale: 2.5,
      u_octaves: 3,
      u_lacunarity: 2.2,
      u_gain: 0.4,
      u_turbulence: 0.5,
      u_warpOctaves: 2,
      u_ridgeAmount: 0.8,
      u_detailScale: 10.0,
      u_detailAmount: 0.18,
      u_speed: 0.15,
      u_directionX: 0.3,
      u_directionY: 0.2,
      u_modulationSpeed: 0.0,
      u_modulationIntensity: 1.0,
      u_turbulenceModulation: 0.0,
      u_zoomModulation: 0.0,
      u_colorModulation: 0.0,
      u_rotationModulation: 0.0,
      u_softness: 0.2,
      u_contrast: 1.5,
      u_brightness: 0.95,
      u_exposure: 1.0,
      u_blackLevel: 0.0,
      u_colorMix1: 0.45,
      u_colorMix2: 0.45,
      u_colorSpread: 0.35,
      u_colorSeparation: 0.8,
      u_colorBands: 0.0,
      u_grainIntensity: 0.1,
      u_grainSpeed: 1.0,
      u_grainSize: 160.0,
      u_grainBlendMode: 1,
      u_grainAspect: 0.0,
      u_grainComplexity: 0.6,
      u_circularMotionIntensity: 0.3,
      u_evolutionSpeed: 0.12,
      u_layerBlend: 0.25,
      u_colorEvolutionSpeed: 0.08,
    },
  },

  // About page custom tuning
  about: {
    name: "About Page",
    description: "Custom About Me background",
    parameters: {
      u_zoom: 0.1,
      u_noiseScale: 0.5,
      u_octaves: 8,
      u_lacunarity: 1.0,
      u_gain: 0.4,
      u_turbulence: 0.1,
      u_warpOctaves: 3,
      u_ridgeAmount: 0.0,
      u_detailScale: 1.0,
      u_detailAmount: 0.0,
      u_speed: 0.003,
      u_directionX: 0.2,
      u_directionY: -0.7,
      u_modulationSpeed: 0.4,
      u_modulationIntensity: 12.0,
      u_turbulenceModulation: 0.0,
      u_zoomModulation: 0.0,
      u_colorModulation: 0.0,
      u_rotationModulation: 0.01,
      u_noiseScaleModulation: 0.0,
      u_gainModulation: 0.0,
      u_colorSpreadModulation: 0.0,
      u_colorShiftModulation: 0.0,
      u_softness: 0.0,
      u_contrast: 0.5,
      u_brightness: 1.5,
      u_exposure: 1.0,
      u_blackLevel: 0.0,
      u_colorMix1: 0.64,
      u_colorMix2: 0.5,
      u_colorSpread: 0.6,
      u_colorSeparation: 0.4,
      u_colorBands: 0.0,
      u_grainIntensity: 0.56,
      u_grainSpeed: 30.0,
      u_grainSize: 2100.0,
      u_grainBlendMode: 2,
      u_grainAspect: 1.0,
      u_grainComplexity: 1.0,
      u_circularMotionIntensity: 0.3,
      u_evolutionSpeed: 0.15,
      u_layerBlend: 0.3,
      u_colorEvolutionSpeed: 0.1,

      // Phase 1: Spectral Separation
      u_baseWeight: 0.65,
      u_midWeight: 0.0,
      u_highWeight: 0.3,

      // Phase 2: Advanced Distortion & Flow
      u_warpScale: 1.2,
      u_flowType: 1.0,

      // Phase 3: Texture & Structure (Worley)
      u_noiseType: 0.0,
      u_cellScale: 7.0,
      u_cellJitter: 0.0,

      // Phase 4: Composition & Masking
      u_vignetteStrength: 0.12,
      u_vignetteRadius: 0.12,
      u_centerMaskStrength: 0.0,
      u_centerMaskSize: 0.3,
      u_detailMasking: 0.0,

      // Phase 5: Post-Processing & Stylization
      u_edgeEnhance: 0.0,
      u_postPosterize: 0.0,

      // Phase 6: Liquid-Chromatic Post-Processing
      u_iridescenceStrength: 0.0,
      u_iridescenceSmoothness: 1.0,
      u_fresnelStrength: 2.0,
      u_specularStrength: 0.0,
      u_flakeStrength: 0.0,
      u_flakeScale: 200.0,

      u_rippleFrequency: 2.9,
      u_rippleStrength: 0.3,
      u_quantizeStep: 0.0,
      u_mirrorX: 0.0,
      u_mirrorY: 0.0,

      // Base Complexity
      u_warpLayers: 1.0,
      u_noiseDistortion: 0.32,
      u_turbulentFbm: 0.4,
      u_layerInteraction: 0.24,

      // Pattern Morphing
      u_patternMorph: 1.0,
      u_lacunarityOscillation: 0.72,
      u_gainOscillation: 0.0,
      u_warpFeedback: 0.0,
      u_spectralBreathing: 1.0,



      // Animation Balance
      u_translationScale: 1.0,
    },
  },
};

/**
 * Get a preset by name
 * @param {string} presetName - Name of the preset
 * @returns {Object|null} Preset parameters or null if not found
 */
export function getPreset(presetName) {
  return backgroundPresets[presetName] || null;
}

/**
 * Get all preset names
 * @returns {Array<string>} Array of preset names
 */
export function getPresetNames() {
  return Object.keys(backgroundPresets);
}

/**
 * Get preset metadata (without parameters)
 * @returns {Array<Object>} Array of preset metadata
 */
export function getPresetMetadata() {
  return Object.entries(backgroundPresets).map(([key, preset]) => ({
    key,
    name: preset.name,
    description: preset.description,
  }));
}

/**
 * Parameter Definitions for DevGUI
 * Defines the structure, ranges, and organization of shader parameters
 */
export const parameterDefinitions = {
  // Colors
  u_color1: { folder: '🎨 Colors', label: 'Highlight', type: 'color' },
  u_color2: { folder: '🎨 Colors', label: 'Midtone', type: 'color' },
  u_color3: { folder: '🎨 Colors', label: 'Lowlight', type: 'color' },
  u_baseColor: { folder: '🎨 Colors', label: 'Base Color', type: 'color' },

  // Noise Parameters
  u_zoom: { folder: '🌫️ Noise Parameters', label: 'Zoom', min: 0.1, max: 5.0, step: 0.1 },
  u_noiseScale: { folder: '🌫️ Noise Parameters', label: 'Noise Scale', min: 0.5, max: 10.0, step: 0.1 },
  u_octaves: { folder: '🌫️ Noise Parameters', label: 'Octaves', min: 1, max: 8, step: 1 },
  u_lacunarity: { folder: '🌫️ Noise Parameters', label: 'Lacunarity', min: 1.0, max: 12.0, step: 0.1 },
  u_gain: { folder: '🌫️ Noise Parameters', label: 'Gain', min: 0.1, max: 1.0, step: 0.05 },
  u_turbulence: { folder: '🌫️ Noise Parameters', label: 'Turbulence', min: 0.0, max: 2.0, step: 0.05 },
  u_warpOctaves: { folder: '🌫️ Noise Parameters', label: 'Warp Octaves', min: 1, max: 5, step: 1 },
  u_ridgeAmount: { folder: '🌫️ Noise Parameters', label: 'Ridge Amount', min: 0.0, max: 1.0, step: 0.05 },
  u_detailScale: { folder: '🌫️ Noise Parameters', label: 'Detail Scale', min: 1.0, max: 20.0, step: 0.5 },
  u_detailAmount: { folder: '🌫️ Noise Parameters', label: 'Detail Amount', min: 0.0, max: 1.0, step: 0.05 },

  // Spectral Separation
  u_baseWeight: { folder: '🌈 Spectral Separation', label: 'Base (Low Freq)', min: 0.0, max: 2.0, step: 0.05 },
  u_midWeight: { folder: '🌈 Spectral Separation', label: 'Mid (Std Detail)', min: 0.0, max: 2.0, step: 0.05 },
  u_highWeight: { folder: '🌈 Spectral Separation', label: 'High (Fine Detail)', min: 0.0, max: 2.0, step: 0.05 },

  // Flow & Warp
  u_flowType: { folder: '🌀 Flow & Warp', label: 'Curl Noise (Fluid)', type: 'boolean' },
  u_warpScale: { folder: '🌀 Flow & Warp', label: 'Warp Scale', min: 0.1, max: 5.0, step: 0.1 },
  u_turbulence_flow: { folder: '🌀 Flow & Warp', label: 'Warp Strength', uniform: 'u_turbulence', min: 0.0, max: 2.0, step: 0.05 },

  // Texture & Structure
  u_noiseType: { folder: '🕸️ Texture & Structure', label: 'Cellular Noise (Worley)', type: 'boolean' },
  u_cellScale: { folder: '🕸️ Texture & Structure', label: 'Cell Scale', min: 0.5, max: 10.0, step: 0.1 },
  u_cellJitter: { folder: '🕸️ Texture & Structure', label: 'Cell Randomness', min: 0.0, max: 2.0, step: 0.05 },

  // Composition & Masking
  u_vignetteStrength: { folder: '🖼️ Composition & Masking', label: 'Vignette Darken', min: 0.0, max: 1.0, step: 0.01 },
  u_vignetteRadius: { folder: '🖼️ Composition & Masking', label: 'Vignette Radius', min: 0.0, max: 1.0, step: 0.01 },
  u_centerMaskStrength: { folder: '🖼️ Composition & Masking', label: 'Center Clarity', min: 0.0, max: 1.0, step: 0.01 },
  u_centerMaskSize: { folder: '🖼️ Composition & Masking', label: 'Center Size', min: 0.0, max: 1.0, step: 0.01 },
  u_detailMasking: { folder: '🖼️ Composition & Masking', label: 'Detail Clumping', min: 0.0, max: 1.0, step: 0.01 },

  // Stylization & VFX
  u_edgeEnhance: { folder: '✨ Stylization & VFX', label: 'Edge Glow', min: 0.0, max: 10.0, step: 0.1 },
  u_postPosterize: { folder: '✨ Stylization & VFX', label: 'Posterize Steps', min: 0.0, max: 32.0, step: 1.0 },

  // Liquid Metal & Oil
  u_iridescenceStrength: { folder: '💧 Liquid Metal & Oil', label: 'Oil Slick (Iridescence)', min: 0.0, max: 1.0, step: 0.01 },
  u_iridescenceSmoothness: { folder: '💧 Liquid Metal & Oil', label: 'Oil Slick Smoothness', min: 0.0, max: 5.0, step: 0.01 },
  u_iridescenceBlendMode: {
    folder: '💧 Liquid Metal & Oil',
    label: 'Oil Slick Blend Mode',
    type: 'select',
    options: { 'Add': 0, 'Screen': 1, 'Overlay': 2, 'Multiply': 3, 'Soft Light': 4 }
  },
  u_fresnelStrength: { folder: '💧 Liquid Metal & Oil', label: 'Metallic Edge (Fresnel)', min: 0.0, max: 250.0, step: 0.1 },
  u_specularStrength: { folder: '💧 Liquid Metal & Oil', label: 'Glossy Clear-Coat (Specular)', min: 0.0, max: 2.0, step: 0.001 },
  u_flakeStrength: { folder: '💧 Liquid Metal & Oil', label: 'Glitter (M. Flakes)', min: 0.0, max: 5.0, step: 0.01 },
  u_flakeScale: { folder: '💧 Liquid Metal & Oil', label: 'Glitter Size', min: 100.0, max: 10000.0, step: 10.0 },

  // Animation
  u_speed: { folder: '⚡ Animation', label: 'Speed', min: 0.0001, max: 0.25, step: 0.0001 },
  u_directionX: { folder: '⚡ Animation', label: 'Direction X', min: -1.0, max: 1.0, step: 0.05 },
  u_directionY: { folder: '⚡ Animation', label: 'Direction Y', min: -1.0, max: 1.0, step: 0.05 },
  u_translationScale: { folder: '⚡ Animation', label: 'Translation Scale', min: 0.0, max: 1.0, step: 0.01 },

  // Organic Modulation
  u_modulationSpeed: { folder: '🌊 Organic Modulation', label: 'Global Speed', min: 0.0001, max: 1.0, step: 0.0001 },
  u_modulationIntensity: { folder: '🌊 Organic Modulation', label: 'Intensity', min: 0.0, max: 50.0, step: 0.01 },
  u_turbulenceModulation: { folder: '🌊 Organic Modulation', label: 'Turbulence Breathing', min: 0.0, max: 10.0, step: 0.01 },
  u_zoomModulation: { folder: '🌊 Organic Modulation', label: 'Zoom Pulsing', min: 0.0, max: 10.0, step: 0.01 },
  u_colorModulation: { folder: '🌊 Organic Modulation', label: 'Color Shifting', min: 0.0, max: 10.0, step: 0.01 },
  u_rotationModulation: { folder: '🌊 Organic Modulation', label: 'Flow Rotation', min: 0.0, max: 10.0, step: 0.01 },
  u_noiseScaleModulation: { folder: '🌊 Organic Modulation', label: 'Noise Scale Pulse', min: 0.0, max: 10.0, step: 0.01 },
  u_gainModulation: { folder: '🌊 Organic Modulation', label: 'Gain Modulation', min: 0.0, max: 10.0, step: 0.01 },
  u_colorSpreadModulation: { folder: '🌊 Organic Modulation', label: 'Color Spread Flux', min: 0.0, max: 10.0, step: 0.01 },
  u_colorShiftModulation: { folder: '🌊 Organic Modulation', label: 'Palette Shift', min: 0.0, max: 10.0, step: 0.01 },

  // Artistic Controls
  u_rippleStrength: { folder: '🎭 Artistic Controls', label: 'Ripple Strength', min: 0.0, max: 0.5, step: 0.001 },
  u_rippleFrequency: { folder: '🎭 Artistic Controls', label: 'Ripple Freq', min: 0.0, max: 50.0, step: 0.1 },
  u_quantizeStep: { folder: '🎭 Artistic Controls', label: 'Topography Strength', min: 0.0, max: 1.0, step: 0.01 },
  u_mirrorX: { folder: '🎭 Artistic Controls', label: 'Mirror X', type: 'boolean' },
  u_mirrorY: { folder: '🎭 Artistic Controls', label: 'Mirror Y', type: 'boolean' },

  // Base Complexity
  u_warpLayers: { folder: '🧱 Base Complexity', label: 'Warp Layers', min: 0.0, max: 3.0, step: 1.0 },
  u_noiseDistortion: { folder: '🧱 Base Complexity', label: 'Noise Distortion', min: 0.0, max: 1.0, step: 0.01 },
  u_turbulentFbm: { folder: '🧱 Base Complexity', label: 'Turbulent FBM', min: 0.0, max: 1.0, step: 0.01 },
  u_layerInteraction: { folder: '🧱 Base Complexity', label: 'Layer Interaction', min: 0.0, max: 1.0, step: 0.01 },

  // Pattern Morphing
  u_patternMorph: { folder: '🌀 Pattern Morphing', label: 'Master Intensity', min: 0.0, max: 1.0, step: 0.01 },
  u_lacunarityOscillation: { folder: '🌀 Pattern Morphing', label: 'Lacunarity Osc', min: 0.0, max: 1.0, step: 0.01 },
  u_gainOscillation: { folder: '🌀 Pattern Morphing', label: 'Gain Osc', min: 0.0, max: 1.0, step: 0.01 },
  u_warpFeedback: { folder: '🌀 Pattern Morphing', label: 'Warp Feedback', min: 0.0, max: 1.0, step: 0.01 },
  u_spectralBreathing: { folder: '🌀 Pattern Morphing', label: 'Spectral Breathing', min: 0.0, max: 1.0, step: 0.01 },

  // Film Grain
  u_grainIntensity: { folder: '🎬 Film Grain', label: 'Intensity', min: 0.0, max: 1.0, step: 0.01 },
  u_grainSpeed: { folder: '🎬 Film Grain', label: 'Speed', min: 0.0, max: 100.0, step: 0.01 },
  u_grainSize: { folder: '🎬 Film Grain', label: 'Size', min: 10.0, max: 2500.0, step: 1.0 },
  u_grainBlendMode: {
    folder: '🎬 Film Grain',
    label: 'Blend Mode',
    type: 'select',
    options: { 'Overlay': 0, 'Multiply': 1, 'Add': 2, 'Screen': 3 }
  },
  u_grainAspect: { folder: '🎬 Film Grain', label: 'Square Amount', min: 0.0, max: 1.0, step: 0.01 },
  u_grainComplexity: { folder: '🎬 Film Grain', label: 'Complexity', min: 0.0, max: 1.0, step: 0.01 },

  // Visual Quality
  u_softness: { folder: '✨ Visual Quality', label: 'Softness', min: 0.0, max: 1.0, step: 0.01 },
  u_contrast: { folder: '✨ Visual Quality', label: 'Contrast', min: 0.5, max: 2.0, step: 0.05 },
  u_brightness: { folder: '✨ Visual Quality', label: 'Brightness', min: 0.5, max: 1.5, step: 0.05 },
  u_exposure: { folder: '✨ Visual Quality', label: 'Exposure', min: 0.5, max: 2.0, step: 0.05 },
  u_blackLevel: { folder: '✨ Visual Quality', label: 'Black Level', min: 0.0, max: 1.0, step: 0.01 },

  // Color Mixing
  u_colorMix1: { folder: '🎨 Color Mixing', label: 'Mix 1 (Hi/Mid)', min: 0.0, max: 1.0, step: 0.01 },
  u_colorMix2: { folder: '🎨 Color Mixing', label: 'Mix 2 (Result/Low)', min: 0.0, max: 1.0, step: 0.01 },
  u_colorSpread: { folder: '🎨 Color Mixing', label: 'Color Spread', min: 0.0, max: 1.0, step: 0.01 },
  u_colorSeparation: { folder: '🎨 Color Mixing', label: 'Color Separation', min: 0.0, max: 1.0, step: 0.01 },
  u_colorBands: { folder: '🎨 Color Mixing', label: 'Color Bands', min: 0.0, max: 1.0, step: 0.01 },
};



