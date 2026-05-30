import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Helper function to check if an element is currently in the viewport
export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0;
}

// Helper function to check if element has passed the reveal threshold (80% of viewport)
export function hasPassedRevealThreshold(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const revealThreshold = viewportHeight * 0.8; // 80% of viewport height
  return rect.top <= revealThreshold;
}

// Store active reveal chains to manage sequential reveals
const revealChains = new Map();

// ---------------------------------------------------------------------------
// Sequential reveal stagger (MODIFIABLE)
// Every .fade-reveal element that is already on-screen at load reveals this
// many milliseconds after the previous on-screen one, in DOM order. Elements
// do NOT need to share a wrapper — the stagger is a single running counter
// across the whole document. A data-reveal-delay attribute on an element
// hard-overrides this for that element only.
//
// Change the default here, or override at runtime via window.fadeRevealStaggerMs.
// ---------------------------------------------------------------------------
const REVEAL_STAGGER_STEP_MS = 400;

/** Resolve the active stagger step (ms), allowing a runtime window override. */
function getRevealStaggerStepMs() {
  return Number.isFinite(window.fadeRevealStaggerMs)
    ? window.fadeRevealStaggerMs
    : REVEAL_STAGGER_STEP_MS;
}

/**
 * Unified reveal system that handles all element reveals sequentially
 * All elements use .fade-reveal class and reveal in DOM order
 */
export function setupUnifiedReveals() {
  // First, convert all reveal-type elements to use fade-reveal
  convertToFadeReveal();

  // Get ALL fade-reveal elements
  const allRevealElements = gsap.utils.toArray(".fade-reveal").filter((element) => {
    // Explicitly exclude nav element to prevent mobile menu issues
    return element.tagName.toLowerCase() !== "nav";
  });

  if (allRevealElements.length === 0) return;

  // Check if loading screen is present
  const loadingSplash = document.querySelector('#loading-splash');
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  // Batch ALL getBoundingClientRect reads BEFORE the forEach to avoid
  // repeated forced layout/reflow inside the loop.
  const rects = allRevealElements.map(el => el.getBoundingClientRect());

  // Stagger counter for elements that are already on-screen at load time.
  // Each on-screen element reveals (staggerIndex * step) ms after the first,
  // in DOM order, so a stack fades in one-after-another. The counter is shared
  // across ALL elements regardless of wrapper, so the Nth visible element waits
  // on the (N-1)th even if they live in different containers.
  const staggerStepSeconds = getRevealStaggerStepMs() / 1000;
  let staggerIndex = 0;

  // Prevent duplicate triggers: Kill any existing ScrollTriggers on these elements
  ScrollTrigger.getAll().forEach(st => {
    if (allRevealElements.includes(st.trigger)) {
      st.kill();
    }
  });

  allRevealElements.forEach((element, index) => {
    // Trigger to reveal the element when scrolling down
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => revealElement(element),
      markers: false,
    });

    // Trigger to hide the element when scrolling back up
    // start: "top 100%" ensures it only hides when completely out of view
    ScrollTrigger.create({
      trigger: element,
      start: "top 100%",
      onLeaveBack: () => hideElement(element),
      markers: false,
    });

    // Reveal-on-load for anything actually visible.
    // We test TRUE viewport intersection (any part of the element on-screen)
    // rather than the old "top <= 80% of viewport" threshold. That threshold
    // left a dead band: an element sitting in the lower portion of the viewport
    // was below the 80% line (so no on-load reveal) yet already past the
    // ScrollTrigger "top 85%" start (so onEnter never fires without a scroll,
    // and no scroll happens on load). Such elements falsely stayed invisible
    // even though they were fully within the viewport. Intersection testing
    // guarantees every on-screen element reveals.
    const rect = rects[index];
    const isWithinViewport = rect.top < viewportHeight && rect.bottom > 0;

    if (!loadingSplash && isWithinViewport) {
      // data-reveal-delay (ms) hard-overrides the auto-stagger for this element.
      const manualDelay = element.dataset.revealDelay;
      if (manualDelay !== undefined) {
        // Use exact ms value converted to seconds; do NOT consume a stagger slot.
        revealElement(element, parseFloat(manualDelay) / 1000);
      } else {
        const delay = staggerIndex * staggerStepSeconds;
        staggerIndex++;
        revealElement(element, delay);
      }
    }
  });
}

