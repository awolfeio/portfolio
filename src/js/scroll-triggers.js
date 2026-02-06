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

/**
 * Unified reveal system that handles all element reveals sequentially
 * All elements use .fade-reveal class and reveal in DOM order
 */
export function setupUnifiedReveals() {
  console.log("Setting up unified sequential reveal system");

  // First, convert all reveal-type elements to use fade-reveal
  convertToFadeReveal();

  // Get all fade-reveal elements and group them by their viewport sections
  const allRevealElements = gsap.utils.toArray(".fade-reveal").filter((element) => {
    // Explicitly exclude nav element to prevent mobile menu issues
    return element.tagName.toLowerCase() !== "nav";
  });

  if (allRevealElements.length === 0) {
    console.log("No fade-reveal elements found");
    return;
  }

  console.log(`Found ${allRevealElements.length} fade-reveal elements`);

  // Group elements by their scroll trigger zones
  const elementGroups = groupElementsByViewport(allRevealElements);

  // Set up scroll triggers for each group
  elementGroups.forEach((group, index) => {
    setupSequentialReveal(group, index);
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
    // Ensure initial opacity is 0
    if (!element.classList.contains("active") && !element.classList.contains("reveal")) {
      gsap.set(element, { opacity: 0 });
    }
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
 * Group elements that are close together in the viewport
 */
function groupElementsByViewport(elements) {
  const groups = [];
  let currentGroup = [];
  let lastBottom = -Infinity;
  const groupThreshold = 200; // Elements within 200px are considered same group

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const elementTop = rect.top + scrollTop;

    if (elementTop - lastBottom > groupThreshold && currentGroup.length > 0) {
      // Start a new group
      groups.push(currentGroup);
      currentGroup = [element];
    } else {
      // Add to current group
      currentGroup.push(element);
    }

    lastBottom = elementTop + rect.height;
  });

  // Don't forget the last group
  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  }

  return groups;
}

/**
 * Set up sequential reveal for a group of elements
 */
function setupSequentialReveal(elements, groupIndex) {
  const groupKey = `group-${groupIndex}`;

  // Check if this group contains .large-photo elements
  // These should be revealed individually, not as a group
  const hasLargePhotos = elements.some(el => el.classList.contains('large-photo'));
  
  if (hasLargePhotos) {
    // Set up individual triggers for each .large-photo element
    elements.forEach((element, index) => {
      const elementKey = `${groupKey}-element-${index}`;
      
      ScrollTrigger.create({
        trigger: element, // Use the element itself as trigger
        start: "top 80%",
        end: "bottom 15%",
        onEnter: () => startSequentialReveal([element], elementKey),
        onLeaveBack: () => hideSequentialReveal([element], elementKey),
        markers: false,
      });

      // Check if element has already passed the reveal threshold on load
      // BUT only if loading screen is not present
      const loadingSplash = document.querySelector('#loading-splash');
      if (!loadingSplash && hasPassedRevealThreshold(element)) {
        startSequentialReveal([element], elementKey);
      }
    });
  } else {
    // Original grouped behavior for non-.large-photo elements
    // Create a ScrollTrigger that monitors when this group enters the viewport
    ScrollTrigger.create({
      trigger: elements[0], // Use first element as trigger
      start: "top 80%",
      end: "bottom 15%",
      onEnter: () => startSequentialReveal(elements, groupKey),
      onLeaveBack: () => hideSequentialReveal(elements, groupKey),
      markers: false,
    });

    // Check if elements have already passed the reveal threshold on load
    // BUT only if loading screen is not present
    const loadingSplash = document.querySelector('#loading-splash');
    if (!loadingSplash && hasPassedRevealThreshold(elements[0])) {
      startSequentialReveal(elements, groupKey);
    }
  }
}

/**
 * Start revealing elements sequentially
 */
function startSequentialReveal(elements, groupKey) {
  // Cancel any existing reveal for this group
  if (revealChains.has(groupKey)) {
    revealChains.get(groupKey).kill();
  }

  console.log(`Starting sequential reveal for ${groupKey} with ${elements.length} elements`);

  // Create a timeline for sequential reveals
  const tl = gsap.timeline();

  elements.forEach((element, index) => {
    const revealType = element.getAttribute("data-reveal-type") || "default";
    
    // Check if this element should be part of a sequential chain
    // Exclude .large-photo, .clip-swipe, and .skills-wrapper children from sequential behavior
    const isLargePhoto = element.classList.contains('large-photo');
    const isClipSwipe = element.classList.contains('clip-swipe');
    const isSkillsWrapperChild = element.parentElement?.classList.contains('skills-wrapper');
    const shouldExcludeFromSequence = isLargePhoto || isClipSwipe || isSkillsWrapperChild;
    
    // Check if this element has sequential siblings (same parent, consecutive fade-reveal elements)
    let isSequential = false;
    let elementIndex = 0;
    
    if (!shouldExcludeFromSequence) {
      const parent = element.parentElement;
      const siblings = Array.from(parent.children).filter(child => 
        child.classList.contains('fade-reveal') && 
        !child.classList.contains('large-photo') &&
        !child.classList.contains('clip-swipe') &&
        !child.parentElement?.classList.contains('skills-wrapper')
      );
      elementIndex = siblings.indexOf(element);
      isSequential = siblings.length > 1 && elementIndex >= 0;
    }
    
    // Calculate delay based on whether it's part of a sequential chain
    let delay = 0;
    if (isSequential && elementIndex > 0) {
      // Wait for previous sibling to complete (base animation duration + reveal duration)
      delay = ">-0.2"; // Start 0.2s before previous completes for slight overlap
    } else {
      // Use standard delay for non-sequential or first element
      delay = getRevealDelay(revealType, index);
    }

    // Add custom reveal based on type
    if (revealType === "splitting-rows") {
      tl.call(
        () => {
          element.classList.add("reveal");
          element.classList.add("active");
          element.style.removeProperty("opacity");
          element.style.pointerEvents = "auto";
        },
        null,
        delay
      );
      
      // Add duration placeholder for sequential timing
      if (isSequential) {
        tl.to({}, { duration: 1.4 }); // Match splitting-rows animation duration
      }
    } else if (revealType === "splitting") {
      tl.call(
        () => {
          element.classList.add("reveal");
          element.classList.add("active");
          element.style.removeProperty("opacity");
          element.style.pointerEvents = "auto";
        },
        null,
        delay
      );
      
      // Add duration placeholder for sequential timing
      if (isSequential) {
        tl.to({}, { duration: 0.8 }); // Match splitting animation duration
      }
    } else {
      // Default fade-reveal behavior (includes .large-photo and .clip-swipe)
      tl.call(
        () => {
          element.classList.add("active");
          element.style.removeProperty("opacity");
          element.style.pointerEvents = "auto";
        },
        null,
        delay
      );
      
      // Add duration placeholder for sequential timing (only if part of sequence)
      if (isSequential && !shouldExcludeFromSequence) {
        tl.to({}, { duration: 1.4 }); // Match fade-reveal transition duration (1s + 0.4s delay)
      }
    }
  });

  // Store the timeline
  revealChains.set(groupKey, tl);
}

/**
 * Hide elements when scrolling back up
 */
function hideSequentialReveal(elements, groupKey) {
  // Cancel any existing reveal for this group
  if (revealChains.has(groupKey)) {
    revealChains.get(groupKey).kill();
    revealChains.delete(groupKey);
  }

  // Hide all elements in reverse order
  elements.forEach((element) => {
    element.classList.remove("active", "reveal");
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
