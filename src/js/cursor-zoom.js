import { gsap } from "gsap";
import CircleType from "circletype";
import { cursorEase, currentMousePos, cursorEl } from "./cursor-element";

// Zoom CTA eased movement (mirrors base cursor RAF pattern)
let zoomCtaPendingMove = null;
let zoomCtaRafId = null;

// Magnifying glass state
let magnifyGlass = null;
let zoomCta = null;          // The "Zoom" CTA label that follows the cursor
let currentLargePhoto = null;
let magnifyRafId = null;
let isMagnifyActive = false; // true when magnify glass is active
const DEFAULT_ZOOM = 1.4;

// Animated zoom level for smooth transitions
let currentZoomLevel = { value: DEFAULT_ZOOM };
let cachedLargeMedia = []; // Cache for scroll checking

export function initZoomLogic() {
  createMagnifyingGlass();
  createZoomCta();
}

function createMagnifyingGlass() {
  const magnifyHtml = `
    <div class="magnify-glass">
      <canvas class="magnify-canvas"></canvas>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", magnifyHtml);
  
  magnifyGlass = document.querySelector(".magnify-glass");
  const canvas = magnifyGlass.querySelector(".magnify-canvas");
  
  const size = 280; 
  canvas.width = size * 2; 
  canvas.height = size * 2;
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;
  
  gsap.set(magnifyGlass, { opacity: 0, xPercent: -50, yPercent: -50 });
}

function createZoomCta() {
  const ctaHtml = `
    <div class="zoom-cta">
      <div class="zoom-cta__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="7"/>
          <line x1="21" y1="21" x2="15.65" y2="15.65"/>
          <line x1="11" y1="8" x2="11" y2="14"/>
          <line x1="8" y1="11" x2="14" y2="11"/>
        </svg>
      </div>
      <div class="zoom-cta__ring">
        <span class="zoom-cta__text"></span>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", ctaHtml);
  zoomCta = document.querySelector(".zoom-cta");

  const textEl = zoomCta.querySelector(".zoom-cta__text");
  if (textEl) {
    const RADIUS = 36;
    const unit = "Zoom\u00A0\u2022\u00A0";

    textEl.textContent = unit;
    const unitWidth = textEl.getBoundingClientRect().width;
    const circumference = 2 * Math.PI * RADIUS;
    const count = Math.round(circumference / unitWidth);

    textEl.textContent = unit.repeat(count);
    new CircleType(textEl).radius(RADIUS + 10.5);
  }

  gsap.set(zoomCta, { opacity: 0, xPercent: -50, yPercent: -50, x: -200, y: -200, scale: 0.88 });
}

export function setupMagnifyingGlass() {
  if (!magnifyGlass) {
    return;
  }
  
  const largeMedia = document.querySelectorAll(".large-photo, .large-video");
  cachedLargeMedia = Array.from(largeMedia); 
  
  largeMedia.forEach((container, index) => {
    const img = container.querySelector("img");
    const video = container.querySelector("video");
    const media = img || video;
    
    if (!media) return;
    
    if (media.tagName === 'IMG') {
      if (!media.complete) {
        media.addEventListener("load", () => setupPhotoHover(container, media));
      } else {
        setupPhotoHover(container, media);
      }
    } else if (media.tagName === 'VIDEO') {
      if (media.readyState < 2) {
        media.addEventListener("loadeddata", () => setupPhotoHover(container, media));
      } else {
        setupPhotoHover(container, media);
      }
    }
  });
}

function setupPhotoHover(photo, media) {
  photo.addEventListener("mouseenter", (e) => {
    if (!photo.classList.contains('active')) return;

    currentLargePhoto = { 
      element: photo, 
      media: media, 
      lastMouseX: e.clientX, 
      lastMouseY: e.clientY 
    };
    isMagnifyActive = false;
    
    currentZoomLevel.value = DEFAULT_ZOOM;
    
    gsap.set(zoomCta, { x: e.clientX, y: e.clientY });
    gsap.to(zoomCta, { opacity: 1, duration: 0.22, ease: "power2.out" });
    
    cursorEl?.classList.add("magnify-active");
  });
  
  photo.addEventListener("mouseleave", () => {
    currentLargePhoto = null;
    isMagnifyActive = false;
    document.body.classList.remove('magnify-mode');
    
    magnifyGlass.classList.remove('zoomed');
    
    gsap.to(zoomCta, { opacity: 0, duration: 0.12, ease: "power2.in" });
    gsap.to(magnifyGlass, { opacity: 0, duration: 0.05, ease: "power2.in" });
    
    cursorEl?.classList.remove("magnify-active");
    
    if (magnifyRafId) {
      cancelAnimationFrame(magnifyRafId);
      magnifyRafId = null;
    }
  });
  
  photo.addEventListener("click", (e) => {
    if (!currentLargePhoto) return;
    
    isMagnifyActive = !isMagnifyActive;
    
    if (isMagnifyActive) {
      document.body.classList.add('magnify-mode');
      
      gsap.to(zoomCta, { opacity: 0, duration: 0.12, ease: "power2.in" });
      gsap.set(magnifyGlass, { left: e.clientX, top: e.clientY });
      gsap.to(magnifyGlass, { opacity: 1, duration: 0.22, ease: "power2.out" });
      
      currentZoomLevel.value = DEFAULT_ZOOM;
      updateMagnifyingGlass(e.clientX, e.clientY);
      
    } else {
      document.body.classList.remove('magnify-mode');
      
      gsap.to(magnifyGlass, { opacity: 0, duration: 0.12, ease: "power2.in" });
      gsap.set(zoomCta, { x: e.clientX, y: e.clientY });
      gsap.to(zoomCta, { opacity: 1, duration: 0.22, ease: "power2.out" });
    }
  });
  
  photo.addEventListener("mousemove", (e) => {
    if (!currentLargePhoto) return;
    
    currentLargePhoto.lastMouseX = e.clientX;
    currentLargePhoto.lastMouseY = e.clientY;
    
    if (isMagnifyActive) {
      if (!magnifyRafId) {
        magnifyRafId = requestAnimationFrame(() => {
          updateMagnifyingGlass(e.clientX, e.clientY);
          magnifyRafId = null;
        });
      }
    } else {
      zoomCtaPendingMove = { x: e.clientX, y: e.clientY };
      if (!zoomCtaRafId) {
        zoomCtaRafId = requestAnimationFrame(processZoomCtaMove);
      }
    }
  }, { passive: true });
}

