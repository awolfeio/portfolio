import { cursorCheck } from "./cursor-element.js";

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
}

/**
 * Centralized handler for all links that should use Barba transitions
 */
function handleBarbaLinks(e) {
  // Only handle left clicks
  if (e.button !== 0) return;

  const link = e.target.closest("a");
  if (!link) return;

  // Check for resume link specifically, ensuring it opens in a new tab
  if (
    link.id === "resume-nav-link" ||
    link.classList.contains("resume") ||
    (link.getAttribute("href") && link.getAttribute("href").includes("Resume"))
  ) {
    // Let the default browser behavior handle the resume - don't interfere
    console.log("Resume link clicked - letting browser handle it");
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
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("menu-active");
      this.classList.toggle("active");
    });
  });
}

/**
 * Handle header initialization on different events
 */
export function setupHeaderInitialization() {
  const headerElement = document.querySelector("header");

  function initialize(event) {
    if (!headerElement.classList.contains("initialized")) {
      headerElement.classList.add("initialized");
      eventTypes.forEach((evt) => headerElement.removeEventListener(evt, initialize));
    }
  }

  const eventTypes = ["mouseenter", "hover", "touchstart"];
  eventTypes.forEach((evt) => headerElement.addEventListener(evt, initialize));
}
