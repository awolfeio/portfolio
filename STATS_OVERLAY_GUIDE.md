# Enhanced Performance Monitor Stats Overlay

## Overview

The background shader performance monitor has been completely redesigned to show comprehensive real-time metrics about the shader system, including FPS targeting, frame timing, quality settings, and adaptive system status.

## Enabling the Stats Overlay

### Via DevGUI (Recommended)

1. Add `?stats=true` to your URL (e.g., `http://localhost:3000?stats=true`)
2. The performance stats overlay will appear in the bottom-left corner
3. Toggle it on/off using the DevGUI if available

### Programmatically

```javascript
// Enable stats
backgroundManager.getPerformanceMonitor().enable();

// Disable stats
backgroundManager.getPerformanceMonitor().disable();

// Toggle stats
backgroundManager.getPerformanceMonitor().toggle();
```

## Stats Display Sections

### 📊 FPS (Frame Rate)

```
FPS: 238 / 240 (99%)
Avg: 239 | Min: 230 | Dropped: 2
```

- **FPS:** Actual FPS / Target FPS (Percentage of target)
- **Color coding:**
  - 🟢 Green: ≥ 95% of target (excellent)
  - 🟡 Yellow: 85-94% of target (good)
  - 🔴 Red: < 85% of target (poor)
- **Avg:** Rolling average over last 60 frames
- **Min:** Minimum FPS in recent history
- **Dropped:** Number of frames skipped by frame rate controller

### ⏱️ TIMING (Frame Timing)

```
Frame: 4.18ms ±0.32ms
Target: 4.17ms
```

- **Frame:** Average frame time in milliseconds
- **±Jitter:** Frame time variance (lower is smoother)
- **Target:** Ideal frame time for target FPS
  - 240fps = 4.17ms
  - 165fps = 6.06ms
  - 120fps = 8.33ms
  - 60fps = 16.67ms

### 🖥️ DISPLAY (Monitor Info)

```
Refresh: 240Hz
Pixel Ratio: 2.00
```

- **Refresh:** Detected display refresh rate
- **Pixel Ratio:** Device pixel ratio (DPI scaling)

### 🎨 QUALITY (Shader Settings)

```
Tier: ULTRA
Grain Hold: 3.0x
```

- **Tier:** Current quality preset (LOW/MEDIUM/HIGH/ULTRA)
- **Grain Hold:** Film grain update frequency multiplier
  - 1.0x = Every frame (60 updates/sec at 60fps)
  - 2.0x = Every 2nd frame (60 updates/sec at 120fps)
  - 3.0x = Every 3rd frame (80 updates/sec at 240fps)

### 🔄 ADAPTIVE (Auto-Adjust Status)

```
▲ Upgrade | ▼ Downgrade
```

- **▲ Upgrade:** Shows if system can upgrade quality (green = available, gray = not available)
- **▼ Downgrade:** Shows if system can downgrade (orange = available, gray = not available)
- Indicates adaptive system's current state

## Interpreting the Stats

### Healthy Performance

```
FPS: 240 / 240 (100%)    ✅ Perfect
Frame: 4.16ms ±0.2ms     ✅ Low jitter
Tier: ULTRA              ✅ Highest quality
```

### Good Performance

```
FPS: 228 / 240 (95%)     ✅ Acceptable
Frame: 4.38ms ±0.5ms     ✅ Stable
Tier: ULTRA              ✅ Maintaining quality
```

### Performance Issues

```
FPS: 195 / 240 (81%)     ⚠️ Below target
Frame: 5.12ms ±1.2ms     ⚠️ High jitter
▼ Downgrade              ⚠️ May auto-downgrade
```

### After Auto-Downgrade

```
FPS: 120 / 120 (100%)    ✅ Stable at lower target
Tier: HIGH               ℹ️ Reduced quality
Frame: 8.33ms ±0.3ms     ✅ Smooth
```

## Testing Different Configurations

### Test Ultra Quality at 240fps

```javascript
backgroundManager.setTargetFps(240);
backgroundManager.setQuality("ultra");
```

### Test High Quality at 120fps

```javascript
backgroundManager.setTargetFps(120);
backgroundManager.setQuality("high");
```

### Monitor Performance Over Time

```javascript
setInterval(() => {
  const metrics = backgroundManager.getFrameRateMetrics();
  console.table({
    "Target FPS": metrics.targetFps,
    "Actual FPS": metrics.actualFps,
    "Frame Time": `${metrics.avgFrameTime.toFixed(2)}ms`,
    Jitter: `${metrics.frameTimeVariance.toFixed(2)}ms`,
    Dropped: metrics.droppedFrames,
  });
}, 2000);
```

## Performance Targets by Display

### 240Hz Display

- **Target:** 240fps
- **Quality:** Ultra
- **Grain Hold:** 3.0x
- **Expected Frame Time:** ~4.17ms ±0.3ms

### 165Hz Display

- **Target:** 165fps
- **Quality:** High or Ultra
- **Grain Hold:** 2.5x
- **Expected Frame Time:** ~6.06ms ±0.4ms

### 120Hz Display

- **Target:** 120fps
- **Quality:** High
- **Grain Hold:** 2.0x
- **Expected Frame Time:** ~8.33ms ±0.5ms

### 60Hz Display

- **Target:** 60fps
- **Quality:** High
- **Grain Hold:** 1.0x
- **Expected Frame Time:** ~16.67ms ±1.0ms

## Troubleshooting

### Stats not showing?

1. Check URL has `?stats=true`
2. Verify dev mode: `backgroundManager.getPerformanceMonitor().enable()`
3. Open console and check for errors

### FPS stuck at display refresh rate?

- This is expected - browser's rAF caps at display Hz
- Frame rate controller manages sub-refresh targeting

### Adaptive system not working?

```javascript
// Check status
console.log(backgroundManager.getAdaptiveStatus());

// Should show:
// {
//   detectedRefreshRate: 240,
//   currentQuality: 'ultra',
//   targetFps: 240,
//   averageFps: 238,
//   canUpgrade: false,
//   canDowngrade: true
// }
```

### High jitter (frame time variance)?

- Normal: < 1ms
- Acceptable: 1-2ms
- Concerning: > 2ms
- Likely causes: GPU thermal throttling, background processes, browser extensions

## Visual Appearance

The enhanced stats overlay features:

- 🎨 Sleek dark background with green accent border
- 📊 Color-coded performance indicators
- 📏 Organized sections with dividers
- 🔍 Compact yet readable layout
- 💫 Updates in real-time (500ms refresh)

Position: Bottom-left corner (10px margins)
Size: ~280px width, auto height

## Notes

- Stats overlay is **development only** (not shown in production)
- Negligible performance impact (~0.1% CPU overhead)
- All metrics update every 500ms for readability
- Color coding provides at-a-glance performance assessment
