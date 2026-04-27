import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import CircleType from "circletype";
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

// Zoom CTA eased movement (mirrors base cursor RAF pattern)
let zoomCtaPendingMove = null;
let zoomCtaRafId = null;

// Magnifying glass state
let magnifyGlass = null;
let zoomCta = null;          // The "Zoom" CTA label that follows the cursor
let currentLargePhoto = null;
let magnifyRafId = null;
let isZoomedIn = false;      // (kept for scroll-handler compat)
let isMagnifyActive = false; // true when magnify glass is active
const DEFAULT_ZOOM = 1.4;

// Animated zoom level for smooth transitions
let currentZoomLevel = { value: DEFAULT_ZOOM };

// Global mouse position for scroll interactions
let currentMousePos = { x: -100, y: -100 };
let cachedLargeMedia = []; // Cache for scroll checking

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

    // Create magnifying glass and zoom CTA elements
    createMagnifyingGlass();
    createZoomCta();

    // Set initial position
    gsap.set(cursorEl, { xPercent: -50, yPercent: -50 });

    // PERFORMANCE: Use a single mousemove handler with RAF throttling
    let hasShown = false;
    
    window.addEventListener("mousemove", (e) => {
      // Store pending move position
      pendingMove = { x: e.clientX, y: e.clientY };
      currentMousePos = { x: e.clientX, y: e.clientY }; // Update global pos
      
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
 * Create the "Zoom" CTA circle that follows the cursor as the initial hover state.
 * Contains a centered zoom icon + CircleType repeating "Zoom" text around the ring.
 */
function createZoomCta() {
  const ctaHtml = `
    <div class="zoom-cta">
      <div class="zoom-cta__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="7"/>
          <line x1="21" y1="21" x2="15.65" y2="15.65"/>
          <line x1="11" y1="8" x2="11" y2="14"/>
          <line x1="8" y1="11" x2="14" y2="11"/>
        </svg>
      </div>
      <div class="zoom-cta__ring">
        <span class="zoom-cta__text"></span>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", ctaHtml);
  zoomCta = document.querySelector(".zoom-cta");

  const textEl = zoomCta.querySelector(".zoom-cta__text");
  if (textEl) {
    const RADIUS = 36;
    const unit = "Zoom\u00A0\u2022\u00A0"; // "Zoom • " with non-breaking spaces

    // Measure one unit's rendered width to calculate exact repetitions needed
    textEl.textContent = unit;
    const unitWidth = textEl.getBoundingClientRect().width;
    const circumference = 2 * Math.PI * RADIUS;
    const count = Math.round(circumference / unitWidth);

    // Build the full string with the exact count and init CircleType
    textEl.textContent = unit.repeat(count);
    new CircleType(textEl).radius(RADIUS + 10.5);
  }

  // Position off-screen initially, centered on cursor via xPercent/yPercent
  gsap.set(zoomCta, { opacity: 0, xPercent: -50, yPercent: -50, x: -200, y: -200, scale: 0.88 });
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
  
  const largeMedia = document.querySelectorAll(".large-photo, .large-video");
  cachedLargeMedia = Array.from(largeMedia); // Cache as array for scroll checking
  console.log(`Found ${largeMedia.length} .large-photo/.large-video elements`);
  
  largeMedia.forEach((container, index) => {
    // Check for img or video
    const img = container.querySelector("img");
    const video = container.querySelector("video");
    const media = img || video;
    
    if (!media) {
      console.warn(`No img or video found in .large-photo/.large-video[${index}]`);
      return;
    }
    
    console.log(`Setting up magnifying glass for .large-photo/.large-video[${index}]`);
    
    // Ensure media is loaded before setting up hover
    if (media.tagName === 'IMG') {
      if (!media.complete) {
        media.addEventListener("load", () => setupPhotoHover(container, media));
      } else {
        setupPhotoHover(container, media);
      }
    } else if (media.tagName === 'VIDEO') {
      if (media.readyState < 2) { // HAVE_CURRENT_DATA
        media.addEventListener("loadeddata", () => setupPhotoHover(container, media));
      } else {
        setupPhotoHover(container, media);
      }
    }
  });
}

/**
 * Set up hover handlers for a photo element
 */
function setupPhotoHover(photo, media) {
  photo.addEventListener("mouseenter", (e) => {
    // Guard: only activate if the photo has completed its fade-reveal animation
    if (!photo.classList.contains('active')) return;

    // Capture initial mouse position from the enter event
    currentLargePhoto = { 
      element: photo, 
      media: media, 
      lastMouseX: e.clientX, 
      lastMouseY: e.clientY 
    };
    isMagnifyActive = false;
    
    // Reset zoom level to default (instant)
    currentZoomLevel.value = DEFAULT_ZOOM;
    
    // Show the Zoom CTA at the cursor instantly, then fade in
    gsap.set(zoomCta, { x: e.clientX, y: e.clientY });
    gsap.to(zoomCta, { opacity: 1, duration: 0.22, ease: "power2.out" });
    
    // Hide regular cursor elements
    cursorEl?.classList.add("magnify-active");
  });
  
  photo.addEventListener("mouseleave", () => {
    currentLargePhoto = null;
    isMagnifyActive = false;
    document.body.classList.remove('magnify-mode');
    
    magnifyGlass.classList.remove('zoomed');
    
    // Hide both the CTA and the magnify glass
    gsap.to(zoomCta, { opacity: 0, duration: 0.12, ease: "power2.in" });
    gsap.to(magnifyGlass, { opacity: 0, duration: 0.05, ease: "power2.in" });
    
    cursorEl?.classList.remove("magnify-active");
    
    if (magnifyRafId) {
      cancelAnimationFrame(magnifyRafId);
      magnifyRafId = null;
    }
  });
  
  // Click: toggle between CTA (off) and magnify glass (on)
  photo.addEventListener("click", (e) => {
    if (!currentLargePhoto) return;
    
    isMagnifyActive = !isMagnifyActive;
    
    if (isMagnifyActive) {
      // → Show magnify glass
      document.body.classList.add('magnify-mode');
      
      gsap.to(zoomCta, { opacity: 0, duration: 0.12, ease: "power2.in" });
      gsap.set(magnifyGlass, { left: e.clientX, top: e.clientY });
      gsap.to(magnifyGlass, { opacity: 1, duration: 0.22, ease: "power2.out" });
      
      currentZoomLevel.value = DEFAULT_ZOOM;
      updateMagnifyingGlass(e.clientX, e.clientY);
      
    } else {
      // → Back to CTA
      document.body.classList.remove('magnify-mode');
      
      gsap.to(magnifyGlass, { opacity: 0, duration: 0.12, ease: "power2.in" });
      gsap.set(zoomCta, { x: e.clientX, y: e.clientY });
      gsap.to(zoomCta, { opacity: 1, duration: 0.22, ease: "power2.out" });
    }
  });
  
  photo.addEventListener("mousemove", (e) => {
    if (!currentLargePhoto) return;
    
    // Store last mouse position for scroll updates
    currentLargePhoto.lastMouseX = e.clientX;
    currentLargePhoto.lastMouseY = e.clientY;
    
    if (isMagnifyActive) {
      // Magnify glass is active: update its position and canvas
      if (!magnifyRafId) {
        magnifyRafId = requestAnimationFrame(() => {
          updateMagnifyingGlass(e.clientX, e.clientY);
          magnifyRafId = null;
        });
      }
    } else {
      // CTA mode: move the zoom circle with eased lag (mirrors base cursor)
      zoomCtaPendingMove = { x: e.clientX, y: e.clientY };
      if (!zoomCtaRafId) {
        zoomCtaRafId = requestAnimationFrame(processZoomCtaMove);
      }
    }
  }, { passive: true });
}

/**
 * Process pending zoom CTA move with eased lag — same pattern as base cursor
 */
function processZoomCtaMove() {
  zoomCtaRafId = null;
  if (!zoomCtaPendingMove || !zoomCta) return;
  gsap.to(zoomCta, {
    duration: 1.4,
    ease: cursorEase,
    x: zoomCtaPendingMove.x,
    y: zoomCtaPendingMove.y,
    overwrite: "auto"
  });
  zoomCtaPendingMove = null;
}

// Global scroll handler for magnifying glass updates
let scrollUpdateRafId = null;
window.addEventListener("scroll", () => {
  // Use RAF to throttle scroll updates
  if (!scrollUpdateRafId) {
    scrollUpdateRafId = requestAnimationFrame(() => {
      const mouseX = currentMousePos.x;
      const mouseY = currentMousePos.y;
      
      // 1. HANDLE EXIT: If currently hovering, check if we scrolled out
      if (currentLargePhoto) {
        // Update last mouse known position for the render loop
        currentLargePhoto.lastMouseX = mouseX;
        currentLargePhoto.lastMouseY = mouseY;
        
        const rect = currentLargePhoto.element.getBoundingClientRect();
        
        // Add a small buffer/tolerance if needed, or stick to strict bounds
        const isOutside = (
          mouseX < rect.left || 
          mouseX > rect.right || 
          mouseY < rect.top || 
          mouseY > rect.bottom
        );
        
        if (isOutside) {
          // Force leave event to clean up
          currentLargePhoto.element.dispatchEvent(new MouseEvent('mouseleave'));
          // currentLargePhoto is now null (set in mouseleave handler)
        } else {
          // Still inside, just update the visual position
          updateMagnifyingGlass(mouseX, mouseY);
          // Return early since we are still hovering
          scrollUpdateRafId = null;
          return;
        }
      }
      
      // 2. HANDLE ENTRY: If NOT hovering (or just exited), check if we scrolled INTO one
      if (!currentLargePhoto && cachedLargeMedia.length > 0) {
        // Optimize: Don't check loop if mouse is off-screen (e.g. initial load)
        if (mouseX < 0 || mouseY < 0) {
            scrollUpdateRafId = null;
            return;
        }

        for (const container of cachedLargeMedia) {
          // Skip if disconnected or not yet revealed
          if (!container.isConnected) continue;
          if (!container.classList.contains('active')) continue;

          const rect = container.getBoundingClientRect();
          
          // Check if mouse is inside this element
          if (mouseX >= rect.left && mouseX <= rect.right &&
              mouseY >= rect.top && mouseY <= rect.bottom) {
              
              // Dispatch mouseenter to trigger setupPhotoHover logic
              container.dispatchEvent(new MouseEvent('mouseenter', {
                 clientX: mouseX,
                 clientY: mouseY,
                 bubbles: true
              }));
              
              // Only activate one, then break
              break; 
          }
        }
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
  
  const { element, media } = currentLargePhoto;
  const canvas = magnifyGlass.querySelector(".magnify-canvas");
  const ctx = canvas.getContext("2d");
  
  // Position the magnifying glass at cursor using left/top (not x/y to avoid transform conflicts)
  gsap.set(magnifyGlass, {
    left: mouseX,
    top: mouseY
  });
  
  // Get media and canvas dimensions
  const mediaRect = media.getBoundingClientRect();
  const canvasSize = canvas.width; // Already 2x for retina
  const displaySize = Math.round(canvas.getBoundingClientRect().width) || 280; // actual rendered size
  
  // Calculate mouse position relative to media
  const relativeX = mouseX - mediaRect.left;
  const relativeY = mouseY - mediaRect.top;
  
  // Calculate scale factors between displayed media and natural media size
  let naturalWidth, naturalHeight;
  
  if (media.tagName === 'VIDEO') {
    naturalWidth = media.videoWidth;
    naturalHeight = media.videoHeight;
  } else {
    naturalWidth = media.naturalWidth;
    naturalHeight = media.naturalHeight;
  }
  
  const scaleX = naturalWidth / mediaRect.width;
  const scaleY = naturalHeight / mediaRect.height;
  
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
  
  // Draw the zoomed portion of the media
  try {
    ctx.drawImage(
      media,
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


