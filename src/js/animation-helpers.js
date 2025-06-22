/**
 * Prevents .fade-in animations from re-triggering after they have played once.
 * It listens for the end of the animation and adds a 'has-faded-in' class,
 * which is then used in the SCSS to prevent the animation from running again.
 */
export function preventAnimationRefire() {
  const animatedElements = document.querySelectorAll(".fade-in");

  animatedElements.forEach((element) => {
    element.addEventListener(
      "animationend",
      () => {
        element.classList.add("has-faded-in");
      },
      { once: true } // Ensure the listener is removed after it runs once
    );
  });
}
