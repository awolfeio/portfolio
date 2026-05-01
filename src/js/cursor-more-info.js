import { gsap } from "gsap";
import CircleType from "circletype";
import { cursorEase, cursorEl } from "./cursor-element";

let moreInfoCta = null;
let moreInfoCtaPendingMove = null;
let moreInfoCtaRafId = null;
let rpgBubble = null;
let rpgBubbleTextEl = null;
let typewriterInterval = null;
let currentProjectElement = null;
let activeProjectElementForScroll = null;
let isBubbleActive = false;
let scrollRafId = null;
let ctaTextMoreEl = null;
let ctaTextHideEl = null;

export function initMoreInfoLogic() {
  createMoreInfoCta();
  createRpgBubble();
  setupMoreInfo();
}

function createMoreInfoCta() {
  const ctaHtml = `
    <div class="zoom-cta more-info-cta">
      <div class="zoom-cta__icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16V12H10" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
          <path d="M12 8.01V8" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
          <path d="M4 6V6.01" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
          <path d="M6 4V4.01" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
          <path d="M20.01 6H20" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
          <path d="M18.01 4H18" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
          <path d="M20.01 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
          <path d="M18.01 20H18" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
          <path d="M22 8V16" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
          <path d="M2 8V14" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
          <path d="M4 16V18" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
          <path d="M8 2H16" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
          <path d="M16 22H2V20" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
        </svg>
      </div>
      <div class="zoom-cta__ring">
        <span class="zoom-cta__text zoom-cta__text--more"></span>
        <span class="zoom-cta__text zoom-cta__text--hide"></span>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", ctaHtml);
  moreInfoCta = document.querySelector(".more-info-cta");

  ctaTextMoreEl = moreInfoCta.querySelector(".zoom-cta__text--more");
  ctaTextHideEl = moreInfoCta.querySelector(".zoom-cta__text--hide");

  // Build both CircleType instances now, while the ring is stationary.
  // Reinitializing after the CSS spin animation starts causes getBoundingClientRect
  // to measure from a rotating coordinate frame, producing a different effective
  // radius on every toggle. Building both upfront and swapping display avoids this.
  const RADIUS = 36;
  function buildCircleText(el, label, radiusOffset) {
    el.textContent = label;
    const unitWidth = el.getBoundingClientRect().width;
    const circumference = 2 * Math.PI * RADIUS;
    const count = unitWidth > 0 ? Math.round(circumference / unitWidth) : 3;
    el.textContent = label.repeat(count);
    new CircleType(el).radius(RADIUS + radiusOffset);
  }

  buildCircleText(ctaTextMoreEl, "More Info  •  ", 15);
  buildCircleText(ctaTextHideEl, "Hide Info  •  ", 12);

  // Start with "Hide Info" invisible
  ctaTextHideEl.style.display = "none";

  gsap.set(moreInfoCta, { opacity: 0, xPercent: -50, yPercent: -50, x: -200, y: -200, scale: 0.88 });
}

// Toggle between the two pre-built CircleType elements — no reinit, no measurement.
function setCursorLabel(showHide) {
  if (!ctaTextMoreEl || !ctaTextHideEl) return;
  ctaTextMoreEl.style.display = showHide ? "none" : "";
  ctaTextHideEl.style.display = showHide ? "" : "none";
  moreInfoCta?.classList.toggle("more-info-cta--hide", showHide);
}

function createRpgBubble() {
  const bubbleHtml = `
    <div class="rpg-bubble">
      <button class="rpg-bubble__close" aria-label="Close">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="rpg-bubble__text"></div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", bubbleHtml);
  rpgBubble = document.querySelector(".rpg-bubble");
  rpgBubbleTextEl = rpgBubble.querySelector(".rpg-bubble__text");

  const closeBtn = rpgBubble.querySelector(".rpg-bubble__close");
  closeBtn.addEventListener("click", () => {
    hideRpgBubble();
  });
}

export function setupMoreInfo() {
  if (!moreInfoCta) return;

  const projectElements = document.querySelectorAll(".project-element, .large-photo:not(.project-element .large-photo)");

  projectElements.forEach((element) => {
    if (element.dataset.moreInfoBound) return;
    element.dataset.moreInfoBound = "true";

    // If it's a legacy large-photo without a parent project-element, use it directly
    // but the preferred DOM structure is .project-element > .large-photo + .more-info-message
    const hitArea = element.classList.contains("project-element")
      ? (element.querySelector(".large-photo") || element)
      : element;

    setupElementHover(hitArea, element);
  });
}

