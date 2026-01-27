/**
 * RefreshRateDetector - Detects display refresh rate using frame timing
 * Uses requestAnimationFrame timing analysis to determine monitor refresh rate
 */
export class RefreshRateDetector {
  constructor() {
    this.samples = [];
    this.maxSamples = 120; // Sample 120 frames for accurate detection
    this.detecting = false;
    this.result = null;
  }

  /**
   * Detect the display refresh rate
   * @returns {Promise<{refreshRate: number, confidence: number}>}
   */
  async detect() {
    return new Promise((resolve) => {
      this.samples = [];
      this.detecting = true;
      this.result = null;
      
      let lastTime = performance.now();
      let frameCount = 0;
      
      const measureFrame = (currentTime) => {
        if (!this.detecting) return;
        
        const delta = currentTime - lastTime;
        
        // Only record valid deltas (skip first frame and outliers)
        if (frameCount > 0 && delta > 0 && delta < 100) {
          this.samples.push(delta);
        }
        
        lastTime = currentTime;
        frameCount++;
        
        // Continue sampling until we have enough data
        if (this.samples.length < this.maxSamples) {
          requestAnimationFrame(measureFrame);
        } else {
          this.detecting = false;
          this.result = this.analyzeFrameTimes();
          resolve(this.result);
        }
      };
      
      requestAnimationFrame(measureFrame);
    });
  }

  /**
   * Analyze collected frame times to determine refresh rate
   * @returns {{refreshRate: number, confidence: number, frameTime: number}}
   */
  analyzeFrameTimes() {
    if (this.samples.length === 0) {
      return { refreshRate: 60, confidence: 0, frameTime: 16.67 };
    }

    // Calculate median frame time (more robust than average)
    const sorted = [...this.samples].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];
    
    // Calculate standard deviation for confidence
    const mean = this.samples.reduce((a, b) => a + b, 0) / this.samples.length;
    const variance = this.samples.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / this.samples.length;
    const stdDev = Math.sqrt(variance);
    
    // Convert frame time to refresh rate
    const detectedHz = 1000 / median;
    
    // Match to common refresh rates
    const commonRates = [
      { hz: 240, minTime: 3.8, maxTime: 4.5 },
      { hz: 165, minTime: 5.8, maxTime: 6.3 },
      { hz: 144, minTime: 6.6, maxTime: 7.2 },
      { hz: 120, minTime: 8.0, maxTime: 8.7 },
      { hz: 90, minTime: 10.8, maxTime: 11.5 },
      { hz: 60, minTime: 16.0, maxTime: 17.5 },
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
    
    // Calculate confidence based on timing consistency
    // Lower stdDev = higher confidence
    const maxAcceptableStdDev = 2.0; // ms
    const confidence = Math.max(0, Math.min(1, 1 - (stdDev / maxAcceptableStdDev)));
    
    console.log(`RefreshRateDetector: Detected ${matchedRate}Hz (median: ${median.toFixed(2)}ms, stdDev: ${stdDev.toFixed(2)}ms, confidence: ${(confidence * 100).toFixed(0)}%)`);
    
    return {
      refreshRate: matchedRate,
      confidence: confidence,
      frameTime: matchedFrameTime,
      median: median,
      stdDev: stdDev,
      rawHz: detectedHz
    };
  }

  /**
   * Quick detection with fewer samples (faster but less accurate)
   * @returns {Promise<{refreshRate: number, confidence: number}>}
   */
  async detectQuick() {
    const originalMaxSamples = this.maxSamples;
    this.maxSamples = 60; // Half the samples
    const result = await this.detect();
    this.maxSamples = originalMaxSamples;
    return result;
  }

  /**
   * Get the last detected result without re-detecting
   */
  getLastResult() {
    return this.result || { refreshRate: 60, confidence: 0, frameTime: 16.67 };
  }

  /**
   * Check if currently detecting
   */
  isDetecting() {
    return this.detecting;
  }

  /**
   * Cancel ongoing detection
   */
  cancel() {
    this.detecting = false;
  }
}

/**
 * Convenience function to detect refresh rate
 * @param {boolean} quick - Use quick detection (60 samples vs 120)
 * @returns {Promise<{refreshRate: number, confidence: number}>}
 */
export async function detectRefreshRate(quick = false) {
  const detector = new RefreshRateDetector();
  return quick ? detector.detectQuick() : detector.detect();
}
