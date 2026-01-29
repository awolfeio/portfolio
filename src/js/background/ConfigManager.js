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
        u_zoom: 0.3,
        u_noiseScale: 0.5,
        u_octaves: 3,
        u_lacunarity: 3.0,
        u_gain: 0.35,
        u_turbulence: 0.2,
        u_warpOctaves: 2,
        u_ridgeAmount: 0.0,
        u_detailScale: 1.0,
        u_detailAmount: 0.0,
        u_speed: 0.08,
        u_directionX: 0.5,
        u_directionY: 0.3,
        u_modulationSpeed: 0.4,
        u_modulationIntensity: 12.0,
        u_turbulenceModulation: 0.24,
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
        u_rippleFrequency: 0.0,
        u_rippleStrength: 0.0,
        u_quantizeStep: 0.0,
        u_mirrorX: 0.0,
        u_mirrorY: 0.0,
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
    
    // Prepare uniforms object for transition
    const uniforms = {
      u_zoom: config.u_zoom,
      u_noiseScale: config.u_noiseScale,
      u_octaves: config.u_octaves,
      u_lacunarity: config.u_lacunarity,
      u_gain: config.u_gain,
      u_turbulence: config.u_turbulence,
      u_warpOctaves: config.u_warpOctaves,
      u_ridgeAmount: config.u_ridgeAmount,
      u_detailScale: config.u_detailScale,
      u_detailAmount: config.u_detailAmount,
      u_speed: config.u_speed,
      u_directionX: config.u_directionX,
      u_directionY: config.u_directionY,
      u_modulationSpeed: config.u_modulationSpeed,
      u_modulationIntensity: config.u_modulationIntensity,
      u_turbulenceModulation: config.u_turbulenceModulation,
      u_zoomModulation: config.u_zoomModulation,
      u_colorModulation: config.u_colorModulation,
      u_rotationModulation: config.u_rotationModulation,
      u_noiseScaleModulation: config.u_noiseScaleModulation,
      u_gainModulation: config.u_gainModulation,
      u_colorSpreadModulation: config.u_colorSpreadModulation,
      u_colorShiftModulation: config.u_colorShiftModulation,
      u_softness: config.u_softness,
      u_contrast: config.u_contrast,
      u_brightness: config.u_brightness,
      u_exposure: config.u_exposure,
      u_blackLevel: config.u_blackLevel,
      u_colorMix1: config.u_colorMix1,
      u_colorMix2: config.u_colorMix2,
      u_colorSpread: config.u_colorSpread,
      u_colorSeparation: config.u_colorSeparation,
      u_colorBands: config.u_colorBands,
      u_grainIntensity: config.u_grainIntensity,
      u_grainSpeed: config.u_grainSpeed,
      u_grainSize: config.u_grainSize,
      u_grainBlendMode: config.u_grainBlendMode,
      u_grainAspect: config.u_grainAspect,
      u_grainComplexity: config.u_grainComplexity,
      u_circularMotionIntensity: config.u_circularMotionIntensity,
      u_evolutionSpeed: config.u_evolutionSpeed,
      u_layerBlend: config.u_layerBlend,
      u_colorEvolutionSpeed: config.u_colorEvolutionSpeed,
      u_rippleFrequency: config.u_rippleFrequency,
      u_rippleStrength: config.u_rippleStrength,
      u_quantizeStep: config.u_quantizeStep,
      u_mirrorX: config.u_mirrorX,
      u_mirrorY: config.u_mirrorY,
    };
    
    // Use ShaderController's transitionTo for smooth GSAP transitions
    this.shaderController.transitionTo(uniforms, duration);
    
    // Update current page
    this.currentPage = namespace;
    
    console.log(`ConfigManager: Applied "${namespace}" configuration`);
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
    
    // Always transition for custom configs
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



