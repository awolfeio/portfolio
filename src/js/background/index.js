import { BackgroundRenderer } from "./BackgroundRenderer.js";
import { ShaderController } from "./ShaderController.js";
import { createConfigManager } from "./ConfigManager.js";
import { createPerformanceMonitor } from "./PerformanceMonitor.js";
import { createAdaptiveQualityManager } from "./AdaptiveQualityManager.js";
import { initDevGUI } from "./DevGUI.js";

/**
 * Main background system entry point
 * Orchestrates renderer, shader controller, config manager, and performance monitoring
 */
class BackgroundManager {
  constructor() {
    this.renderer = null;
    this.shaderController = null;
    this.configManager = null;
    this.performanceMonitor = null;
    this.adaptiveQualityManager = null;
    this.devGUI = null;
    this.isInitialized = false;
  }

  /**
   * Initialize the background system
   * @param {string} containerId - ID of the container element
   */
  init(containerId = "viewport") {
    console.log("Initializing custom shader background...");

    // Detect initial page namespace before initializing renderer
    const initialNamespace = this.detectInitialPageNamespace();

    // Create performance monitor (ENABLED BY DEFAULT FOR PERFORMANCE TESTING)
    const isDev = window.location.hostname === 'localhost' || 
                  window.location.search.includes('debug=true');
    this.performanceMonitor = createPerformanceMonitor(true); // Always enabled for testing

    // Create renderer with performance monitor
    this.renderer = new BackgroundRenderer(containerId, this.performanceMonitor);

    // Create shader controller if renderer initialized successfully
    const material = this.renderer.getMaterial();
    if (material) {
      this.shaderController = new ShaderController(material);
      this.configManager = createConfigManager(this.shaderController);
      
      // Apply initial page configuration immediately (before rendering starts)
      // This ensures the correct parameters are used from the start
      // Use transitionToPage with duration=0 to ensure same parameter set as transitions
      if (initialNamespace && this.configManager) {
        this.configManager.transitionToPage(initialNamespace, 0);
        console.log(`Applied initial background configuration for "${initialNamespace}" page`);
      }
      
      // Initialize adaptive quality manager for automatic FPS/quality optimization
      this.adaptiveQualityManager = createAdaptiveQualityManager(this.renderer, this.performanceMonitor);
      
      // Connect system references to performance monitor for stats display
      if (this.performanceMonitor) {
        this.performanceMonitor.setRenderer(this.renderer);
        // NOTE: FrameRateController removed - using native vsync
        // this.performanceMonitor.setFrameRateController(this.renderer.frameRateController);
        this.performanceMonitor.setAdaptiveQualityManager(this.adaptiveQualityManager);
      }
      
      // Start adaptive quality system (async but non-blocking)
      this.adaptiveQualityManager.initialize().then(() => {
        console.log('AdaptiveQualityManager: System ready');
      }).catch(err => {
        console.warn('AdaptiveQualityManager: Initialization failed, using defaults', err);
      });
      
      this.isInitialized = true;
      console.log("Background system initialized successfully");
    } else {
      console.warn("Background system initialization incomplete (fallback mode)");
    }

    // Start rendering
    if (this.renderer) {
      this.renderer.start();
    }

    // Initialize DevGUI in development mode
    this.devGUI = initDevGUI(this);

    return this;
  }

  /**
   * Detect the initial page namespace from the DOM
   * @returns {string|null} The page namespace or null if not found
   */
  detectInitialPageNamespace() {
    // Try multiple methods to detect the initial page
    const container = document.querySelector("[data-barba='container']");
    if (container) {
      const namespace = container.getAttribute("data-barba-namespace");
      if (namespace) return namespace;
    }
    
    // Fallback: check main container
    const mainContainer = document.querySelector("main > div");
    if (mainContainer) {
      const namespace = mainContainer.dataset.barbaNamespace;
      if (namespace) return namespace;
    }
    
    // Fallback: check URL path
    const path = window.location.pathname;
    if (path.includes('/about')) return 'about';
    if (path.includes('/works')) return 'works';
    if (path.includes('/contact')) return 'contact';
    if (path.includes('/resume')) return 'resume';
    if (path.includes('/lab')) return 'labs';
    if (path.includes('/projects/')) {
      const projectMatch = path.match(/\/projects\/([^\/]+)/);
      if (projectMatch) return projectMatch[1];
    }
    
    // Default to index/homepage
    return 'index';
  }

