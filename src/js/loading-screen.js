import { setupUnifiedReveals, playVideosOnEnter, autoScrollContainer } from "./scroll-triggers.js";
import initSmoothScroll from "./smooth-scroll.js";
import splitText from "./text-splitting.js";
import { circleText, revealH1Characters, rotateTitles, animateDataSplittingChars } from "./type-anim.js";
import { setupMoreInfo } from "./cursor-element.js";
import { removeSpecificElements, checkLocationAndRemoveElements } from "./geographic.js";
import { preventAnimationRefire } from "./animation-helpers.js";
import { gsap } from "gsap";
import SplitType from "split-type";
import backgroundManager from "./background/index.js";
import { initExtrudedLogo } from "./3d-logo.js";
import mediaPreloader from "./media-preloader.js";

/**
 * Preload important pages to speed up Barba transitions
 */
async function preloadPages() {
  console.log("Starting page preloading...");

  // Define the pages to preload
  const pagesToPreload = [
    "/index.html", // Homepage (also try with index.html)
    "/works.html",
    "/about.html",
    "/contact.html",
  ];

  // Get the current page to avoid preloading it
  const currentPath = window.location.pathname;
  const baseUrl = window.location.origin;

  // Create an array of fetch promises
  const preloadPromises = pagesToPreload
    .filter((path) => {
      // Don't preload current page
      const normalizedPath = path.replace("/index.html", "/").replace(".html", "");
      const normalizedCurrent = currentPath.replace("/index.html", "/").replace(".html", "");
      return normalizedPath !== normalizedCurrent;
    })
    .map(async (path) => {
      try {
        // Handle both root and subdirectory deployments
        const url = new URL(path, baseUrl).href;
        console.log(`Preloading: ${url}`);

        const response = await fetch(url);

        if (response.ok) {
          // Get the HTML text to cache it
          const html = await response.text();

          // Parse the HTML to extract critical assets
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = html;

          // Find the barba container in the fetched HTML
          const container = tempDiv.querySelector('[data-barba="container"]');

          if (container && window.barba && window.barba.cache) {
            // Discover and preload media from this page using MediaPreloader
            const assets = mediaPreloader.discoverAssets(container); // container is already a DOM element
            const mediaPromise = mediaPreloader.preload(assets);

            // Add to Barba's cache with media promise
            window.barba.cache.set(url, {
              html: html,
              container: container,
              mediaReady: mediaPromise // NEW: Track media loading
            });

            // Also try to cache the URL without .html for cleaner URLs
            const cleanUrl = url.replace(".html", "");
            if (cleanUrl !== url) {
              window.barba.cache.set(cleanUrl, {
                html: html,
                container: container,
                mediaReady: mediaPromise
              });
            }

            console.log(`Successfully cached HTML and started media preload: ${path}`);
            
            // Allow media loading to proceed in background
            mediaPromise.then(() => {
                console.log(`Media preloaded for: ${path}`);
            }).catch(err => {
                console.warn(`Media preload warning for ${path}:`, err);
            });
          }

          return { path, status: "success" };
        } else if (response.status === 404 && path === "/index.html") {
          // Try loading just '/' if index.html fails
          console.log("Trying to load homepage at root path");
          const rootResponse = await fetch("/");
          if (rootResponse.ok) {
            const html = await rootResponse.text();
            if (window.barba && window.barba.cache) {
              window.barba.cache.set(new URL("/", baseUrl).href, {
                html: html,
                container: container,
              });
            }
            return { path: "/", status: "success" };
          }
        } else {
          console.warn(`Failed to preload ${path}: ${response.status}`);
          return { path, status: "failed" };
        }
      } catch (error) {
        console.warn(`Error preloading ${path}:`, error);
        return { path, status: "error", error };
      }
    });

  // Wait for all preloads to complete
  const results = await Promise.all(preloadPromises);

  // Log summary
  const successful = results.filter((r) => r.status === "success").length;
  console.log(`Preloading complete: ${successful}/${results.length} pages cached`);

  return results;
}

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

  // Set initial background settings based on current page
  // Note: Full page-specific configs will be implemented in Phase 6
  initializeBackground();

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

      // Start preloading pages while showing the loading screen
      const preloadingPromise = preloadPages();

      // Start preloading media for the current page
      const currentContainer = document.querySelector('[data-barba="container"]');
      if (currentContainer) {
        console.log("Starting media preload for current page");
        const currentAssets = mediaPreloader.discoverAssets(currentContainer);
        // We don't await this here as we want animations to run, but we start it early
        mediaPreloader.preload(currentAssets);
      }

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

          // Run text splitting first (only once — do NOT call again later)
          splitText();

          loadBar.addEventListener("animationend", () => {
            loadingSplash.classList.add("loaded");

            // Animate loading splash characters
            const loadingChars = document.querySelectorAll("#loading-splash .char");
            loadingChars.forEach((char) => char.classList.add("reveal-char"));

            window.scrollTo(0, 0);

            // Wait for preloading to complete before proceeding
            preloadingPromise.then(() => {
              console.log("Page preloading finished, continuing with initialization");

              setTimeout(async function () {
                // Add loaded class to body
                document.body.classList.add("loaded");

                // Get container and content elements
                const mainContainer = document.querySelector("[data-barba='container']");
                const mainContent = document.querySelector("main .page");
                
                // For the About page, move .self-image out of container so it doesn't get swept up in generic page animations
                if (mainContainer) {
                  const selfImage = mainContainer.querySelector('.self-image');
                  if (selfImage) {
                    mainContainer.insertAdjacentElement('afterend', selfImage);
                    gsap.set(selfImage, { opacity: 0 });
                    
                    // Slowly fade in, delaying slightly to let background shader transition
                    gsap.to(selfImage, {
                      opacity: 1,
                      duration: 2.5,
                      delay: 0.8,
                      ease: "power2.inOut"
                    });
                  }
                }
                
                const contentElements = mainContent ? mainContent.children : [];

                // Check location restrictions and WAIT for them to resolve before revealing page
                await checkLocationAndRemoveElements();

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

                // Set up the listener to prevent animation refires
                tl.call(() => {
                  preventAnimationRefire();
                });

                // Crucial: Run splitting before any animations start
                console.log("Loading screen: splitting text");
                splitText();

                // Now start the actual animation sequence
                // NOTE: splitText() was already called above — do not call again here.

                if (mainContent) {
                  gsap.set(mainContent, { opacity: 0, pointerEvents: "none" });
                }
                const revealManagedSelectors = "h1, h2, [data-splitting], .splitting-rows, .titles-wrapper, .fade-reveal";
                const nonRevealElements = [];
                if (contentElements.length > 0) {
                  Array.from(contentElements).forEach((el) => {
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

                // Run H1 character animations first
                tl.call(() => {
                  // Explicitly mark as initial page load before animations
                  if (window.animationController) {
                    window.animationController.initialPageLoad = true;
                    window.animationController.transitionComplete = true;
                  }

                  // Reset barbaTransitionActive flag if it exists
                  if (window.barbaTransitionActive !== undefined) {
                    window.barbaTransitionActive = false;
                  }

                  if (mainContent) {
                    gsap.set(mainContent, { opacity: 1, pointerEvents: "auto" });
                  }

                  revealH1Characters();
                });

                // Run animations for data-splitting elements
                tl.call(
                  () => {
                    if (window.animationController) {
                      window.animationController.initialPageLoad = true;
                    }
                    animateDataSplittingChars();
                  },
                  null,
                  null,
                  "+=0.2"
                );

                if (contentElements.length > 0) {
                  tl.call(
                    () => {
                      const baseElements = Array.from(contentElements).filter(
                        (el) =>
                          !el.matches("h1, h2, [data-splitting], .splitting-rows, .titles-wrapper, .fade-reveal")
                      );
                      if (baseElements.length > 0) {
                        gsap.to(baseElements, {
                          opacity: 1,
                          duration: 0.35,
                          ease: "power2.out",
                          stagger: 0.06,
                        });
                      }
                    },
                    null,
                    null,
                    "+=0.1"
                  );
                }

                // Run circle text animations
                tl.call(
                  () => { circleText(); },
                  null,
                  null,
                  "+=0.1"
                );

                // Handle homepage title rotations if on index page
                const isHomepage = document.querySelector("main .page#index");
                if (isHomepage) {
                  tl.call(
                    () => {
                      if (window.titleAnimationInterval) {
                        clearInterval(window.titleAnimationInterval);
                        window.titleAnimationInterval = null;
                      }
                      if (window.animationController) {
                        window.animationController.initialPageLoad = true;
                      }
                      rotateTitles("loading-screen.js");
                    },
                    null,
                    null,
                    "+=0.3"
                  );
                }

                // Set up all scroll-triggered animations
                // NOTE: setupUnifiedReveals() is called AFTER loading splash removal
                // to prevent premature reveals
                tl.call(
                  () => {
                    setupMoreInfo();
                    playVideosOnEnter();
                    autoScrollContainer();
                    initSmoothScroll();

                    // Defer scroll recalculation to idle time so it never
                    // interrupts an in-flight reveal animation.
                    const scheduleRefresh = () => {
                      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
                      if (window.lenis) window.lenis.resize();
                    };
                    if (typeof requestIdleCallback === 'function') {
                      requestIdleCallback(scheduleRefresh, { timeout: 1000 });
                    } else {
                      setTimeout(scheduleRefresh, 500);
                    }
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

              // Set up fade-reveal system after loading splash is completely removed
              setupUnifiedReveals();

              // Refresh ScrollTrigger at idle time — well after any in-flight
              // reveal animations — to avoid a forced layout mid-transition.
              const schedulePostRevealRefresh = () => {
                if (window.ScrollTrigger) window.ScrollTrigger.refresh();
              };
              if (typeof requestIdleCallback === 'function') {
                requestIdleCallback(schedulePostRevealRefresh, { timeout: 1500 });
              } else {
                setTimeout(schedulePostRevealRefresh, 600);
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
}

/**
 * Initialize background settings based on the current page namespace
 */
function initializeBackground() {
  // Get the current page namespace
  const container = document.querySelector("[data-barba='container']");
  const namespace = container ? container.getAttribute("data-barba-namespace") : null;

  console.log("Loading-screen: initializing background for namespace:", namespace);

  const canvas = backgroundManager.getRenderer()?.getCanvas();
  if (canvas) {
    canvas.style.opacity = "1.0";
  }
}