/**
 * Convert splitting-rows and other reveal elements to use fade-reveal
 */
function convertToFadeReveal() {
  // Convert .splitting-rows elements
  const splittingRows = document.querySelectorAll(".splitting-rows");
  splittingRows.forEach((element) => {
    element.classList.add("fade-reveal");
    element.setAttribute("data-reveal-type", "splitting-rows");
  });

  // Convert .splitting elements that need reveals
  const splittingElements = document.querySelectorAll(".splitting, [data-splitting].scroll-reveal");
  splittingElements.forEach((element) => {
    if (!element.classList.contains("splitting-rows")) {
      element.classList.add("fade-reveal");
      element.setAttribute("data-reveal-type", "splitting");
    }
  });

  // Convert any h1, h2, h3 elements that don't already have fade-reveal
  const headings = document.querySelectorAll("h1, h2, h3");
  headings.forEach((element) => {
    // Exclude nav elements and .titles-wrapper (which has its own rotation animation)
    if (!element.classList.contains("fade-reveal") && 
        !element.closest("nav") && 
        !element.classList.contains("titles-wrapper")) {
      element.classList.add("fade-reveal");
      element.setAttribute("data-reveal-type", "heading");
    }
  });
}

/**
 * Reveal a single element.
 * @param {HTMLElement} element
 * @param {number} [delayOverride] - Optional transition-delay in seconds.
 *   Used during initial page load to stagger elements that are already in
 *   the viewport (so they don't all fade in simultaneously). The override
 *   is applied as an inline style and cleaned up after the transition ends
 *   so that future scroll-triggered reveals and hide/re-reveal cycles use
 *   the normal CSS-defined delay.
 */
function revealElement(element, delayOverride) {
  // Always kill any ongoing hide animations to prevent conflicts
  gsap.killTweensOf(element);
  
  // Clean up any inline transition styles added by hideElement
  element.style.removeProperty('transition');

  // Skip if already active
  if (element.classList.contains('active')) return;

  // Remove any inline opacity GSAP may have set so the CSS class-based
  // transition takes full control — do this before adding .active so the
  // browser doesn't trigger a synchronous style recalc mid-transition.
  element.style.removeProperty('opacity');

  // Resolve the delay to apply:
  //   1. data-reveal-delay HTML attribute (ms) always wins — hard override.
  //   2. delayOverride argument (seconds) — used for auto-stagger on load.
  //   3. Neither set: CSS class handles the delay, nothing extra to do.
  const manualDelayMs = element.dataset.revealDelay;
  const resolvedDelay = manualDelayMs !== undefined
    ? parseFloat(manualDelayMs) / 1000   // convert ms → s
    : delayOverride;                      // may still be undefined — that's fine

  if (resolvedDelay !== undefined) {
    element.style.transitionDelay = `${resolvedDelay}s`;
    // Clean up the inline delay once the transition finishes so subsequent
    // reveals (scroll-triggered or after hide) fall back to the CSS value.
    element.addEventListener('transitionend', function cleanup() {
      element.style.removeProperty('transition-delay');
      element.removeEventListener('transitionend', cleanup);
    });
  }

  // Add the active class (and reveal class for splitting elements)
  const revealType = element.getAttribute("data-reveal-type");
  if (revealType === "splitting-rows" || revealType === "splitting") {
    element.classList.add("reveal");
  }
  element.classList.add("active");
  element.style.pointerEvents = "auto";
}

/**
 * Hide element when scrolling back up — animated to mirror the entrance.
 * CSS transitions are unreliable for off/near-viewport elements, so GSAP
 * drives the exit explicitly.
 */
function hideElement(element) {
  if (!element.classList.contains('active')) return;

  // Kill any existing tweens just in case
  gsap.killTweensOf(element);

  const revealType = element.getAttribute("data-reveal-type");

  // Disable CSS transitions so GSAP can animate smoothly without fighting the browser
  element.style.transition = 'none';

  gsap.to(element, {
    opacity: 0,
    duration: 0.8,
    ease: 'power2.in',
    overwrite: 'auto',
    onComplete: () => {
      element.classList.remove('active', 'reveal');
      // Clear GSAP's inline styles so the CSS hidden state takes over cleanly
      // for any subsequent re-reveals.
      element.style.removeProperty('opacity');
      element.style.removeProperty('transition');
      element.style.pointerEvents = 'none';
    }
  });
}

