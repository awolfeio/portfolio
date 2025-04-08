import {
  revealSplitTexts,
  fadeInReveal,
  playVideosOnEnter,
  autoScrollContainer,
  revealSplittingRows,
} from "./scroll-triggers.js";
import initSmoothScroll from "./smooth-scroll.js";
import splitText from "./text-splitting.js";
import { circleText, revealH1Characters, rotateTitles, forceRevealAll } from "./type-anim.js";
import { removeSpecificElements, checkLocationAndRemoveElements } from "./geographic.js";
import { gsap } from "gsap";
import SplitType from "split-type";
import { fogBG } from "./background.js";

export function loadingSplash() {
  // Initialize by ensuring containers are visible and properly styled
  ensureContainersAreVisible();

  // Set initial Vanta background settings based on current page
  initializeVantaBackground();

  var checkLoadReady = setInterval(function () {
    const loadBar = document.querySelector(".load-bar-inner");
    if (loadBar) {
      clearInterval(checkLoadReady);
      const loadingSplash = document.querySelector("#loading-splash");
      loadBar.classList.add("loading");

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

              // Crucial: Run splitting and prepare H1 before any animations start
              // This prevents the jitter because elements are fully prepared before visible animations
              console.log("Loading screen: preparing H1 elements");

              // Pre-split and prepare H1 elements before rendering
              const h1Elements = document.querySelectorAll("h1");
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
                revealH1Characters();
              });

              // Then handle other animations
              tl.call(
                () => {
                  console.log("Loading screen: running other animations");

                  // Force reveal all other elements
                  forceRevealAll();

                  // Explicitly handle splitting rows
                  revealSplittingRows();

                  // Double-check for any missed splitting rows
                  setTimeout(() => {
                    document.querySelectorAll(".splitting-rows:not(.reveal)").forEach((el) => {
                      console.log("Fixing missed splitting-rows element");
                      el.classList.add("reveal");
                    });
                  }, 100);

                  // Initialize scroll-based animations
                  revealSplitTexts();
                  fadeInReveal();
                  playVideosOnEnter();
                  autoScrollContainer();

                  // Initialize smooth scrolling
                  initSmoothScroll();

                  // Run text circle animations
                  circleText();
                },
                null,
                null,
                "+=0.2"
              );

              // Handle homepage title rotations
              const isHomepage = document.querySelector("main .page#index");
              if (isHomepage) {
                tl.call(
                  () => {
                    // Clear any existing title rotation
                    if (window.titleAnimationInterval) {
                      clearInterval(window.titleAnimationInterval);
                      window.titleAnimationInterval = null;
                    }

                    // Initialize title rotation
                    console.log("Loading-screen: starting title rotation");
                    rotateTitles("loading-screen.js");
                  },
                  null,
                  null,
                  "+=0.4"
                );
              }

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
