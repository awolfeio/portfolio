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
        });
      }

      // Wait for first active title's character animations to complete
      const activeTitle = document.querySelector("h2.titles-wrapper .title.active");

      if (activeTitle) {
        // Find the last character in the active title
        const chars = activeTitle.querySelectorAll(".char");

        if (chars.length > 0) {
          const lastChar = chars[chars.length - 1];

          // Listen for the last character's animation to complete
          lastChar.addEventListener("animationend", function handleAnimEnd() {
            // Add a small delay after characters finish animating
            setTimeout(() => {
              element.classList.add("reveal");
            }, 100);

            // Remove the event listener after it's triggered
            lastChar.removeEventListener("animationend", handleAnimEnd);
          });
        } else {
          // Fallback if no characters found
          setTimeout(() => {
            element.classList.add("reveal");
          }, 100);
        }
      } else {
        // Fallback if no active title found
        setTimeout(() => {
          element.classList.add("reveal");
        }, 100);
      }
    });
  }
}
