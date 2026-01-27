/**
 * PerformanceMonitor - Tracks FPS and performance metrics for the background renderer
 */
export class PerformanceMonitor {
  constructor(enabled = false) {
    this.enabled = enabled;
    this.fps = 0;
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.lastFpsUpdate = performance.now();
    this.fpsHistory = [];
    this.maxHistoryLength = 60; // Keep 60 samples

    // Performance thresholds
    this.targetFps = 60;
    this.lowFpsThreshold = 30;

    // Stats element
    this.statsElement = null;

    // Callbacks
    this.onLowPerformance = null;

    // References to other systems (set after initialization)
    this.frameRateController = null;
    this.adaptiveQualityManager = null;
    this.renderer = null;

    if (this.enabled) {
      this.createStatsDisplay();
    }
  }

  /**
   * Create on-screen stats display
   * OPTIMIZED: Uses cached DOM references instead of innerHTML rebuilding
   */
  createStatsDisplay() {
    // Only render stats in development mode
    if (!import.meta.env.DEV) return;

    this.statsElement = document.createElement('div');
    this.statsElement.id = 'bg-performance-stats';
    this.statsElement.style.cssText = `
      position: fixed;
      bottom: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.85);
      color: #0f0;
      padding: 12px 16px;
      font-family: 'Courier New', monospace;
      font-size: 11px;
      border-radius: 6px;
      z-index: 9999;
      pointer-events: none;
      line-height: 1.5;
      min-width: 280px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(0, 255, 0, 0.3);
    `;

    // PERFORMANCE: Pre-build DOM structure once, cache references for updates
    this.statsElement.innerHTML = `
      <div style="font-weight: bold; margin-bottom: 6px; font-size: 12px; color: #0ff;">
        ⚡ Background Shader Performance
      </div>
      
      <div style="margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.1);">
        <div id="stats-fps-main" style="font-weight: bold;">FPS: -- / --</div>
        <div id="stats-fps-detail" style="color: #aaa; font-size: 10px;">Avg: -- | Min: -- | Dropped: 0</div>
      </div>

      <div style="margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.1);">
        <div style="color: #888; font-size: 10px;">TIMING</div>
        <div id="stats-timing">Frame: --ms</div>
        <div id="stats-timing-target" style="font-size: 10px; color: #aaa;">Target: --ms</div>
      </div>

      <div style="margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.1);">
        <div style="color: #888; font-size: 10px;">DISPLAY</div>
        <div id="stats-refresh">Refresh: --Hz</div>
        <div id="stats-pixel-ratio" style="font-size: 10px; color: #aaa;">Pixel Ratio: --</div>
      </div>

      <div style="margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.1);">
        <div style="color: #888; font-size: 10px;">QUALITY</div>
        <div id="stats-quality">Tier: --</div>
        <div id="stats-grain" style="font-size: 10px; color: #aaa;">Grain Hold: --</div>
      </div>

      <div>
        <div style="color: #888; font-size: 10px;">ADAPTIVE</div>
        <div id="stats-adaptive" style="font-size: 10px;">▲ Upgrade | ▼ Downgrade</div>
      </div>
    `;

    document.body.appendChild(this.statsElement);

    // Cache DOM references for efficient updates
    this._statsDom = {
      fpsMain: this.statsElement.querySelector('#stats-fps-main'),
      fpsDetail: this.statsElement.querySelector('#stats-fps-detail'),
      timing: this.statsElement.querySelector('#stats-timing'),
      timingTarget: this.statsElement.querySelector('#stats-timing-target'),
      refresh: this.statsElement.querySelector('#stats-refresh'),
      pixelRatio: this.statsElement.querySelector('#stats-pixel-ratio'),
      quality: this.statsElement.querySelector('#stats-quality'),
      grain: this.statsElement.querySelector('#stats-grain'),
      adaptive: this.statsElement.querySelector('#stats-adaptive')
    };
  }

  /**
   * Update FPS counter (call once per frame)
   */
  update() {
    if (!this.enabled) return;

    const now = performance.now();
    this.frameCount++;

    // Update FPS every 500ms
    if (now >= this.lastFpsUpdate + 500) {
      const delta = now - this.lastFpsUpdate;
      this.fps = Math.round((this.frameCount * 1000) / delta);
      this.frameCount = 0;
      this.lastFpsUpdate = now;

      // Add to history
      this.fpsHistory.push(this.fps);
      if (this.fpsHistory.length > this.maxHistoryLength) {
        this.fpsHistory.shift();
      }

      // Check for low performance
      if (this.fps < this.lowFpsThreshold && this.onLowPerformance) {
        this.onLowPerformance(this.fps);
      }

      // Update display
      this.updateDisplay();
    }
  }

