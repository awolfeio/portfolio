import { cursorCheck } from "./cursor-element.js";
import portfolioAuth from "./portfolio-auth.js";
import jinxUrl from "../assets/jinx.png";

/**
 * Handle all general event handlers on every page load
 */
export function setupEventHandlers() {
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    body::-webkit-scrollbar-thumb {
      opacity: 0.4;
    }
  `;
  document.head.appendChild(styleElement);

  // Easter egg: hover over span.infinite-titles to change it to any of the list
  if (!document.body.hasAttribute("data-infinite-titles-listener")) {
    document.body.setAttribute("data-infinite-titles-listener", "true");
    
    document.body.addEventListener("mouseover", function (e) {
      const target = e.target.closest("span.infinite-titles");
      if (target && !target.classList.contains("blip-active")) {
        target.classList.add("blip-active");
        
        target.addEventListener("animationend", function handleAnimEnd() {
          target.classList.remove("blip-active");
          target.removeEventListener("animationend", handleAnimEnd);
        });
        
        const titlesList = [
          "UI/UX Designer + Developer",
          "UX Engineer",
          "Creative Technologist",
          "Design Engineer",
          "UI Developer",
          "UX Designer"
        ];
        const currentText = target.textContent.trim();
        const availableTitles = titlesList.filter(t => t !== currentText);
        const randomIndex = Math.floor(Math.random() * availableTitles.length);
        target.textContent = availableTitles[randomIndex];
      }
    });
  }

  // Easter egg: hover over span.cat-jinx to show floating Jinx image centered on cursor
  if (!document.body.hasAttribute("data-cat-jinx-listener")) {
    document.body.setAttribute("data-cat-jinx-listener", "true");

    let jinxEl = null;

    const createJinxEl = () => {
      jinxEl = document.createElement("div");
      jinxEl.className = "floating-jinx";
      const img = document.createElement("img");
      img.src = jinxUrl;
      img.style.width = "100%";
      img.style.height = "auto";
      img.style.display = "block";
      jinxEl.appendChild(img);
      document.body.appendChild(jinxEl);
    };

    document.body.addEventListener("mouseover", function (e) {
      const target = e.target.closest("span.cat-jinx");
      if (target) {
        let isFirstTime = false;
        if (!jinxEl) {
          createJinxEl();
          isFirstTime = true;
        }
        
        // Position immediately before showing
        jinxEl.style.left = `${e.clientX}px`;
        jinxEl.style.top = `${e.clientY}px`;

        if (isFirstTime) {
          // Force layout reflow so the browser registers the scale(0.88) and opacity:0 state in the DOM first
          void jinxEl.offsetWidth;
        }

        jinxEl.classList.add("visible");
      }
    });

    document.body.addEventListener("mousemove", function (e) {
      const target = e.target.closest("span.cat-jinx");
      if (target && jinxEl) {
        jinxEl.style.left = `${e.clientX}px`;
        jinxEl.style.top = `${e.clientY}px`;
      }
    });

    document.body.addEventListener("mouseout", function (e) {
      const target = e.target.closest("span.cat-jinx");
      if (target && jinxEl) {
        const relatedTarget = e.relatedTarget;
        if (!relatedTarget || !target.contains(relatedTarget)) {
          jinxEl.classList.remove("visible");
        }
      }
    });
  }

  // Delegate click event for all internal links to use Barba
  document.body.addEventListener("click", handleBarbaLinks);

  // Nav click handler
  document.querySelectorAll("nav a").forEach((navLink) => {
    navLink.addEventListener("click", function (e) {
      if (this.classList.contains("resume")) {
        return;
      } else if (!this.classList.contains("active")) {
        this.classList.add("active");
        document.querySelectorAll("nav a").forEach((sibling) => {
          if (sibling !== this) {
            sibling.classList.remove("active");
          }
        });
      }
    });
  });

  // Skills section mouseleave handler
  document.querySelectorAll(".skills-wrapper > div").forEach((skillTile) => {
    skillTile.addEventListener("mouseleave", function () {
      this.classList.add("leaving");
      setTimeout(() => {
        this.classList.remove("leaving");
      }, 600);
    });
  });

  // Email click handler
  document.querySelectorAll(".email").forEach((emailElement) => {
    emailElement.addEventListener("click", function () {
      // Email address to copy
      const emailAddress = "adrainwolfe@gmail.com";

      // Copy directly to clipboard using the Clipboard API
      navigator.clipboard
        .writeText(emailAddress)
        .then(() => {
          console.log("Email copied to clipboard:", emailAddress);

          // Show visual feedback with the cursor element
          const cursorElement = document.querySelector(".cursor-element");
          if (cursorElement) {
            cursorElement.classList.add("copied");
            setTimeout(() => {
              cursorElement.classList.remove("copied");
            }, 2400);
          }
        })
        .catch((err) => {
          console.error("Failed to copy email: ", err);
        });
    });
  });

  setupMobileMenuHandlers();
  checkSkillsWrapping();
}

/**
 * Centralized handler for all links that should use Barba transitions
 */
function handleBarbaLinks(e) {
  // Only handle left clicks
  if (e.button !== 0) return;

  const link = e.target.closest("a");
  if (!link) return;

  // Check for resume link specifically
  if (
    link.id === "resume-nav-link" ||
    link.classList.contains("resume") ||
    (link.getAttribute("href") && link.getAttribute("href").includes("Resume"))
  ) {
    if ((typeof __DISABLE_AUTH__ !== 'undefined' && __DISABLE_AUTH__) || (typeof __ACS_ONLY__ !== 'undefined' && __ACS_ONLY__)) {
      // Auth is disabled or ACS fallback mode, just let the browser open the resume
      return;
    }
    const mode = portfolioAuth.getMode();
    if (!mode) {
      // No password entered — show password modal instead of opening resume
      e.preventDefault();
      console.log("Resume link clicked without auth — showing password modal");
      portfolioAuth.showPasswordModal();
      return;
    }
    // Mode is set — let the browser open the resume (href already set by applyMode)
    console.log(`Resume link clicked with mode ${mode} — opening resume`);
    return;
  }

  // Skip if it's an external link or has a target
  if (
    link.hasAttribute("target") ||
    link.getAttribute("href").startsWith("http") ||
    link.getAttribute("href").includes("mailto:") ||
    link.getAttribute("href").includes("tel:") ||
    link.hasAttribute("download")
  ) {
    return;
  }

  // Skip if it's an anchor link on the same page
  if (link.getAttribute("href").startsWith("#")) {
    return;
  }

  // Prevent default link behavior
  e.preventDefault();

  // Get the href to check if it's the homepage
  const href = link.getAttribute("href");
  const isHomepage = href === "/" || href === "/index.html" || href === "index.html";

  // Handle navigation transition styling if it's a nav link
  if (link.closest("nav")) {
    document.querySelectorAll("nav a:not(.active)").forEach((inactiveLink) => {
      inactiveLink.classList.add("on-change");
    });

    if (!link.classList.contains("active") && !isHomepage) {
      link.classList.add("active");
      document.querySelectorAll("nav a").forEach((sibling) => {
        if (sibling !== link) {
          sibling.classList.remove("active");
        }
      });
    } else if (isHomepage) {
      // If navigating to homepage, remove active class from all nav links
      document.querySelectorAll("nav a").forEach((navLink) => {
        navLink.classList.remove("active");
      });
    }

    setTimeout(() => {
      document.querySelectorAll("nav a.on-change").forEach((changingLink) => {
        changingLink.classList.remove("on-change");
      });
    }, 240);
  } else if (link.classList.contains("logo") || isHomepage) {
    // If it's the logo or any link to the homepage, remove active class from all nav links
    document.querySelectorAll("nav a").forEach((navLink) => {
      navLink.classList.remove("active");
    });
  }

  // Close mobile menu if open
  document.body.classList.remove("menu-active");
  document.querySelectorAll(".mobile-menu-toggle").forEach((toggle) => {
    toggle.classList.remove("active");
  });

  // Use Barba for navigation
  console.log(`Barba navigating to: ${href}`);

  if (window.barba) {
    window.barba.go(href);
  } else {
    console.warn("Barba not initialized yet, falling back to window.location");
    window.location.href = href;
  }
}

/**
 * Setup mobile menu interaction
 */
export function setupMobileMenuHandlers() {
  const mobileMenuToggles = document.querySelectorAll(".mobile-menu-toggle");
  mobileMenuToggles.forEach((toggle) => {
    // Remove existing listener to prevent duplicates
    toggle.removeEventListener("click", handleMobileMenuClick);
    // Add the listener
    toggle.addEventListener("click", handleMobileMenuClick);
  });
}

/**
 * Handle mobile menu toggle click
 */
function handleMobileMenuClick() {
      document.body.classList.toggle("menu-active");
      this.classList.toggle("active");
}

/**
 * Check if .skills-wrapper h5 elements wrap to two lines
 */
export function checkSkillsWrapping() {
  const h5Elements = document.querySelectorAll(".skills-wrapper h5");
  if (!h5Elements.length) return;

  function evaluateWrapping() {
    h5Elements.forEach(h5 => {
      // Get line height
      const style = window.getComputedStyle(h5);
      const lineHeight = parseFloat(style.lineHeight) || (parseFloat(style.fontSize) * 1.25);
      
      // If element height is more than 1.5 times the line height, it has wrapped
      if (h5.offsetHeight > lineHeight * 1.5) {
        h5.parentElement.classList.add("is-wrapped");
      } else {
        h5.parentElement.classList.remove("is-wrapped");
      }
    });
  }

  // Initial check
  evaluateWrapping();

  // Resize listener
  let timeout;
  window.addEventListener("resize", () => {
    clearTimeout(timeout);
    timeout = setTimeout(evaluateWrapping, 150);
  });
}


