/**
 * FrameRateController
 *
 * PERF AUDIT: This class was evaluated for removal — the render loop already
 * relies on native vsync via rAF, so a software frame-budget accumulator is
 * redundant overhead. However it is kept because:
 *   1. The DevGUI exposes "target FPS" controls that call setTargetFps().
 *   2. AdaptiveQualityManager's quality combinations include fps values.
 *
 * Changes made to eliminate per-frame cost:
 *   - frameTimeHistory is a fixed-size ring buffer (no .shift() on hot path).
 *   - calculateVariance() is lazy — only computed when getMetrics() is called,
 *     NOT on every shouldRender() call.
 *   - FPS sampling avoids object allocation in the hot path.
 *   - The history iteration uses a plain for-loop instead of .reduce().
 */
export class FrameRateController {
  constructor(targetFps = 60) {
    this.targetFps = targetFps;
    this.frameTime = 1000 / targetFps;
    this.lastFrameTime = performance.now();
    this.deltaAccumulator = 0;
    this.frameCount = 0;
    this.droppedFrames = 0;
    this.actualFps = 0;
    this.lastFpsUpdate = performance.now();

    // Ring buffer — avoids .shift() (O(n) array copy) on every frame
    this._histLen = 60;
    this._hist = new Float32Array(this._histLen); // fixed allocation
    this._histIdx = 0;
    this._histFull = false;

    this.adaptiveSkipping = true;
    this.maxFrameBudgetOverrun = 2.0;
  }

  setTargetFps(fps) {
    const validFps = [30, 60, 90, 120, 144, 165, 240];
    if (!validFps.includes(fps)) {
      fps = validFps.reduce((prev, curr) =>
        Math.abs(curr - fps) < Math.abs(prev - fps) ? curr : prev
      );
      console.warn(`FrameRateController: invalid FPS, clamped to ${fps}`);
    }
    this.targetFps = fps;
    this.frameTime = 1000 / fps;
    this.deltaAccumulator = 0;
    console.log(`FrameRateController: target FPS = ${fps} (${this.frameTime.toFixed(2)}ms/frame)`);
  }

  /**
   * Called every rAF — returns true if we should render.
   * PERF: No object allocation, no .reduce(), no array mutation.
   */
  shouldRender() {
    const now = performance.now();
    const delta = now - this.lastFrameTime;
    this.lastFrameTime = now;

    this.deltaAccumulator += delta;

    if (this.deltaAccumulator < this.frameTime) {
      return false; // Not yet time for the next frame
    }

    this.deltaAccumulator -= this.frameTime;

    // Drain excess accumulation to avoid spiral-of-death frame bursts
    if (this.adaptiveSkipping && this.deltaAccumulator > this.maxFrameBudgetOverrun) {
      this.droppedFrames++;
      this.deltaAccumulator = 0;
    }

    // Ring-buffer push — O(1), no GC pressure
    this._hist[this._histIdx] = delta;
    this._histIdx = (this._histIdx + 1) % this._histLen;
    if (!this._histFull && this._histIdx === 0) this._histFull = true;

    this.frameCount++;

    // FPS sample every 500ms — cheap integer math only
    if (now - this.lastFpsUpdate >= 500) {
      const timeDelta = now - this.lastFpsUpdate;
      this.actualFps = Math.round((this.frameCount * 1000) / timeDelta);
      this.frameCount = 0;
      this.lastFpsUpdate = now;
    }

    return true;
  }

  /**
   * Variance calculation — only called when getMetrics() is requested (stats display).
   * NOT on the hot render path.
   */
  _calcVariance() {
    const n = this._histFull ? this._histLen : this._histIdx;
    if (n < 2) return 0;
    let sum = 0;
    for (let i = 0; i < n; i++) sum += this._hist[i];
    const mean = sum / n;
    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const d = this._hist[i] - mean;
      varSum += d * d;
    }
    return Math.sqrt(varSum / n);
  }

  _calcAvgFrameTime() {
    const n = this._histFull ? this._histLen : this._histIdx;
    if (n === 0) return this.frameTime;
    let sum = 0;
    for (let i = 0; i < n; i++) sum += this._hist[i];
    return sum / n;
  }

  /** Called infrequently (DevGUI stats panel, 500ms interval). */
  getMetrics() {
    return {
      targetFps: this.targetFps,
      actualFps: this.actualFps,
      avgFrameTime: this._calcAvgFrameTime(),
      targetFrameTime: this.frameTime,
      droppedFrames: this.droppedFrames,
      frameTimeVariance: this._calcVariance(),
    };
  }

  // Kept for backwards compat — now delegates to _calcVariance()
  calculateVariance() { return this._calcVariance(); }

  getTargetFps()  { return this.targetFps; }
  getActualFps()  { return this.actualFps; }

  reset() {
    this.lastFrameTime = performance.now();
    this.deltaAccumulator = 0;
    this.frameCount = 0;
    this.droppedFrames = 0;
    this._hist.fill(0);
    this._histIdx = 0;
    this._histFull = false;
    this.lastFpsUpdate = performance.now();
  }

  setAdaptiveSkipping(enabled) { this.adaptiveSkipping = enabled; }
}

export function createFrameRateController(targetFps = 60) {
  return new FrameRateController(targetFps);
}
