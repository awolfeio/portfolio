import barba from "@barba/core";
import { fadeTransition } from "./transitions.js";
import { lenis, stopScroll, startScroll } from "./smooth-scroll.js";
import initSmoothScroll from "./smooth-scroll.js";
import { changeBG, fogBG } from "./background.js";
import splitText from "./text-splitting.js";
import {
  revealSplitTexts,
  fadeInReveal,
  playVideosOnEnter,
  autoScrollContainer,
  revealSplittingRows,
} from "./scroll-triggers.js";
import { rotateTitles, circleText, revealH1Characters, forceRevealAll } from "./type-anim.js";
import { cursorCheck } from "./cursor-element.js";
import { setupEventHandlers } from "./event-handlers.js";
import { checkLocationAndRemoveElements } from "./geographic.js";
import { gsap } from "gsap";
import SplitType from "split-type";

/**
 * Initialize Barba.js and set up page transitions
 */
export function initializeBarba() {
  // Make barba accessible globally for programmatic navigation in event handlers
  window.barba = barba;

  // Add CSS for Barba transitions
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    /* Only apply to containers during transitions, not on initial page load */
    .barba-transition [data-barba="container"] {
      opacity: 0;
      visibility: hidden;
    }
    .barba-transition [data-barba="container"] .page,
    .barba-transition [data-barba="container"] .page > * {
      opacity: 0;
    }
  `;
  document.head.appendChild(styleElement);

  // Set up custom hooks
  barba.hooks.before((data) => {
    console.log("Barba transition starting", data.trigger);

    // Add class to indicate transition state
    document.body.classList.add("barba-transition");

    // Before any transition starts, ensure the next container starts invisible
    if (data.next.container) {
      // Make the entire container and all its content invisible
      gsap.set(data.next.container, {
        opacity: 0,
        visibility: "hidden", // Add visibility hidden to prevent flash
      });
    }
  });

  // Add a hook after Barba adds the next container to the DOM
  barba.hooks.beforeEnter((data) => {
    // Ensure all content within the container is also initially invisible
    const allContentElements = data.next.container.querySelectorAll(".page, .page > *");
    gsap.set(allContentElements, {
      opacity: 0,
      immediateRender: true,
    });

    // Add a class to old container for better targeting during transitions
    if (data.current.container) {
      data.current.container.classList.add("barba-old-container");
    }
  });

  // Add a hook to clean up after transition
  barba.hooks.after((data) => {
    document.body.classList.remove("barba-transition");

    // Remove the old container class from any elements
    document.querySelectorAll(".barba-old-container").forEach((el) => {
      el.classList.remove("barba-old-container");
    });

    checkLocationAndRemoveElements();
  });

  barba.init({
    preventRunning: true, // Prevent transitions from running simultaneously
    transitions: [
      {
        name: "fade-transition",
        leave(data) {
          return handleLeave(data);
        },
        enter(data) {
          return handleEnter(data);
        },
        afterEnter(data) {
          return handleAfterEnter(data);
        },
      },
    ],
    views: [
      {
        namespace: "index",
        beforeEnter() {
          // Index page specific code
        },
      },
      {
        namespace: "about",
        beforeEnter() {
          // About page specific code
        },
      },
      {
        namespace: "works",
        beforeEnter() {
          // Works page specific code
        },
      },
      {
        namespace: "contact",
        beforeEnter() {
          // Contact page specific code
        },
      },
      {
        namespace: "labs",
        beforeEnter() {
          // Labs page specific code
        },
      },
      {
        namespace: "resume",
        beforeEnter() {
          // Resume page specific code
        },
      },
      // Project page namespaces
      {
        namespace: "scholastic",
        beforeEnter() {
          // Scholastic project page specific code
        },
      },
      {
        namespace: "jpplus",
        beforeEnter() {
          // JPPlus project page specific code
        },
      },
      {
        namespace: "rowmark",
        beforeEnter() {
          // Rowmark project page specific code
        },
      },
      {
        namespace: "aave",
        beforeEnter() {
          // Aave project page specific code
        },
      },
      {
        namespace: "ipi",
        beforeEnter() {
          // IPI project page specific code
        },
      },
      {
        namespace: "wabash",
        beforeEnter() {
          // Wabash project page specific code
        },
      },
      {
        namespace: "bright-future",
        beforeEnter() {
          // Bright Future project page specific code
        },
      },
      {
        namespace: "healpool",
        beforeEnter() {
          // Healpool project page specific code
        },
      },
      {
        namespace: "rentaru",
        beforeEnter() {
          // Rentaru project page specific code
        },
      },
    ],
  });
}

/**
 * Handle the leave transition
 */
function handleLeave(data) {
  // Check if body has 'menu-active' class
  if (document.body.classList.contains("menu-active")) {
    setTimeout(function () {
      document.body.classList.remove("menu-active");
      document.querySelectorAll(".mobile-menu-toggle").forEach((toggle) => {
        toggle.classList.remove("active");
      });
    }, 240);
  }

  // Do NOT scroll to top here - that would snap the leaving page
  // We only want to scroll the new page when it enters

  stopScroll();

  // Animation for leaving the page
  return fadeTransition.leave(data.current.container);
}

/**
 * Handle the enter transition
 */
function handleEnter(data) {
  // Force scroll to top again when entering
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo(0, 0);
  }

  // First make the container visible but still transparent
  gsap.set(data.next.container, {
    visibility: "visible",
    opacity: 0,
  });

  // Animation for entering the new page
  return fadeTransition.enter(data.next.container);
}

/**
 * Handle operations after entering the new page
 */
function handleAfterEnter(data) {
  console.log("Barba afterEnter: starting animations");

  // Trigger background change after transition is complete
  // This is the best place to ensure the transition is fully complete
  console.log("Barba afterEnter: changing background");
  changeBG();

  // Reset scroll position - force scroll to top with multiple methods
  // to ensure it works across different browsers and scroll libraries
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
    // Double check after a brief delay
    setTimeout(() => lenis.scrollTo(0, { immediate: true }), 50);
  }

  // Also use native scroll as a fallback
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // First, run text splitting immediately
  splitText();

  // Fade in the container and its contents sequentially
  const mainContainer = data.next.container;
  const mainContent = mainContainer.querySelector(".page");
  const contentElements = mainContent ? mainContent.children : [];

  // Check if we're on the homepage
  const isHomepage = mainContent && mainContent.id === "index";

  // If we're on the homepage, ensure no nav link has the active class
  if (isHomepage) {
    document.querySelectorAll("nav a").forEach((navLink) => {
      navLink.classList.remove("active");
    });
  }

  // Create a timeline for better sequencing
  const tl = gsap.timeline();

  // First, pre-position all elements properly
  // Set container visible
  tl.set(mainContainer, {
    visibility: "visible",
    opacity: 1,
    immediateRender: true,
  });

  // Pre-position main content to start invisible
  tl.set(mainContent, {
    opacity: 0,
    immediateRender: true,
  });

  // Pre-position content elements
  if (contentElements.length > 0) {
    tl.set(contentElements, {
      opacity: 0,
      immediateRender: true,
    });
  }

  // Crucial: Pre-prepare H1 elements before any animations start
  console.log("Barba afterEnter: preparing H1 elements");
  const h1Elements = mainContent.querySelectorAll("h1");
  h1Elements.forEach((h1) => {
    // Make sure it's split before we animate
    if (h1.querySelectorAll(".char").length === 0) {
      const splitInstance = new SplitType(h1, {
        types: "chars",
        tagName: "span",
      });

      // Hide all characters initially to prevent flash
      if (splitInstance.chars) {
        splitInstance.chars.forEach((char) => {
          char.style.visibility = "visible";
          char.style.color = "transparent";
          char.classList.remove("reveal-char");
        });
      }
    }
  });

  // Now begin fade in animations
  tl.to(mainContent, {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
  });

  // Then add sequential reveals for child elements
  if (contentElements.length > 0) {
    tl.to(
      contentElements,
      {
        opacity: 1,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.3"
    ); // Overlap with previous animation
  }

  // If homepage, prepare titles
  if (isHomepage) {
    // Clear any existing animation
    if (window.titleAnimationInterval) {
      clearInterval(window.titleAnimationInterval);
      window.titleAnimationInterval = null;
    }

    // Reset titles
    const titles = document.querySelectorAll("h2.titles-wrapper .title");
    titles.forEach((title) => {
      title.style.position = "absolute";
      title.style.display = "block";
      title.classList.remove("active");
      title.classList.add("hidden");
    });
  }

  // Run H1 animations first
  tl.call(() => {
    console.log("Barba afterEnter: running H1 animations");
    revealH1Characters();
  });

  // Then handle splitting-rows with a small delay to ensure it happens after H1 animations
  tl.call(
    () => {
      console.log("Barba afterEnter: revealing splitting rows");
      // Explicitly call revealSplittingRows after H1 animations but before other animations
      revealSplittingRows();
    },
    null,
    null,
    "+=0.3"
  );

  // Then handle other animations
  tl.call(
    () => {
      console.log("Barba afterEnter: running other animations");

      // Force reveal all elements
      forceRevealAll();

      // Handle specific element types (except splitting-rows which was done above)
      revealSplitTexts();
      fadeInReveal();
      playVideosOnEnter();
      autoScrollContainer();

      // Initialize other functionality
      initSmoothScroll();
      startScroll();
      cursorCheck();
      setupEventHandlers();

      // Initialize circular text
      circleText();
    },
    null,
    null,
    "+=0.2"
  );

  // Start title rotation if on homepage
  if (isHomepage) {
    tl.call(
      () => {
        console.log("Barba afterEnter: starting title rotation");
        rotateTitles("barba-transitions.js");
      },
      null,
      null,
      "+=0.4"
    );
  }

  // Update page state classes
  document.body.classList.remove("loading");
  document.body.classList.add("loaded");

  setTimeout(function () {
    document.body.classList.remove("loaded");
  }, 1500);
}
