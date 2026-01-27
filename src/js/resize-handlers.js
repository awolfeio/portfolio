import { viewportType, viewportSize } from "./viewport.js";
import { cursorCheck } from "./cursor-element.js";
import { setupUnifiedReveals } from "./scroll-triggers.js";
import initSmoothScroll from "./smooth-scroll.js";

// Store viewport measurements
let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;

/**
 * Setup resize event handlers
 */
export function setupResizeHandlers() {
  let resizeFunctionsTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeFunctionsTimer);
    resizeFunctionsTimer = setTimeout(handleResize, 400);
  });
}

/**
 * Handle resize operations
 */
function handleResize() {
  const newViewportHeight = window.innerHeight;
  const newViewportWidth = window.innerWidth;

  if (newViewportWidth === viewportWidth) {
    // Background resize is handled automatically by BackgroundRenderer
    return;
  } else {
    document.body.classList.add("resizing");
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    viewportSize();
    viewportType();
    cursorCheck();

    // Run animations using the unified reveal system
    setupUnifiedReveals();

    if (window.matchMedia("(pointer: coarse)").matches && window.matchMedia("(hover: none)").matches) {
      document.querySelector(".cursor-element")?.classList.add("hidden");
      document.documentElement.classList.add("touch-device");
    }

    setTimeout(function () {
      // Background resize is handled automatically by BackgroundRenderer
      initSmoothScroll();
      document.body.classList.remove("resizing");
    }, 1000);
  }
}
