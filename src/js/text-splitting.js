import { gsap } from "gsap";
import SplitType from "split-type";

// Helper function to reset any existing SplitType instances
function resetSplitType(element) {
  // Check if element already has SplitType instance
  if (element.splitType) {
    element.splitType.revert();
  }

  // Remove any existing char elements
  const existingChars = element.querySelectorAll(".char");
  existingChars.forEach((char) => {
    if (char.parentNode) {
      char.parentNode.removeChild(char);
    }
  });
}

// Main function to handle all text splitting operations
export default function splitText() {
  console.log("Running splitText: centralizing all text splitting");

  // 1. Split text into chars for all relevant elements
  // Target all elements that need character splitting
  const charSplitElements = document.querySelectorAll("[data-splitting], h1, h2");
  console.log(`Found ${charSplitElements.length} elements for character splitting`);

  charSplitElements.forEach((element) => {
    // Reset any existing splits
    resetSplitType(element);

    // Special handling for title elements to maintain their absolute positioning
    const isTitleElement = element.classList.contains("title");

    // For titles, make sure we preserve positioning
    if (isTitleElement) {
      element.setAttribute("data-position", element.style.position || "");
      element.setAttribute("data-display", element.style.display || "");
    }

    // Create new split instance
    const splitInstance = new SplitType(element, {
      types: "words, chars",
      tagName: "span",
    });

    // Store reference to the split instance
    element.splitType = splitInstance;

    // Add data attributes to each character for pseudo-elements
    if (splitInstance.chars) {
      splitInstance.chars.forEach((char, index) => {
        char.setAttribute("data-char", char.textContent);
        char.setAttribute("data-index", index);
        char.style.setProperty("--char-index", index);

        // Apply transparent color to base text
        char.style.color = "transparent";
        // Ensure visibility
        char.style.visibility = "visible";

        // Apply a unique ID to each character for targeting
        if (!char.id) {
          char.id = `char-${Math.random().toString(36).substring(2, 9)}`;
        }
      });
    }

    // Restore positioning for titles after splitting
    if (isTitleElement && element.parentElement.classList.contains("titles-wrapper")) {
      element.style.position = "absolute";
      element.style.display = "block";
    }
  });

  // 2. Split text into lines for .splitting-rows elements
  if (document.querySelector(".splitting-rows")) {
    const rowElements = document.querySelectorAll(".splitting-rows");
    console.log(`Found ${rowElements.length} elements for line splitting`);

    rowElements.forEach((element) => {
      // Reset any existing splits
      resetSplitType(element);

      // Remove reveal class if it exists to start fresh
      element.classList.remove("reveal");

      // Create new split instance
      const splitLines = new SplitType(element, {
        types: "lines",
        tagName: "span",
        linesClass: "line",
      });

      // Store reference to the split instance
      element.splitType = splitLines;

      // Add index data attributes to lines for staggered animation
      if (splitLines.lines) {
        splitLines.lines.forEach((line, index) => {
          line.setAttribute("data-line-index", index);
          line.setAttribute("data-text", line.textContent);

          // Initially make each line have 0 opacity to prevent flash
          line.style.opacity = "0";

          // Ensure line is visible but transparent for smooth animation
          setTimeout(() => {
            line.style.opacity = "";
          }, 50);
        });
      }

      // Do NOT add reveal class here - this will be handled by scroll-triggers.js
    });
  }
}

// A very short debounce utility
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Function to recalculate split lines on resize
function handleResize() {
  const rowElements = document.querySelectorAll(".splitting-rows");
  if (rowElements.length === 0) return;

  console.log(`Recalculating split-lines after resize for ${rowElements.length} elements`);

  rowElements.forEach((element) => {
    // Capture if it is already revealed/active
    const wasRevealed = element.classList.contains("reveal") || element.classList.contains("active");

    // Reset any existing splits
    resetSplitType(element);

    // Create new split instance
    const splitLines = new SplitType(element, {
      types: "lines",
      tagName: "span",
      linesClass: "line",
    });

    // Store reference to the split instance
    element.splitType = splitLines;

    // Add index data attributes to lines for staggered animation
    if (splitLines.lines) {
      splitLines.lines.forEach((line, index) => {
        line.setAttribute("data-line-index", index);
        line.setAttribute("data-text", line.textContent);

        if (!wasRevealed) {
          // Initially make each line have 0 opacity to prevent flash
          line.style.opacity = "0";

          // Ensure line is visible but transparent for smooth animation
          setTimeout(() => {
            if (!element.classList.contains("reveal") && !element.classList.contains("active")) {
              line.style.opacity = "0";
            } else {
              line.style.opacity = "";
            }
          }, 50);
        } else {
          // If already revealed, ensure it is visible immediately without flashing
          // We also disable the animation to prevent it from re-running
          line.style.animation = "none";
          line.style.opacity = "1";
        }
      });
    }

    // Maintain reveal state if it was already animated
    if (wasRevealed) {
      element.classList.add("reveal", "active");
    }
  });
}

// Register the resize event listener once at the module level
if (typeof window !== "undefined") {
  window.addEventListener("resize", debounce(handleResize, 32));
}