function processZoomCtaMove() {
  zoomCtaRafId = null;
  if (!zoomCtaPendingMove || !zoomCta) return;
  gsap.to(zoomCta, {
    duration: 1.4,
    ease: cursorEase,
    x: zoomCtaPendingMove.x,
    y: zoomCtaPendingMove.y,
    overwrite: "auto"
  });
  zoomCtaPendingMove = null;
}

let scrollUpdateRafId = null;
window.addEventListener("scroll", () => {
  if (!scrollUpdateRafId) {
    scrollUpdateRafId = requestAnimationFrame(() => {
      const mouseX = currentMousePos.x;
      const mouseY = currentMousePos.y;
      
      if (currentLargePhoto) {
        currentLargePhoto.lastMouseX = mouseX;
        currentLargePhoto.lastMouseY = mouseY;
        
        const rect = currentLargePhoto.element.getBoundingClientRect();
        
        const isOutside = (
          mouseX < rect.left || 
          mouseX > rect.right || 
          mouseY < rect.top || 
          mouseY > rect.bottom
        );
        
        if (isOutside) {
          currentLargePhoto.element.dispatchEvent(new MouseEvent('mouseleave'));
        } else {
          updateMagnifyingGlass(mouseX, mouseY);
          scrollUpdateRafId = null;
          return;
        }
      }
      
      if (!currentLargePhoto && cachedLargeMedia.length > 0) {
        if (mouseX < 0 || mouseY < 0) {
            scrollUpdateRafId = null;
            return;
        }

        for (const container of cachedLargeMedia) {
          if (!container.isConnected) continue;
          if (!container.classList.contains('active')) continue;

          const rect = container.getBoundingClientRect();
          
          if (mouseX >= rect.left && mouseX <= rect.right &&
              mouseY >= rect.top && mouseY <= rect.bottom) {
              
              container.dispatchEvent(new MouseEvent('mouseenter', {
                 clientX: mouseX,
                 clientY: mouseY,
                 bubbles: true
              }));
              break; 
          }
        }
      }
      
      scrollUpdateRafId = null;
    });
  }
}, { passive: true });

function updateMagnifyingGlass(mouseX, mouseY) {
  if (!currentLargePhoto || !magnifyGlass) return;
  
  const { media } = currentLargePhoto;
  const canvas = magnifyGlass.querySelector(".magnify-canvas");
  const ctx = canvas.getContext("2d");
  
  gsap.set(magnifyGlass, { left: mouseX, top: mouseY });
  
  const mediaRect = media.getBoundingClientRect();
  const canvasSize = canvas.width; 
  const displaySize = Math.round(canvas.getBoundingClientRect().width) || 280; 
  
  const relativeX = mouseX - mediaRect.left;
  const relativeY = mouseY - mediaRect.top;
  
  let naturalWidth, naturalHeight;
  
  if (media.tagName === 'VIDEO') {
    naturalWidth = media.videoWidth;
    naturalHeight = media.videoHeight;
  } else {
    naturalWidth = media.naturalWidth;
    naturalHeight = media.naturalHeight;
  }
  
  const scaleX = naturalWidth / mediaRect.width;
  const scaleY = naturalHeight / mediaRect.height;
  
  const zoom = currentZoomLevel.value;
  const sourceSize = displaySize / zoom;
  const sourceX = (relativeX * scaleX) - (sourceSize * scaleX / 2);
  const sourceY = (relativeY * scaleY) - (sourceSize * scaleY / 2);
  
  ctx.clearRect(0, 0, canvasSize, canvasSize);
  
  ctx.save();
  ctx.beginPath();
  
  const borderRadius = 24;
  const x = 0;
  const y = 0;
  const width = canvasSize;
  const height = canvasSize;
  
  ctx.moveTo(x + borderRadius, y);
  ctx.lineTo(x + width - borderRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + borderRadius);
  ctx.lineTo(x + width, y + height - borderRadius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - borderRadius, y + height);
  ctx.lineTo(x + borderRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - borderRadius);
  ctx.lineTo(x, y + borderRadius);
  ctx.quadraticCurveTo(x, y, x + borderRadius, y);
  ctx.closePath();
  ctx.clip();
  
  try {
    ctx.drawImage(media, sourceX, sourceY, sourceSize * scaleX, sourceSize * scaleY, 0, 0, canvasSize, canvasSize);
  } catch (e) {
    console.warn("Magnify draw error:", e);
  }
  
  ctx.restore();
}
