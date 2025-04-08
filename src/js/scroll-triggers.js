import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function revealSplitTexts() {
  // Handle regular splitting elements
  const revealSplitTexts = gsap.utils.toArray(".splitting");

  revealSplitTexts.forEach((revealSplitTexts) => {
    gsap.from(revealSplitTexts, {
      scrollTrigger: {
        start: "top 90%",
        end: "bottom -25%",
        trigger: revealSplitTexts,
        toggleClass: "reveal",
        markers: false,
        once: true,
      },
    });
  });

  // Also explicitly handle any splitting-rows that might not already have the reveal class
  const splittingRows = document.querySelectorAll(".splitting-rows:not(.reveal)");
  if (splittingRows.length > 0) {
    console.log(`revealSplitTexts: Found ${splittingRows.length} splitting-rows without reveal class`);

    splittingRows.forEach((row) => {
      // Add the reveal class immediately if near the top of the viewport
      const rect = row.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        console.log("Adding reveal to visible splitting-rows");
        row.classList.add("reveal");
      } else {
        // Otherwise set up a scroll trigger
        gsap.from(row, {
          scrollTrigger: {
            start: "top 90%",
            end: "bottom -25%",
            trigger: row,
            toggleClass: "reveal",
            markers: false,
            once: true,
            onEnter: () => console.log("ScrollTrigger revealed splitting-rows"),
          },
        });
      }
    });
  }
}

// Explicit function to reveal splitting rows on page load
export function revealSplittingRows() {
  console.log("Explicitly handling splitting-rows reveal");
  const splittingRows = document.querySelectorAll(".splitting-rows");

  if (splittingRows.length) {
    console.log(`Found ${splittingRows.length} .splitting-rows elements`);

    // Immediately apply reveal class to all splitting-rows that are visible
    gsap.set(splittingRows, {
      onComplete: () => {
        splittingRows.forEach((row, index) => {
          const rect = row.getBoundingClientRect();
          // If the element is on screen or near the top of the viewport
          if (rect.top < window.innerHeight * 0.9) {
            console.log(`Adding reveal to splitting-rows[${index}] immediately`);
            row.classList.add("reveal");
          }
        });
      },
    });

    // Set up scroll triggers for any that are off-screen
    splittingRows.forEach((row) => {
      const rect = row.getBoundingClientRect();
      if (rect.top >= window.innerHeight * 0.9) {
        gsap.from(row, {
          scrollTrigger: {
            start: "top 90%",
            end: "bottom -25%",
            trigger: row,
            toggleClass: "reveal",
            markers: false,
            once: true,
          },
        });
      }
    });
  }
}

export function fadeInReveal() {
  const fadeRevealElements = gsap.utils.toArray(".fade-reveal");

  fadeRevealElements.forEach((fadeRevealElements) => {
    gsap.from(fadeRevealElements, {
      scrollTrigger: {
        start: "top 80%",
        end: "bottom -25%",
        trigger: fadeRevealElements,
        toggleClass: "active",
        markers: false,
        once: false,
      },
    });
  });
}

export function playVideosOnEnter() {
  const videoElements = gsap.utils.toArray("video");

  videoElements.forEach((videoElement) => {
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
          } else {
            // Video is not paused; let's see if it's stuck
            if (previousTime === videoElement.currentTime) {
              // The video's currentTime hasn't changed; it's stuck
              videoElement.currentTime = 0; // reset to 0:00
              videoElement.play(); // start playing
              videoElement.parentNode.classList.remove("paused");
              videoElement.parentNode.classList.add("playing");
            }
          }
        }, 1250);
      },
      markers: false,
      once: false,
    });
  });
}

export function autoScrollContainer() {
  // Assuming your wrapper class is .scrollWrapper
  const scrollWrappers = gsap.utils.toArray(".auto-scroll");

  scrollWrappers.forEach((scrollWrapper) => {
    // Calculate the scrollable distance
    let scrollableHeight = scrollWrapper.querySelector(".scroll-content").clientHeight - scrollWrapper.clientHeight;

    // Create a tween for the scrolling animation
    let scrollTween = gsap.to(scrollWrapper.querySelector(".scroll-content"), {
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
      onEnter: () => scrollTween.restart(),
      onEnterBack: () => scrollTween.restart(),
      markers: false,
    });
  });
}
