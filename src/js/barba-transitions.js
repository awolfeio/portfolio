import barba from "@barba/core";
import { fadeTransition } from "./transitions.js";
import { lenis, stopScroll, startScroll } from "./smooth-scroll.js";
import initSmoothScroll from "./smooth-scroll.js";
import backgroundManager from "./background/index.js";
import splitText from "./text-splitting.js";
import { setupUnifiedReveals, playVideosOnEnter, autoScrollContainer } from "./scroll-triggers.js";
import { rotateTitles, circleText, revealH1Characters, animateDataSplittingChars } from "./type-anim.js";
import { cursorCheck, setupMoreInfo } from "./cursor-element.js";
import { setupEventHandlers } from "./event-handlers.js";
import { checkLocationAndRemoveElements } from "./geographic.js";
import { gsap } from "gsap";
import SplitType from "split-type";
import mediaPreloader from "./media-preloader.js";
import { refreshFill } from "./text-fill.js";

/**
 * Initialize Barba.js and set up page transitions
 */
export function initializeBarba() {
  // Make barba accessible globally for programmatic navigation in event handlers
  window.barba = barba;

  setupLinkPrefetch();

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

  // Minimal CSS adjustments for smoother transition
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    body.barba-transition {
      overflow: hidden !important;
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
      gsap.set(data.next.container, {
        opacity: 0,
        visibility: "hidden",
      });
    }
  });

  // Hook that executes when the next container has been fetched but before it's added to the DOM
  barba.hooks.beforeLeave((data) => {
    console.log("Barba beforeLeave: preparing transition");

    // Stop title rotation immediately when leaving any page
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

    // Ensure the current container is visible before starting leave animation
    gsap.set(data.current.container, {
      visibility: "visible",
      opacity: 1,
    });
  });

  // Add a hook right when the next DOM is ready but before it's added
  barba.hooks.nextAdded((data) => {
    console.log("Barba nextAdded: preparing next container");

    gsap.set(data.next.container, {
      opacity: 0,
      visibility: "hidden",
      });
  });

  // Add a hook after Barba adds the next container to the DOM
  barba.hooks.beforeEnter((data) => {
    console.log("Barba beforeEnter: container added to DOM");

    // Handle .about class on html element
    if (data.next.namespace === "about") {
      document.documentElement.classList.add("about");
    } else {
      document.documentElement.classList.remove("about");
    }

    // Ensure all content within the container is also initially invisible
    const pageElement = data.next.container.querySelector(".page");
    if (pageElement) {
      gsap.set(pageElement, {
        opacity: 0,
        visibility: "visible",
        immediateRender: true,
      });
    }
    const allContentElements = data.next.container.querySelectorAll(".page, .page > *");
    gsap.set(allContentElements, {
      opacity: 0,
      pointerEvents: "none",
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
  return new Promise(async (resolve) => {
    // Force scroll to top again when entering
    const scrollToTop = () => {
    if (lenis) {
        lenis.stop();
        lenis.scrollTo(0, { immediate: true, force: true });
        requestAnimationFrame(() => lenis.scrollTo(0, { immediate: true, force: true }));
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    scrollToTop();

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

    // Check if media is already preloading/preloaded
    let mediaPromise;
    const nextUrl = data.next.url.href;
    
    // Check cache first
    let cachedData = null;
    if (window.barba && window.barba.cache) {
        cachedData = window.barba.cache.get(nextUrl);
    }
    
    if (cachedData && cachedData.mediaReady) {
        console.log("Waiting for preloaded media from cache...");
        mediaPromise = cachedData.mediaReady;
    } else {
        // Fallback: discover and load media now
        console.log("No cached media found, discovering and loading now...");
        const assets = mediaPreloader.discoverAssets(data.next.container);
        mediaPromise = mediaPreloader.preload(assets);
    }

    // Wait for media to be ready (critical assets at least)
    await mediaPromise;
    console.log("Media ready! proceeding with transition");
    
    // Animation for entering the new page
    fadeTransition.enter(data.next.container).then(() => {
      console.log("BARBA PAGE TRANSITION COMPLETE - Now safe to run animations");

      // Apply background configuration for the new page
      const newNamespace = data.next.namespace;
      const oldNamespace = data.current.namespace;
      
      console.log(`Checking background transition from "${oldNamespace}" to "${newNamespace}"`);
      
      // Check if we need to transition the background shader parameters
      const needsBackgroundTransition = backgroundManager.getConfigManager()?.shouldTransition(newNamespace);
      
      if (needsBackgroundTransition) {
        console.log(`Background mode change detected - applying fade transition to "${newNamespace}"`);
        // Use fade-out/instant-change/fade-in transition for different background modes
        backgroundManager.transitionToPageWithFade(newNamespace, 0.3, 0.4).then(() => {
          console.log(`Background transition to "${newNamespace}" complete`);
        });
      } else {
        console.log(`Same background mode - skipping fade transition for "${newNamespace}"`);
        // No background change needed, but still update the current page tracker
        if (backgroundManager.getConfigManager()) {
          backgroundManager.getConfigManager().currentPage = newNamespace;
        }
      }

      // Mark transition as complete in the controller
      window.animationController.completeTransition();

      // Clear the transition flag and resolve immediately
        window.barbaTransitionActive = false;
        resolve();
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

  if (mainContent) {
    gsap.set(mainContent, { opacity: 1, pointerEvents: "auto" });
  }
  const revealManagedSelectors = "h1, h2, [data-splitting], .splitting-rows, .titles-wrapper, .fade-reveal";
  const nonRevealElements = [];
  if (contentElements.length > 0) {
    contentElements.forEach((el) => {
      if (el.matches(revealManagedSelectors)) {
        // Set inline opacity: 0 to ensure elements start hidden
        // The reveal logic will remove this inline style to allow CSS transition
        gsap.set(el, { opacity: 0, pointerEvents: "auto", visibility: "visible" });
      } else {
        gsap.set(el, { opacity: 0, pointerEvents: "auto", visibility: "visible" });
        nonRevealElements.push(el);
      }
    });
  }

  // Run splitText immediately to prepare text - this doesn't animate anything yet
  window.animationController.queueAnimation(() => {
    console.log("Preparing text splitting");
    splitText();
  }, "splitText-preparation");

  // Fade in non-reveal elements after base prep
  if (nonRevealElements.length > 0) {
    window.animationController.queueAnimation(() => {
      gsap.to(nonRevealElements, {
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
        stagger: 0.06,
      });
    }, "base-content-fade");
  }

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

    // Set up unified reveal system for all elements
    setupUnifiedReveals();

    // Set up More Info for .project-element elements
    setupMoreInfo();

    // Enable video autoplay on scroll
    playVideosOnEnter();

    // Set up auto-scrolling containers
    autoScrollContainer();
  }, "scroll-animations");

  // Event handlers (for any page)
  window.animationController.queueAnimation(() => {
    console.log("Setting up page-specific event handlers");
    setupEventHandlers(namespace);

    // Initialize smooth scroll first
    initSmoothScroll();

    // Allow scrolling again when animations are complete
    startScroll();
    console.log("Scroll re-enabled after animations");

    // Force recalculation of page dimensions after a short delay
    setTimeout(() => {
      // Refresh ScrollTrigger to recalculate all positions
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
        console.log("ScrollTrigger refreshed after transition");
      }

      // Refresh Textfill to catch any dimensional/viewport changes made during the transition
      refreshFill();

      // Also update Lenis if it exists
      if (window.lenis) {
        window.lenis.resize();
        console.log("Lenis resized after transition");
      }
    }, 100);

    // Additional recalculation after images might have loaded
    // Wait for all images in the new container to load
    const images = data.next.container.querySelectorAll("img");
    const imagePromises = Array.from(images).map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.addEventListener("load", resolve, { once: true });
        img.addEventListener("error", resolve, { once: true }); // Resolve even on error
      });
    });

    // After all images load, do a final recalculation
    Promise.all(imagePromises).then(() => {
      console.log("All images loaded, final scroll recalculation");

      // Final refresh of ScrollTrigger
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }

      // Final resize of Lenis
      if (window.lenis) {
        window.lenis.resize();
      }
    });

    // Set up a ResizeObserver to watch for content changes
    const pageContent = data.next.container.querySelector(".page");
    if (pageContent && window.ResizeObserver) {
      let resizeTimeout;
      let prevPageWidth = pageContent.clientWidth;
      let prevPageHeight = pageContent.clientHeight;
      
      const resizeObserver = new ResizeObserver((entries) => {
        // Debounce the resize calculations
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          const newPageWidth = pageContent.clientWidth;
          const newPageHeight = pageContent.clientHeight;
          
          const widthChanged = Math.abs(newPageWidth - prevPageWidth) > 5;
          // 150px threshold ignores mobile browser address bar hide/show
          const heightChanged = Math.abs(newPageHeight - prevPageHeight) > 150;
          
          // Only refresh if it's a structural content change or width change
          if (widthChanged || heightChanged) {
            console.log("Content size changed significantly, updating scroll calculations");
            prevPageWidth = newPageWidth;
            prevPageHeight = newPageHeight;
            
            if (window.ScrollTrigger) {
              window.ScrollTrigger.refresh();
            }
            if (window.lenis) {
              window.lenis.resize();
            }
          }
        }, 150);
      });

      // Observe the main content container
      resizeObserver.observe(pageContent);

      // Store observer reference for cleanup if needed
      data.next.container._resizeObserver = resizeObserver;
    }

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

function setupLinkPrefetch() {
  const prefetched = new Set();

  const shouldPrefetch = (link) => {
    if (!link || !link.href) return false;
    if (link.origin !== window.location.origin) return false;
    if (link.href === window.location.href) return false;
    if (link.hash && link.href.replace(link.hash, "") === window.location.href.replace(window.location.hash, "")) {
      return false;
    }
    if (prefetched.has(link.href)) return false;
    return true;
  };

  const prefetch = (url) => {
    prefetched.add(url);
    fetch(url, { credentials: "include" }).catch(() => {
      // Allow retry if fetch fails
      prefetched.delete(url);
    });
  };

  const hoverHandler = (event) => {
    const link = event.target.closest("a[href]");
    if (!shouldPrefetch(link)) return;

    // Prefetch on next frame to avoid blocking hover
    requestIdleCallback
      ? requestIdleCallback(() => prefetch(link.href), { timeout: 200 })
      : setTimeout(() => prefetch(link.href), 32);
  };

  ["mouseover", "focusin", "touchstart"].forEach((eventName) => {
    document.addEventListener(eventName, hoverHandler, { passive: true });
  });
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
}
