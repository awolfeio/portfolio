import { revealSplitTexts, fadeInReveal, playVideosOnEnter, autoScrollContainer } from "./scroll-triggers.js";
import initSmoothScroll from "./smooth-scroll.js";
import splitText from "./text-splitting.js";
import { circleText, revealH1Characters, rotateTitles, animateDataSplittingChars } from "./type-anim.js";
import { removeSpecificElements, checkLocationAndRemoveElements } from "./geographic.js";
import { gsap } from "gsap";
import SplitType from "split-type";
import { fogBG } from "./background.js";
import { initExtrudedLogo } from "./3d-logo.js";

export function loadingSplash() {
  // Initialize animation controller if it doesn't exist
  if (!window.animationController) {
    console.log("Initializing animation controller for loading screen");
    window.animationController = {
      transitionComplete: true,
      transitionCompletedAt: 0,
      pendingAnimations: [],
      initialPageLoad: true,

      canRunAnimations() {
        return true; // Always allow on initial page load
      },

      queueAnimation(animationFn, label = "unnamed") {
        console.log(`Loading screen: running animation ${label} immediately`);
        animationFn();
      },

      processPendingAnimations() {
        // No-op for loading screen
      },
    };
  } else {
    // Make sure initial page load is set to true
    window.animationController.initialPageLoad = true;
    window.animationController.transitionComplete = true;
  }

  // Initialize by ensuring containers are visible and properly styled
  ensureContainersAreVisible();

  // Set initial Vanta background settings based on current page
  initializeVantaBackground();

  // Initialize 3D extruded logo
  let logoInstance = null;

  var checkLoadReady = setInterval(function () {
    const loadBar = document.querySelector(".load-bar-inner");
    if (loadBar) {
      clearInterval(checkLoadReady);
      const loadingSplash = document.querySelector("#loading-splash");
      loadBar.classList.add("loading");

      // Initialize the 3D extruded logo
      logoInstance = initExtrudedLogo();

      // Add a logo ready listener
      document.addEventListener("logo3d-ready", function logoReadyHandler() {
        console.log("Logo3D ready event received");

        // Remove the listener since we only need it once
        document.removeEventListener("logo3d-ready", logoReadyHandler);

        // Add class to show the logo with animation
        const logoWrapper = document.querySelector("#loading-splash .logo-wrapper");
        if (logoWrapper) {
          logoWrapper.classList.add("logo-ready");
        }
      });

      // Add CSS to control the logo visibility
      const logoStyle = document.createElement("style");
      logoStyle.textContent = `
        #loading-splash .logo-wrapper {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        #loading-splash .logo-wrapper.logo-ready {
          opacity: 1;
        }
      `;
      document.head.appendChild(logoStyle);

      var loadingReadyCheck = setInterval(function () {
        if (loadBar.classList.contains("loading")) {
          clearInterval(loadingReadyCheck);

          // Run text splitting first
          splitText();

          loadBar.addEventListener("animationend", () => {
            loadingSplash.classList.add("loaded");

            // Animate loading splash characters
            const loadingChars = document.querySelectorAll("#loading-splash .char");
            loadingChars.forEach((char) => char.classList.add("reveal-char"));

            window.scrollTo(0, 0);

            setTimeout(function () {
              // Add loaded class to body
              document.body.classList.add("loaded");

              // Get container and content elements
              const mainContainer = document.querySelector("[data-barba='container']");
              const mainContent = document.querySelector("main .page");
              const contentElements = mainContent ? mainContent.children : [];

              // Check location restrictions
              checkLocationAndRemoveElements();

              // Make sure container and content are visible
              ensureContainersAreVisible();

              // Create a timeline for content reveal with better sequencing
              const tl = gsap.timeline();

              // First, make sure all elements are already in the right state before animation starts
              // Pre-position the container elements for smooth animation
              tl.set(mainContainer, {
                visibility: "visible",
                opacity: 1,
                immediateRender: true,
              });

              // Pre-position main content
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

              // Crucial: Run splitting before any animations start
              console.log("Loading screen: splitting text");
              splitText();

              // Now start the actual animation sequence

              // Fade in the main content
              tl.to(mainContent, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
              });

              // Fade in child elements with stagger
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
                );
              }

              // Run H1 character animations first
              tl.call(() => {
                console.log("Loading screen: running H1 animations");

                // Explicitly mark as initial page load before animations
                if (window.animationController) {
                  window.animationController.initialPageLoad = true;
                  window.animationController.transitionComplete = true;
                }

                // Reset barbaTransitionActive flag if it exists
                if (window.barbaTransitionActive !== undefined) {
                  window.barbaTransitionActive = false;
                }

                revealH1Characters();
              });

              // Run animations for data-splitting elements
              tl.call(
                () => {
                  console.log("Loading screen: running data-splitting animations");

                  // Ensure flags are set correctly
                  if (window.animationController) {
                    window.animationController.initialPageLoad = true;
                  }

                  animateDataSplittingChars();
                },
                null,
                null,
                "+=0.2"
              );

              // Run circle text animations
              tl.call(
                () => {
                  console.log("Loading screen: running circle text effect");
                  circleText();
                },
                null,
                null,
                "+=0.1"
              );

              // Handle homepage title rotations if on index page
              const isHomepage = document.querySelector("main .page#index");
              if (isHomepage) {
                tl.call(
                  () => {
                    // Clear any existing title rotation
                    if (window.titleAnimationInterval) {
                      clearInterval(window.titleAnimationInterval);
                      window.titleAnimationInterval = null;
                    }

                    // Ensure flags are set correctly
                    if (window.animationController) {
                      window.animationController.initialPageLoad = true;
                    }

                    // Initialize title rotation
                    console.log("Loading-screen: starting title rotation");
                    rotateTitles("loading-screen.js");
                  },
                  null,
                  null,
                  "+=0.3"
                );
              }

              // Set up all scroll-triggered animations
              tl.call(
                () => {
                  console.log("Loading screen: setting up scroll animations");

                  // Set up scroll-triggered text reveals
                  // This now handles both .splitting and .splitting-rows elements
                  revealSplitTexts();

                  // Set up fade reveals
                  fadeInReveal();

                  // Enable video playback on scroll
                  playVideosOnEnter();

                  // Setup auto-scrolling containers
                  autoScrollContainer();

                  // Initialize smooth scrolling
                  initSmoothScroll();
                },
                null,
                null,
                "+=0.2"
              );

              // Remove loaded class after a brief delay
              setTimeout(function () {
                document.body.classList.remove("loaded");
              }, 400);
            }, 400);
          });
        }
      }, 50);

      var loadingFinishedCheck = setInterval(function () {
        if (loadingSplash.classList.contains("loaded")) {
          clearInterval(loadingFinishedCheck);
          loadingSplash.addEventListener("animationend", () => {
            setTimeout(function () {
              // Clean up the 3D logo before removing the splash screen
              if (logoInstance && typeof logoInstance.dispose === "function") {
                logoInstance.dispose();
                logoInstance = null;
              }

              // Remove the loading splash
              loadingSplash.remove();

              // Only remove reveal-char from loading splash elements, not from page content
              const loadingChars = document.querySelectorAll("#loading-splash .char");
              loadingChars.forEach((char) => char.classList.remove("reveal-char"));

              // Final check to ensure everything is visible after loading
              ensureContainersAreVisible();

              // Final check for any splitting-rows that might have been missed
              document.querySelectorAll(".splitting-rows:not(.reveal)").forEach((el) => {
                console.log("Final fix for missed splitting-rows element");
                el.classList.add("reveal");
              });

              // Clear initial page load flag now that we're done
              if (window.animationController) {
                console.log("Loading complete - setting initialPageLoad to false for future transitions");
                window.animationController.initialPageLoad = false;
              }
            }, 500);
          });
        }
      }, 50);
    }
  }, 100);
}

/**
 * Ensures all container elements are properly visible
 * This function is called multiple times to prevent any CSS or style
 * conflicts that might keep elements hidden
 */
function ensureContainersAreVisible() {
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

/**
 * Initialize Vanta background settings based on the current page namespace
 */
function initializeVantaBackground() {
  // Get the current page namespace
  const container = document.querySelector("[data-barba='container']");
  const namespace = container ? container.getAttribute("data-barba-namespace") : null;

  console.log("Loading-screen: initializing Vanta background for namespace:", namespace);

  if (namespace === "about") {
    console.log("Setting about page Vanta settings");
    fogBG.setOptions({
      blurFactor: 0.35,
      speed: 0.6,
      zoom: 2.0,
    });
  } else {
    console.log("Setting default Vanta settings");
    fogBG.setOptions({
      blurFactor: 0.48,
      speed: 0.24,
      zoom: 0.5,
    });
  }

  // Ensure the Vanta canvas is visible with proper opacity
  const vantaCanvas = document.querySelector(".vanta-canvas");
  if (vantaCanvas) {
    vantaCanvas.style.opacity = "0.66";
  }
}
