import "./scss/main.scss";

// Force scroll to top on page reload
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}
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
  // Ensure we are at the top
  window.scrollTo(0, 0);

  // Initialize application first (includes loading screen)
  initializeApp();

  // Initialize Barba.js for page transitions first
  initializeBarba();

  // Setup event handlers after Barba is initialized
  setupEventHandlers();

  // Setup video controls
  setupVideoControls();
}
