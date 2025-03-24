import CircleType from "circletype";

export function rotateTitles() {
  // Clear any existing animation loops
  if (window.titleAnimationInterval) {
    clearInterval(window.titleAnimationInterval);
  }

  // Set all titles to position:absolute right at the start
  const allTitles = document.querySelectorAll("h2.titles-wrapper .title");
  allTitles.forEach((title) => {
    title.style.position = "absolute";
    title.style.display = "block";
    title.classList.remove("active");
    title.classList.add("hidden");

    // Only reset characters for initially hidden titles
    setTimeout(() => {
      resetCharacters(title.querySelectorAll(".char"));
    }, 400); // Wait for the full opacity transition
  });

  // Helper function to reset character positions
  function resetCharacters(chars) {
    if (!chars || chars.length === 0) return;

    chars.forEach((char) => {
      // Remove animation class
      char.classList.remove("reveal-char");

      // Force the before pseudo-element back to starting position
      // Instead of using a style element, we'll use a data attribute
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
  const firstTitle = document.querySelector("h2.titles-wrapper .title:nth-of-type(1)");
  if (firstTitle) {
    // Remove hidden class and ensure proper positioning
    firstTitle.classList.remove("hidden");
    firstTitle.style.position = "absolute";
    firstTitle.style.display = "block";

    // Begin title sequence with slight delay
    setTimeout(() => {
      // Activate the first title
      firstTitle.classList.add("active");
      void firstTitle.offsetWidth; // Force reflow

      // After title is visible, animate its characters
      setTimeout(() => {
        const chars = firstTitle.querySelectorAll(".char");
        const lastChar = animateChars(chars);

        if (lastChar) {
          // Wait for the last character animation to complete
          lastChar.addEventListener("animationend", function onAnimEnd() {
            // Start the title rotation after initial reveal
            startTitleRotation();
            // Remove the event listener after it's triggered
            lastChar.removeEventListener("animationend", onAnimEnd);
          });
        } else {
          // Fallback if no characters found
          setTimeout(startTitleRotation, 2000);
        }
      }, 300);
    }, 100);
  }

  function startTitleRotation() {
    const titles = document.querySelectorAll("h2.titles-wrapper .title");
    let currentTitle = 0;

    const rotateToNextTitle = () => {
      // Get current active title
      const activeTitle = document.querySelector("h2.titles-wrapper .title.active");
      if (!activeTitle) return;

      // Add hidden class to trigger fade-out
      activeTitle.classList.add("hidden");
      activeTitle.classList.remove("active");

      // After fade-out animation completes
      setTimeout(() => {
        // Only reset character animations after the title has faded out
        resetCharacters(activeTitle.querySelectorAll(".char"));

        // Increment to next title
        currentTitle = (currentTitle + 1) % titles.length;

        // Get the next title and ensure proper positioning
        const nextTitle = titles[currentTitle];
        nextTitle.style.position = "absolute";
        nextTitle.style.display = "block";

        // Reset all characters in the next title before showing
        resetCharacters(nextTitle.querySelectorAll(".char"));

        // Small delay before fading in the next title
        setTimeout(() => {
          // Remove hidden to start fade in, then add active
          nextTitle.classList.remove("hidden");
          // Activate the next title
          nextTitle.classList.add("active");

          // After title becomes visible, animate its characters
          setTimeout(() => {
            const chars = nextTitle.querySelectorAll(".char");
            animateChars(chars);
          }, 300);
        }, 100);
      }, 400); // Wait for the full opacity transition (was 500ms)
    };

    // Create a scheduled interval to rotate titles
    window.titleAnimationInterval = setInterval(() => {
      rotateToNextTitle();
    }, 5000); // Full cycle duration (adjust as needed)
  }
}

// Function to handle H1 character reveal
export function revealH1Characters() {
  //console.log("Revealing H1 characters");

  // Get all H1 elements
  const h1Elements = document.querySelectorAll("h1");

  h1Elements.forEach((h1) => {
    // Get character spans
    const chars = h1.querySelectorAll(".char");
    //console.log(`Found ${chars.length} characters in H1:`, h1.textContent.trim());

    if (chars.length === 0) {
      console.warn("No character elements found in H1:", h1);
      return;
    }

    // Reset animations
    chars.forEach((char) => {
      char.classList.remove("reveal-char");
      void char.offsetWidth; // Force reflow
    });

    // Staggered reveal animation
    chars.forEach((char, index) => {
      setTimeout(() => {
        char.classList.add("reveal-char");
      }, index * 25); // Faster staggering for H1s
    });
  });
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
