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

//const smokeBG = FOG({
//  el: "#viewport",
//  THREE: THREE, // use a custom THREE when initializing
//  mouseControls: false,
//  touchControls: false,
//  gyroControls: false,
//  minHeight: 1000.00,
//  minWidth: 1000.00,
//  highlightColor: 0xadfff5,
//  midtoneColor: 0xdec1ff,
//  lowlightColor: 0x9367ff,
//  baseColor: 0xffffff,
//  blurFactor: 0.35,
//  speed: 0.6,
//  zoom: 2.0
//});

function changeBG() {
  const oldPage = document.querySelector("main > div").getAttribute("data-router-view");
  setTimeout(function () {
    const newPage = document.querySelector("main > div").getAttribute("data-router-view");

    if (oldPage != "about" && newPage == "about") {
      const vantaCanvas = document.querySelector(".vanta-canvas");
      const viewport = document.getElementById("viewport");

      if (vantaCanvas) vantaCanvas.style.opacity = "0";
      if (viewport) viewport.style.background = "#E5F0FD";

      setTimeout(function () {
        fogBG.setOptions({
          blurFactor: 0.35,
          speed: 0.6,
          zoom: 2.0,
        });

        if (vantaCanvas) vantaCanvas.style.opacity = "0.66";
        if (viewport) viewport.style.background = "#fff";
      }, 1000);
    } else if (oldPage == "about" && newPage != "about") {
      const vantaCanvas = document.querySelector(".vanta-canvas");
      const viewport = document.getElementById("viewport");

      if (vantaCanvas) vantaCanvas.style.opacity = "0";
      if (viewport) viewport.style.background = "#E5F0FD";

      setTimeout(function () {
        fogBG.setOptions({
          blurFactor: 0.48,
          speed: 0.24,
          zoom: 0.5,
        });

        if (vantaCanvas) vantaCanvas.style.opacity = "0.66";
        if (viewport) viewport.style.background = "#fff";
      }, 1000);
    }
  }, 420);

  //var bgZoom = 0.5;
  //var bgBlurFactor = 0.48;
  //var bgSpeed = 0.1;

  //var timer = 0;
  //var framesPerSecond = 60;
  //var transitionDuration = 1000;
  //var animTick = 1000 / framesPerSecond;
  //var totalTicks = transitionDuration / animTick;
  //var aboutMeZoom = 2.0;
  //var aboutMeBlur = 0.35;
  //var aboutMeSpeed = 0.6;
}

export { fogBG, changeBG };
