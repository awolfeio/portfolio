import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

// PERFORMANCE: Create custom ease ONCE at module load, not per-mousemove
const cursorEase = CustomEase.create("cursorEase", ".14,.8,.28,.99");

// PERFORMANCE: Cache all DOM references to avoid repeated querySelector calls
let cursorEl = null;
let cursorEffect = null;
let cursorWrapper = null;
let cursorSpan = null;

// PERFORMANCE: Track animation state to avoid redundant GSAP calls
let isVisible = false;
let pendingMove = null;
let rafId = null;

// Magnifying glass state
let magnifyGlass = null;
let currentLargePhoto = null;
let magnifyRafId = null;
let isZoomedIn = false; // Track zoom toggle state
const DEFAULT_ZOOM = 1.26;
const ZOOMED_ZOOM = DEFAULT_ZOOM * 1.1;

// Animated zoom level for smooth transitions
let currentZoomLevel = { value: DEFAULT_ZOOM };

/**
 * Initialize cursor element and set up optimized movement tracking
 */
export function cursorElement() {
  document.addEventListener("DOMContentLoaded", function () {
    // Create cursor HTML
    const cursorHtml =
      '<div class="cursor-element"><div class="cursor-wrapper"><div class="cursor-effect"></div><span></span></div></div>';
    document.body.insertAdjacentHTML("afterbegin", cursorHtml);

    // PERFORMANCE: Cache DOM references ONCE
    cursorEl = document.querySelector(".cursor-element");
    cursorEffect = document.querySelector(".cursor-effect");
    cursorWrapper = document.querySelector(".cursor-wrapper");
    cursorSpan = cursorEl?.querySelector("span");

    if (!cursorEl) return;

    // Create magnifying glass element
    createMagnifyingGlass();

    // Set initial position
    gsap.set(cursorEl, { xPercent: -50, yPercent: -50 });

    // PERFORMANCE: Use a single mousemove handler with RAF throttling
    let hasShown = false;
    
    window.addEventListener("mousemove", (e) => {
      // Store pending move position
      pendingMove = { x: e.clientX, y: e.clientY };
      
      // Show cursor on first move (only once)
      if (!hasShown) {
        hasShown = true;
        gsap.to(cursorEl, { 
          opacity: 1, 
          duration: 0.8, 
          delay: 0.4,
          overwrite: true 
        });
      }
      
      // PERFORMANCE: Batch moves with RAF to avoid per-event animations
      if (!rafId) {
        rafId = requestAnimationFrame(processPendingMove);
      }
    }, { passive: true });
  });
}

/**
 * Process pending cursor move using RAF batching
 * This prevents creating new GSAP tweens on every mousemove
 */
function processPendingMove() {
  rafId = null;
  
  if (!pendingMove || !cursorEl) return;
  
  // PERFORMANCE: Use gsap.quickTo for high-frequency updates (if available)
  // Otherwise use standard to() with overwrite to kill previous tweens
  gsap.to(cursorEl, {
    duration: 1.4,
    ease: cursorEase,
    x: pendingMove.x,
    y: pendingMove.y,
    overwrite: "auto" // Kill conflicting tweens to prevent buildup
  });
  
  pendingMove = null;
}

// Initialize on load
cursorElement();

/**
 * Set up cursor hover states and interactions
 * OPTIMIZED: Uses cached DOM references and event delegation
 */
