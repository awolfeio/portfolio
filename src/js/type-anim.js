import CircleType from "circletype";
import gsap from "gsap";
import { applyFadeReveal } from "./scroll-triggers";

/**
 * Rotates through title elements on the homepage.
 *
 * PERF: Previously each 5s tick spawned ~30 staggered setTimeouts (one per .char)
 * that each toggled an attribute + class on a separate task, producing a 1.2s wave
 * of style/layout/paint work and a periodic frame hitch on mobile. Now per-char
 * mutations are batched into a single requestAnimationFrame and the visual stagger
 * is driven by inline `animation-delay` (one CSS animation start per cycle, all
 * delayed in the compositor — the browser handles the timing without waking JS).
 *
 * The interval is also fully cleared (not just no-op'd) when the wrapper goes
 * offscreen, the tab is hidden, or `prefers-reduced-motion: reduce` is active.
 *
 * @param {string} caller - Identifier for debugging purposes.
 */
export function rotateTitles(caller = "unknown") {
  // Homepage guard — bail immediately if the titles wrapper isn't in the DOM
  const titlesWrapper = document.querySelector("h2.titles-wrapper");
  if (!titlesWrapper) return;

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
      if (retryCount > 5) return;

      setTimeout(() => rotateTitles(caller + "-retry"), 100);
      return;
    }
  }

  // Tear down any prior loop so we never end up with stacked intervals/observers
  stopTitleRotation();

  // Honor reduced-motion: render the first title and stop. No animation work.
  const reduceMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Get all titles
  const allTitles = document.querySelectorAll("h2.titles-wrapper .title");
  if (!allTitles || allTitles.length === 0) return;

  // Reset all titles to initial state — single batched pass
  allTitles.forEach((title) => {
    title.style.position = "absolute";
    title.style.display = "block";
    title.classList.remove("active");
    title.classList.add("hidden");
    resetCharacters(title.querySelectorAll(".char"));
  });

  // Initialize with first title
  const firstTitle = allTitles[0];
  if (!firstTitle) return;

  firstTitle.classList.remove("hidden");
  firstTitle.classList.add("active");

  setTimeout(() => {
    const chars = firstTitle.querySelectorAll(".char");
    if (chars.length > 0) animateChars(chars);
    if (!reduceMotion) startTitleRotation(titlesWrapper, allTitles);
  }, 300);
}

/**
 * Reset all chars in one batched DOM pass (style invalidation: 1, not N).
 * Inline animation-delay is set up-front so subsequent class flips inherit it.
 */
function resetCharacters(chars) {
  if (!chars || chars.length === 0) return;
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    char.classList.remove("reveal-char");
    char.setAttribute("data-reset", "true");
    if (!char._animDelayApplied) {
      char.style.animationDelay = `${i * 40}ms`;
      char._animDelayApplied = true;
    }
  }
}

/**
 * Trigger the per-char reveal animation. All N mutations happen inside one
 * requestAnimationFrame so the browser does a single style/layout/paint pass
 * instead of N scattered ones. CSS `animation-delay` (set in resetCharacters)
 * handles the visual stagger on the compositor.
 */
function animateChars(chars) {
  if (!chars || chars.length === 0) return;
  resetCharacters(chars);
  requestAnimationFrame(() => {
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      char.removeAttribute("data-reset");
      char.classList.add("reveal-char");
    }
  });
}

/** Fully tear down any active rotation loop, observer, and visibility handler. */
function stopTitleRotation() {
  if (window.titleAnimationInterval) {
    clearInterval(window.titleAnimationInterval);
    window.titleAnimationInterval = null;
  }
  if (window.titleAnimationObserver) {
    window.titleAnimationObserver.disconnect();
    window.titleAnimationObserver = null;
  }
  if (window.titleVisibilityHandler) {
    document.removeEventListener("visibilitychange", window.titleVisibilityHandler);
    window.titleVisibilityHandler = null;
  }
}

/**
 * Start the rotation interval. Pauses (clears the interval) whenever the wrapper
 * goes offscreen or the tab is hidden — no firing-and-bailing wake-ups.
 */
