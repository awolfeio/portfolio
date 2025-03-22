import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

export const fadeTransition = {
  leave(container) {
    return new Promise((resolve) => {
      gsap.fromTo(
        container,
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: 24,
          duration: 0.4,
          ease: CustomEase.create("cubic", "0.785, 0.135, 0.15, 0.86"),
          onComplete: resolve,
        }
      );
    });
  },

  enter(container) {
    return new Promise((resolve) => {
      gsap.fromTo(
        container,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.66,
          delay: 0.4,
          ease: CustomEase.create("cubic", "0.785, 0.135, 0.15, 0.86"),
          onComplete: resolve,
        }
      );
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
          onComplete: resolve,
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
      gsap.fromTo(
        container,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.44,
          ease: CustomEase.create("cubic", "0.785, 0.135, 0.15, 0.86"),
          onComplete: resolve,
        }
      );

      gsap.fromTo(
        container,
        {
          filter: "blur(100px)",
          transform: "rotateX(125deg) translateY(40px) translateZ(-100px)",
        },
        {
          filter: "blur(0px)",
          transform: "rotateX(0deg) translateY(0px) translateZ(0px)",
          duration: 1,
          ease: CustomEase.create("cubic", "0.785, 0.135, 0.15, 0.86"),
        }
      );
    });
  },
};