export function cursorCheck() {
  // Early exit if cursor wasn't created
  if (!cursorEl) {
    cursorEl = document.querySelector(".cursor-element");
    cursorEffect = document.querySelector(".cursor-effect");
  }
  
  if (!cursorEl) return;

  // Hide if touch device
  if (window.matchMedia("(pointer: coarse)").matches && window.matchMedia("(hover: none)").matches) {
    cursorEl.classList.add("hidden");
    return; // No need for hover handlers on touch
  }

  // PERFORMANCE: Use event delegation on document.body instead of per-element listeners
  // This dramatically reduces the number of event listeners
  
  const interactiveSelector = "a, button, code, input, select, textarea, span.email, svg.play, svg.pause";
  const skillsSelector = ".skills-wrapper > div";
  
  // Single mouseenter handler using event delegation
  document.body.addEventListener("mouseenter", (e) => {
    const target = e.target;
    
    // Check for logo
    if (target.closest(".logo")) {
      cursorEl.classList.add("logo");
      // Don't return, allow active state to apply if it's a link
    }
    
    // Check for skills wrapper
    if (target.closest(skillsSelector)) {
      cursorEl.classList.add("hide");
      return;
    }
    
    // Check for interactive elements
    if (target.closest(interactiveSelector)) {
      const el = target.closest(interactiveSelector);
      if (!el.classList.contains("active") && !el.classList.contains("logo")) {
        cursorEl.classList.add("active", "hover");
        cursorEffect?.classList.add("active", "hover");
      }
    }
  }, true); // Use capture phase for delegation

  // Single mouseleave handler using event delegation
  document.body.addEventListener("mouseleave", (e) => {
    const target = e.target;
    const related = e.relatedTarget;
    
    // Check for logo - only remove if leaving the logo container
    if (target.closest(".logo")) {
      if (!related || !related.closest(".logo")) {
        cursorEl.classList.remove("logo");
      }
    }
    
    // Check for skills wrapper
    if (target.closest(skillsSelector)) {
      if (!related || !related.closest(skillsSelector)) {
        cursorEl.classList.remove("hide");
      }
      return;
    }
    
    // Check for interactive elements
    const interactiveEl = target.closest(interactiveSelector);
    if (interactiveEl) {
      // Only remove if we are not moving to a descendant or the same element
      // (e.g. moving from child to parent, or parent to external)
      const relatedInteractive = related ? related.closest(interactiveSelector) : null;
      if (relatedInteractive !== interactiveEl) {
        cursorEl.classList.remove("active", "hover");
        cursorEffect?.classList.remove("active", "hover");
      }
    }
  }, true);

  // Mouse down/up for click animation
  document.body.addEventListener("mousedown", () => {
    cursorEl.classList.add("mouse-down");
  }, { passive: true });

  document.body.addEventListener("mouseup", () => {
    cursorEl.classList.remove("mouse-down");
  }, { passive: true });

  // Click handler for animations
  document.body.addEventListener("click", (e) => {
    const target = e.target;
    
    // Check if clicking an interactive element
    const clickable = target.closest("a:not(.active), button, input, select, textarea, span.email, svg.play, svg.pause");
    
    // Only trigger ripple on interactive elements
    if (!clickable) return;
    
    // Prevent default on active elements (navigation)
    if (clickable.classList.contains("active")) {
      e.preventDefault();
      return;
    }
    
    // Trigger click animation for interactive elements
    cursorEffect?.classList.remove("active");
    cursorEl.classList.add("clicked");
    
    // Use single timeout for cleanup
    setTimeout(() => {
      cursorEl.classList.remove("clicked");
      
      // Re-check hover state after click animation is done
      // Only check if we are still hovering an interactive element
      // This restores the hover state if the user didn't move the mouse
      const hoveredInteractive = document.querySelector(
        `${interactiveSelector.split(", ").map(s => s + ":hover").join(", ")}`
      );
      
      if (hoveredInteractive && !hoveredInteractive.classList.contains("active")) {
        cursorEl.classList.add("active", "hover");
        cursorEffect?.classList.add("active", "hover");
      }
    }, 800);
  });
}

/**
 * Create the magnifying glass element
 */
