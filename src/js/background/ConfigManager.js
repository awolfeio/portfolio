import { backgroundPresets } from './presets.js';

/**
 * ConfigManager - Manages page-specific background configurations
 * Handles automatic transitions when navigating between pages
 */
export class ConfigManager {
  constructor(shaderController) {
    this.shaderController = shaderController;
    this.currentPage = null;
    this.pageConfigs = this.initializePageConfigs();
  }

  /**
   * Initialize page-specific configurations
   * Maps page namespaces to preset names or custom configs
   */
  initializePageConfigs() {
    const rendererBaseParams = () => ({
      type: 'custom',
      description: 'Renderer base defaults',
      parameters: {
        u_zoom: 0.1,
        u_noiseScale: 1.6,
        u_octaves: 2,
        u_lacunarity: 2.5,
        u_gain: 0.35,
        u_turbulence: 2.0,
        u_warpOctaves: 2,
        u_ridgeAmount: 0.0,
        u_detailScale: 1.0,
        u_detailAmount: 0.0,
        u_speed: 0.04,
        u_directionX: 0.5,
        u_directionY: 0.3,
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
        u_softness: 0.2,
        u_contrast: 0.75,
        u_brightness: 1.5,
        u_exposure: 1.0,
        u_blackLevel: 0.0,
        u_colorMix1: 0.5,
        u_colorMix2: 0.5,
        u_colorSpread: 0.66,
        u_colorSeparation: 0.3,
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
        u_baseWeight: 1.2,
        u_midWeight: 0.7,
        u_highWeight: 0.25,
        
        // Phase 2: Advanced Distortion & Flow
        u_warpScale: 1.0,
        u_flowType: 0.0,
        
        // Phase 3: Texture & Structure (Worley)
        u_noiseType: 0.0,
        u_cellScale: 2.0,
        u_cellJitter: 1.0,

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
        u_iridescenceStrength: 0.14,
        u_fresnelStrength: 250.0,
        u_specularStrength: 0.44,
        u_flakeStrength: 0.0,
        u_flakeScale: 1500.0,

        u_rippleFrequency: 23.8,
        u_mirrorX: 0.0,
        u_mirrorY: 0.0,

        // Pattern Morphing
        u_patternMorph: 0.0,
        u_lacunarityOscillation: 0.5,
        u_gainOscillation: 0.3,
        u_warpFeedback: 0.2,
        u_spectralBreathing: 0.4,

        // Base Pattern Complexity
        u_warpLayers: 0.0,
        u_noiseDistortion: 0.0,
        u_turbulentFbm: 0.0,
        u_layerInteraction: 0.0,
      },
    });

    return {
      // Homepage uses renderer base defaults
      'index': rendererBaseParams(),

      // About page uses about preset (faster, more zoomed in)
      'about': {
        type: 'preset',
        preset: 'about',
        description: 'About page - Faster, zoomed fog',
      },

      // Works/Projects page - align with renderer base defaults
      'works': rendererBaseParams(),

      // Contact page - align with renderer base defaults
      'contact': rendererBaseParams(),

      // Labs page - align with initial load defaults
      'labs': rendererBaseParams(),

      // Resume page - align with initial load defaults
      'resume': rendererBaseParams(),

      // Individual project pages - align with initial load defaults
      'scholastic': rendererBaseParams(),
      'jpplus': rendererBaseParams(),
      'rowmark': rendererBaseParams(),
      'aave': rendererBaseParams(),
      'ipi': rendererBaseParams(),
      'wabash': rendererBaseParams(),
      'bright-future': rendererBaseParams(),
      'healpool': rendererBaseParams(),
      'rentaru': rendererBaseParams(),

      // Fallback for unknown pages
      'default': rendererBaseParams(),
    };
  }

  /**
   * Get configuration for a specific page
   */
  getConfig(namespace) {
    const config = this.pageConfigs[namespace] || this.pageConfigs['default'];
    const defaultParams = backgroundPresets['default'].parameters;
    
    // Extract film grain defaults to ensure they persist across all pages
    const filmGrainDefaults = {
      u_grainIntensity: defaultParams.u_grainIntensity,
      u_grainSpeed: defaultParams.u_grainSpeed,
      u_grainSize: defaultParams.u_grainSize,
      u_grainBlendMode: defaultParams.u_grainBlendMode,
      u_grainAspect: defaultParams.u_grainAspect,
      u_grainComplexity: defaultParams.u_grainComplexity,
    };
    
    if (config.type === 'preset') {
      // Get preset parameters
      const preset = backgroundPresets[config.preset];
      if (!preset) {
        console.warn(`Preset "${config.preset}" not found, using default`);
        return { ...defaultParams };
      }
      // Merge defaults with preset, then ensure film grain defaults persist
      const merged = { ...defaultParams, ...preset.parameters };
      return { ...merged, ...filmGrainDefaults };
    } else if (config.type === 'custom') {
      // Use custom parameters directly, but ensure film grain defaults persist
      const merged = { ...defaultParams, ...config.parameters };
      return { ...merged, ...filmGrainDefaults };
    }
    
    // Fallback to default preset
    return { ...defaultParams };
  }

