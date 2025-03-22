import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { viewportType } from "./viewport.js";

let lenis;

export default function smoothScroll() {
  // Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Check if it's a touch device and adjust smooth scrolling accordingly
  const isTouchDevice =
    (window.matchMedia("(pointer: coarse)").matches && window.matchMedia("(hover: none)").matches) ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  // Destroy existing instance if it exists
  if (lenis) {
    lenis.destroy();
  }

  // Initialize Lenis with appropriate settings
  lenis = new Lenis({
    duration: isTouchDevice ? 1.0 : 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false, // Usually better UX to disable smooth scrolling on touch devices
    infinite: false,
  });

  // Connect Lenis to ScrollTrigger
  lenis.on("scroll", ScrollTrigger.update);

  // Connect GSAP ticker to Lenis
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // Add ScrollTrigger listener for Lenis
  gsap.ticker.lagSmoothing(0);

  // Make header initialized class be added on scroll
  lenis.on("scroll", ({ scroll }) => {
    if (scroll > 5 && !document.querySelector("header").classList.contains("initialized")) {
      document.querySelector("header").classList.add("initialized");
    }
  });

  return lenis;
}

// Stop Lenis scrolling (useful for page transitions)
export function stopScroll() {
  if (lenis) {
    lenis.stop();
  }
}

// Start Lenis scrolling
export function startScroll() {
  if (lenis) {
    lenis.start();
  }
}

// Export lenis instance for external use
export { lenis };
