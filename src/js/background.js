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

function changeBG(data) {
  console.log("Applying background changes...");

  // Get target namespace from data directly if available
  const newNamespace = data && data.next ? data.next.namespace : null;
  const oldNamespace = data && data.current ? data.current.namespace : null;

  // Fallback method if data parameters aren't available
  if (!newNamespace) {
    // Get the namespace from the NEXT container (which will be active after transition)
    const newContainer = document.querySelector("[data-barba='container']:not(.barba-old-container)");
    const containerNamespace = newContainer ? newContainer.getAttribute("data-barba-namespace") : null;

    if (containerNamespace) {
      console.log("Using fallback namespace detection:", containerNamespace);
    }
  }

  console.log("Background transition: ", oldNamespace, " -> ", newNamespace);

  // If neither old nor new page is the about page, skip the heavy lifting
  if (oldNamespace !== "about" && newNamespace !== "about" && oldNamespace !== null) {
    console.log("Neither page is 'about', skipping background parameter changes");
    // Still fade the background back in if it was faded out
    fadeBackgroundIn();
    return;
  }

  // Step 1: Fade out the background fully
  const vantaCanvas = document.querySelector(".vanta-canvas");
  const viewport = document.getElementById("viewport");

  console.log("Step 1: Fading background fully out");

  // Make sure we're starting from 0 opacity before changing parameters
  if (vantaCanvas) {
    vantaCanvas.style.transition = "opacity 0.4s ease";
    vantaCanvas.style.opacity = "0";
  }
  if (viewport) {
    viewport.style.transition = "background 0.4s ease";
    viewport.style.background = "#E5F0FD";
  }

  // Step 2: Wait for fade-out to complete, then change parameters
  setTimeout(() => {
    console.log("Step 2: Changing Vanta parameters while invisible");

    // Apply the appropriate Vanta settings
    if (newNamespace === "about") {
      console.log("Setting about page Vanta parameters");
      fogBG.setOptions({
        blurFactor: 0.35,
        speed: 0.6,
        zoom: 2.0,
      });
    } else {
      console.log("Setting default Vanta parameters");
      fogBG.setOptions({
        blurFactor: 0.48,
        speed: 0.24,
        zoom: 0.5,
      });
    }

    // Step 3: Wait for parameters to take effect, then fade back in
    setTimeout(() => {
      console.log("Step 3: Fading background back in with new parameters");
      fadeBackgroundIn();
    }, 300);
  }, 400); // Wait for fade-out to complete
}

// Helper function to fade the background back in
function fadeBackgroundIn() {
  const vantaCanvas = document.querySelector(".vanta-canvas");
  const viewport = document.getElementById("viewport");

  console.log("Fading background back in");

  // Apply transitions for smooth fade-in
  if (vantaCanvas) {
    vantaCanvas.style.transition = "opacity 0.6s ease";
    vantaCanvas.style.opacity = "0.66";
  }

  if (viewport) {
    viewport.style.transition = "background 0.6s ease";
    viewport.style.background = "#fff";
  }
}

export { fogBG, changeBG, fadeBackgroundIn };
