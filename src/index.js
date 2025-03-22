import "./scss/main.scss";

// Import core initialization modules
import { initializeApp } from "./js/initialization.js";
import { initializeBarba } from "./js/barba-transitions.js";
import { setupVideoControls, preloadVideos } from "./js/media-handlers.js";
import { setupEventHandlers } from "./js/event-handlers.js";

// Video assets for preloading
import video1 from "./assets/videos/MagsHomepageArticlePage.mp4";
import video2 from "./assets/videos/IssuePageCategoryPage2.mp4";
import video3 from "./assets/videos/MagsColorReel2.mp4";
import video4 from "./assets/videos/MagsTypographyReel.mp4";

// Initialize the application
document.addEventListener("DOMContentLoaded", init);

// On document ready
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
  setupEventHandlers();
});

/**
 * Main initialization function
 */
function init() {
  // Preload videos
  const videosToPreload = [video1, video2, video3, video4];
  preloadVideos(videosToPreload);

  // Setup video controls
  setupVideoControls();

  // Initialize Barba.js for page transitions
  initializeBarba();
}