  /**
   * Fade out the background
   * @param {number} duration - Fade duration in seconds
   */
  fadeOut(duration = 0.4) {
    const canvas = this.renderer?.getCanvas();
    if (canvas) {
      canvas.style.transition = `opacity ${duration}s ease`;
      canvas.style.opacity = "0";
    }
  }

  /**
   * Fade in the background
   * @param {number} duration - Fade duration in seconds
   * @param {number} targetOpacity - Target opacity (0-1)
   */
  fadeIn(duration = 0.6, targetOpacity = 0.66) {
    const canvas = this.renderer?.getCanvas();
    if (canvas) {
      canvas.style.transition = `opacity ${duration}s ease`;
      canvas.style.opacity = targetOpacity.toString();
    }
  }

  /**
   * Transition to a page-specific configuration
   * @param {string} namespace - Page namespace (e.g., 'about', 'default')
   * @param {number} duration - Transition duration in seconds
   */
  transitionToPage(namespace, duration = 7.0) {
    if (!this.configManager) {
      console.warn("ConfigManager not initialized");
      this.fadeIn(duration);
      return;
    }
    
    // Check if transition is needed
    if (!this.configManager.shouldTransition(namespace)) {
      console.log(`No transition needed for ${namespace} - same config`);
      this.fadeIn(duration);
      return;
    }
    
    // Transition to the page's configuration
    this.configManager.transitionToPage(namespace, duration);
    
    // Fade back in
    this.fadeIn(duration);
  }

  /**
   * Get the shader controller for external access
   */
  getShaderController() {
    return this.shaderController;
  }

  /**
   * Get the renderer for external access
   */
  getRenderer() {
    return this.renderer;
  }

  /**
   * Get the ConfigManager instance
   */
  getConfigManager() {
    return this.configManager;
  }

  /**
   * Get the PerformanceMonitor instance
   */
  getPerformanceMonitor() {
    return this.performanceMonitor;
  }

  /**
   * Get the DevGUI instance (if available)
   */
  getDevGUI() {
    return this.devGUI;
  }

  /**
   * Set quality level
   */
  setQuality(level) {
    if (this.renderer) {
      this.renderer.setQuality(level);
    }
  }

  /**
   * Get current quality level
   */
  getQuality() {
    return this.renderer ? this.renderer.getQuality() : 'high';
  }

  /**
   * Get the AdaptiveQualityManager instance
   */
  getAdaptiveQualityManager() {
    return this.adaptiveQualityManager;
  }

  /**
   * Set target FPS
   */
  setTargetFps(fps) {
    if (this.renderer) {
      this.renderer.setTargetFps(fps);
    }
  }

  /**
   * Get target FPS
   */
  getTargetFps() {
    return this.renderer ? this.renderer.getTargetFps() : 60;
  }

  /**
   * Get frame rate controller metrics
   */
  getFrameRateMetrics() {
    return this.renderer ? this.renderer.getFrameRateMetrics() : null;
  }

  /**
   * Get adaptive quality status
   */
  getAdaptiveStatus() {
    return this.adaptiveQualityManager ? this.adaptiveQualityManager.getStatus() : null;
  }

  /**
   * Stop and cleanup the background system
   */
  destroy() {
    if (this.devGUI) {
      this.devGUI.destroy();
    }
    if (this.renderer) {
      this.renderer.stop();
    }
    this.isInitialized = false;
    console.log("Background system destroyed");
  }
}

// Create singleton instance
const backgroundManager = new BackgroundManager();

// Export for use in other modules
export { backgroundManager };
export default backgroundManager;

// Expose to window for debugging/testing (dev only)
if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.search.includes('debug=true'))) {
  window.backgroundManager = backgroundManager;
  console.log('🎨 Background manager exposed to window.backgroundManager for debugging');
  console.log('   Try: backgroundManager.setTargetFps(240)');
  console.log('   Try: backgroundManager.getAdaptiveStatus()');
  console.log('   Try: backgroundManager.getFrameRateMetrics()');
}
