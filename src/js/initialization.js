import { viewportSize, viewportType } from "./viewport.js";
import { cursorCheck } from "./cursor-element.js";
import smoothScroll from "./smooth-scroll.js";
import { fogBG } from "./background.js";
import { loadingSplash } from "./loading-screen.js";
import { rotateTitles } from "./type-anim.js";
import { setupEventHandlers, setupHeaderInitialization, setupMobileMenuHandlers } from "./event-handlers.js";
import { setupResizeHandlers } from "./resize-handlers.js";

/**
 * Initialize the application on first load
 */
export function initializeApp() {
  setupEvents();
  setupVisuals();
  detectFirstPage();
  loadingSplash();
  setupMobileMenuHandlers();
  setupRotatingTitles();
  setupResizeHandlers();
}

/**
 * Setup DOM-related event handlers
 */
function setupEvents() {
  // Set up event handlers
  setupEventHandlers();

  // Setup header initialization
  setupHeaderInitialization();

  // Make stage visible
  document.getElementById("stage").style.display = "block";
  document.getElementById("stage").style.background = "none";
}

/**
 * Setup visual and viewport components
 */
function setupVisuals() {
  viewportType();
  viewportSize();
  cursorCheck();
  smoothScroll();
}

/**
 * Detect first page and apply appropriate settings
 */
function detectFirstPage() {
  const mainContainer = document.querySelector("main > div");
  if (!mainContainer) return;

  const firstPage = mainContainer.dataset.barbaNamespace;

  if (firstPage === "about") {
    fogBG.setOptions({
      blurFactor: 0.35,
      speed: 0.6,
      zoom: 2.0,
    });
    document.querySelector("nav a.about")?.classList.add("active");
  } else if (firstPage === "works") {
    document.querySelector("nav a.works")?.classList.add("active");
  } else if (firstPage === "contact") {
    document.querySelector("nav a.contact")?.classList.add("active");
  }
}

/**
 * Setup rotating titles on index page
 */
function setupRotatingTitles() {
  setTimeout(function () {
    if (document.querySelector("main .page#index")) {
      rotateTitles();
    }
  }, 2500);
}
