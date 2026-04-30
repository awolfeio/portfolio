/**
 * Optional max rate for BackgroundRenderer draw + uniform updates (the shader path
 * used by BackgroundManager). `null` or ≤0 means uncapped (one frame per rAF).
 *
 * Time stays correct: skipped rAF ticks do not call `clock.getDelta()`, so the next
 * update receives the accumulated real delta.
 *
 * @type {{ maxFpsDesktop: number | null, maxFpsMobile: number | null }}
 */
export const backgroundFrameRateCap = {
  maxFpsDesktop: null,
  maxFpsMobile: 45,
  // Example: 24 for film-style cap on both:
  // maxFpsDesktop: 24,
  // maxFpsMobile: 24,
};

function isCapMobileViewport() {
  if (typeof navigator === "undefined") return false;
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 600
  );
}

/** @returns {number} positive FPS cap, or 0 if uncapped */
export function getActiveBackgroundFrameRateCap() {
  const pick = isCapMobileViewport()
    ? backgroundFrameRateCap.maxFpsMobile
    : backgroundFrameRateCap.maxFpsDesktop;
  if (pick == null || pick <= 0) return 0;
  const n = Number(pick);
  return Number.isFinite(n) && n > 0 ? n : 0;
}
