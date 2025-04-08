import CircleType from "circletype";
import SplitType from "split-type";
import gsap from "gsap";

// Helper function to animate a single element's characters
// Moved outside of other functions so it can be reused
function animateElement(element) {
  // Get character spans
  let chars = element.querySelectorAll(".char");

  // If no chars found, the text might not be split yet
  if (chars.length === 0) {
    // Try to split the element
    try {
      // Split the text
      const splitInstance = new SplitType(element, {
        types: "chars",
        tagName: "span",
      });

      // Add data attributes to each character
      if (splitInstance.chars) {
        splitInstance.chars.forEach((char, index) => {
          char.setAttribute("data-char", char.textContent);
          char.setAttribute("data-index", index);
          // Ensure text is transparent
          char.style.color = "transparent";
        });
      }

      // Get the newly created character elements
      chars = element.querySelectorAll(".char");
    } catch (error) {
      console.warn("Failed to split text:", error);
    }
  }

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
  }
}

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

export function rotateTitles(caller = "unknown") {
  console.log(`rotateTitles called from ${caller} at ${new Date().toISOString()}`);

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

// Function to handle H1 character reveal
export function revealH1Characters() {
  console.log("revealH1Characters called");

  // Get all H1 elements
  const h1Elements = document.querySelectorAll("h1");

  if (h1Elements.length === 0) {
    console.warn("No H1 elements found to animate");
    return;
  }

  console.log(`Found ${h1Elements.length} H1 elements to animate`);

  // Process each H1 element
  h1Elements.forEach((h1) => {
    // If no chars, we need to split the text
    if (h1.querySelectorAll(".char").length === 0) {
      try {
        // Split the text
        const splitInstance = new SplitType(h1, {
          types: "chars",
          tagName: "span",
        });

        // Add data attributes to each character
        if (splitInstance.chars) {
          splitInstance.chars.forEach((char, index) => {
            char.setAttribute("data-char", char.textContent);
            char.setAttribute("data-index", index);
            // Ensure text is transparent
            char.style.color = "transparent";
          });
        }
      } catch (error) {
        console.warn("Failed to split H1 text:", error);
      }
    }

    // Get characters after splitting
    const chars = h1.querySelectorAll(".char");

    if (chars.length > 0) {
      console.log(`Animating ${chars.length} characters in H1`);

      // Reset any existing animations
      chars.forEach((char) => {
        char.classList.remove("reveal-char");
        // Make sure visibility is set correctly
        char.style.visibility = "visible";
        // Ensure text content is transparent for pseudo-element reveal
        char.style.color = "transparent";
        // Force reflow
        void char.offsetWidth;
      });

      // Simple staggered animation
      chars.forEach((char, index) => {
        setTimeout(() => {
          char.classList.add("reveal-char");
        }, 50 + index * 25); // Start after a small delay and stagger
      });
    }
  });

  // Process other elements with data-splitting attribute
  const dataSplittingElements = document.querySelectorAll("[data-splitting]:not(h1)");
  dataSplittingElements.forEach((element) => {
    if (element.tagName !== "H1" && !element.closest(".titles-wrapper")) {
      animateElement(element);
    }
  });
}

// Helper function to reset an element's animation state
function resetElement(element) {
  const chars = element.querySelectorAll(".char");
  if (chars.length > 0) {
    chars.forEach((char) => {
      char.classList.remove("reveal-char");
      char.setAttribute("data-reset", "true");
      void char.offsetWidth; // Force reflow
    });
  }
}

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

// Function to manually force reveal all animated elements
export function forceRevealAll() {
  console.log("Running forceRevealAll");

  // Skip H1 elements as they should be handled separately by revealH1Characters
  // to avoid animation conflicts

  // Process any element with data-splitting attribute, except titles-wrapper elements
  const dataSplittingElements = document.querySelectorAll(
    "[data-splitting]:not(.titles-wrapper):not(.titles-wrapper *):not(h1):not(.splitting-rows)"
  );
  console.log(`Found ${dataSplittingElements.length} data-splitting elements to reveal`);

  dataSplittingElements.forEach((element) => {
    animateElement(element);
  });

  // Handle .splitting-rows elements with dedicated function for proper sequencing
  revealSplittingRows();

  // Force reveal all fade elements
  document.querySelectorAll(".fade-reveal").forEach((el) => {
    el.classList.add("active");
  });
}

// Function to specially handle the reveal of .splitting-rows elements
export function revealSplittingRows() {
  console.log("Running revealSplittingRows");

  const splittingRows = document.querySelectorAll(".splitting-rows");
  if (!splittingRows || splittingRows.length === 0) {
    console.log("No .splitting-rows elements found");
    return;
  }

  console.log(`Found ${splittingRows.length} .splitting-rows elements`);

  // Process each splitting-rows element
  splittingRows.forEach((element, index) => {
    // First ensure the element is properly split by lines
    if (!element.splitType || !element.splitType.lines || element.splitType.lines.length === 0) {
      console.log(`Element ${index} doesn't have lines split properly, trying to re-split`);

      // Try to re-split using SplitType
      try {
        if (element.splitType) {
          element.splitType.revert();
        }

        element.splitType = new SplitType(element, {
          types: "lines",
          tagName: "span",
          linesClass: "line",
        });

        // Add data attributes to lines
        if (element.splitType.lines) {
          element.splitType.lines.forEach((line, lineIndex) => {
            line.setAttribute("data-line-index", lineIndex);
          });
        }
      } catch (error) {
        console.warn("Failed to split text into lines:", error);
      }
    }

    // Remove the reveal class first to ensure a fresh animation
    element.classList.remove("reveal");

    // Force a reflow to ensure proper animation sequencing
    void element.offsetWidth;

    // Add the reveal class directly - this will trigger the CSS animation
    console.log(`Adding .reveal to splitting-rows[${index}]`);
    element.classList.add("reveal");
  });
}