/**
 * Start revealing elements sequentially
 */
function startSequentialReveal(elements, groupKey) {
  // Cancel any existing reveal for this group
  if (revealChains.has(groupKey)) {
    revealChains.get(groupKey).kill();
  }

  // Create a timeline for sequential reveals
  const tl = gsap.timeline();

  elements.forEach((element, index) => {
    const revealType = element.getAttribute("data-reveal-type") || "default";
    
    // Exclude .large-photo, .large-video, .clip-swipe, and .skills-wrapper children from sequential behavior
    const isLargeMedia = element.classList.contains('large-photo') || element.classList.contains('large-video');
    const isClipSwipe = element.classList.contains('clip-swipe');
    const isSkillsWrapperChild = element.parentElement?.classList.contains('skills-wrapper');
    const shouldExcludeFromSequence = isLargeMedia || isClipSwipe || isSkillsWrapperChild;
    
    let isSequential = false;
    let elementIndex = 0;
    
    if (!shouldExcludeFromSequence) {
      const parent = element.parentElement;
      const siblings = Array.from(parent.children).filter(child => 
        child.classList.contains('fade-reveal') && 
        !child.classList.contains('large-photo') &&
        !child.classList.contains('large-video') &&
        !child.classList.contains('clip-swipe') &&
        !child.parentElement?.classList.contains('skills-wrapper')
      );
      elementIndex = siblings.indexOf(element);
      isSequential = siblings.length > 1 && elementIndex >= 0;
    }
    
    const manualDelayMs = element.dataset.revealDelay;
    let delay = 0;
    
    if (manualDelayMs !== undefined) {
      // If a specific delay is set via HTML attribute, use it as an absolute delay
      delay = parseFloat(manualDelayMs) / 1000;
    } else if (isSequential && elementIndex > 0) {
      delay = ">-0.2";
    } else {
      delay = getRevealDelay(revealType, index);
    }

    // Shared reveal callback — inline opacity cleared via style.removeProperty
    // to avoid a gsap.set() / style recalc right before the CSS transition fires.
    const doReveal = () => {
      element.style.removeProperty('opacity');
      if (revealType === "splitting-rows" || revealType === "splitting") {
        element.classList.add("reveal");
      }
      element.classList.add("active");
      element.style.pointerEvents = "auto";
    };

    tl.call(doReveal, null, delay);

    // Add duration placeholder for sequential timing
    if (isSequential) {
      const holdDuration = (revealType === "splitting") ? 0.8 : 1.4;
      tl.to({}, { duration: holdDuration });
    }
  });

  revealChains.set(groupKey, tl);
}

/**
 * Hide elements sequentially when scrolling back up
 */
function hideSequentialReveal(elements, groupKey) {
  // Cancel any in-progress reveal for this group
  if (revealChains.has(groupKey)) {
    revealChains.get(groupKey).kill();
    revealChains.delete(groupKey);
  }

  // Animate each element out in reverse DOM order
  elements.slice().reverse().forEach((element, i) => {
    if (!element.classList.contains('active')) return;

    gsap.to(element, {
      opacity: 0,
      duration: 0.8,
      delay: i * 0.06,
      ease: 'power2.in',
      overwrite: 'auto',
      onComplete: () => {
        element.classList.remove('active', 'reveal');
        element.style.removeProperty('opacity');
        element.style.pointerEvents = 'none';
      }
    });
  });
}

/**
 * Get appropriate delay based on element type
 */
function getRevealDelay(revealType, index) {
  const baseDelay = index * 0.15; // 150ms between elements

  switch (revealType) {
    case "heading":
      return baseDelay * 0.8; // Headings reveal slightly faster
    case "splitting-rows":
      return baseDelay * 1.2; // Text blocks take slightly longer
    default:
      return baseDelay;
  }
}

