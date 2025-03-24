import barba from "@barba/core";
import { fadeTransition } from "./transitions.js";
import { lenis, stopScroll, startScroll } from "./smooth-scroll.js";
import initSmoothScroll from "./smooth-scroll.js";
import { changeBG, fogBG } from "./background.js";
import splitText from "./text-splitting.js";
import { revealSplitTexts, fadeInReveal, playVideosOnEnter, autoScrollContainer } from "./scroll-triggers.js";
import { rotateTitles, circleText } from "./type-anim.js";
import { cursorCheck } from "./cursor-element.js";
import { setupEventHandlers } from "./event-handlers.js";
import { checkLocationAndRemoveElements } from "./geographic.js";

/**
 * Initialize Barba.js and set up page transitions
 */
export function initializeBarba() {
  barba.init({
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
          fogBG.setOptions({
            blurFactor: 0.35,
            speed: 0.6,
            zoom: 2.0,
          });
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
    ],
  });

  // Run on every Barba page transition
  barba.hooks.after(() => {
    checkLocationAndRemoveElements();
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

  stopScroll();
  changeBG();

  // Animation for leaving the page
  return fadeTransition.leave(data.current.container);
}

/**
 * Handle the enter transition
 */
function handleEnter(data) {
  // Animation for entering the new page
  return fadeTransition.enter(data.next.container);
}

/**
 * Handle operations after entering the new page
 */
function handleAfterEnter(data) {
  // Reset scroll position
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo(0, 0);
  }

  // Initialize elements on the new page
  setTimeout(function () {
    splitText();
  }, 400);

  setTimeout(function () {
    revealSplitTexts();
    fadeInReveal();
    playVideosOnEnter();
    autoScrollContainer();
    initSmoothScroll();
    startScroll();

    if (document.querySelector("main .page#index")) {
      rotateTitles();
    }

    cursorCheck();
    setupEventHandlers();
    circleText();

    document.body.classList.remove("loading");
    document.body.classList.add("loaded");

    setTimeout(function () {
      document.body.classList.remove("loaded");
    }, 1500);
  }, 800);
}
