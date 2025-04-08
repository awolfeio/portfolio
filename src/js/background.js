import * as THREE from "three";
import { gsap } from "gsap";
import FOG from "vanta/dist/vanta.fog.min";

const fogBG = FOG({
  el: "#viewport",
  THREE: THREE, // use a custom THREE when initializing
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 250.0,
  minWidth: 250.0,
  highlightColor: 0xadfff5,
  midtoneColor: 0xdec1ff,
  lowlightColor: 0x9367ff,
  baseColor: 0xffffff,
  blurFactor: 0.48,
  speed: 0.24,
  zoom: 0.5,
});

var bgCheck = setInterval(function () {
  const canvasElement = document.querySelector("canvas");
  if (canvasElement) {
    canvasElement.addEventListener("touchstart", (event) => {
      console.log("canvas preventDefault fired");
      event.preventDefault();
    });
    canvasElement.addEventListener("touchmove", (event) => {
      console.log("canvas preventDefault fired");
      event.preventDefault();
    });
    canvasElement.addEventListener("touchend", (event) => {
      console.log("canvas preventDefault fired");
      event.preventDefault();
    });
    canvasElement.addEventListener("touchcancel", (event) => {
      console.log("canvas preventDefault fired");
      event.preventDefault();
    });
    clearInterval(bgCheck);
  }
}, 250);

function changeBG() {
  console.log("Changing background...");

  // Get the namespace from the NEXT container (which will be active after transition)
  const newContainer = document.querySelector("[data-barba='container']:not(.barba-old-container)");
  const newNamespace = newContainer ? newContainer.getAttribute("data-barba-namespace") : null;

  // Get the current/old container's namespace
  const oldContainer = document.querySelector(".barba-old-container");
  const oldNamespace = oldContainer ? oldContainer.getAttribute("data-barba-namespace") : null;

  console.log("Transition: ", oldNamespace, " -> ", newNamespace);

  // If both old and new pages are NOT the about page, skip background changes
  if (oldNamespace !== "about" && newNamespace !== "about" && oldNamespace !== null) {
    console.log("Both pages are not 'about', skipping background change");
    return;
  }

  const vantaCanvas = document.querySelector(".vanta-canvas");
  const viewport = document.getElementById("viewport");

  // First, make the background transition smoothly
  if (vantaCanvas) vantaCanvas.style.opacity = "0";
  if (viewport) viewport.style.background = "#E5F0FD";

  // After a short delay, apply the appropriate Vanta settings
  setTimeout(function () {
    // Check again for the namespace to ensure we're looking at the right container
    // that's now fully in the DOM
    const finalContainer = document.querySelector("[data-barba='container']");
    const finalNamespace = finalContainer ? finalContainer.getAttribute("data-barba-namespace") : null;

    console.log("Final page namespace confirmation:", finalNamespace);

    if (finalNamespace === "about") {
      console.log("Applying about page Vanta settings");
      fogBG.setOptions({
        blurFactor: 0.35,
        speed: 0.6,
        zoom: 2.0,
      });
    } else {
      console.log("Applying default Vanta settings");
      fogBG.setOptions({
        blurFactor: 0.48,
        speed: 0.24,
        zoom: 0.5,
      });
    }

    // Fade the background back in
    if (vantaCanvas) vantaCanvas.style.opacity = "0.66";
    if (viewport) viewport.style.background = "#fff";
  }, 1000);
}

export { fogBG, changeBG };
