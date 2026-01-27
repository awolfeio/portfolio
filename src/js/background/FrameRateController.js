/**
 * FrameRateController - Precise frame rate targeting with time budgeting
 * Enables rendering at specific FPS targets (60, 120, 165, 240) regardless of display refresh rate
 */
export class FrameRateController {
  constructor(targetFps = 60) {
    this.targetFps = targetFps;
    this.frameTime = 1000 / targetFps; // ms per frame
    this.lastFrameTime = performance.now();
    this.deltaAccumulator = 0;
    this.frameCount = 0;
    this.droppedFrames = 0;
    this.actualFps = 0;
    this.lastFpsUpdate = performance.now();
    
    // Performance metrics
    this.frameTimeHistory = [];
    this.maxHistoryLength = 60;
    
    // Adaptive frame skipping
    this.adaptiveSkipping = true;
    this.maxFrameBudgetOverrun = 2.0; // ms - if we're this far behind, skip a frame
  }

  /**
   * Set target FPS
   * @param {number} fps - Target frames per second (60, 120, 165, 240)
   */
  setTargetFps(fps) {
    const validFps = [30, 60, 90, 120, 144, 165, 240];
    if (!validFps.includes(fps)) {
      console.warn(`Invalid target FPS: ${fps}, clamping to nearest valid value`);
      fps = validFps.reduce((prev, curr) => 
        Math.abs(curr - fps) < Math.abs(prev - fps) ? curr : prev
      );
    }
    
    this.targetFps = fps;
    this.frameTime = 1000 / fps;
    this.deltaAccumulator = 0; // Reset accumulator on FPS change
    console.log(`FrameRateController: Target FPS set to ${fps} (${this.frameTime.toFixed(2)}ms per frame)`);
  }

  /**
   * Check if we should render this frame
   * Implements frame time budgeting with delta accumulation
   * @returns {boolean} True if we should render this frame
   */
  shouldRender() {
    const now = performance.now();
    const delta = now - this.lastFrameTime;
    
    // Accumulate time since last render
    this.deltaAccumulator += delta;
    
    // Check if we have enough accumulated time for a frame
    if (this.deltaAccumulator >= this.frameTime) {
      // We should render this frame
      this.deltaAccumulator -= this.frameTime;
      
      // If we're significantly behind, drop accumulated time to catch up
      if (this.adaptiveSkipping && this.deltaAccumulator > this.maxFrameBudgetOverrun) {
        this.droppedFrames++;
        this.deltaAccumulator = 0; // Reset to prevent cascading delays
      }
      
      // Track frame time
      this.frameTimeHistory.push(delta);
      if (this.frameTimeHistory.length > this.maxHistoryLength) {
        this.frameTimeHistory.shift();
      }
      
      this.lastFrameTime = now;
      this.frameCount++;
      
      // Update FPS calculation every 500ms
      if (now - this.lastFpsUpdate >= 500) {
        const timeDelta = now - this.lastFpsUpdate;
        this.actualFps = Math.round((this.frameCount * 1000) / timeDelta);
        this.frameCount = 0;
        this.lastFpsUpdate = now;
      }
      
      return true;
    }
    
    // Not enough time accumulated, skip this frame
    this.lastFrameTime = now;
    return false;
  }

  /**
   * Get current performance metrics
   * @returns {{targetFps: number, actualFps: number, avgFrameTime: number, droppedFrames: number}}
   */
  getMetrics() {
    const avgFrameTime = this.frameTimeHistory.length > 0
      ? this.frameTimeHistory.reduce((a, b) => a + b, 0) / this.frameTimeHistory.length
      : this.frameTime;
    
    return {
      targetFps: this.targetFps,
      actualFps: this.actualFps,
      avgFrameTime: avgFrameTime,
      targetFrameTime: this.frameTime,
      droppedFrames: this.droppedFrames,
      frameTimeVariance: this.calculateVariance()
    };
  }

  /**
   * Calculate frame time variance (jitter)
   * @returns {number} Standard deviation of frame times in ms
   */
  calculateVariance() {
    if (this.frameTimeHistory.length < 2) return 0;
    
    const mean = this.frameTimeHistory.reduce((a, b) => a + b, 0) / this.frameTimeHistory.length;
    const variance = this.frameTimeHistory.reduce((sum, val) => 
      sum + Math.pow(val - mean, 2), 0
    ) / this.frameTimeHistory.length;
    
    return Math.sqrt(variance);
  }

  /**
   * Get target FPS
   */
  getTargetFps() {
    return this.targetFps;
  }

  /**
   * Get actual achieved FPS
   */
  getActualFps() {
    return this.actualFps;
  }

  /**
   * Reset performance metrics
   */
  reset() {
    this.lastFrameTime = performance.now();
    this.deltaAccumulator = 0;
    this.frameCount = 0;
    this.droppedFrames = 0;
    this.frameTimeHistory = [];
    this.lastFpsUpdate = performance.now();
  }

  /**
   * Enable/disable adaptive frame skipping
   * @param {boolean} enabled
   */
  setAdaptiveSkipping(enabled) {
    this.adaptiveSkipping = enabled;
  }
}

/**
 * Create a frame rate controller instance
 * @param {number} targetFps - Target frames per second
 * @returns {FrameRateController}
 */
export function createFrameRateController(targetFps = 60) {
  return new FrameRateController(targetFps);
}
