import CircleType from "circletype";
import gsap from "gsap";
import { applyFadeReveal } from "./scroll-triggers";

// Helper function to animate characters with staggered timing
function animateChars(chars) {
  if (!chars || chars.length === 0) return;

  // Reset existing animations first
  chars.forEach((char) => {
    char.classList.remove("reveal-char");
    // Force reflow
    void char.offsetWidth;
  });

  // Simple staggered animation without GSAP
  chars.forEach((char, index) => {
    setTimeout(() => {
      char.classList.add("reveal-char");
    }, index * 25);
  });
}

/**
 * Rotates through title elements in the homepage
 * @param {string} caller - Identifier for debugging purposes
 */
export function rotateTitles(caller = "unknown") {
  console.log(`rotateTitles called from ${caller} at ${new Date().toISOString()}`);

  // Check if we're in loading-screen initial page load
  const isInitialLoad = document.querySelector("#loading-splash") !== null;

  // Skip transition checks if initial load from loading screen
  if (!isInitialLoad) {
    // Check if Barba transition is still active or if animation controller says no
    if (
      window.barbaTransitionActive ||
      (window.animationController && !window.animationController.canRunAnimations())
    ) {
      // Limit retry count to prevent infinite recursion
      const retryCount = (caller.match(/-retry/g) || []).length;
      if (retryCount > 5) {
        console.log("GIVING UP on title rotation after multiple retries");
        return;
      }

      console.log("SKIPPING TITLE ROTATION - Transition still active, will retry later");

      // Try again in a bit
      setTimeout(() => rotateTitles(caller + "-retry"), 100);
      return;
    }
  } else {
    console.log("Initial page load - running title rotation immediately");
  }

  console.log("RUNNING TITLE ROTATION - transition completed or initial load");

  // Clear any existing animation loops
  if (window.titleAnimationInterval) {
    console.log(`Clearing existing titleAnimationInterval from ${caller}`);
    clearInterval(window.titleAnimationInterval);
    window.titleAnimationInterval = null;
  }

  // Get all titles
  const allTitles = document.querySelectorAll("h2.titles-wrapper .title");
  if (!allTitles || allTitles.length === 0) {
    console.warn("No title elements found for rotation");
    return;
  }

  // Reset all titles to initial state
  allTitles.forEach((title) => {
    title.style.position = "absolute";
    title.style.display = "block";
    title.classList.remove("active");
    title.classList.add("hidden");

    // Reset characters
    resetCharacters(title.querySelectorAll(".char"));
  });

  // Helper function to reset character positions
  function resetCharacters(chars) {
    if (!chars || chars.length === 0) return;

    chars.forEach((char) => {
      // Remove animation class
      char.classList.remove("reveal-char");

      // Force the before pseudo-element back to starting position
      char.setAttribute("data-reset", "true");

      // Force reflow
      void char.offsetWidth;
    });
  }

  // Helper function to show character animations
  function animateChars(chars) {
    if (!chars || chars.length === 0) return null;

    // Reset all characters first
    resetCharacters(chars);

    // Add reveal animation with staggered timing
    chars.forEach((char, index) => {
      setTimeout(() => {
        // Remove the reset attribute before animating
        char.removeAttribute("data-reset");
        // Now add the animation class
        char.classList.add("reveal-char");
      }, index * 40); // Staggered delay
    });

    // Return the last char for animation completion tracking
    return chars[chars.length - 1];
  }

  // Initialize with first title
  const firstTitle = allTitles[0];
  if (firstTitle) {
    // Remove hidden class and ensure proper positioning
    firstTitle.classList.remove("hidden");
    firstTitle.classList.add("active");

    // Force reflow
    void firstTitle.offsetWidth;

    // Animate the characters with a slight delay
    setTimeout(() => {
      const chars = firstTitle.querySelectorAll(".char");

      // Start rotation immediately if no chars to animate
      if (!chars || chars.length === 0) {
        startTitleRotation();
        return;
      }

      const lastChar = animateChars(chars);

      if (lastChar) {
        // Listen for animation completion
        lastChar.addEventListener("animationend", function onAnimEnd() {
          startTitleRotation();
          lastChar.removeEventListener("animationend", onAnimEnd);
        });

        // Fallback timer in case the animation event doesn't fire
        setTimeout(() => {
          if (!window.titleAnimationInterval) {
            startTitleRotation();
          }
        }, 2000);
      } else {
        // Start rotation if no last char
        startTitleRotation();
      }
    }, 300);
  }

  function startTitleRotation() {
    console.log("Starting title rotation");

    // Don't start a new interval if one already exists
    if (window.titleAnimationInterval) {
      return;
    }

    const titles = document.querySelectorAll("h2.titles-wrapper .title");
    let currentTitle = 0;

    const rotateToNextTitle = () => {
      // Double check titles still exist in the DOM
      const currentTitles = document.querySelectorAll("h2.titles-wrapper .title");
      if (!currentTitles || currentTitles.length === 0) {
        if (window.titleAnimationInterval) {
          clearInterval(window.titleAnimationInterval);
          window.titleAnimationInterval = null;
        }
        return;
      }

      // Get current active title
      const activeTitle = document.querySelector("h2.titles-wrapper .title.active");
      if (!activeTitle) return;

      // Add hidden class to trigger fade-out
      activeTitle.classList.add("hidden");
      activeTitle.classList.remove("active");

      // After fade-out animation completes
      setTimeout(() => {
        // Reset characters
        resetCharacters(activeTitle.querySelectorAll(".char"));

        // Increment to next title
        currentTitle = (currentTitle + 1) % titles.length;

        // Get the next title
        const nextTitle = titles[currentTitle];
        if (!nextTitle) return; // Guard against missing title

        nextTitle.style.position = "absolute";
        nextTitle.style.display = "block";

        // Reset characters in the next title
        resetCharacters(nextTitle.querySelectorAll(".char"));

        // Fade in the next title
        setTimeout(() => {
          nextTitle.classList.remove("hidden");
          nextTitle.classList.add("active");

          // Animate characters
          setTimeout(() => {
            const chars = nextTitle.querySelectorAll(".char");
            animateChars(chars);
          }, 300);
        }, 100);
      }, 400);
    };

    // Create a scheduled interval to rotate titles
    window.titleAnimationInterval = setInterval(() => {
      rotateToNextTitle();
    }, 5000);
  }
}

