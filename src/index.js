import "./scss/main.scss";

// Force scroll to top on page reload
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

// Intercept beforeunload to freeze scroll position at top
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

// Immediately force to top before DOM renders
window.scrollTo(0, 0);

// Import core initialization modules
import { initializeApp } from "./js/initialization.js";
import { initializeBarba } from "./js/barba-transitions.js";
import { setupVideoControls } from "./js/media-handlers.js";
import { setupEventHandlers } from "./js/event-handlers.js";
import "./js/text-fill.js"; // Auto-initializes text fill for .fill-container and .fill-viewport elements

// Initialize the application
document.addEventListener("DOMContentLoaded", init);

/**
 * Main initialization function
 * This properly sequences the loading flow to ensure proper visibility
 */
function init() {
  // Ensure we are at the top and forcefully keep it there during initial load
  window.scrollTo(0, 0);

  // Clear any hash to prevent native anchor jumping
  if (window.location.hash) {
    history.replaceState(null, document.title, window.location.pathname + window.location.search);
  }

  // Actively combat browser scroll restoration by intercepting native scroll events
  let isPageLoading = true;
  const preventScroll = () => {
    if (isPageLoading) {
      window.scrollTo(0, 0);
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      }
    }
  };
  window.addEventListener('scroll', preventScroll, { passive: false });

  // Release the scroll lock fully ONLY after all assets load + a buffer
  window.addEventListener('load', () => {
    setTimeout(() => {
      isPageLoading = false;
      window.removeEventListener('scroll', preventScroll);
    }, 100);
  });

  // Initialize application first (includes loading screen)
  initializeApp();

  // Initialize Barba.js for page transitions first
  initializeBarba();

  // Setup event handlers after Barba is initialized
  setupEventHandlers();

  // Setup video controls
  setupVideoControls();
}
