import { viewportType, viewportSize } from "./viewport.js";
import { cursorCheck } from "./cursor-element.js";
import { fadeInReveal, revealSplitTexts } from "./scroll-triggers.js";
import initSmoothScroll from "./smooth-scroll.js";
import { fogBG } from "./background.js";

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
    fogBG.resize();
    return;
  } else {
    document.body.classList.add("resizing");
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    viewportSize();
    viewportType();
    cursorCheck();
    fadeInReveal();
    revealSplitTexts();

    if (window.matchMedia("(pointer: coarse)").matches && window.matchMedia("(hover: none)").matches) {
      document.querySelector(".cursor-element")?.classList.add("hidden");
      document.documentElement.classList.add("touch-device");
    }

    setTimeout(function () {
      fogBG.resize();
      initSmoothScroll();
      document.body.classList.remove("resizing");
    }, 1000);
  }
}