/**
 * Animates H1 character reveals (assumes text has already been split by text-splitting.js)
 */
export function revealH1Characters() {
  console.log("revealH1Characters called");

  // Check if we're in loading-screen initial page load
  const isInitialLoad = document.querySelector("#loading-splash") !== null;

  // Skip transition checks if initial load from loading screen
  if (!isInitialLoad) {
    // Check if Barba transition is still active or if animation controller says no
    if (
      window.barbaTransitionActive ||
      (window.animationController && !window.animationController.canRunAnimations())
    ) {
      console.log("SKIPPING H1 ANIMATION - Transition still active, will retry later");

      // Try again in a bit
      setTimeout(revealH1Characters, 100);
      return;
    }
  } else {
    console.log("Initial page load - running H1 animations immediately");
  }

  console.log("RUNNING H1 ANIMATIONS - transition completed or initial load");

  // Get all H1 elements
  const h1Elements = document.querySelectorAll("h1");

  if (h1Elements.length === 0) {
    console.warn("No H1 elements found to animate");
    return;
  }

  console.log(`Found ${h1Elements.length} H1 elements to animate`);

  // Check if we're on the homepage
  const isHomepage = document.querySelector("#index") !== null;

  // Process each H1 element - assuming text has already been split
  h1Elements.forEach((h1) => {
    // Reset any existing animations first to ensure clean starting point
    const chars = h1.querySelectorAll(".char");
    if (chars.length > 0) {
      console.log(`Animating ${chars.length} characters in H1`);

      // Reset any existing animations
      chars.forEach((char) => {
        // Remove animation class
        char.classList.remove("reveal-char");

        // Make sure visibility is set correctly
        char.style.visibility = "visible";

        // Ensure text content is transparent for pseudo-element reveal
        char.style.color = "transparent";

        // Force reflow
        void char.offsetWidth;
      });

      // Use more pronounced staggered animation for homepage
      if (isHomepage) {
        // Log to ensure we know this section is running
        console.log("Running homepage-specific H1 character animations");

        // More noticeable stagger for homepage H1s
        chars.forEach((char, index) => {
          // Remove any previous animation
          gsap.killTweensOf(char);

          // Ensure char is initially hidden
          char.classList.remove("reveal-char");

          // Use a longer delay for first few characters to make it more noticeable
          const staggerDelay = index < 3 ? 45 * (index + 1) : 45 + index * 35;

          // Add reveal class with staggered delay
          setTimeout(() => {
            char.classList.add("reveal-char");

            // Force a repaint to ensure animation runs smoothly
            void char.offsetWidth;
          }, staggerDelay); // Longer delay between chars for homepage
        });

        // For homepage, add special focus to ensure H1 animation is noticed
        const h1Parent = h1.parentElement;
        if (h1Parent) {
          // Add a subtle highlight to emphasize H1
          gsap.fromTo(
            h1Parent,
            { backgroundColor: "rgba(255,255,255,0)" },
            {
              backgroundColor: "rgba(255,255,255,0.03)",
              duration: 0.5,
              yoyo: true,
              repeat: 1,
            }
          );
        }
      } else {
        // Standard staggered animation for other pages
        chars.forEach((char, index) => {
          setTimeout(() => {
            char.classList.add("reveal-char");
          }, 50 + index * 25); // Start after a small delay and stagger
        });
      }
    } else {
      console.warn(`H1 element doesn't have .char elements. Make sure splitText() was called first.`);
    }
  });
}

