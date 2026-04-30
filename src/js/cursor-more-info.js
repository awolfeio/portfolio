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
        <span class="zoom-cta__text"></span>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", ctaHtml);
  moreInfoCta = document.querySelector(".more-info-cta");

  const textEl = moreInfoCta.querySelector(".zoom-cta__text");
  if (textEl) {
    const RADIUS = 36;
    const unit = "More Info\u00A0\u2022\u00A0"; // "More Info • "

    textEl.textContent = unit;
    const unitWidth = textEl.getBoundingClientRect().width;
    const circumference = 2 * Math.PI * RADIUS;
    const count = Math.round(circumference / unitWidth);

    textEl.textContent = unit.repeat(count);
    new CircleType(textEl).radius(RADIUS + 5);
  }

  gsap.set(moreInfoCta, { opacity: 0, xPercent: -50, yPercent: -50, x: -200, y: -200, scale: 0.88 });
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

    // Hide regular cursor and set to pointer
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
    gsap.to(moreInfoCta, { opacity: 0, duration: 0.12, ease: "power2.in" });
  });
  
  hitArea.addEventListener("click", (e) => {
    if (!currentProjectElement) return;
    
    const messageEl = currentProjectElement.querySelector(".more-info-message");
    if (!messageEl) return;
    
    // Extract text from <p> tags if present, to preserve paragraph structure
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
  
  // Clear any existing typing animation
  if (typewriterInterval) clearInterval(typewriterInterval);
  rpgBubbleTextEl.innerHTML = "";
  
  // Show bubble
  gsap.to(rpgBubble, {
    opacity: 1,
    y: 0,
    autoAlpha: 1,
    duration: 0.4,
    ease: "power3.out"
  });
  
  if (isSeen) {
    // Render text instantly if it has been opened before
    rpgBubbleTextEl.innerHTML = text.replace(/\n/g, '<br>');
  } else {
    // Typewriter effect for first view
    let i = 0;
    let currentHTML = "";
    typewriterInterval = setInterval(() => {
      if (i < text.length) {
        // Handle simple formatting if needed (like line breaks)
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
    }, 20); // Slightly faster (20ms) for better feel
  }
  
  // Automatically hide if clicking anywhere else
  document.addEventListener("click", handleOutsideClick);
}

function hideRpgBubble() {
  isBubbleActive = false;
  activeProjectElementForScroll = null;
  if (typewriterInterval) clearInterval(typewriterInterval);
  
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
  // If clicking on a project element that has a message, the hitArea click handler will toggle it.
  // We just want to make sure we hide the bubble if clicking the background or closing it.
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
        
        // If the element has scrolled completely out of view (either above or below)
        if (rect.bottom < 0 || rect.top > windowHeight) {
          hideRpgBubble();
        }
      }
      scrollRafId = null;
    });
  }
}, { passive: true });
