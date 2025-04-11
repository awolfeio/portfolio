import barba from "@barba/core";
import { fadeTransition } from "./transitions.js";
import { lenis, stopScroll, startScroll } from "./smooth-scroll.js";
import initSmoothScroll from "./smooth-scroll.js";
import { changeBG, fogBG, fadeBackgroundIn } from "./background.js";
import splitText from "./text-splitting.js";
import { revealSplitTexts, fadeInReveal, playVideosOnEnter, autoScrollContainer } from "./scroll-triggers.js";
import { rotateTitles, circleText, revealH1Characters, animateDataSplittingChars } from "./type-anim.js";
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

  // Initialize the transition state flag
  window.barbaTransitionActive = false;

  // Add animation controller to manage sequencing
  window.animationController = {
    // On initial page load, allow animations to run without restriction
    transitionComplete: true,
    transitionCompletedAt: 0,
    pendingAnimations: [],
    initialPageLoad: true,

    // Method to mark transition as complete
    completeTransition() {
      this.transitionComplete = true;
      this.transitionCompletedAt = Date.now();
      console.log("TRANSITION MARKED COMPLETE at", this.transitionCompletedAt);

      // Process any pending animations after a short delay
      setTimeout(() => {
        this.processPendingAnimations();
      }, 100); // Ensure a gap between transition and animations
    },

    // Method to reset for new transition
    resetForTransition() {
      // Not the initial page load anymore
      this.initialPageLoad = false;

      this.transitionComplete = false;
      this.transitionCompletedAt = 0;
      this.pendingAnimations = [];
      console.log("TRANSITION RESET - animations will be queued until complete");
    },

    // Check if animations can run
    canRunAnimations() {
      // Always allow on initial page load
      if (this.initialPageLoad) {
        return true;
      }

      if (!this.transitionComplete) return false;

      // Ensure at least 80ms has passed since transition completed
      const timeSinceTransition = Date.now() - this.transitionCompletedAt;
      return timeSinceTransition >= 80;
    },

    // Queue an animation to run after transition
    queueAnimation(animationFn, label = "unnamed") {
      console.log(`Queuing animation: ${label}`);

      if (this.canRunAnimations()) {
        console.log(`Running animation immediately: ${label}`);
        animationFn();
      } else {
        console.log(`Adding ${label} to pending queue`);
        this.pendingAnimations.push({ fn: animationFn, label });
      }
    },

    // Process any pending animations
    processPendingAnimations() {
      if (!this.canRunAnimations()) {
        console.log("Cannot process animations yet - transition not complete");
        return;
      }

      console.log(`Processing ${this.pendingAnimations.length} pending animations`);

      // Run each pending animation
      this.pendingAnimations.forEach((animation, index) => {
        setTimeout(() => {
          console.log(`Running queued animation: ${animation.label}`);
          animation.fn();
        }, index * 50); // Small stagger between animations
      });

      // Clear the queue
      this.pendingAnimations = [];
    },
  };

  // Add CSS for Barba transitions
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    /* Better transition handling to prevent flicker */
    body.barba-transition {
      overflow: hidden !important; /* Prevent scroll during transition */
    }
  
    /* Only apply to containers during transitions, not on initial page load */
    .barba-transition [data-barba="container"] {
      opacity: 0 !important;
      visibility: hidden !important;
      transition: opacity 0.4s ease, visibility 0.4s ease;
      pointer-events: none !important; /* Prevent interaction during transition */
    }
    
    /* Hide old container during transition */
    .barba-transition .barba-old-container {
      opacity: 0 !important;
      visibility: hidden !important;
      display: none !important;
      pointer-events: none !important;
    }
    
    .barba-transition [data-barba="container"] .page,
    .barba-transition [data-barba="container"] .page > * {
      opacity: 0 !important;
      transition: opacity 0.4s ease;
    }
    
    /* Ensure new container is hidden before animation starts */
    .barba-container-next {
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }

    /* Override any conflicting styles */
    [data-barba="container"] {
      transition: opacity 0.4s ease, visibility 0.4s ease;
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

  // Hook that executes when the next container has been fetched but before it's added to the DOM
  barba.hooks.beforeLeave((data) => {
    console.log("Barba beforeLeave: preparing transition");
    // Ensure the current container is visible before starting leave animation
    gsap.set(data.current.container, {
      visibility: "visible",
      opacity: 1,
    });
  });

  // Add a hook right when the next DOM is ready but before it's added
  barba.hooks.nextAdded((data) => {
    console.log("Barba nextAdded: preparing next container");

    // Add a class to identify the next container
    data.next.container.classList.add("barba-container-next");

    // Pre-hide all content
    gsap.set(data.next.container, {
      opacity: 0,
      visibility: "hidden",
      display: "block",
      position: "fixed", // Position off-screen until enter animation
      top: "-9999px",
      left: "-9999px",
    });

    // Also hide all page content
    const pageElements = data.next.container.querySelectorAll(".page, .page > *");
    if (pageElements.length) {
      gsap.set(pageElements, {
        opacity: 0,
      });
    }
  });

  // Add a hook after Barba adds the next container to the DOM
  barba.hooks.beforeEnter((data) => {
    console.log("Barba beforeEnter: container added to DOM");

    // Remove the temporary positioning - will be restored by the transition
    gsap.set(data.next.container, {
      position: "relative",
      top: "auto",
      left: "auto",
    });

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

    // Remove the next container class
    if (data.next.container) {
      data.next.container.classList.remove("barba-container-next");
    }

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
  return new Promise((resolve) => {
    // Reset the animation controller for the new transition
    window.animationController.resetForTransition();

    // Set transition active flag
    window.barbaTransitionActive = true;

    // Check if body has 'menu-active' class
    if (document.body.classList.contains("menu-active")) {
      setTimeout(function () {
        document.body.classList.remove("menu-active");
        document.querySelectorAll(".mobile-menu-toggle").forEach((toggle) => {
          toggle.classList.remove("active");
        });
      }, 240);
    }

    // Start fading out the background for smoother transitions
    const isToAboutPage = data.next.namespace === "about";
    const isFromAboutPage = data.current.namespace === "about";

    // Only trigger background fade if we're moving to or from the about page
    if (isToAboutPage || isFromAboutPage) {
      console.log("Starting background fade out before leave animation");
      const vantaCanvas = document.querySelector(".vanta-canvas");
      const viewport = document.getElementById("viewport");

      if (vantaCanvas) {
        // Apply transition to make the fade smooth
        vantaCanvas.style.transition = "opacity 0.4s ease";
        vantaCanvas.style.opacity = "0";
      }
      if (viewport) {
        viewport.style.transition = "background 0.4s ease";
        viewport.style.background = "#E5F0FD";
      }
    }

    // Let fadeTransition.leave handle all animation logic - don't set any GSAp props here
    stopScroll();

    // Animation for leaving the page
    fadeTransition.leave(data.current.container).then(resolve);
  });
}

/**
 * Handle the enter transition
 */
function handleEnter(data) {
  return new Promise((resolve) => {
    // Force scroll to top again when entering
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Make sure old container stays invisible
    const oldContainer = document.querySelector(".barba-old-container");
    if (oldContainer) {
      gsap.set(oldContainer, {
        visibility: "hidden",
        opacity: 0,
        display: "none", // Add display:none to completely remove from flow
      });
    }

    // Keep transition flag active
    window.barbaTransitionActive = true;

    // Animation for entering the new page
    fadeTransition.enter(data.next.container).then(() => {
      console.log("BARBA PAGE TRANSITION COMPLETE - Now safe to run animations");

      // Apply background changes now that the new page is visible
      const isToAboutPage = data.next.namespace === "about";
      const isFromAboutPage = data.current && data.current.namespace === "about";

      // Only update the background if we're moving to or from about page
      if (isToAboutPage || isFromAboutPage) {
        console.log("Applying background changes after page transition");
        changeBG(data);
      }

      // Mark transition as complete in the controller
      window.animationController.completeTransition();

      // Add a delay before resolving to ensure complete separation
      setTimeout(() => {
        // Clear the transition flag
        window.barbaTransitionActive = false;

        // Resolve the promise to continue with afterEnter
        resolve();
      }, 100);
    });
  });
}

/**
 * Handle operations after entering the new page
 */
function handleAfterEnter(data) {
  console.log("Barba afterEnter: preparing animations");

  // Make sure old containers are completely hidden
  document.querySelectorAll(".barba-old-container").forEach((oldContainer) => {
    gsap.set(oldContainer, {
      visibility: "hidden",
      opacity: 0,
      display: "none",
    });
  });

  // Ensure containers are visible before starting animations
  ensureContainersAreVisible();

  // Get the namespace for special case handling
  const namespace = data.next.namespace;
  const isHomepage = namespace === "index";

  // Get references to the main elements for animation
  const mainContainer = data.next.container;
  const mainContent = mainContainer.querySelector(".page");
  const contentElements = mainContent ? Array.from(mainContent.children) : [];

  // Run splitText immediately to prepare text - this doesn't animate anything yet
  window.animationController.queueAnimation(() => {
    console.log("Preparing text splitting");
    splitText();
  }, "splitText-preparation");

  // HOMEPAGE SPECIFIC ANIMATIONS
  if (isHomepage) {
    // Queue the H1 character reveal animation
    window.animationController.queueAnimation(() => {
      console.log("Running H1 character reveals (homepage focus)");
      revealH1Characters();
    }, "homepage-h1-reveal");

    // Queue data-splitting animation after H1
    window.animationController.queueAnimation(() => {
      console.log("Running data-splitting animations");
      animateDataSplittingChars();
    }, "data-splitting");

    // Queue title rotation for homepage
    window.animationController.queueAnimation(() => {
      console.log("Starting title rotation (homepage)");
      rotateTitles("barba-transition");
    }, "title-rotation");
  }
  // NON-HOMEPAGE ANIMATIONS
  else {
    // Queue H1 and data-splitting animations
    window.animationController.queueAnimation(() => {
      console.log("Running H1 character reveals");
      revealH1Characters();
    }, "h1-reveal");

    window.animationController.queueAnimation(() => {
      console.log("Running data-splitting animations");
      animateDataSplittingChars();
    }, "data-splitting");
  }

  // Circle text animation (for any page)
  window.animationController.queueAnimation(() => {
    console.log("Setting up circle text");
    circleText();
  }, "circle-text");

  // All scroll-based animations (for any page)
  window.animationController.queueAnimation(() => {
    console.log("Setting up scroll-based reveals");

    // This handles both .splitting and .splitting-rows elements
    revealSplitTexts();

    // Set up fade reveals
    fadeInReveal();

    // Enable video autoplay on scroll
    playVideosOnEnter();

    // Set up auto-scrolling containers
    autoScrollContainer();
  }, "scroll-animations");

  // Event handlers (for any page)
  window.animationController.queueAnimation(() => {
    console.log("Setting up page-specific event handlers");
    setupEventHandlers(namespace);

    // Allow scrolling again when animations are complete
    startScroll();
    console.log("Scroll re-enabled after animations");

    // Check for cursor-based interaction elements
    cursorCheck();

    // Final check to ensure everything is visible
    ensureContainersAreVisible();

    // Final check for any splitting-rows that might have been missed
    document.querySelectorAll(".splitting-rows:not(.reveal)").forEach((el) => {
      console.log("Final fix for missed splitting-rows element");
      el.classList.add("reveal");
    });
  }, "final-setup");

  // Process any animations that can run immediately
  window.animationController.processPendingAnimations();

  // Return a resolved promise since the animations will happen async
  return Promise.resolve();
}

/**
 * Ensures all container elements are properly visible
 * This function is needed to prevent CSS or style conflicts that might keep elements hidden
 */
function ensureContainersAreVisible() {
  console.log("Barba transition: ensuring containers are visible");

  // First, ensure any existing barba containers are visible
  const barbaContainer = document.querySelector("[data-barba='container']");
  if (barbaContainer) {
    gsap.set(barbaContainer, {
      visibility: "visible",
      opacity: 1,
    });
  }

  // Also set the page and its direct children to visible
  const pageContent = document.querySelector("main .page");
  if (pageContent) {
    gsap.set(pageContent, {
      opacity: 1,
    });

    // Make all direct children visible
    const directChildren = pageContent.children;
    if (directChildren.length > 0) {
      gsap.set(directChildren, {
        opacity: 1,
      });
    }
  }
}