function createMagnifyingGlass() {
  const magnifyHtml = `
    <div class="magnify-glass">
      <canvas class="magnify-canvas"></canvas>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", magnifyHtml);
  
  magnifyGlass = document.querySelector(".magnify-glass");
  const canvas = magnifyGlass.querySelector(".magnify-canvas");
  
  // Set canvas size for high DPI displays
  const size = 280; // Size of the magnifying glass (updated to match CSS)
  canvas.width = size * 2; // 2x for retina
  canvas.height = size * 2;
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;
  
  // Initially hide the magnifying glass with proper positioning
  gsap.set(magnifyGlass, { 
    opacity: 0,
    xPercent: -50,
    yPercent: -50
  });
  
  console.log("Magnifying glass created:", magnifyGlass);
}

/**
 * Set up magnifying glass for .large-photo elements
 */
export function setupMagnifyingGlass() {
  console.log("setupMagnifyingGlass called, magnifyGlass exists:", !!magnifyGlass);
  
  if (!magnifyGlass) {
    console.warn("Magnifying glass element not found, skipping setup");
    return;
  }
  
  const largePhotos = document.querySelectorAll(".large-photo");
  console.log(`Found ${largePhotos.length} .large-photo elements`);
  
  largePhotos.forEach((photo, index) => {
    const img = photo.querySelector("img");
    if (!img) {
      console.warn(`No img found in .large-photo[${index}]`);
      return;
    }
    
    console.log(`Setting up magnifying glass for .large-photo[${index}]`);
    
    // Ensure image is loaded before setting up hover
    if (!img.complete) {
      img.addEventListener("load", () => setupPhotoHover(photo, img));
    } else {
      setupPhotoHover(photo, img);
    }
  });
}

/**
 * Set up hover handlers for a photo element
 */
function setupPhotoHover(photo, img) {
  photo.addEventListener("mouseenter", () => {
    currentLargePhoto = { element: photo, img: img };
    isZoomedIn = false; // Reset zoom state on enter
    
    // Reset zoom level to default (instant)
    currentZoomLevel.value = DEFAULT_ZOOM;
    
    console.log("Entered .large-photo, showing magnifying glass");
    
    // Show magnifying glass (opacity only)
    gsap.to(magnifyGlass, {
      opacity: 1,
      duration: 0.18,
      ease: "power2.out"
    });
    
    // Hide regular cursor elements
    cursorEl?.classList.add("magnify-active");
  });
  
  photo.addEventListener("mouseleave", () => {
    currentLargePhoto = null;
    isZoomedIn = false; // Reset zoom state on leave
    
    console.log("Left .large-photo, hiding magnifying glass");
    
    // Remove zoomed class
    magnifyGlass.classList.remove('zoomed');
    
    // Hide magnifying glass with immediate fade-out (opacity only)
    gsap.to(magnifyGlass, {
      opacity: 0,
      duration: 0.05, // Very fast fade-out for immediate response
      ease: "power2.in"
    });
    
    // Show regular cursor
    cursorEl?.classList.remove("magnify-active");
    
    // Cancel any pending magnify updates
    if (magnifyRafId) {
      cancelAnimationFrame(magnifyRafId);
      magnifyRafId = null;
    }
  });
  
  // Click to toggle zoom level
  photo.addEventListener("click", (e) => {
    if (!currentLargePhoto) return;
    
    isZoomedIn = !isZoomedIn;
    const targetZoom = isZoomedIn ? ZOOMED_ZOOM : DEFAULT_ZOOM;
    console.log(`Zoom toggled to: ${isZoomedIn ? 'ZOOMED' : 'DEFAULT'} (${targetZoom}x)`);
    
    // Toggle CSS class for styling
    if (isZoomedIn) {
      magnifyGlass.classList.add('zoomed');
    } else {
      magnifyGlass.classList.remove('zoomed');
    }
    
    // Animate zoom level transition smoothly
    gsap.to(currentZoomLevel, {
      value: targetZoom,
      duration: 0.18,
      ease: "power2.out",
      onUpdate: () => {
        // Continuously update the canvas during the zoom transition
        updateMagnifyingGlass(e.clientX, e.clientY);
      }
    });
  });
  
  photo.addEventListener("mousemove", (e) => {
    if (!currentLargePhoto) return;
    
    // Store last mouse position for scroll updates
    currentLargePhoto.lastMouseX = e.clientX;
    currentLargePhoto.lastMouseY = e.clientY;
    
    // Update magnifying glass position and content
    if (!magnifyRafId) {
      magnifyRafId = requestAnimationFrame(() => {
        updateMagnifyingGlass(e.clientX, e.clientY);
        magnifyRafId = null;
      });
    }
  }, { passive: true });
}

// Global scroll handler for magnifying glass updates
let scrollUpdateRafId = null;
window.addEventListener("scroll", () => {
  // Only update if we're currently hovering over a large photo
  if (!currentLargePhoto || !currentLargePhoto.lastMouseX) return;
  
  // Use RAF to throttle scroll updates
  if (!scrollUpdateRafId) {
    scrollUpdateRafId = requestAnimationFrame(() => {
      // Update the canvas with the last known mouse position
      // The image position has changed due to scroll, so we need to redraw
      if (currentLargePhoto && currentLargePhoto.lastMouseX) {
        updateMagnifyingGlass(currentLargePhoto.lastMouseX, currentLargePhoto.lastMouseY);
      }
      scrollUpdateRafId = null;
    });
  }
}, { passive: true });

/**
 * Update the magnifying glass position and render zoomed image
 */
function updateMagnifyingGlass(mouseX, mouseY) {
  if (!currentLargePhoto || !magnifyGlass) return;
  
  const { element, img } = currentLargePhoto;
  const canvas = magnifyGlass.querySelector(".magnify-canvas");
  const ctx = canvas.getContext("2d");
  
  // Position the magnifying glass at cursor using left/top (not x/y to avoid transform conflicts)
  gsap.set(magnifyGlass, {
    left: mouseX,
    top: mouseY
  });
  
  // Get image and canvas dimensions
  const imgRect = img.getBoundingClientRect();
  const canvasSize = canvas.width; // Already 2x for retina
  const displaySize = parseInt(canvas.style.width); // Actual display size
  
  // Calculate mouse position relative to image
  const relativeX = mouseX - imgRect.left;
  const relativeY = mouseY - imgRect.top;
  
  // Calculate scale factors between displayed image and natural image size
  const scaleX = img.naturalWidth / imgRect.width;
  const scaleY = img.naturalHeight / imgRect.height;
  
  // Calculate source position in the original image (centered on cursor)
  // Use animated zoom level for smooth transitions
  const zoom = currentZoomLevel.value;
  const sourceSize = displaySize / zoom;
  const sourceX = (relativeX * scaleX) - (sourceSize * scaleX / 2);
  const sourceY = (relativeY * scaleY) - (sourceSize * scaleY / 2);
  
  // Clear canvas
  ctx.clearRect(0, 0, canvasSize, canvasSize);
  
  // Create rounded rectangle clipping path to match .large-photo border-radius
  ctx.save();
  ctx.beginPath();
  
  // Use 24px border-radius to match .large-photo (desktop)
  const borderRadius = 24;
  const x = 0;
  const y = 0;
  const width = canvasSize;
  const height = canvasSize;
  
  // Draw rounded rectangle path
  ctx.moveTo(x + borderRadius, y);
  ctx.lineTo(x + width - borderRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + borderRadius);
  ctx.lineTo(x + width, y + height - borderRadius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - borderRadius, y + height);
  ctx.lineTo(x + borderRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - borderRadius);
  ctx.lineTo(x, y + borderRadius);
  ctx.quadraticCurveTo(x, y, x + borderRadius, y);
  ctx.closePath();
  ctx.clip();
  
  // Draw the zoomed portion of the image
  try {
    ctx.drawImage(
      img,
      sourceX,
      sourceY,
      sourceSize * scaleX,
      sourceSize * scaleY,
      0,
      0,
      canvasSize,
      canvasSize
    );
  } catch (e) {
    // Handle edge cases where source is outside image bounds
    console.warn("Magnify draw error:", e);
  }
  
  ctx.restore();
}