  /**
   * Transition to a page configuration
   */
  transitionToPage(namespace, duration = 7.0) {
    console.log(`ConfigManager: Transitioning to "${namespace}" page`);
    
    // Get the configuration for this page
    const config = this.getConfig(namespace);
    
    // Define color palettes
    const palettes = {
      default: {
        u_color1: 0x80fff0,
        u_color2: 0x4e2bda,
        u_color3: 0x20cf95,
        u_baseColor: 0x2e9aff
      },
      about: {
        u_color1: 0xe4751b,
        u_color2: 0x8218c9,
        u_color3: 0x252ab6,
        u_baseColor: 0xffd500
      }
    };

    // Select palette
    const palette = namespace === 'about' ? palettes.about : palettes.default;
    
    // Prepare uniforms object for transition dynamically from config
    // Start with colors from palette
    const uniforms = {
      u_color1: palette.u_color1,
      u_color2: palette.u_color2,
      u_color3: palette.u_color3,
      u_baseColor: palette.u_baseColor,
    };
    
    // Add all parameters from config (these come from presets or custom configs)
    // This ensures ALL parameters defined in presets are applied
    Object.keys(config).forEach(key => {
      // Skip non-uniform keys and color keys (already handled above)
      if (key.startsWith('u_') && !['u_color1', 'u_color2', 'u_color3', 'u_baseColor'].includes(key)) {
        uniforms[key] = config[key];
      }
    });
    
    // Use ShaderController's transitionTo for smooth GSAP transitions
    this.shaderController.transitionTo(uniforms, duration);
    
    // Update current page
    this.currentPage = namespace;
    
    console.log(`ConfigManager: Applied "${namespace}" configuration with Mid Tone color ${namespace === 'about' ? '#8218c9' : '#4e2bda'}`);
  }

  /**
   * Check if page should transition
   * Returns true if the new page has different config than current
   */
  shouldTransition(newNamespace) {
    if (!this.currentPage) return true;
    
    const currentConfig = this.pageConfigs[this.currentPage] || this.pageConfigs['default'];
    const newConfig = this.pageConfigs[newNamespace] || this.pageConfigs['default'];
    
    // Compare preset names for preset-based configs
    if (currentConfig.type === 'preset' && newConfig.type === 'preset') {
      return currentConfig.preset !== newConfig.preset;
    }
    
    // If one is preset and one is custom, they're different
    if (currentConfig.type !== newConfig.type) {
      return true;
    }
    
    // Both are custom configs - compare their actual parameters
    // If both configs point to the same function (rendererBaseParams), they're identical
    if (currentConfig.type === 'custom' && newConfig.type === 'custom') {
      // Get the actual parameter objects
      const currentParams = this.getConfig(this.currentPage);
      const newParams = this.getConfig(newNamespace);
      
      // Compare key parameters that define the "background mode"
      const keyParams = [
        'u_zoom', 'u_speed', 'u_modulationSpeed', 'u_modulationIntensity',
        'u_turbulenceModulation', 'u_brightness', 'u_contrast'
      ];
      
      // Check if all key parameters are identical
      const areIdentical = keyParams.every(param => 
        currentParams[param] === newParams[param]
      );
      
      // Also check if Mid Tone colors would be the same
      const currentMidTone = this.currentPage === 'about' ? 0x8218c9 : 0x4e2bda;
      const newMidTone = newNamespace === 'about' ? 0x8218c9 : 0x4e2bda;
      
      return !areIdentical || currentMidTone !== newMidTone;
    }
    
    // Default: transition needed
    return true;
  }

  /**
   * Add or update a page configuration
   */
  setPageConfig(namespace, config) {
    this.pageConfigs[namespace] = config;
    console.log(`ConfigManager: Updated config for "${namespace}"`);
  }

  /**
   * Get all page configurations
   */
  getAllConfigs() {
    return { ...this.pageConfigs };
  }

  /**
   * Get current page namespace
   */
  getCurrentPage() {
    return this.currentPage;
  }

  /**
   * Reset to default configuration
   */
  resetToDefault(duration = 4.0) {
    this.transitionToPage('default', duration);
  }
}

/**
 * Create a ConfigManager instance
 */
export function createConfigManager(shaderController) {
  return new ConfigManager(shaderController);
}