// Legacy function names for compatibility
export function revealSplitTexts() {
  console.log("Legacy revealSplitTexts called - redirecting to unified system");
  setupUnifiedReveals();
}

export function fadeInReveal() {
  console.log("Legacy fadeInReveal called - already handled by unified system");
  // On mobile, explicitly do not run this for nav to avoid menu issues
  if (window.innerWidth <= 1024) {
    const nav = document.querySelector("nav");
    if (nav) {
      nav.classList.remove("fade-reveal", "active");
    }
  }
}

// Function to manually handle fade-reveal elements (kept for compatibility)
export function applyFadeReveal(elements, force = false) {
  if (!elements || elements.length === 0) return;

  elements.forEach((element) => {
    // Skip nav elements to prevent mobile menu issues
    if (element.tagName.toLowerCase() === "nav") {
      return;
    }

    // Only add active class if element is in viewport or force is true
    if (force || isInViewport(element)) {
      element.classList.add("active");
      element.style.removeProperty("opacity");
      element.style.pointerEvents = "auto";
    } else {
      element.classList.remove("active");
      element.style.removeProperty("pointer-events");
      // Reset inline opacity so base CSS can reapply the hidden state
      element.style.removeProperty("opacity");
    }
  });
}

/**
 * Auto-play videos when they enter the viewport
 */
export function playVideosOnEnter() {
  console.log("Setting up video autoplay on scroll");
  const videoElements = gsap.utils.toArray("video");

  if (videoElements.length === 0) {
    console.log("No video elements found");
    return;
  }

  console.log(`Found ${videoElements.length} video elements`);

  videoElements.forEach((videoElement, index) => {
    ScrollTrigger.create({
      trigger: videoElement,
      start: "top 90%",
      end: "bottom 10%",
      toggleClass: "in-viewport",
      onEnter: () => {
        const previousTime = videoElement.currentTime;

        // Update the video status after a delay of 1250ms
        setTimeout(() => {
          // Check if the video is paused or stuck
          if (videoElement.paused || videoElement.ended) {
            videoElement.currentTime = 0; // reset to 0:00
            videoElement.play(); // start playing
            videoElement.parentNode.classList.remove("paused");
            videoElement.parentNode.classList.add("playing");
            console.log(`Started playing video[${index}]`);
          } else {
            // Video is not paused; let's see if it's stuck
            if (previousTime === videoElement.currentTime) {
              // The video's currentTime hasn't changed; it's stuck
              videoElement.currentTime = 0; // reset to 0:00
              videoElement.play(); // start playing
              videoElement.parentNode.classList.remove("paused");
              videoElement.parentNode.classList.add("playing");
              console.log(`Restarted stuck video[${index}]`);
            }
          }
        }, 1250);
      },
      markers: false,
      once: false,
    });
  });
}

/**
 * Create auto-scrolling containers
 */
export function autoScrollContainer() {
  console.log("Setting up auto-scroll containers");
  const scrollWrappers = gsap.utils.toArray(".auto-scroll");

  if (scrollWrappers.length === 0) {
    console.log("No auto-scroll containers found");
    return;
  }

  console.log(`Found ${scrollWrappers.length} auto-scroll containers`);

  scrollWrappers.forEach((scrollWrapper, index) => {
    // Check if the container has the required content element
    const contentElement = scrollWrapper.querySelector(".scroll-content");
    if (!contentElement) {
      console.warn(`Auto-scroll container ${index} is missing .scroll-content child element`);
      return;
    }

    // Calculate the scrollable distance
    let scrollableHeight = contentElement.clientHeight - scrollWrapper.clientHeight;

    // Skip if no scrollable content
    if (scrollableHeight <= 0) {
      console.log(`Auto-scroll container ${index} has no scrollable content`);
      return;
    }

    // Create a tween for the scrolling animation
    let scrollTween = gsap.to(contentElement, {
      y: -scrollableHeight,
      duration: 8,
      ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      paused: true, // Start paused so we can control it with ScrollTrigger
    });

    // Create the ScrollTrigger instance
    ScrollTrigger.create({
      trigger: scrollWrapper,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        console.log(`Starting auto-scroll for container ${index}`);
        scrollTween.restart();
      },
      onEnterBack: () => scrollTween.restart(),
      markers: false,
    });
  });
}
