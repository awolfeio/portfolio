import { viewportSize, viewportType } from "./viewport.js";
import { cursorCheck } from "./cursor-element.js";
import initSmoothScroll from "./smooth-scroll.js";
import { fogBG } from "./background.js";
import { loadingSplash } from "./loading-screen.js";
import { rotateTitles } from "./type-anim.js";
import { setupEventHandlers, setupHeaderInitialization, setupMobileMenuHandlers } from "./event-handlers.js";
import { setupResizeHandlers } from "./resize-handlers.js";

/**
 * Initialize the application on first load
 */
export function initializeApp() {
  // Override any Barba container styles for the first page load
  removeInitialContainerStyles();

  setupEvents();
  setupVisuals();
  detectFirstPage();
  loadingSplash();
  setupMobileMenuHandlers();
  setupRotatingTitles();
  setupResizeHandlers();
}

/**
 * Remove any initial styling that might hide containers
 * This is necessary because Barba transitions add styles that hide containers
 */
function removeInitialContainerStyles() {
  // First, ensure any existing barba containers are visible
  const barbaContainer = document.querySelector("[data-barba='container']");
  if (barbaContainer) {
    barbaContainer.style.opacity = "1";
    barbaContainer.style.visibility = "visible";
  }

  // Also set the page and its direct children to visible
  const pageContent = document.querySelector("main .page");
  if (pageContent) {
    pageContent.style.opacity = "1";
    const directChildren = pageContent.children;
    for (let i = 0; i < directChildren.length; i++) {
      directChildren[i].style.opacity = "1";
    }
  }
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
  initSmoothScroll();
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
  // We don't need to set this up here as loading-screen.js
  // will initialize the title rotation after the loading splash
  // This prevents duplicate initialization
  // The initialization is now handled in loading-screen.js with proper timing
}