/**
 * Animates data-splitting elements (excluding H1s and title wrappers)
 */
export function animateDataSplittingChars() {
  console.log("animateDataSplittingChars called");

  // Check if we're in loading-screen initial page load
  const isInitialLoad = document.querySelector("#loading-splash") !== null;

  // Skip transition checks if initial load from loading screen
  if (!isInitialLoad) {
    // Check if Barba transition is still active or if animation controller says no
    if (
      window.barbaTransitionActive ||
      (window.animationController && !window.animationController.canRunAnimations())
    ) {
      console.log("SKIPPING DATA-SPLITTING ANIMATION - Transition still active, will retry later");

      // Try again in a bit
      setTimeout(animateDataSplittingChars, 100);
      return;
    }
  } else {
    console.log("Initial page load - running data-splitting animations immediately");
  }

  console.log("RUNNING DATA-SPLITTING ANIMATIONS - transition completed or initial load");

  // Process elements with data-splitting attribute, excluding H1s and titles
  const dataSplittingElements = document.querySelectorAll(
    "[data-splitting]:not(.titles-wrapper):not(.titles-wrapper *):not(h1):not(.splitting-rows)"
  );

  if (dataSplittingElements.length === 0) {
    console.log("No data-splitting elements found to animate");
    return;
  }

  console.log(`Found ${dataSplittingElements.length} data-splitting elements to animate`);

  dataSplittingElements.forEach((element) => {
    // Get character elements
    const chars = element.querySelectorAll(".char");

    if (chars.length > 0) {
      // Reset and animate each character
      chars.forEach((char, index) => {
        // Reset first
        char.classList.remove("reveal-char");
        char.style.visibility = "visible";
        char.style.color = "transparent";

        // Force reflow
        void char.offsetWidth;

        // Animate with delay
        setTimeout(() => {
          char.classList.add("reveal-char");
        }, index * 25);
      });
    } else {
      console.warn(`Element with data-splitting doesn't have .char elements. Make sure splitText() was called first.`);
    }
  });
}

/**
 * Creates a circular text effect
 */
export function circleText() {
  setTimeout(() => {
    const circleTextEl = document.querySelector(".circular-text");
    if (circleTextEl) {
      // Make the text circular with CircleType
      const rotate = new CircleType(circleTextEl).radius(120);

      // Rotate based on scroll position
      window.addEventListener("scroll", function () {
        circleTextEl.style.transform = `rotate(${window.scrollY * -0.15}deg)`;
      });
    }
  }, 1000);
}

/**
 * Manually force reveal all animated elements
 * This function is for special cases like manually triggering animations
 */
export function forceRevealAll() {
  console.log("Running forceRevealAll");

  // Process H1 elements
  revealH1Characters();

  // Process data-splitting elements
  animateDataSplittingChars();

  // Force reveal all fade elements using the applyFadeReveal function
  const fadeRevealElements = document.querySelectorAll(".fade-reveal");
  applyFadeReveal(fadeRevealElements, true); // Pass true to force reveal
}
