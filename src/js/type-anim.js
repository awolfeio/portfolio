import CircleType from "circletype";

export function rotateTitles() {
  const firstTitle = document.querySelector("h2 .title:nth-of-type(1)");
  if (firstTitle) firstTitle.classList.add("active");

  setTimeout(function () {
    const titles = document.querySelectorAll("h2 .title");
    let currentTitle = 0;
    const N = 4; //interval in seconds

    function activateNextTitle() {
      currentTitle = (currentTitle + 1) % titles.length;

      // Remove classes from all titles
      titles.forEach((title) => {
        title.classList.remove("active");
        title.classList.remove("hidden");
      });

      // Add active class to current title
      titles[currentTitle].classList.add("active");

      setTimeout(() => {
        // Add hidden class to non-active titles
        titles.forEach((title) => {
          if (!title.classList.contains("active")) {
            title.classList.add("hidden");
          }
        });

        const activeTitle = document.querySelector("h2 .title.active");
        const lastWord = activeTitle.querySelector(".word:last-of-type");
        const lastChar = lastWord?.querySelector(".char:last-of-type");

        if (lastChar) {
          // Use once handler for animationend
          const animEndHandler = () => {
            setTimeout(() => {
              activateNextTitle();
            }, 4000);
            lastChar.removeEventListener("animationend", animEndHandler);
          };

          lastChar.addEventListener("animationend", animEndHandler);
        }
      }, 250);
    }

    const firstActiveTitle = document.querySelector("h2 .title.active");
    const firstLastWord = firstActiveTitle?.querySelector(".word:last-of-type");
    const firstLastChar = firstLastWord?.querySelector(".char:last-of-type");

    if (firstLastChar) {
      // Use once handler for animationend
      const animEndHandler = () => {
        setTimeout(() => {
          activateNextTitle();
        }, 4000);
        firstLastChar.removeEventListener("animationend", animEndHandler);
      };

      firstLastChar.addEventListener("animationend", animEndHandler);
    }
  }, 200);
}

export function circleText() {
  setTimeout(() => {
    const circleTextEl = document.querySelector(".circular-text");
    if (circleTextEl) {
      // Make the selected text circular with CircleType
      // you can find the full docs here: https://circletype.labwire.ca/
      const rotate = new CircleType(circleTextEl).radius(120);

      // Add a scroll listener to the window object and rotate the selected text according to the scroll
      // we used * 0.15 to make the rotation looks smoother
      window.addEventListener("scroll", function () {
        circleTextEl.style.transform = `rotate(${window.scrollY * -0.15}deg)`;
      });
    }
  }, 1000);
}
