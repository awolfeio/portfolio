import { detectRefreshRate } from "./RefreshRateDetector.js";

/**
 * AdaptiveQualityManager - Intelligently manages quality and FPS based on device capabilities
 * Automatically adjusts settings to maintain target performance
 */
export class AdaptiveQualityManager {
  constructor(renderer, performanceMonitor) {
    this.renderer = renderer;
    this.performanceMonitor = performanceMonitor;
    
    // Device capabilities
    this.detectedRefreshRate = 60;
    this.targetFps = 60;
    this.currentQuality = 'high';
    
    // Performance monitoring
    this.fpsHistory = [];
    this.fpsHistoryMaxLength = 120; // 2 seconds at 60fps
    this.lastQualityDowngrade = 0;
    this.lastQualityUpgrade = 0;
    
    // Thresholds
    this.downgradeThreshold = 0.85; // Downgrade if FPS < 85% of target
    this.severeDowngradeThreshold = 0.70; // Severe performance issues
    this.upgradeThreshold = 1.15; // Upgrade if FPS > 115% of target consistently
    this.downgradeCooldown = 3000; // 3 seconds between downgrades
    this.upgradeCooldown = 10000; // 10 seconds before considering upgrade
    
    // Quality/FPS combination map
    this.qualityFpsCombinations = [
      { quality: 'ultra', fps: 240, minRefreshRate: 240 },
      { quality: 'ultra', fps: 165, minRefreshRate: 165 },
      { quality: 'high', fps: 165, minRefreshRate: 165 },
      { quality: 'high', fps: 120, minRefreshRate: 120 },
      { quality: 'high', fps: 90, minRefreshRate: 90 },
      { quality: 'high', fps: 60, minRefreshRate: 60 },
      { quality: 'medium', fps: 60, minRefreshRate: 60 },
      { quality: 'low', fps: 60, minRefreshRate: 60 },
    ];
    
    this.currentCombinationIndex = 5; // Start at high quality 60fps
  }

  /**
   * Initialize the adaptive quality system
   * Detects refresh rate and sets initial quality/FPS
   */
  async initialize() {
    console.log('AdaptiveQualityManager: Initializing...');
    
    // Detect refresh rate
    try {
      const detection = await detectRefreshRate();
      this.detectedRefreshRate = detection.refreshRate;
      console.log(`AdaptiveQualityManager: Detected ${this.detectedRefreshRate}Hz display (confidence: ${(detection.confidence * 100).toFixed(0)}%)`);
    } catch (error) {
      console.warn('AdaptiveQualityManager: Failed to detect refresh rate, defaulting to 60Hz');
      this.detectedRefreshRate = 60;
    }
    
    // Select initial quality/FPS based on refresh rate
    this.selectInitialQualityFps();
    
    // Apply initial settings
    this.applySettings();
    
    // Start monitoring performance
    this.startMonitoring();
    
    console.log(`AdaptiveQualityManager: Initialized with ${this.currentQuality} quality at ${this.targetFps}fps`);
  }

  /**
   * Select initial quality and FPS based on detected refresh rate
   * PERF: Mobile devices start at medium to avoid thermal throttle at page load.
   * The adaptive system takes 7-15s to react, so starting high on mobile always
   * triggers a cold-GPU stall before it can downgrade.
   */
  selectInitialQualityFps() {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      || (navigator.maxTouchPoints > 1 && window.innerWidth < 1024);

    if (isMobile) {
      // Start at medium/60fps on mobile — adaptive system can upgrade if headroom exists
      this.currentCombinationIndex = 6; // medium @ 60fps
      this.currentQuality = 'medium';
      this.targetFps = 60;
      console.log('AdaptiveQualityManager: Mobile device detected — starting at medium quality');
      return;
    }

    // Desktop: start optimistically based on detected refresh rate
    for (let i = 0; i < this.qualityFpsCombinations.length; i++) {
      const combo = this.qualityFpsCombinations[i];
      if (this.detectedRefreshRate >= combo.minRefreshRate) {
        this.currentCombinationIndex = i;
        this.currentQuality = combo.quality;
        this.targetFps = combo.fps;
        break;
      }
    }
  }

  /**
   * Apply current quality and FPS settings to renderer
   */
  applySettings() {
    if (!this.renderer) return;
    
    // Set quality
    if (this.currentQuality === 'ultra') {
      this.renderer.setQualityUltra();
    } else {
      this.renderer.setQuality(this.currentQuality);
    }
    
    // Set target FPS
    this.renderer.setTargetFps(this.targetFps);
    
    console.log(`AdaptiveQualityManager: Applied ${this.currentQuality} quality @ ${this.targetFps}fps`);
  }

  /**
   * Start performance monitoring.
   * PERF FIX: No longer spawns its own RAF loop. The BackgroundRenderer render loop calls
   * tick() on every frame instead, eliminating the second concurrent RAF chain that competed
   * for the 16ms frame budget on mobile.
   */
  startMonitoring() {
    this._lastPerformanceCheck = 0;
    this._performanceCheckInterval = 500; // Check every 500ms
    this._monitoringActive = true;
  }

  /**
   * Stop performance monitoring
   */
  stopMonitoring() {
    this._monitoringActive = false;
  }

