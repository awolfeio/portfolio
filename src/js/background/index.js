import { BackgroundRenderer } from "./BackgroundRenderer.js";
import { ShaderController } from "./ShaderController.js";
import { createConfigManager } from "./ConfigManager.js";
import { createPerformanceMonitor } from "./PerformanceMonitor.js";
import { createAdaptiveQualityManager } from "./AdaptiveQualityManager.js";
import { initDevGUI, DevGUI } from "./DevGUI.js"; // Import class to allow manual instantiation
import { initShaderSync } from "./ShaderSyncClient.js";

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

    // Create performance monitor
    const isDev = window.location.hostname === 'localhost' || 
                  window.location.search.includes('debug=true');
    this.performanceMonitor = createPerformanceMonitor(isDev); 

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
        console.log(`🎨 Initial namespace detected: "${initialNamespace}"`);
        console.log(`🎨 Color BEFORE transitionToPage: u_color2 = #${material.uniforms.u_color2.value.getHexString()}`);
        
        this.configManager.transitionToPage(initialNamespace, 0);
        
        console.log(`🎨 Color AFTER transitionToPage: u_color2 = #${material.uniforms.u_color2.value.getHexString()}`);
        console.log(`Applied initial background configuration for "${initialNamespace}" page`);
      }
      
      // Initialize adaptive quality manager for automatic FPS/quality optimization
      this.adaptiveQualityManager = createAdaptiveQualityManager(this.renderer, this.performanceMonitor);

      // PERF FIX: Connect AQM to renderer so tick() runs inside the render loop
      // instead of a separate concurrent RAF chain.
      this.renderer.setAdaptiveQualityManager(this.adaptiveQualityManager);

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
    
    // Initialize live mirror sync (broadcaster on desktop, receiver on ?mirror=true)
    this.shaderSync = initShaderSync(this);
    
    // Setup dev mode secret trigger
    this.setupDevModeSecret();

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
      if (namespace) return namespace.toLowerCase();
    }
    
    // Fallback: check main container
    const mainContainer = document.querySelector("main > div");
    if (mainContainer) {
      const namespace = mainContainer.dataset.barbaNamespace;
      if (namespace) return namespace.toLowerCase();
    }
    
    // Fallback: check URL path
    const path = window.location.pathname.toLowerCase();
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
  fadeIn(duration = 0.6, targetOpacity = 1) {
    const canvas = this.renderer?.getCanvas();
    if (canvas) {
      canvas.style.transition = `opacity ${duration}s ease`;
      canvas.style.opacity = targetOpacity.toString();
    }
  }

  /**
   * Transition to a page-specific configuration
   * Uses a fade-through strategy to mask jarring parameter changes
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
    
    const canvas = this.renderer?.getCanvas();
    if (!canvas) {
      // Fallback if no canvas
      this.configManager.transitionToPage(namespace, duration);
      return;
    }
    
    // Fade-through transition strategy to mask jarring parameter changes
    // Timeline: fade out (30%) → transition params (40%) → fade in (30%)
    const fadeOutDuration = duration * 0.3;
    const fadeInDuration = duration * 0.3;
    const transitionDelay = fadeOutDuration * 0.5; // Start param transition halfway through fade out
    
    // Fade out to low opacity
    canvas.style.transition = `opacity ${fadeOutDuration}s ease-in`;
    canvas.style.opacity = "0.15";
    
    // Start parameter transition during fade out
    setTimeout(() => {
      this.configManager.transitionToPage(namespace, duration);
    }, transitionDelay * 1000);
    
    // Fade back in after parameters have mostly transitioned
    setTimeout(() => {
      canvas.style.transition = `opacity ${fadeInDuration}s ease-out`;
      canvas.style.opacity = "1";
    }, (fadeOutDuration + duration * 0.4) * 1000);
  }

  /**
   * Transition to a page-specific configuration with fade-out/instant-change/fade-in
   * This provides a cleaner transition for page changes
   * @param {string} namespace - Page namespace (e.g., 'about', 'default')
   * @param {number} fadeOutDuration - Fade out duration in seconds (default: 0.3)
   * @param {number} fadeInDuration - Fade in duration in seconds (default: 0.4)
   * @returns {Promise} Resolves when the transition is complete
   */
  transitionToPageWithFade(namespace, fadeOutDuration = 0.3, fadeInDuration = 0.4) {
    return new Promise((resolve) => {
      if (!this.configManager) {
        console.warn("ConfigManager not initialized");
        resolve();
        return;
      }
      
      // Check if transition is needed
      if (!this.configManager.shouldTransition(namespace)) {
        console.log(`No transition needed for ${namespace} - same config`);
        resolve();
        return;
      }
      
      const canvas = this.renderer?.getCanvas();
      if (!canvas) {
        // Fallback if no canvas - instant change
        this.configManager.transitionToPage(namespace, 0);
        resolve();
        return;
      }
      
      console.log(`Background fade transition to "${namespace}": fade out → instant change → fade in`);
      
      // Step 1: Fade out
      canvas.style.transition = `opacity ${fadeOutDuration}s ease-out`;
      canvas.style.opacity = "0";
      
      // Step 2: After fade out completes, instantly change parameters
      setTimeout(() => {
        // Instant parameter change (duration = 0)
        this.configManager.transitionToPage(namespace, 0);
        
        // Step 3: Immediately start fading back in
        setTimeout(() => {
          canvas.style.transition = `opacity ${fadeInDuration}s ease-in`;
          canvas.style.opacity = "1";
          
          // Resolve after fade in completes
          setTimeout(() => {
            resolve();
          }, fadeInDuration * 1000);
        }, 50); // Small delay to ensure parameter change has been applied
      }, fadeOutDuration * 1000);
    });
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
  /**
   * Setup 'devmode' secret typing trigger
   */
  setupDevModeSecret() {
    let buffer = "";
    const secret = "devmode";
    
    window.addEventListener("keydown", (e) => {
      // Ignore if typing in an input
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      
      if (e.key && e.key.length === 1 && /[a-z]/i.test(e.key)) {
        buffer += e.key.toLowerCase();
        
        // Trim buffer
        if (buffer.length > secret.length) {
          buffer = buffer.slice(-secret.length);
        }
        
        // Check match
        if (buffer === secret) {
          this.toggleDevMode();
          buffer = "";
        }
      }
    });
  }

  /**
   * Toggle development mode tools
   */
  toggleDevMode() {
    console.log("🔓 Dev mode triggered!");
    
    // Toggle Performance Monitor
    if (this.performanceMonitor) {
      this.performanceMonitor.toggle();
    }
    
    // Toggle/Create DevGUI
    if (!this.devGUI) {
        // Dynamic import if needed, but we imported the class at top
        try {
          this.devGUI = new DevGUI(this);
        } catch(e) {
          console.error("Could not init DevGUI", e);
        }
    } else {
       if (this.devGUI.gui._hidden) {
           this.devGUI.gui.show();
       } else {
           this.devGUI.gui.hide();
       }
    }
  }
}


// Create singleton instance
const backgroundManager = new BackgroundManager();

// Export for use in other modules
export {
  backgroundFrameRateCap,
  getActiveBackgroundFrameRateCap,
} from "./frameRateCap.js";
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
