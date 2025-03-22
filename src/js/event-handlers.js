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

  // Nav click handler
  document.querySelectorAll("nav a").forEach((navLink) => {
    navLink.addEventListener("click", function () {
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

  // Logo click handler
  const logoLinks = document.querySelectorAll(".logo a");
  logoLinks.forEach((link) => {
    link.addEventListener("click", function () {
      document.querySelectorAll("nav a").forEach((navLink) => {
        navLink.classList.remove("active");
      });
    });
  });

  // Check for projects in URL
  if (window.location.href.indexOf("projects") > -1) {
    const firstNavLink = document.querySelector("nav a:nth-of-type(1)");
    if (firstNavLink) {
      firstNavLink.classList.add("active");
      document.querySelectorAll("nav a").forEach((sibling) => {
        if (sibling !== firstNavLink) {
          sibling.classList.remove("active");
        }
      });
    }
  }

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
      const copyText = document.getElementById("email-string");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);
      document.execCommand("copy");

      const cursorElement = document.querySelector(".cursor-element");
      if (cursorElement) {
        cursorElement.classList.add("copied");
        setTimeout(() => {
          cursorElement.classList.remove("copied");
        }, 2400);
      }
    });
  });

  setupMobileMenuHandlers();
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

  const navigationLinks = document.querySelectorAll("#navigation a");
  navigationLinks.forEach((link) => {
    ["click", "touchstart"].forEach((eventType) => {
      link.addEventListener(eventType, function (e) {
        e.preventDefault();

        document.querySelectorAll("#navigation a:not(.active)").forEach((inactiveLink) => {
          inactiveLink.classList.add("on-change");
        });

        setTimeout(() => {
          document.querySelectorAll("#navigation a.on-change").forEach((changingLink) => {
            changingLink.classList.remove("on-change");
          });
        }, 240);

        document.body.classList.remove("menu-active");
        document.querySelectorAll(".mobile-menu-toggle").forEach((toggle) => {
          toggle.classList.remove("active");
        });

        window.location.href = this.getAttribute("href");
      });
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