  /**
   * Per-frame tick — called by BackgroundRenderer.render() instead of a separate RAF loop.
   * Performs the 500ms throttled performance check inline with the existing render callback.
   */
  tick() {
    if (!this._monitoringActive) return;
    const now = performance.now();
    if (now - this._lastPerformanceCheck >= this._performanceCheckInterval) {
      this._lastPerformanceCheck = now;
      this.checkPerformance();
    }
  }

  /**
   * Check performance and adjust quality if needed
   */
  checkPerformance() {
    if (!this.performanceMonitor) return;
    
    const currentFps = this.performanceMonitor.getFps();
    if (currentFps <= 0) return; // Not enough data yet
    
    // Add to history
    this.fpsHistory.push(currentFps);
    if (this.fpsHistory.length > this.fpsHistoryMaxLength) {
      this.fpsHistory.shift();
    }
    
    // Need enough samples for reliable decisions
    if (this.fpsHistory.length < 30) return;
    
    // Calculate average FPS over recent history
    const avgFps = this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length;
    const fpsRatio = avgFps / this.targetFps;
    
    const now = performance.now();
    
    // Check for downgrade conditions
    if (fpsRatio < this.severeDowngradeThreshold) {
      // Severe performance issues - downgrade immediately
      if (now - this.lastQualityDowngrade > 1000) { // 1 second cooldown for severe issues
        this.downgradeQuality();
        this.lastQualityDowngrade = now;
      }
    } else if (fpsRatio < this.downgradeThreshold) {
      // Moderate performance issues - downgrade with cooldown
      if (now - this.lastQualityDowngrade > this.downgradeCooldown) {
        this.downgradeQuality();
        this.lastQualityDowngrade = now;
      }
    } else if (fpsRatio > this.upgradeThreshold) {
      // Performance headroom - consider upgrade
      if (now - this.lastQualityUpgrade > this.upgradeCooldown && 
          now - this.lastQualityDowngrade > this.upgradeCooldown * 2) {
        this.upgradeQuality();
        this.lastQualityUpgrade = now;
      }
    }
  }

  /**
   * Downgrade to lower quality/FPS combination
   */
  downgradeQuality() {
    if (this.currentCombinationIndex >= this.qualityFpsCombinations.length - 1) {
      console.log('AdaptiveQualityManager: Already at lowest quality/FPS');
      return;
    }
    
    const oldCombo = this.qualityFpsCombinations[this.currentCombinationIndex];
    this.currentCombinationIndex++;
    const newCombo = this.qualityFpsCombinations[this.currentCombinationIndex];
    
    this.currentQuality = newCombo.quality;
    this.targetFps = newCombo.fps;
    
    console.log(`AdaptiveQualityManager: Downgrading ${oldCombo.quality}@${oldCombo.fps}fps → ${newCombo.quality}@${newCombo.fps}fps`);
    
    this.applySettings();
    this.fpsHistory = []; // Reset history after change
  }

  /**
   * Upgrade to higher quality/FPS combination
   */
  upgradeQuality() {
    if (this.currentCombinationIndex <= 0) {
      console.log('AdaptiveQualityManager: Already at highest quality/FPS');
      return;
    }
    
    const oldCombo = this.qualityFpsCombinations[this.currentCombinationIndex];
    this.currentCombinationIndex--;
    const newCombo = this.qualityFpsCombinations[this.currentCombinationIndex];
    
    // Don't upgrade beyond detected refresh rate
    if (newCombo.fps > this.detectedRefreshRate) {
      console.log(`AdaptiveQualityManager: Cannot upgrade to ${newCombo.fps}fps (display is ${this.detectedRefreshRate}Hz)`);
      this.currentCombinationIndex++; // Revert
      return;
    }
    
    this.currentQuality = newCombo.quality;
    this.targetFps = newCombo.fps;
    
    console.log(`AdaptiveQualityManager: Upgrading ${oldCombo.quality}@${oldCombo.fps}fps → ${newCombo.quality}@${newCombo.fps}fps`);
    
    this.applySettings();
    this.fpsHistory = []; // Reset history after change
  }

  /**
   * Get current status
   */
  getStatus() {
    const avgFps = this.fpsHistory.length > 0
      ? Math.round(this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length)
      : 0;
    
    return {
      detectedRefreshRate: this.detectedRefreshRate,
      currentQuality: this.currentQuality,
      targetFps: this.targetFps,
      averageFps: avgFps,
      canUpgrade: this.currentCombinationIndex > 0,
      canDowngrade: this.currentCombinationIndex < this.qualityFpsCombinations.length - 1
    };
  }

  /**
   * Manually set quality and FPS (disables automatic adaptation temporarily)
   */
  manualSetQualityFps(quality, fps) {
    this.currentQuality = quality;
    this.targetFps = fps;
    this.applySettings();
    this.fpsHistory = []; // Reset history
    console.log(`AdaptiveQualityManager: Manual override to ${quality}@${fps}fps`);
  }
}

/**
 * Create an adaptive quality manager instance
 */
export function createAdaptiveQualityManager(renderer, performanceMonitor) {
  return new AdaptiveQualityManager(renderer, performanceMonitor);
}
