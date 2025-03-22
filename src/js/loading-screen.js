import { revealSplitTexts, fadeInReveal, playVideosOnEnter, autoScrollContainer } from "/js/scroll-triggers.js";
import smoothScroll from "./smooth-scroll.js";
import splitText from "./text-splitting.js";
import { circleText } from "./type-anim.js";
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

            const chars = document.querySelectorAll(".splitting .char");
            chars.forEach((char) => char.classList.add("reveal-char"));

            window.scrollTo(0, 0);

            setTimeout(function () {
              document.body.classList.add("loaded");
              checkLocationAndRemoveElements();
              revealSplitTexts();
              fadeInReveal();
              playVideosOnEnter();
              autoScrollContainer();
              smoothScroll();
              circleText();

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

              const chars = document.querySelectorAll(".splitting .char");
              chars.forEach((char) => char.classList.remove("reveal-char"));
            }, 500);
          });
        }
      }, 50);
    }
  }, 100);
}
