import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Helper function to check if an element is currently in the viewport
export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0;
}

// Function to manually handle fade-reveal elements
export function applyFadeReveal(elements, force = false) {
  if (!elements || elements.length === 0) return;

  elements.forEach((element) => {
    // Only add active class if element is in viewport or force is true
    if (force || isInViewport(element)) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

/**
 * Main function to handle all scroll-based text reveals
 * Handles both .splitting and .splitting-rows elements
 */
export function revealSplitTexts() {
  console.log("Setting up scroll-based text reveals");

  // 1. Handle .splitting-rows elements
  const splittingRows = document.querySelectorAll(".splitting-rows");
  if (splittingRows.length > 0) {
    console.log(`Setting up reveal for ${splittingRows.length} .splitting-rows elements`);

    splittingRows.forEach((element, index) => {
      // Check if element is already in the viewport
      if (isInViewport(element)) {
        // Immediately add reveal class if in viewport
        console.log(`Adding immediate reveal to visible splitting-rows[${index}]`);
        element.classList.add("reveal");
      } else {
        // Create scroll trigger for elements outside viewport
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 10%",
            toggleClass: "reveal",
            once: true,
            onEnter: () => console.log(`ScrollTrigger revealed splitting-rows[${index}]`),
            markers: false,
          },
        });
      }
    });
  }

  // 2. Handle regular .splitting elements (or any elements with [data-splitting] that need scroll reveals)
  const splittingElements = gsap.utils.toArray(".splitting, [data-splitting].scroll-reveal");
  if (splittingElements.length > 0) {
    console.log(`Setting up reveal for ${splittingElements.length} .splitting elements`);

    splittingElements.forEach((element, index) => {
      // Skip if it's also a splitting-rows (already handled above)
      if (element.classList.contains("splitting-rows")) return;

      // Check if element is already in the viewport
      if (isInViewport(element)) {
        // Immediately add reveal class if in viewport
        console.log(`Adding immediate reveal to visible splitting[${index}]`);
        element.classList.add("reveal");
      } else {
        // Create scroll trigger for elements outside viewport
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 10%",
            toggleClass: "reveal",
            once: true,
            markers: false,
          },
        });
      }
    });
  }
}

/**
 * Handle fade-reveal elements that should appear/disappear based on scroll position
 */
export function fadeInReveal() {
  console.log("Setting up fade-reveal elements");
  const fadeRevealElements = gsap.utils.toArray(".fade-reveal");

  if (fadeRevealElements.length === 0) {
    console.log("No fade-reveal elements found");
    return;
  }

  console.log(`Found ${fadeRevealElements.length} fade-reveal elements`);

  // First, handle any elements that are already in the viewport
  applyFadeReveal(fadeRevealElements);

  fadeRevealElements.forEach((element, index) => {
    // Only add ScrollTrigger for elements not already active
    if (!element.classList.contains("active")) {
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        end: "bottom 10%",
        onEnter: () => {
          console.log(`ScrollTrigger activated fade-reveal[${index}]`);
          element.classList.add("active");
        },
        onLeaveBack: () => element.classList.remove("active"),
        markers: false,
        once: false,
      });
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
