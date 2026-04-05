# Performance Optimization Plan

Based on the investigation into the background visuals and homepage animations, the 100-250ms frame drops occurring precisely every five seconds on lower-tier machines are caused by **severe layout thrashing** within the typography animation sequencing.

## 1. The Root Cause: Layout Thrashing in `type-anim.js`
The `type-anim.js` file contains a massive performance bottleneck related to how characters are animated.

In `rotateTitles`, there is an interval set to run every 5000ms (5 seconds):
```javascript
window.titleAnimationInterval = setInterval(() => {
  rotateToNextTitle();
}, 5000);
```

When this interval fires, it resets the characters for the actively exiting title and the next entering title by calling `resetCharacters()` and `animateChars()`. Both of these functions loop over every single character (which has been separated into its own `.char` element) and forcefully trigger a synchronous DOM reflow:

```javascript
// Inside resetCharacters and numerous other functions:
chars.forEach((char) => {
  char.classList.remove("reveal-char");
  // ...
  void char.offsetWidth; // <--- THE CULPRIT
});
```

By requesting `char.offsetWidth` inside a loop altering DOM classes, the browser is forced to halt JavaScript execution, recalculate the layout of the entire tree, and repaint for *each individual character*. If a title has 30 characters, the browser completely redraws the layout 30 times in a single frame. This locks the main thread for 100-250ms, starving both the animation and the WebGL background's `requestAnimationFrame` loop.

### The Fix
Remove `void char.offsetWidth;` from inside the character loops across the entire file (`resetCharacters`, `animateChars`, `revealH1Characters`, and `animateDataSplittingChars`). 

If you absolutely must force a reflow to restart a CSS animation, do it **once** on the parent container after the loop has altered all the children:
```javascript
// Fast & Optimized
chars.forEach((char) => {
  char.classList.remove("reveal-char");
});
// Force a single reflow for the whole block
if (chars.length > 0) {
  void chars[0].parentElement.offsetWidth; 
}
```

## 2. Background Visual Performance (`BackgroundRenderer.js` & Co.)
The background WebGL visuals are generally extremely well-optimized:
- Uses an `OrthographicCamera` with depth/stencil disabled.
- Fixes `devicePixelRatio` to `1.0` to avoid hidden resolution scaling overhead.
- Binds rendering correctly to avoid garbage collection pressure during the RAF loop.
- Modulates uniforms effectively and batches performance checks.
- Uses `AdaptiveQualityManager` which intelligently dials down octaves and iterations on lower-tier hardware.

**Observations & Optimization strategies:**
- The background framerate on low-tier machines is directly victim to the JS thread being blocked every 5 seconds. Once the layout thrashing in `type-anim` is resolved, the renderer's `requestAnimationFrame` will stop hanging.
- No further major changes are needed to the background since the `AdaptiveQualityManager` appropriately downgrades shader quality. However, ensure that WebGL Context Loss is handled appropriately to prevent crashes when the GPU hangs overlong. 
- You may consider checking whether the `setInterval` in `type-anim.js` could be paused when the tab is hidden (using the `Visibility API`), similar to what is effectively done in `BackgroundRenderer.js`, to prevent background CPU spooling.

## Summary Checklist
- [ ] Refactor `resetCharacters` in `type-anim.js` to batchDOM reads/writes and trigger reflow only once.
- [ ] Refactor `animateChars` in `type-anim.js` to fix the same looping offsetWidth trigger.
- [ ] Refactor `revealH1Characters` and `animateDataSplittingChars` in `type-anim.js` to remove inline offsetWidth reads.
- [ ] Consider pausing the `5000ms` title rotating interval globally when the document is not visible.
- [ ] Allow the AdaptiveQualityManager settings to persist with the newly freed main thread.
