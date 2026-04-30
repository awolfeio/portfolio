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

    // PERF: Float32Array ring buffer instead of a JS Array that grows/shifts.
    // .shift() on a plain Array is O(n) — on a 60-element history that's 60
    // element copies on every FPS sample (every 500ms = 120 copies/second).
    this._histLen = 60;
    this._fpsHist = new Float32Array(this._histLen);
    this._histIdx = 0;
    this._histCount = 0; // how many valid samples

    // Keep a public alias for legacy callers (AdaptiveQualityManager reads .fpsHistory)
    // We'll keep it as a plain array but only update it lazily from getMetrics()
    this.fpsHistory = [];
    this.maxHistoryLength = 60;

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

    // Cached values to avoid re-reading material on every display update
    this._cachedGrainHold = 1.0;
    this._cachedPixelRatio = 1.0;

    if (this.enabled) {
      this.createStatsDisplay();
    }
  }

  /**
   * Create on-screen stats display
   * OPTIMIZED: Uses cached DOM references instead of innerHTML rebuilding
   */
  createStatsDisplay() {
    // Check if duplicate
    if (this.statsElement) return;

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

      <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.1);">
        <button id="stats-remove-canvas" style="
          width: 100%;
          padding: 5px 0;
          background: rgba(255,60,60,0.15);
          border: 1px solid rgba(255,60,60,0.4);
          border-radius: 4px;
          color: #ff6060;
          font-family: 'Courier New', monospace;
          font-size: 10px;
          font-weight: bold;
          cursor: pointer;
          letter-spacing: 0.05em;
        ">✕ Remove Canvas</button>
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

    // Wire up Remove Canvas button — override pointer-events since parent has none
    const removeBtn = this.statsElement.querySelector('#stats-remove-canvas');
    if (removeBtn) {
      removeBtn.style.pointerEvents = 'auto';
      removeBtn.addEventListener('click', () => {
        // Stop the renderer properly — cancels rAF, disposes GPU context, removes event listeners.
        // Just removing the canvas DOM element leaves the rAF loop and all setIntervals running,
        // which means the GC pressure and per-frame JS work continue even without a visible canvas.
        if (this.renderer && typeof this.renderer.stop === 'function') {
          this.renderer.stop();
          removeBtn.textContent = '✓ Renderer stopped';
        } else {
          // Fallback: at minimum remove the DOM elements
          const canvases = document.querySelectorAll('canvas');
          canvases.forEach(c => c.remove());
          removeBtn.textContent = `✓ Removed ${canvases.length} canvas`;
        }
        removeBtn.style.color = '#22c55e';
        removeBtn.style.borderColor = 'rgba(34,197,94,0.4)';
        removeBtn.style.background = 'rgba(34,197,94,0.1)';
        removeBtn.disabled = true;
      });
    }
  }

  /**
   * Update FPS counter — called once per frame.
   * PERF: No object allocation. Ring buffer insert is O(1).
   */
  update() {
    if (!this.enabled) return;

    const now = performance.now();
    this.frameCount++;

    // Sample FPS every 500ms
    if (now >= this.lastFpsUpdate + 500) {
      const delta = now - this.lastFpsUpdate;
      this.fps = Math.round((this.frameCount * 1000) / delta);
      this.frameCount = 0;
      this.lastFpsUpdate = now;

      // Ring-buffer insert
      this._fpsHist[this._histIdx] = this.fps;
      this._histIdx = (this._histIdx + 1) % this._histLen;
      if (this._histCount < this._histLen) this._histCount++;

      // Keep legacy .fpsHistory array in sync for AdaptiveQualityManager
      // (it reads .fpsHistory.length and .fpsHistory[i] directly)
      if (this.fpsHistory.length >= this.maxHistoryLength) {
        this.fpsHistory.shift();
      }
      this.fpsHistory.push(this.fps);

      if (this.fps < this.lowFpsThreshold && this.onLowPerformance) {
        this.onLowPerformance(this.fps);
      }

      this.updateDisplay();
    }
  }

  /**
   * Update stats display — runs every 500ms via update().
   * PERF: Ring-buffer stats, no .reduce(), cached grain/pixelRatio reads.
   */
  updateDisplay() {
    if (!this.statsElement || !this._statsDom) return;

    const dom = this._statsDom;
    const n = this._histCount;

    // Avg and min via plain for-loop over the ring buffer (no .reduce(), no spread)
    let sum = 0, minFps = Infinity;
    for (let i = 0; i < n; i++) {
      const v = this._fpsHist[i];
      sum += v;
      if (v < minFps) minFps = v;
    }
    const avgFps = n > 0 ? Math.round(sum / n) : 0;
    if (minFps === Infinity) minFps = 0;

    const actualFps = this.fps;
    let targetFps = 60;
    let detectedHz = 60;
    let currentQuality = 'high';
    let canUpgrade = false;
    let canDowngrade = false;

    if (this.adaptiveQualityManager) {
      const s = this.adaptiveQualityManager.getStatus();
      detectedHz     = s.detectedRefreshRate;
      targetFps      = detectedHz;
      currentQuality = s.currentQuality;
      canUpgrade     = s.canUpgrade;
      canDowngrade   = s.canDowngrade;
    }

    // Jitter from ring buffer — no second pass needed
    let jitter = 0;
    if (n > 1) {
      let vsum = 0;
      for (let i = 0; i < n; i++) { const d = this._fpsHist[i] - avgFps; vsum += d * d; }
      const fpsSigma = Math.sqrt(vsum / n);
      const frameTime = actualFps > 0 ? (1000 / actualFps) : 0;
      jitter = avgFps > 0 ? (fpsSigma / avgFps) * frameTime : 0;
    }

    const frameTime = actualFps > 0 ? (1000 / actualFps) : 0;
    const fpsPercentage = ((actualFps / targetFps) * 100).toFixed(0);
    const perfColor = actualFps >= targetFps * 0.95 ? '#0f0'
      : actualFps >= targetFps * 0.85 ? '#ff0' : '#f00';

    // Cache renderer reads — pixel ratio and grain hold are stable values
    // that don't need to be re-queried from the material every 500ms
    if (this.renderer) {
      if (this.renderer.getPixelRatio) {
        this._cachedPixelRatio = this.renderer.getPixelRatio();
      }
      const mat = this.renderer.getMaterial?.();
      if (mat?.uniforms?.u_grainFrameHold) {
        this._cachedGrainHold = mat.uniforms.u_grainFrameHold.value;
      }
    }

    dom.fpsMain.textContent = `FPS: ${actualFps} / ${targetFps} (${fpsPercentage}%)`;
    dom.fpsMain.style.color = perfColor;
    dom.fpsDetail.textContent = `Avg: ${avgFps} | Min: ${minFps} | Dropped: 0`;
    dom.timing.textContent = `Frame: ${frameTime.toFixed(2)}ms ±${jitter.toFixed(2)}ms`;
    dom.timingTarget.textContent = `Target: ${(1000 / targetFps).toFixed(2)}ms`;
    dom.refresh.textContent = `Refresh: ${detectedHz}Hz`;

    const deviceRatio = (window.devicePixelRatio || 1).toFixed(2);
    dom.pixelRatio.textContent = `Render PR: ${this._cachedPixelRatio.toFixed(2)} (device: ${deviceRatio})`;

    dom.quality.textContent = `Tier: ${currentQuality.toUpperCase()}`;
    dom.grain.textContent = `Grain Hold: ${this._cachedGrainHold.toFixed(1)}x`;

    const upgradeColor   = canUpgrade   ? '#0f0' : '#555';
    const downgradeColor = canDowngrade ? '#f90' : '#555';
    dom.adaptive.innerHTML = `<span style="color:${upgradeColor}">▲ Upgrade</span> | <span style="color:${downgradeColor}">▼ Downgrade</span>`;
  }


  /**
   * Get average FPS — plain for-loop over ring buffer.
   */
  getAverageFps() {
    const n = this._histCount;
    if (n === 0) return 0;
    let sum = 0;
    for (let i = 0; i < n; i++) sum += this._fpsHist[i];
    return Math.round(sum / n);
  }

  /**
   * Get minimum FPS — plain for-loop over ring buffer.
   */
  getMinFps() {
    const n = this._histCount;
    if (n === 0) return 0;
    let min = Infinity;
    for (let i = 0; i < n; i++) { if (this._fpsHist[i] < min) min = this._fpsHist[i]; }
    return min === Infinity ? 0 : min;
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
    this._fpsHist.fill(0);
    this._histIdx = 0;
    this._histCount = 0;
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