function startTitleRotation(titlesWrapper, titles) {
  if (window.titleAnimationInterval) return;

  let currentTitle = 0;
  let inView = true;
  let docVisible = !document.hidden;

  const tick = () => {
    if (!inView || !docVisible) return; // shouldn't reach — interval is cleared

    const activeTitle = titles[currentTitle];
    if (!activeTitle) return;

    activeTitle.classList.add("hidden");
    activeTitle.classList.remove("active");

    setTimeout(() => {
      resetCharacters(activeTitle.querySelectorAll(".char"));
      currentTitle = (currentTitle + 1) % titles.length;
      const nextTitle = titles[currentTitle];
      if (!nextTitle) return;
      resetCharacters(nextTitle.querySelectorAll(".char"));

      setTimeout(() => {
        nextTitle.classList.remove("hidden");
        nextTitle.classList.add("active");
        setTimeout(() => {
          animateChars(nextTitle.querySelectorAll(".char"));
        }, 300);
      }, 100);
    }, 400);
  };

  const startInterval = () => {
    if (window.titleAnimationInterval) return;
    window.titleAnimationInterval = setInterval(tick, 5000);
  };
  const stopInterval = () => {
    if (!window.titleAnimationInterval) return;
    clearInterval(window.titleAnimationInterval);
    window.titleAnimationInterval = null;
  };

  if ("IntersectionObserver" in window) {
    window.titleAnimationObserver = new IntersectionObserver(
      (entries) => {
        inView = entries[0].isIntersecting;
        if (inView && docVisible) startInterval();
        else stopInterval();
      },
      { rootMargin: "100px", threshold: 0.0 }
    );
    window.titleAnimationObserver.observe(titlesWrapper);
  }

  window.titleVisibilityHandler = () => {
    docVisible = !document.hidden;
    if (inView && docVisible) startInterval();
    else stopInterval();
  };
  document.addEventListener("visibilitychange", window.titleVisibilityHandler);

  if (inView && docVisible) startInterval();
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
      });

      // Ensure parent element is visible before animating characters
      h1.style.opacity = "1";
      h1.style.pointerEvents = "auto";

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
          const staggerDelay = index < 3 ? 56 * (index + 1) : 56 + index * 44;

          // Add reveal class with staggered delay
          setTimeout(() => {
            char.classList.add("reveal-char");
          }, staggerDelay); // Longer delay between chars for homepage
        });

        // For homepage, add special focus to ensure H1 animation is noticed
        const h1Parent = h1.parentElement;
        if (h1Parent) {
          // Add a subtle highlight to emphasize H1 without affecting blend modes
          gsap.fromTo(
            h1Parent,
            { filter: "brightness(1.08)" },
            {
              filter: "brightness(1)",
              duration: 0.6,
              yoyo: true,
              repeat: 1,
              ease: "sine.inOut",
              onComplete: () => gsap.set(h1Parent, { clearProps: "filter" }),
            }
          );
        }
      } else {
        // Standard staggered animation for other pages
        chars.forEach((char, index) => {
          setTimeout(() => {
            char.classList.add("reveal-char");
          }, 63 + index * 63); // Increased stagger for project pages
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
      element.style.opacity = "1";
      element.style.pointerEvents = "auto";
      // Reset characters
      chars.forEach((char) => {
        char.classList.remove("reveal-char");
        char.style.visibility = "visible";
        char.style.color = "transparent";
      });

      // Animate each character
      chars.forEach((char, index) => {
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
 * Creates a circular text effect for every .circular-text element on the page.
 *
 * Strategy:
 *  1. A short timeout lets the barba container fully enter the DOM.
 *  2. A single requestAnimationFrame ensures the browser has committed layout
 *     so getBoundingClientRect() returns real pixel values (not zeros).
 *     CircleType relies on these measurements for radius calculation — reading
 *     them before layout is committed produces a wrong circumference.
 *  3. Each element starts as `opacity:0 / pointer-events:none` (set in CSS).
 *     After CircleType has run we reveal it so the CSS transition plays cleanly
 *     and the user never sees the un-laid-out text.
 *  4. Any previous scroll handler is torn down before adding a new one so
 *     barba navigations don't stack duplicate listeners.
 */
export function circleText() {
  // Tear down any scroll handler from a previous page visit
  if (window._circleTextScrollHandler) {
    window.removeEventListener("scroll", window._circleTextScrollHandler);
    window._circleTextScrollHandler = null;
  }

  setTimeout(() => {
    // Wait one rAF so layout is fully committed before CircleType measures
    requestAnimationFrame(() => {
      const circleTextEls = document.querySelectorAll(".circular-text");
      if (!circleTextEls.length) return;

      circleTextEls.forEach((el) => {
        // CircleType measures getBoundingClientRect() on each character span.
        // The element must be in the layout flow (opacity:0 is fine; visibility:hidden
        // suppresses layout and would return zero sizes).
        new CircleType(el).radius(120);

        // Reveal now that CircleType has positioned everything correctly
        el.style.opacity = "1";
        el.style.pointerEvents = "auto";
      });

      // Single shared scroll listener — rotate the first circular-text element
      // (extend to forEach if multiple need independent scroll rotation)
      const primaryEl = circleTextEls[0];
      window._circleTextScrollHandler = function () {
        primaryEl.style.transform = `rotate(${window.scrollY * -0.15}deg)`;
      };
      window.addEventListener("scroll", window._circleTextScrollHandler, { passive: true });
    });
  }, 300);
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