function setupElementHover(hitArea, containerElement) {
  hitArea.addEventListener("mouseenter", (e) => {
    // Only proceed if there is a message to show
    const messageEl = containerElement.querySelector(".more-info-message");
    if (!messageEl) return;

    cursorEl?.classList.add("magnify-active");
    hitArea.style.cursor = "pointer";

    currentProjectElement = containerElement;

    gsap.set(moreInfoCta, { x: e.clientX, y: e.clientY });
    gsap.to(moreInfoCta, { opacity: 1, duration: 0.22, ease: "power2.out" });
  });

  hitArea.addEventListener("mouseleave", () => {
    hitArea.style.cursor = "";
    currentProjectElement = null;
    cursorEl?.classList.remove("magnify-active");
    moreInfoCta?.classList.remove("pressing");
    gsap.to(moreInfoCta, { opacity: 0, duration: 0.12, ease: "power2.in" });
  });

  hitArea.addEventListener("mousedown", () => {
    if (currentProjectElement) {
      moreInfoCta?.classList.add("pressing");
    }
  });

  hitArea.addEventListener("mouseup", () => {
    moreInfoCta?.classList.remove("pressing");
  });

  hitArea.addEventListener("click", (e) => {
    if (!currentProjectElement) return;

    const messageEl = currentProjectElement.querySelector(".more-info-message");
    if (!messageEl) return;

    const pTags = messageEl.querySelectorAll("p");
    let textContent = "";
    if (pTags.length > 0) {
      textContent = Array.from(pTags).map(p => p.textContent.trim()).join('\n\n');
    } else {
      textContent = messageEl.textContent.trim();
    }

    if (!textContent) return;

    // Toggle bubble: close if clicking same element, switch text if clicking different element
    if (isBubbleActive && rpgBubbleTextEl.dataset.currentText === textContent) {
      hideRpgBubble();
    } else {
      const isSeen = currentProjectElement.dataset.rpgSeen === "true";
      showRpgBubble(textContent, isSeen);
      currentProjectElement.dataset.rpgSeen = "true";
    }
  });

  hitArea.addEventListener("mousemove", (e) => {
    if (!currentProjectElement) return;

    moreInfoCtaPendingMove = { x: e.clientX, y: e.clientY };
    if (!moreInfoCtaRafId) {
      moreInfoCtaRafId = requestAnimationFrame(processMoreInfoCtaMove);
    }
  }, { passive: true });
}

function processMoreInfoCtaMove() {
  moreInfoCtaRafId = null;
  if (!moreInfoCtaPendingMove || !moreInfoCta) return;
  gsap.to(moreInfoCta, {
    duration: 1.4,
    ease: cursorEase,
    x: moreInfoCtaPendingMove.x,
    y: moreInfoCtaPendingMove.y,
    overwrite: "auto"
  });
  moreInfoCtaPendingMove = null;
}

function showRpgBubble(text, isSeen = false) {
  isBubbleActive = true;
  activeProjectElementForScroll = currentProjectElement;
  rpgBubbleTextEl.dataset.currentText = text;

  setCursorLabel(true);

  if (typewriterInterval) clearInterval(typewriterInterval);
  rpgBubbleTextEl.innerHTML = "";

  gsap.to(rpgBubble, {
    opacity: 1,
    y: 0,
    autoAlpha: 1,
    duration: 0.4,
    ease: "power3.out"
  });

  if (isSeen) {
    rpgBubbleTextEl.innerHTML = text.replace(/\n/g, '<br>');
  } else {
    let i = 0;
    let currentHTML = "";
    typewriterInterval = setInterval(() => {
      if (i < text.length) {
        if (text.charAt(i) === '\n') {
          currentHTML += '<br>';
        } else {
          currentHTML += text.charAt(i);
        }
        rpgBubbleTextEl.innerHTML = currentHTML;
        i++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 20);
  }

  document.addEventListener("click", handleOutsideClick);
}

function hideRpgBubble() {
  isBubbleActive = false;
  activeProjectElementForScroll = null;
  if (typewriterInterval) clearInterval(typewriterInterval);

  setCursorLabel(false);

  gsap.to(rpgBubble, {
    opacity: 0,
    y: 16,
    autoAlpha: 0,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {
      rpgBubbleTextEl.innerHTML = "";
      rpgBubbleTextEl.dataset.currentText = "";
    }
  });

  document.removeEventListener("click", handleOutsideClick);
}

function handleOutsideClick(e) {
  const isProjectElement = e.target.closest('.project-element') || e.target.closest('.large-photo');
  if (!isProjectElement && !e.target.closest('.rpg-bubble')) {
    hideRpgBubble();
  }
}

window.addEventListener("scroll", () => {
  if (!isBubbleActive || !activeProjectElementForScroll) return;

  if (!scrollRafId) {
    scrollRafId = requestAnimationFrame(() => {
      if (activeProjectElementForScroll) {
        const rect = activeProjectElementForScroll.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.bottom < 0 || rect.top > windowHeight) {
          hideRpgBubble();
        }
      }
      scrollRafId = null;
    });
  }
}, { passive: true });
