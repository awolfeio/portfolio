import { revealSplitTexts, fadeInReveal, playVideosOnEnter, autoScrollContainer } from "./scroll-triggers.js";
import initSmoothScroll from "./smooth-scroll.js";
import splitText from "./text-splitting.js";
import { circleText, revealH1Characters } from "./type-anim.js";
import { removeSpecificElements, checkLocationAndRemoveElements } from "./geographic.js";

export function loadingSplash() {
  var checkLoadReady = setInterval(function () {
    const loadBar = document.querySelector(".load-bar-inner");
    if (loadBar) {
      clearInterval(checkLoadReady);
      const loadingSplash = document.querySelector("#loading-splash");
      loadBar.classList.add("loading");

      var loadingReadyCheck = setInterval(function () {
        if (loadBar.classList.contains("loading")) {
          clearInterval(loadingReadyCheck);
          splitText();
          loadBar.addEventListener("animationend", () => {
            loadingSplash.classList.add("loaded");

            // Animate loading splash characters
            const loadingChars = document.querySelectorAll("#loading-splash .char");
            loadingChars.forEach((char) => char.classList.add("reveal-char"));

            window.scrollTo(0, 0);

            setTimeout(function () {
              document.body.classList.add("loaded");
              checkLocationAndRemoveElements();
              revealSplitTexts();
              fadeInReveal();
              playVideosOnEnter();
              autoScrollContainer();
              initSmoothScroll();
              circleText();

              // Immediately reveal H1 characters
              revealH1Characters();

              setTimeout(function () {
                document.body.classList.remove("loaded");
              }, 100);
            }, 800);
          });
        }
      }, 50);

      var loadingFinishedCheck = setInterval(function () {
        if (loadingSplash.classList.contains("loaded")) {
          clearInterval(loadingFinishedCheck);
          loadingSplash.addEventListener("animationend", () => {
            setTimeout(function () {
              loadingSplash.remove();

              // Only remove reveal-char from loading splash elements, not from H1
              const loadingChars = document.querySelectorAll("#loading-splash .char");
              loadingChars.forEach((char) => char.classList.remove("reveal-char"));
            }, 500);
          });
        }
      }, 50);
    }
  }, 100);
}
