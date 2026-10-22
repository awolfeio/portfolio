import { gsap } from "gsap";

/**
 * Fallback loading spinner for slow page transitions
 *
 * Shown fixed in the center of the viewport only when the incoming page has
 * not started rendering within SHOW_DELAY after the old page faded out.
 * If it did show, it fades out quickly before the new content fades in.
 */

const SHOW_DELAY = 4000;
const FADE_IN_DURATION = 0.3;
const FADE_OUT_DURATION = 0.18;

let spinnerEl = null;
let showTimer = null;
let isVisible = false;

function getSpinner() {
  if (spinnerEl && document.body.contains(spinnerEl)) return spinnerEl;

  spinnerEl = document.createElement("div");
  spinnerEl.className = "page-loading-spinner";
  spinnerEl.setAttribute("role", "status");
  spinnerEl.setAttribute("aria-live", "polite");
  spinnerEl.innerHTML = `
    <span class="page-loading-spinner__ring" aria-hidden="true"></span>
    <span class="page-loading-spinner__label">Loading</span>
  `;
  document.body.appendChild(spinnerEl);
  return spinnerEl;
}

/**
 * Start the countdown; the spinner appears only if hide() isn't called within SHOW_DELAY
 */
export function scheduleSpinner(delay = SHOW_DELAY) {
  clearTimeout(showTimer);
  showTimer = setTimeout(() => {
    showTimer = null;
    const el = getSpinner();
    isVisible = true;
    gsap.killTweensOf(el);
    el.classList.add("is-active");
    gsap.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: FADE_IN_DURATION, ease: "power1.out" });
  }, delay);
}

/**
 * Cancel a pending spinner, or fade out a visible one
 * @returns {Promise} Resolves once the spinner is fully gone (immediately if it never showed)
 */
export function hideSpinner() {
  clearTimeout(showTimer);
  showTimer = null;

  if (!isVisible || !spinnerEl) return Promise.resolve();
  isVisible = false;

  const el = spinnerEl;
  return new Promise((resolve) => {
    gsap.killTweensOf(el);
    gsap.to(el, {
      autoAlpha: 0,
      duration: FADE_OUT_DURATION,
      ease: "power1.in",
      onComplete: () => {
        el.classList.remove("is-active");
        resolve();
      },
    });
  });
}

export default {
  schedule: scheduleSpinner,
  hide: hideSpinner,
};