  /**
   * Update stats display
   * OPTIMIZED: Uses cached DOM references with textContent updates instead of innerHTML
   */
  updateDisplay() {
    if (!this.statsElement || !this._statsDom) return;

    const dom = this._statsDom;
    const avgFps = this.getAverageFps();
    const minFps = this.getMinFps();

    // Calculate frame timing metrics
    let targetFps = 60;
    let actualFps = this.fps;
    let frameTime = actualFps > 0 ? (1000 / actualFps) : 0;
    let jitter = 0;

    // Calculate jitter from FPS history variance
    if (this.fpsHistory.length > 1) {
      const avgFpsCalc = this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length;
      const variance = this.fpsHistory.reduce((sum, val) =>
        sum + Math.pow(val - avgFpsCalc, 2), 0
      ) / this.fpsHistory.length;
      const fpsStdDev = Math.sqrt(variance);
      jitter = avgFpsCalc > 0 ? (fpsStdDev / avgFpsCalc) * frameTime : 0;
    }

    // Get adaptive quality manager status
    let detectedHz = 60;
    let currentQuality = 'high';
    let canUpgrade = false;
    let canDowngrade = false;

    if (this.adaptiveQualityManager) {
      const status = this.adaptiveQualityManager.getStatus();
      detectedHz = status.detectedRefreshRate;
      targetFps = detectedHz;
      currentQuality = status.currentQuality;
      canUpgrade = status.canUpgrade;
      canDowngrade = status.canDowngrade;
    }

    // Get renderer info
    let pixelRatio = 1.0;
    let grainHold = 1.0;

    if (this.renderer) {
      pixelRatio = window.devicePixelRatio || 1.0;
      const material = this.renderer.getMaterial();
      if (material && material.uniforms.u_grainFrameHold) {
        grainHold = material.uniforms.u_grainFrameHold.value;
      }
    }

    // Calculate performance metrics
    const fpsPercentage = ((actualFps / targetFps) * 100).toFixed(0);
    const performanceColor = actualFps >= targetFps * 0.95 ? '#0f0' : actualFps >= targetFps * 0.85 ? '#ff0' : '#f00';

    // PERFORMANCE: Update only textContent of cached elements (no DOM parsing!)
    dom.fpsMain.textContent = `FPS: ${actualFps} / ${targetFps} (${fpsPercentage}%)`;
    dom.fpsMain.style.color = performanceColor;
    dom.fpsDetail.textContent = `Avg: ${avgFps} | Min: ${minFps} | Dropped: 0`;

    dom.timing.textContent = `Frame: ${frameTime.toFixed(2)}ms ±${jitter.toFixed(2)}ms`;
    dom.timingTarget.textContent = `Target: ${(1000 / targetFps).toFixed(2)}ms`;

    dom.refresh.textContent = `Refresh: ${detectedHz}Hz`;
    dom.pixelRatio.textContent = `Pixel Ratio: ${pixelRatio.toFixed(2)}`;

    dom.quality.textContent = `Tier: ${currentQuality.toUpperCase()}`;
    dom.grain.textContent = `Grain Hold: ${grainHold.toFixed(1)}x`;

    // Use innerHTML only for the small adaptive section with icons
    const upgradeColor = canUpgrade ? '#0f0' : '#555';
    const downgradeColor = canDowngrade ? '#f90' : '#555';
    dom.adaptive.innerHTML = `<span style="color: ${upgradeColor};">▲ Upgrade</span> | <span style="color: ${downgradeColor};">▼ Downgrade</span>`;
  }

  /**
   * Get average FPS from history
   */
  getAverageFps() {
    if (this.fpsHistory.length === 0) return 0;
    const sum = this.fpsHistory.reduce((a, b) => a + b, 0);
    return Math.round(sum / this.fpsHistory.length);
  }

  /**
   * Get minimum FPS from history
   */
  getMinFps() {
    if (this.fpsHistory.length === 0) return 0;
    return Math.min(...this.fpsHistory);
  }

  /**
   * Get current FPS
   */
  getFps() {
    return this.fps;
  }

  /**
   * Get performance metrics
   */
  getMetrics() {
    return {
      currentFps: this.fps,
      averageFps: this.getAverageFps(),
      minFps: this.getMinFps(),
      isLowPerformance: this.fps < this.lowFpsThreshold,
    };
  }

  /**
   * Set frame rate controller reference for stats display
   */
  setFrameRateController(controller) {
    this.frameRateController = controller;
  }

  /**
   * Set adaptive quality manager reference for stats display
   */
  setAdaptiveQualityManager(manager) {
    this.adaptiveQualityManager = manager;
  }

  /**
   * Set renderer reference for stats display
   */
  setRenderer(renderer) {
    this.renderer = renderer;
  }

  /**
   * Enable monitoring
   */
  enable() {
    if (!this.enabled) {
      this.enabled = true;
      this.createStatsDisplay();
      console.log('PerformanceMonitor: Enabled');
    }
  }

  /**
   * Disable monitoring
   */
  disable() {
    if (this.enabled) {
      this.enabled = false;
      if (this.statsElement) {
        this.statsElement.remove();
        this.statsElement = null;
      }
      console.log('PerformanceMonitor: Disabled');
    }
  }

  /**
   * Toggle monitoring
   */
  toggle() {
    if (this.enabled) {
      this.disable();
    } else {
      this.enable();
    }
  }

  /**
   * Check if monitoring is enabled
   */
  isEnabled() {
    return this.enabled;
  }

  /**
   * Set callback for low performance
   */
  setLowPerformanceCallback(callback) {
    this.onLowPerformance = callback;
  }

  /**
   * Reset stats
   */
  reset() {
    this.fps = 0;
    this.frameCount = 0;
    this.fpsHistory = [];
    this.lastTime = performance.now();
    this.lastFpsUpdate = performance.now();
  }

  /**
   * Destroy monitor
   */
  destroy() {
    if (this.statsElement) {
      this.statsElement.remove();
      this.statsElement = null;
    }
    this.enabled = false;
    this.onLowPerformance = null;
  }

  /**
   * Check if dev mode for automatic enabling
   */
  static isDev() {
    return window.location.hostname === 'localhost' ||
      window.location.search.includes('debug=true') ||
      window.location.search.includes('stats=true');
  }
}

/**
 * Create a performance monitor instance
 */
export function createPerformanceMonitor(enabled = false) {
  return new PerformanceMonitor(enabled);
}

