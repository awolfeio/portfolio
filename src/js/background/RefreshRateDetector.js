/**
 * RefreshRateDetector - Detects display refresh rate using frame timing.
 *
 * PERF: Uses quick detection (60 samples) by default to keep the overlapping
 * RAF window as short as possible (~1s instead of ~2s). During detection a
 * second RAF chain runs concurrently with the renderer's own loop; on mobile
 * this can double-schedule the GPU at vsync. Shorter detection = less overlap.
 *
 * A module-level singleton result is cached so the detector is only ever run
 * once per page load — subsequent calls resolve immediately.
 */

let _cachedResult = null; // Module-level cache — never detect twice per load

export class RefreshRateDetector {
  constructor() {
    this.samples = [];
    this.maxSamples = 60; // PERF: 60 instead of 120 — halves concurrent-RAF time
    this.detecting = false;
    this.result = null;
    this._rafId = null;   // Track RAF id so cancel() is reliable
  }

  /**
   * Detect the display refresh rate.
   * @returns {Promise<{refreshRate: number, confidence: number}>}
   */
  async detect() {
    // Return cached result instantly — no second RAF chain needed
    if (_cachedResult) return _cachedResult;

    return new Promise((resolve) => {
      this.samples = [];
      this.detecting = true;
      this.result = null;

      let lastTime = performance.now();
      let frameCount = 0;

      const measureFrame = (currentTime) => {
        if (!this.detecting) {
          resolve(this.result || { refreshRate: 60, confidence: 0, frameTime: 16.67 });
          return;
        }

        const delta = currentTime - lastTime;

        // Skip first frame and clear outliers (> 100ms = tab was hidden)
        if (frameCount > 0 && delta > 0 && delta < 100) {
          this.samples.push(delta);
        }

        lastTime = currentTime;
        frameCount++;

        if (this.samples.length < this.maxSamples) {
          this._rafId = requestAnimationFrame(measureFrame);
        } else {
          this.detecting = false;
          this._rafId = null;
          this.result = this.analyzeFrameTimes();
          _cachedResult = this.result; // cache for future calls
          resolve(this.result);
        }
      };

      this._rafId = requestAnimationFrame(measureFrame);
    });
  }

  /**
   * Analyze collected frame times to determine refresh rate.
   * @returns {{refreshRate: number, confidence: number, frameTime: number}}
   */
  analyzeFrameTimes() {
    if (this.samples.length === 0) {
      return { refreshRate: 60, confidence: 0, frameTime: 16.67 };
    }

    // Median is more robust than mean for noisy mobile frame times
    const sorted = [...this.samples].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];

    // Standard deviation for confidence scoring
    const len = this.samples.length;
    let sum = 0;
    for (let i = 0; i < len; i++) sum += this.samples[i];
    const mean = sum / len;
    let varSum = 0;
    for (let i = 0; i < len; i++) {
      const d = this.samples[i] - mean;
      varSum += d * d;
    }
    const stdDev = Math.sqrt(varSum / len);

    // Match to common refresh rates
    const commonRates = [
      { hz: 240, minTime: 3.8,  maxTime: 4.5  },
      { hz: 165, minTime: 5.8,  maxTime: 6.3  },
      { hz: 144, minTime: 6.6,  maxTime: 7.2  },
      { hz: 120, minTime: 8.0,  maxTime: 8.7  },
      { hz: 90,  minTime: 10.8, maxTime: 11.5 },
      { hz: 60,  minTime: 16.0, maxTime: 17.5 },
    ];

    let matchedRate = 60;
    let matchedFrameTime = 16.67;
    for (const rate of commonRates) {
      if (median >= rate.minTime && median <= rate.maxTime) {
        matchedRate = rate.hz;
        matchedFrameTime = 1000 / rate.hz;
        break;
      }
    }

    const maxAcceptableStdDev = 2.0;
    const confidence = Math.max(0, Math.min(1, 1 - (stdDev / maxAcceptableStdDev)));

    console.log(`RefreshRateDetector: ${matchedRate}Hz (median: ${median.toFixed(2)}ms, stdDev: ${stdDev.toFixed(2)}ms, confidence: ${(confidence * 100).toFixed(0)}%)`);

    return { refreshRate: matchedRate, confidence, frameTime: matchedFrameTime, median, stdDev, rawHz: 1000 / median };
  }

  /** Quick detection alias — kept for API compatibility, now same as detect(). */
  async detectQuick() {
    return this.detect();
  }

  getLastResult() {
    return this.result || _cachedResult || { refreshRate: 60, confidence: 0, frameTime: 16.67 };
  }

  isDetecting() { return this.detecting; }

  cancel() {
    this.detecting = false;
    if (this._rafId !== null) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
  }
}

/**
 * Convenience function. Always uses the cached result after first call.
 */
export async function detectRefreshRate() {
  const detector = new RefreshRateDetector();
  return detector.detect();
}
