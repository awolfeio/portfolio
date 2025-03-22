import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

export function cursorElement() {
  document.addEventListener("DOMContentLoaded", function () {
    const cursorHtml =
      '<div class="cursor-element"><div class="cursor-wrapper"><div class="cursor-effect"></div><span></span></div></div>';
    document.body.insertAdjacentHTML("afterbegin", cursorHtml);

    document.body.addEventListener("mousemove", function () {
      gsap.to(".cursor-element", { delay: 0.18, duration: 0.4 });
      gsap.to(".cursor-element", { delay: 0.4, opacity: 1, duration: 0.8 });
    });

    const circle = document.querySelector(".cursor-element");
    gsap.set(circle, { xPercent: -50, yPercent: -50 });
    window.addEventListener("mousemove", moveCircle);

    function moveCircle(e) {
      gsap.to(circle, 1.4, {
        ease: CustomEase.create("cubic", ".14,.8,.28,.99"),
        x: e.clientX,
        y: e.clientY,
      });
    }
  });
}
cursorElement();

export function cursorCheck() {
  // Hide if touch
  if (window.matchMedia("(pointer: coarse)").matches && window.matchMedia("(hover: none)").matches) {
    document.querySelector(".cursor-element")?.classList.add("hidden");
  }

  // Add logo hover functionality
  const logo = document.querySelector(".logo");
  const cursorElement = document.querySelector(".cursor-element");

  if (logo) {
    logo.addEventListener("mouseenter", function () {
      cursorElement?.classList.add("logo");
    });

    logo.addEventListener("mouseleave", function () {
      cursorElement?.classList.remove("logo");
    });
  }

  // Check Cursor
  const interactiveElements = document.querySelectorAll(
    "a, button, code, input, select, textarea, span.email, svg.play, svg.pause"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      if (this.classList.contains("active") || this.classList.contains("logo")) {
        return;
      } else {
        document.querySelector(".cursor-effect")?.classList.add("active", "hover");
        document.querySelector(".cursor-element")?.classList.add("active", "hover");
      }
    });

    element.addEventListener("mouseleave", function () {
      document.querySelector(".cursor-effect")?.classList.remove("active", "hover");
      document.querySelector(".cursor-element")?.classList.remove("active", "hover");
    });

    element.addEventListener("click", function () {
      document.querySelector(".cursor-effect")?.classList.remove("active", "hover");
      document.querySelector(".cursor-element")?.classList.remove("active", "hover");
    });
  });

  //Click Animation
  document.body.addEventListener("mousedown", function () {
    document.querySelector(".cursor-element")?.classList.add("mouse-down");
  });

  document.body.addEventListener("mouseup", function () {
    document.querySelector(".cursor-element")?.classList.remove("mouse-down");
  });

  const clickableElements = document.querySelectorAll(
    "a:not('.active'), button, input, select, textarea, span.email, svg.play, svg.pause"
  );

  clickableElements.forEach((element) => {
    element.addEventListener("click", function () {
      const cursorEffect = document.querySelector(".cursor-effect");
      const cursorElement = document.querySelector(".cursor-element");

      if (cursorEffect) cursorEffect.classList.remove("active");
      if (cursorElement) cursorElement.classList.add("clicked");

      if (!this.closest("nav a")) {
        setTimeout(function () {
          if (cursorElement) cursorElement.classList.remove("clicked");

          // Check if any interactive element is being hovered
          if (
            document.querySelector(
              "a:hover, button:hover, input:hover, select:hover, textarea:hover, span.email:hover, svg.play:hover, svg.pause:hover"
            )
          ) {
            document.querySelector(".cursor-effect")?.classList.add("active", "hover");
            document.querySelector(".cursor-element")?.classList.add("active", "hover");
          }
        }, 800);
      } else {
        setTimeout(function () {
          document.querySelector(".cursor-element")?.classList.remove("clicked");
        }, 800);
      }
    });
  });

  document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("click", function (event) {
      if (this.classList.contains("active")) {
        event.preventDefault();
        return;
      }
    });
  });

  document.querySelectorAll("a, button, code, input, select, textarea").forEach((element) => {
    element.addEventListener("mouseenter", function () {
      if (this.classList.contains("active")) {
        return;
      } else {
        document.querySelector(".cursor-effect")?.classList.add("active");
      }
    });

    element.addEventListener("mouseleave", function () {
      document.querySelector(".cursor-effect")?.classList.remove("active");
    });

    element.addEventListener("click", function () {
      document.querySelector(".cursor-effect")?.classList.remove("active");
    });
  });

  const skillsWrappers = document.querySelectorAll(".skills-wrapper > div");

  skillsWrappers.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      document.querySelector(".cursor-element")?.classList.add("hide");
    });

    element.addEventListener("mouseleave", function () {
      document.querySelector(".cursor-element")?.classList.remove("hide");
    });
  });
}
