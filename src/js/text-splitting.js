import { gsap } from "gsap";
import SplitType from "split-type";

export default function splitText() {
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

  // Split text into chars
  const textElements = document.querySelectorAll("[data-splitting], h1, h2");
  textElements.forEach((element) => {
    // Reset any existing splits
    resetSplitType(element);

    // Special handling for title elements to maintain their absolute positioning
    const isTitleElement = element.classList.contains("title");

    // For titles, make sure we preserve positioning
    if (isTitleElement) {
      element.setAttribute("data-position", element.style.position || "");
      element.setAttribute("data-display", element.style.display || "");
    }

    const splitInstance = new SplitType(element, {
      types: "chars",
      tagName: "span",
    });

    // Store reference to the split instance
    element.splitType = splitInstance;

    // Add data-char attributes to each character for pseudo-elements
    if (splitInstance.chars) {
      splitInstance.chars.forEach((char, index) => {
        char.setAttribute("data-char", char.textContent);
        char.setAttribute("data-index", index);

        // Apply transparent color to base text
        char.style.color = "transparent";

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

  // Split text into lines
  if (document.querySelector(".splitting-rows")) {
    const rowElements = document.querySelectorAll(".splitting-rows");
    rowElements.forEach((element) => {
      // Reset any existing splits
      resetSplitType(element);

      // Remove reveal class if it exists to start fresh
      element.classList.remove("reveal");

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

          // Initially make each line have 0 opacity to prevent flash
          line.style.opacity = "0";

          // Ensure line is visible but transparent for smooth animation
          setTimeout(() => {
            line.style.opacity = "";
          }, 50);
        });
      }

      // Do NOT add reveal class here - this will be handled by other functions
      // at the right time during page load or transitions
    });
  }
}
