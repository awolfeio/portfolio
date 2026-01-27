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
      return;
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
    
    // Check for logo
    if (target.closest(".logo")) {
      cursorEl.classList.remove("logo");
      return;
    }
    
    // Check for skills wrapper
    if (target.closest(skillsSelector)) {
      cursorEl.classList.remove("hide");
      return;
    }
    
    // Check for interactive elements
    if (target.closest(interactiveSelector)) {
      cursorEl.classList.remove("active", "hover");
      cursorEffect?.classList.remove("active", "hover");
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
    const clickable = target.closest("a:not(.active), button, input, select, textarea, span.email, svg.play, svg.pause");
    
    if (!clickable) return;
    
    // Prevent default on active elements
    if (clickable.classList.contains("active")) {
      e.preventDefault();
      return;
    }
    
    cursorEffect?.classList.remove("active");
    cursorEl.classList.add("clicked");
    
    // Use single timeout for cleanup
    const isNavLink = clickable.closest("nav a");
    setTimeout(() => {
      cursorEl.classList.remove("clicked");
      
      // Re-check hover state after click animation
      if (!isNavLink) {
        const hoveredInteractive = document.querySelector(
          `${interactiveSelector.split(", ").map(s => s + ":hover").join(", ")}`
        );
        if (hoveredInteractive) {
          cursorEl.classList.add("active", "hover");
          cursorEffect?.classList.add("active", "hover");
        }
      }
    }, 800);
  });
}
