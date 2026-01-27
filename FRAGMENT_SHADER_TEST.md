# Fragment Shader Isolation Test

## Changes Made

### 1. Film Grain Disabled ✅

**File:** `src/js/background/shaders/fogShader.frag.glsl`

Commented out the entire film grain application block (lines 385-391):

```glsl
// ===== FILM GRAIN TEMPORARILY DISABLED FOR PERFORMANCE TESTING =====
// if(u_grainIntensity > 0.01) {
//     float grainAspectRatio = mix(1.0, u_resolution.x / u_resolution.y, clamp(u_grainAspect, 0.0, 1.0));
//     float grain = filmGrain(vUv, u_time, u_grainSize, u_grainSpeed, grainAspectRatio, u_grainComplexity, u_grainFrameHold);
//     finalColor = applyGrain(finalColor, grain, u_grainIntensity, u_grainBlendMode);
// }
// ===== END GRAIN DISABLE ====
```

**Impact:** Film grain is now completely bypassed, zero computational cost.

### 2. Performance Stats Always Enabled ✅

**File:** `src/js/background/index.js`

Changed from conditional to always-on:

```javascript
// OLD
this.performanceMonitor = createPerformanceMonitor(
  isDev && window.location.search.includes("stats=true")
);

// NEW
this.performanceMonitor = createPerformanceMonitor(true); // Always enabled for testing
```

**Impact:** Stats overlay will appear on page load automatically without needing `?stats=true`.

---

## Testing Focus

With grain disabled, we can now measure the **pure fragment shader performance**:

### What to Look For:

1. **FPS Achievement**

   - Can we hit 240fps without grain?
   - If YES → Grain was the bottleneck (expected)
   - If NO → There are other shader issues

2. **Frame Time**

   - Target at 240fps: 4.16ms
   - Without grain, should be: ??ms
   - This tells us the baseline fog shader cost

3. **Dropped Frames**
   - Should drop to ZERO or very low (<10)
   - If still dropping frames → investigate FBM/noise functions

### Expected Results:

**Hypothesis:** Without grain, RTX 4090 should easily hit 240fps.

**If achieved (240fps stable):**

- ✅ Confirms grain was the primary bottleneck
- ✅ Re-enable optimized grain
- ✅ Should still hit 240fps

**If NOT achieved (<240fps):**

- 🔍 Investigate FBM octaves (currently 3)
- 🔍 Check domain warping cost (2 warp octaves)
- 🔍 Examine conditional branches in shader
- 🔍 Profile color mixing complexity

---

## Baseline Measurements

Record these metrics **WITHOUT grain** for comparison:

```
=== BASELINE (No Grain) ===
FPS: _____ / 240
Frame Time: _____ ms
Dropped Frames: _____
Target Frame Time: 4.16ms

Quality Tier: _____
FBM Octaves: 3
Warp Octaves: 2
Detail Amount: _____
```

Then compare to **WITH optimized grain**:

```
=== WITH OPTIMIZED GRAIN ===
FPS: _____ / 240
Frame Time: _____ ms
Dropped Frames: _____
Grain Cost: _____ ms (difference)

Expected Grain Cost: 0.3-0.5ms
```

---

## Next Steps

### Scenario A: Hits 240fps without grain ✅

1. Re-enable optimized grain (uncomment block)
2. Verify still hits 240fps
3. If yes → optimization successful! 🎉
4. If no → grain optimization needs more work

### Scenario B: Still <240fps without grain ⚠️

1. Check current FPS achieved: **\_**
2. Measure frame time: **\_**ms
3. Calculate remaining budget: 4.16ms - **\_**ms = **\_**ms
4. Profile next bottleneck:
   - Try reducing FBM octaves to 2
   - Try reducing warp octaves to 1
   - Try simplifying color mixing

---

## How to Re-Enable Grain

When ready to test optimized grain:

**File:** `src/js/background/shaders/fogShader.frag.glsl`

Uncomment lines 385-391:

```glsl
// Remove these comment markers:
// ===== FILM GRAIN TEMPORARILY DISABLED FOR PERFORMANCE TESTING =====
if(u_grainIntensity > 0.01) {
    float grainAspectRatio = mix(1.0, u_resolution.x / u_resolution.y, clamp(u_grainAspect, 0.0, 1.0));
    float grain = filmGrain(vUv, u_time, u_grainSize, u_grainSpeed, grainAspectRatio, u_grainComplexity, u_grainFrameHold);
    finalColor = applyGrain(finalColor, grain, u_grainIntensity, u_grainBlendMode);
}
// ===== END GRAIN DISABLE ====
```

---

## Stats Overlay Info

The overlay will now show automatically. Watch these key metrics:

**FPS Section:**

- Current FPS / Target FPS
- Green = good (≥95%), Yellow = ok (85-94%), Red = poor (<85%)

**TIMING Section:**

- Frame time in milliseconds
- Compare to 4.16ms target for 240fps

**QUALITY Section:**

- Current quality tier
- Grain hold setting (won't matter while disabled)

**ADAPTIVE Section:**

- Shows if system wants to upgrade/downgrade

---

## Success Criteria

✅ **240fps achieved** without grain  
✅ **Frame time < 4.16ms** consistently  
✅ **Dropped frames = 0**  
✅ **After re-enabling optimized grain: still 240fps**

If all above = SUCCESS! The optimization worked! 🚀
