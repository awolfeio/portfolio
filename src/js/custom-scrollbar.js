export function initCustomScrollbar() {
  // Hide on touch/mobile — native OS scrollbar is already invisible there
  if (window.matchMedia('(pointer: coarse)').matches) return;

  // Guard against double-init on Barba re-entry
  if (document.querySelector('.custom-scrollbar')) return;

  const scrollbar = document.createElement('div');
  scrollbar.className = 'custom-scrollbar';

  const thumb = document.createElement('div');
  thumb.className = 'custom-scrollbar-thumb';

  scrollbar.appendChild(thumb);
  document.body.appendChild(scrollbar);

  let isScrolling = false;
  let isHovering = false;
  let isDragging = false;
  let scrollTimeout = null;
  let tickRafId = null;
  let startY = 0;
  let startScroll = 0;

  // Cached layout values — updated only by ResizeObserver and window resize,
  // never read from the DOM in the hot path.
  let cachedDocumentHeight = document.documentElement.scrollHeight;
  let cachedWindowHeight = window.innerHeight;

  // ── Helpers ──────────────────────────────────────────────────────────────

  const getScrollPos = () => (window.lenis ? window.lenis.scroll : window.scrollY);

  const getThumbHeight = () =>
    Math.min(Math.max((cachedWindowHeight / cachedDocumentHeight) * cachedWindowHeight, 40), 256);

  // ── Thumb position ───────────────────────────────────────────────────────

  const updateThumb = () => {
    const scrollable = cachedDocumentHeight > cachedWindowHeight;
    scrollbar.classList.toggle('custom-scrollbar--scrollable', scrollable);
    if (!scrollable) return;

    const thumbHeight = getThumbHeight();
    thumb.style.height = `${thumbHeight}px`;

    const maxScroll = cachedDocumentHeight - cachedWindowHeight;
    const maxThumbTranslate = cachedWindowHeight - thumbHeight;
    const pct = maxScroll > 0 ? Math.min(getScrollPos() / maxScroll, 1) : 0;
    thumb.style.transform = `translateY(${pct * maxThumbTranslate}px)`;
  };

  // ── Visibility ───────────────────────────────────────────────────────────

  const updateVisibility = () => {
    if (isScrolling || isHovering || isDragging) {
      scrollbar.classList.add('custom-scrollbar--visible');
    } else {
      scrollbar.classList.remove('custom-scrollbar--visible');
    }
  };

  // ── Scroll tracking ───────────────────────────────────────────────────────
  // Uses wheel + native scroll events rather than lenis.on('scroll'), because:
  // 1. wheel events always fire regardless of Lenis intercepting the native scroll
  // 2. Lenis instances are recreated on Barba transitions, invalidating any .on() registration
  // Thumb position is ticked via rAF while scrolling so it tracks Lenis's eased position.

  const stopScrollTick = () => {
    if (tickRafId) {
      cancelAnimationFrame(tickRafId);
      tickRafId = null;
    }
  };

  const startScrollTick = () => {
    stopScrollTick();
    const tick = () => {
      updateThumb();
      if (isScrolling || isDragging) {
        tickRafId = requestAnimationFrame(tick);
      } else {
        tickRafId = null;
      }
    };
    tickRafId = requestAnimationFrame(tick);
  };

  const onScrollActivity = () => {
    isScrolling = true;
    updateVisibility();
    startScrollTick();

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
      updateVisibility();
      stopScrollTick();
      updateThumb(); // final position sync
    }, 800);
  };

  // wheel covers mouse wheel / trackpad (always fires even when Lenis is active)
  window.addEventListener('wheel', onScrollActivity, { passive: true });

  // native scroll covers keyboard navigation (Page Up/Down, arrow keys, Home/End)
  window.addEventListener('scroll', onScrollActivity, { passive: true });

  // ── Hover: right-edge zone ───────────────────────────────────────────────

  const HOVER_ZONE = 48; // px from right edge

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const maxScroll = cachedDocumentHeight - cachedWindowHeight;
      const maxThumbTranslate = cachedWindowHeight - getThumbHeight();
      const deltaY = e.clientY - startY;
      const targetScroll = Math.max(0, Math.min(startScroll + (deltaY / maxThumbTranslate) * maxScroll, maxScroll));

      if (window.lenis) {
        window.lenis.scrollTo(targetScroll, { immediate: true });
      } else {
        window.scrollTo({ top: targetScroll });
      }
      return;
    }

    const nearEdge = window.innerWidth - e.clientX <= HOVER_ZONE;
    if (nearEdge !== isHovering) {
      isHovering = nearEdge;
      updateVisibility();
    }
  }, { passive: true });

  // ── Thumb drag ───────────────────────────────────────────────────────────

  thumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    startScroll = getScrollPos();
    document.body.style.userSelect = 'none';
    scrollbar.classList.add('custom-scrollbar--visible');
    startScrollTick();
    e.preventDefault();
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    document.body.style.userSelect = '';

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
      updateVisibility();
      stopScrollTick();
    }, 800);
  });

  // ── Dimension cache ──────────────────────────────────────────────────────

  const refreshDimensions = () => {
    cachedWindowHeight = window.innerHeight;
    cachedDocumentHeight = document.documentElement.scrollHeight;
    updateThumb();
  };

  window.addEventListener('resize', refreshDimensions, { passive: true });
  new ResizeObserver(refreshDimensions).observe(document.body);

  // Initial paint — one tick for the page to settle
  setTimeout(updateThumb, 100);
}
