import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import splitText from "./text-splitting.js";

gsap.registerPlugin(CustomEase);

export const fadeTransition = {
  leave(container) {
    return new Promise((resolve) => {
      gsap.killTweensOf(container);

      gsap.set(container, {
        visibility: "visible",
        opacity: 1,
        pointerEvents: "none",
        immediateRender: true,
      });

      gsap.to(container, {
        opacity: 0,
        duration: 0.25,
        ease: "power1.out",
        onComplete: () => {
          gsap.set(container, {
            visibility: "hidden",
            opacity: 0,
          });
          resolve();
        },
      });
    });
  },

  enter(container) {
    return new Promise((resolve) => {
        gsap.killTweensOf(container);

      const pageElement = container.querySelector(".page");
      const contentElements = pageElement ? Array.from(pageElement.children) : [];

        gsap.set(container, {
          opacity: 0,
        y: 0,
        visibility: "visible",
        pointerEvents: "none",
        });

        if (pageElement) {
          gsap.set(pageElement, {
            opacity: 0,
          visibility: "visible",
          pointerEvents: "none",
          });
      }

          if (contentElements.length > 0) {
            gsap.set(contentElements, {
              opacity: 0,
          visibility: "visible",
          pointerEvents: "none",
            });
        }

        const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
          onComplete: () => {
        if (pageElement) {
            gsap.set(pageElement, { pointerEvents: "auto" });
          }
          if (contentElements.length > 0) {
            gsap.set(contentElements, { pointerEvents: "auto" });
          }
          gsap.set(container, { pointerEvents: "auto" });
          resolve();
        },
      });

      tl.to(container, { opacity: 1, duration: 0.28 });
    });
  },
};

export const blurFlipFadeTransition = {
  leave(container) {
    return new Promise((resolve) => {
      gsap.fromTo(
        container,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.32,
          ease: CustomEase.create("cubic", "0.785, 0.135, 0.15, 0.86"),
          onComplete: () => {
            // Ensure container stays hidden
            gsap.set(container, {
              visibility: "hidden",
              opacity: 0,
            });
            resolve();
          },
        }
      );

      gsap.to(container, {
        filter: "blur(100px)",
        transform: "rotateX(125deg) translateY(40px) translateZ(-100px)",
        duration: 0.44,
        ease: CustomEase.create("cubic", "0.785, 0.135, 0.15, 0.86"),
      });
    });
  },

  enter(container) {
    return new Promise((resolve) => {
      // Set initial state
      gsap.set(container, {
        visibility: "visible",
        opacity: 0,
        filter: "blur(100px)",
        transform: "rotateX(125deg) translateY(40px) translateZ(-100px)",
      });

      // Fade in animation
      gsap.to(container, {
        opacity: 1,
        filter: "blur(0px)",
        transform: "rotateX(0deg) translateY(0px) translateZ(0px)",
        duration: 1,
        ease: CustomEase.create("cubic", "0.785, 0.135, 0.15, 0.86"),
        onComplete: resolve,
      });
    });
  },
};
