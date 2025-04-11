import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import splitText from "./text-splitting.js";

gsap.registerPlugin(CustomEase);

export const fadeTransition = {
  leave(container) {
    return new Promise((resolve) => {
      // Clear any existing animations that might be conflicting
      gsap.killTweensOf(container);
      gsap.killTweensOf(container.querySelectorAll(".page, .page > *"));

      // First, ensure container is visible at the start of animation
      gsap.set(container, {
        visibility: "visible",
        opacity: 1,
        y: 0,
        immediateRender: true,
      });

      // Find all elements in the container except the navigation
      const allContentExceptNav = container.querySelectorAll(".page, .page > *");

      // Create a timeline for sequential animations
      const tl = gsap.timeline({
        onComplete: () => {
          // Ensure container stays hidden after animation
          gsap.set(container, {
            visibility: "hidden",
            opacity: 0,
            y: 0, // Reset y position
            display: "none", // Add display none to prevent any potential layout impact
          });
          resolve();
        },
      });

      // Fade out content elements first (but not nav)
      tl.to(allContentExceptNav, {
        opacity: 0,
        y: 24,
        duration: 0.4,
        ease: CustomEase.create("cubic", "0.785, 0.135, 0.15, 0.86"),
        stagger: 0.05,
      });

      // Then fade out the container itself, but keep the nav visible
      tl.to(
        container,
        {
          opacity: 0,
          y: 24,
          duration: 0.4,
          ease: CustomEase.create("cubic", "0.785, 0.135, 0.15, 0.86"),
        },
        "-=0.2"
      );
    });
  },

  enter(container) {
    return new Promise((resolve) => {
      // Wait a tiny bit to ensure DOM is ready
      setTimeout(() => {
        // Clear any existing animations that might be conflicting
        gsap.killTweensOf(container);
        gsap.killTweensOf(container.querySelectorAll(".page, .page > *"));

        // Check if this is the works page (we'll keep the variable for potential future use)
        const isWorksPage = container.getAttribute("data-barba-namespace") === "works";
        console.log("Page transition: is works page?", isWorksPage);

        // First make sure the container and content are set up properly
        gsap.set(container, {
          visibility: "hidden", // Start hidden
          opacity: 0,
          y: 40, // Use 40px for all pages
          immediateRender: true,
        });

        // Get the page and its content elements
        const pageElement = container.querySelector(".page");
        let contentElements = [];

        if (pageElement) {
          contentElements = Array.from(pageElement.children);

          // Set page to visible but transparent
          gsap.set(pageElement, {
            opacity: 0,
            visibility: "hidden", // Start hidden
            y: 30, // Use 30px for all pages
            immediateRender: true,
          });

          // Also prepare content elements
          if (contentElements.length > 0) {
            gsap.set(contentElements, {
              opacity: 0,
              visibility: "hidden", // Start hidden
              y: 30, // Use 30px for all pages
              immediateRender: true,
            });
          }
        }

        // Create a timeline for entering animation
        const tl = gsap.timeline({
          onStart: () => {
            // Make container visible right before animation starts
            gsap.set(container, {
              visibility: "visible",
            });
          },
          onComplete: () => {
            console.log("BARBA ENTER ANIMATION FULLY COMPLETE");
            resolve();
          },
        });

        // Apply animation to container
        tl.to(container, {
          opacity: 1,
          y: 0,
          duration: 0.45, // Use longer duration for all pages
          delay: 0, // No delay
          ease: "power2.out",
        });

        // Fade in the page and content simultaneously but quickly
        if (pageElement) {
          tl.add(() => {
            // Make page visible right before its animation
            gsap.set(pageElement, {
              visibility: "visible",
            });

            // Make content visible too
            const contentElements = pageElement.children;
            if (contentElements.length > 0) {
              gsap.set(contentElements, {
                visibility: "visible",
              });
            }
          });

          // Animate page and content together rapidly
          tl.to(
            pageElement,
            {
              opacity: 1,
              y: 0,
              duration: 0.4, // Use longer duration for all pages
              ease: "power2.out",
            },
            "-=0.1"
          );

          // Animate the children with stagger for all pages
          if (contentElements.length > 0) {
            tl.to(
              contentElements,
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "power2.out",
              },
              "-=0.2"
            );
          }
        }
      }, 0); // No delay
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
