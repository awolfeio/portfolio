export function initCustomScrollbar() {
  // Hide on touch/mobile devices — the native OS scrollbar is already hidden on
  // mobile browsers and a custom one adds no value while wasting event budget.
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const scrollbar = document.createElement('div');
  scrollbar.className = 'custom-scrollbar';

  const thumb = document.createElement('div');
  thumb.className = 'custom-scrollbar-thumb';

  scrollbar.appendChild(thumb);
  document.body.appendChild(scrollbar);

  let isScrolling = false;
  let scrollTimeout;
  let isHovering = false;
  let isDragging = false;
  let startY = 0;
  let startScroll = 0;

  // Cached layout values — updated only when content size changes (ResizeObserver)
  // or the window resizes. Reading scrollHeight on every scroll frame forces a
  // layout flush; caching it here removes that cost from the hot path.
  let cachedDocumentHeight = document.documentElement.scrollHeight;
  let cachedWindowHeight = window.innerHeight;

  const updateThumb = () => {
    if (cachedDocumentHeight <= cachedWindowHeight) {
      scrollbar.style.display = 'none';
      return;
    }
    scrollbar.style.display = 'block';

    const thumbHeight = Math.min(
      Math.max((cachedWindowHeight / cachedDocumentHeight) * cachedWindowHeight, 40),
      256,
    );
    thumb.style.height = `${thumbHeight}px`;

    const maxScroll = cachedDocumentHeight - cachedWindowHeight;
    const currentScroll = window.lenis ? window.lenis.scroll : window.scrollY;

    const scrollPercentage = currentScroll / maxScroll;
    const maxThumbTranslate = cachedWindowHeight - thumbHeight;
    thumb.style.transform = `translateY(${scrollPercentage * maxThumbTranslate}px)`;
  };

  const updateVisibility = () => {
    if (isScrolling || isHovering || isDragging) {
      scrollbar.classList.add('visible');
    } else {
      scrollbar.classList.remove('visible');
    }
  };

  // Drag logic
  thumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    startScroll = window.lenis ? window.lenis.scroll : window.scrollY;
    document.body.style.userSelect = 'none';
    updateVisibility();
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const maxScroll = cachedDocumentHeight - cachedWindowHeight;
    const thumbHeight = Math.min(
      Math.max((cachedWindowHeight / cachedDocumentHeight) * cachedWindowHeight, 40),
      256,
    );
    const maxThumbTranslate = cachedWindowHeight - thumbHeight;

    const deltaY = e.clientY - startY;
    const scrollFraction = deltaY / maxThumbTranslate;
    let targetScroll = Math.max(0, Math.min(startScroll + scrollFraction * maxScroll, maxScroll));

    if (window.lenis) {
      window.lenis.scrollTo(targetScroll, { immediate: true });
    } else {
      window.scrollTo({ top: targetScroll });
    }
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.userSelect = '';
      updateVisibility();

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        updateVisibility();
      }, 800);
    }
  });

  const handleScroll = () => {
    updateThumb();
    isScrolling = true;
    updateVisibility();

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
      updateVisibility();
    }, 800);
  };

  // Attach to exactly ONE scroll source. If Lenis is present, use its scroll
  // event (which fires on every Lenis tick with the virtual scroll position).
  // If Lenis arrives after init, swap in the Lenis listener and drop the native
  // one so we never fire handleScroll twice per frame.
  let usingNativeScroll = false;

  const attachLenis = () => {
    if (usingNativeScroll) {
      window.removeEventListener('scroll', handleScroll);
      usingNativeScroll = false;
    }
    window.lenis.on('scroll', handleScroll);
  };

  if (window.lenis) {
    attachLenis();
  } else {
    // Fall back to native until Lenis is ready
    window.addEventListener('scroll', handleScroll);
    usingNativeScroll = true;

    const lenisCheck = setInterval(() => {
      if (window.lenis) {
        clearInterval(lenisCheck);
        attachLenis();
      }
    }, 100);
  }

  // Mouse near the right edge reveals the scrollbar
  window.addEventListener('mousemove', (e) => {
    isHovering = window.innerWidth - e.clientX <= 100;
    updateVisibility();
  });

  // Re-cache layout dimensions on resize (window or content)
  const refreshDimensions = () => {
    cachedWindowHeight = window.innerHeight;
    cachedDocumentHeight = document.documentElement.scrollHeight;
    updateThumb();
  };

  window.addEventListener('resize', refreshDimensions);

  // ResizeObserver watches content height changes (dynamic content, Barba page
  // transitions, etc.). documentHeight is re-read here and nowhere else in the
  // hot scroll path.
  const resizeObserver = new ResizeObserver(refreshDimensions);
  resizeObserver.observe(document.body);

  // Initial paint — give the page one tick to settle before measuring
  setTimeout(updateThumb, 100);
}
