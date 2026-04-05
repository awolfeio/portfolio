export function initCustomScrollbar() {
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

  const updateThumb = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (documentHeight <= windowHeight) {
      scrollbar.style.display = 'none';
      return;
    } else {
      scrollbar.style.display = 'block';
    }

    const thumbHeight = Math.min(Math.max((windowHeight / documentHeight) * windowHeight, 40), 256); // min 40px, max 256px
    thumb.style.height = `${thumbHeight}px`;

    const maxScroll = documentHeight - windowHeight;
    const currentScroll = window.lenis ? window.lenis.scroll : window.scrollY;
    
    const scrollPercentage = currentScroll / maxScroll;
    const maxThumbTranslate = windowHeight - thumbHeight;
    const thumbTranslate = scrollPercentage * maxThumbTranslate;
    
    thumb.style.transform = `translateY(${thumbTranslate}px)`;
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
    
    // Prevent default to avoid selection highlighting while dragging
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight;
    const thumbHeight = Math.min(Math.max((windowHeight / documentHeight) * windowHeight, 40), 256);
    const maxThumbTranslate = windowHeight - thumbHeight;

    const deltaY = e.clientY - startY;
    const scrollFraction = deltaY / maxThumbTranslate;
    const scrollDelta = scrollFraction * maxScroll;
    
    let targetScroll = startScroll + scrollDelta;
    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
    
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

  // Connect to lenis if available, otherwise fallback to window scroll
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

  // Check periodically for lenis initialized via window and attach listener
  let lenisAttached = false;
  const lenisCheck = setInterval(() => {
    if (window.lenis && !lenisAttached) {
      window.lenis.on('scroll', handleScroll);
      lenisAttached = true;
      clearInterval(lenisCheck);
    }
  }, 100);

  // Fallback native scroll listener
  window.addEventListener('scroll', handleScroll);

  // Mouse move to detect right edge
  window.addEventListener('mousemove', (e) => {
    const windowWidth = window.innerWidth;
    if (windowWidth - e.clientX <= 100) {
      isHovering = true;
    } else {
      isHovering = false;
    }
    updateVisibility();
  });
  
  // Dynamic resize bounds
  window.addEventListener('resize', updateThumb);
  
  // Watch for document height changes
  const observer = new ResizeObserver(() => {
    updateThumb();
  });
  observer.observe(document.body);
  
  // Initial calculation
  setTimeout(updateThumb, 100);
  setTimeout(updateThumb, 1000);
}
