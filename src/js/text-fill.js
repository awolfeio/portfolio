/**
 * Text Fill Utility
 * Automatically scales text to perfectly fill either its container or viewport width
 * 
 * Usage:
 * - Add class `.fill-container` to make text fill its parent container
 * - Add class `.fill-viewport` to make text fill 92% of viewport (4% padding on sides)
 * 
 * The utility automatically handles:
 * - Responsive resizing on window/container changes
 * - Variable character counts and font styles
 * - Font weight, letter-spacing, and text-transform inheritance
 * - Waits for fonts to load before calculation
 */

class TextFill {
  constructor() {
    this.elements = new Map();
    this.resizeObserver = null;
    this.mutationObserver = null;
    this.isInitialized = false;
    
    // Configuration
    this.config = {
      viewportFillPercent: 92, // Fill 92% of viewport (4% margin on sides)
      minFontSize: 8,
      maxFontSize: 800,
      debounceDelay: 20, // Reduced delay for responsiveness
    };

    this.init();
  }

  init() {
    if (this.isInitialized) return;

    // Set up ResizeObserver for container changes
    if (window.ResizeObserver) {
      this._containerWidths = new WeakMap();
      this.resizeObserver = new ResizeObserver((entries) => {
        window.requestAnimationFrame(() => {
          entries.forEach((entry) => {
            const newWidth = entry.contentRect.width;
            const oldWidth = this._containerWidths.get(entry.target) || 0;
            
            // Strictly ignore pure-height resizes. During mobile scroll, viewport height 
            // alters rapidly due to the address bar. Inline font calculation shrinks the 
            // document and irreversibly clamps the Y-scroll. 
            if (Math.abs(newWidth - oldWidth) > 1) {
              this._containerWidths.set(entry.target, newWidth);
              // Find elements within resized containers
              this.recalculateElementsInContainer(entry.target);
            }
          });
        });
      });
    }

    // Set up MutationObserver to detect new elements with fill classes
    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.scanForElements(node);
          }
        });
      });
    });

    // Observe the document for new elements
    this.mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    this.lastWindowWidth = window.innerWidth;
    
    // Window resize handler for viewport-based elements
    this.resizeHandler = this.debounce(() => {
      const currentWidth = window.innerWidth;
      // Only run expensive text-recalculating reflows if the width physically changes.
      // Ignoring vertical height changes directly prevents the mobile scroll-jump bug.
      if (Math.abs(currentWidth - this.lastWindowWidth) > 5) {
        this.lastWindowWidth = currentWidth;
        this.recalculateAll();
      }
    }, this.config.debounceDelay);
    
    window.addEventListener('resize', this.resizeHandler);

    // Initial scan
    this.scanForElements(document.body);

    // Ensure we recalculate when fonts are ready
    if (document.fonts) {
      document.fonts.ready.then(() => {
        this.recalculateAll();
      });
    }

    this.isInitialized = true;
  }

  /**
   * Debounce utility
   */
  debounce(fn, delay = this.config.debounceDelay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  /**
   * Scan a container for elements with fill classes
   * @param {HTMLElement} container - Container to scan
   */
  scanForElements(container) {
    // Find all .fill-container elements
    const containerElements = container.querySelectorAll
      ? container.querySelectorAll('.fill-container')
      : [];
    
    // Find all .fill-viewport elements
    const viewportElements = container.querySelectorAll
      ? container.querySelectorAll('.fill-viewport')
      : [];

    // Check if the container itself has the class
    if (container.classList?.contains('fill-container')) {
      this.registerElement(container, 'container');
    }
    if (container.classList?.contains('fill-viewport')) {
      this.registerElement(container, 'viewport');
    }

    containerElements.forEach((el) => this.registerElement(el, 'container'));
    viewportElements.forEach((el) => this.registerElement(el, 'viewport'));
  }

  /**
   * Register an element for text filling
   * @param {HTMLElement} element - Element to register
   * @param {'container'|'viewport'} mode - Fill mode
   */
  registerElement(element, mode) {
    if (this.elements.has(element)) return;

    const config = {
      mode,
      minFontSize: this.config.minFontSize,
      maxFontSize: this.config.maxFontSize,
    };

    this.elements.set(element, config);

    // Observe the reliable ancestor for container mode.
    // We use getReliableParent() here for the same reason as getTargetWidth():
    // the direct parentElement may have collapsed width (e.g. h2 with only
    // position:absolute children) and would never fire a resize event.
    if (mode === 'container' && this.resizeObserver) {
      const observeTarget = this.getReliableParent(element);
      if (observeTarget) {
        this.resizeObserver.observe(observeTarget);
      }
    }

    // Calculate initial size
    this.calculateFontSize(element, config);
  }

  /**
   * Find the nearest ancestor with a reliable positive clientWidth.
   * Elements that are position:absolute with only out-of-flow children can
   * collapse to zero width, making them useless as measurement references.
   * @param {HTMLElement} element - Starting element
   * @returns {HTMLElement} Reliable ancestor
   */
  getReliableParent(element) {
    let candidate = element.parentElement;
    while (candidate && candidate !== document.body) {
      const style = window.getComputedStyle(candidate);
      const width = candidate.clientWidth;
      // A reliable container has a positive width AND is not itself
      // an absolutely/fixed positioned element whose width relies solely
      // on out-of-flow children (those collapse to 0).
      if (width > 0) {
        return candidate;
      }
      candidate = candidate.parentElement;
    }
    return document.body;
  }

  /**
   * Get the target content width for the text
   * @param {HTMLElement} element - The element
   * @param {'container'|'viewport'} mode - Fill mode
   * @returns {number} Target width in pixels
   */
  getTargetWidth(element, mode) {
    if (mode === 'viewport') {
      // Use 92% of viewport width (4% margin on each side)
      return (window.innerWidth * this.config.viewportFillPercent) / 100;
    } else {
      // Start with the direct parentElement. If it has zero clientWidth
      // (e.g. an <h2> whose only visible children are display:none spans,
      // or whose children are position:absolute, collapsing its intrinsic size),
      // walk up until we find an ancestor with a reliable positive width.
      // All sibling .fill-container spans should resolve to the SAME ancestor
      // so they all share one consistent target width.
      let parent = element.parentElement;
      while (parent && parent !== document.body) {
        if (parent.clientWidth > 0) break;
        parent = parent.parentElement;
      }
      if (!parent || parent === document.body) parent = document.body;

      const parentStyle = window.getComputedStyle(parent);
      const elementStyle = window.getComputedStyle(element);

      const parentWidth = parent.clientWidth;
      const parentPadding =
        parseFloat(parentStyle.paddingLeft) + parseFloat(parentStyle.paddingRight);

      // Available width inside the reference ancestor's content box
      let availableWidth = parentWidth - parentPadding;

      // Subtract element's own border and padding (text sits in content box)
      const elementBorder =
        parseFloat(elementStyle.borderLeftWidth) + parseFloat(elementStyle.borderRightWidth);
      const elementPadding =
        parseFloat(elementStyle.paddingLeft) + parseFloat(elementStyle.paddingRight);

      availableWidth -= elementBorder + elementPadding;

      return Math.max(0, availableWidth);
    }
  }

  /**
   * Create a hidden measurer element that copies the target's font styles
   * @param {HTMLElement} originalElement - Element to copy styles from
   * @returns {HTMLElement} Measurer element
   */
  createMeasurer(originalElement) {
    const measurer = document.createElement('span');
    measurer.textContent = (originalElement.textContent || originalElement.innerText || '').trim();

    // Copy all relevant font styles
    const computedStyle = window.getComputedStyle(originalElement);
    
    Object.assign(measurer.style, {
      position: 'absolute',
      visibility: 'hidden',
      whiteSpace: 'nowrap',
      top: '-9999px',
      left: '-9999px',
      fontFamily: computedStyle.fontFamily,
      fontWeight: computedStyle.fontWeight,
      fontStyle: computedStyle.fontStyle,
      letterSpacing: computedStyle.letterSpacing,
      textTransform: computedStyle.textTransform,
      fontVariant: computedStyle.fontVariant,
      fontStretch: computedStyle.fontStretch,
      fontFeatureSettings: computedStyle.fontFeatureSettings,
      wordSpacing: computedStyle.wordSpacing,
    });

    return measurer;
  }

  /**
   * Calculate and apply the optimal font size for an element
   * @param {HTMLElement} element - Target element
   * @param {Object} config - Element configuration
   */
  calculateFontSize(element, config) {
    const text = (element.textContent || element.innerText || '').trim();
    if (!text) return;

    const targetWidth = this.getTargetWidth(element, config.mode);
    if (targetWidth <= 0) return;

    // ── In-situ measurement ──────────────────────────────────────────────────
    // We measure the element itself rather than an off-screen clone.
    // Off-screen clones copy computed fontFamily as a string, which captures
    // whatever fallback font the browser was using at call-time for invisible
    // elements — leading to systematically wrong measurements.
    //
    // By measuring the element in-place we always use the real rendered font.

    // Stash the styles we need to temporarily override
    const prevFontSize   = element.style.fontSize;
    const prevWhiteSpace = element.style.whiteSpace;
    const prevOverflow   = element.style.overflow;
    const prevMaxWidth   = element.style.maxWidth;
    const prevWidth      = element.style.width;

    // Allow the element to expand freely so scrollWidth reflects text width
    element.style.whiteSpace = 'nowrap';
    element.style.overflow   = 'visible';
    element.style.maxWidth   = 'none';
    // Force shrink-wrapping so block elements or elements with 100% width 
    // report their exact text bounds in scrollWidth instead of container bounds.
    element.style.width      = 'max-content';

    // Reference pass
    const referenceSize = 100;
    element.style.fontSize = `${referenceSize}px`;

    const measuredWidth = element.scrollWidth;

    if (measuredWidth === 0) {
      // Restore and bail
      element.style.fontSize   = prevFontSize;
      element.style.whiteSpace = prevWhiteSpace;
      element.style.overflow   = prevOverflow;
      element.style.maxWidth   = prevMaxWidth;
      element.style.width      = prevWidth;
      return;
    }

    // First estimate
    const ratio = targetWidth / measuredWidth;
    let idealSize = Math.max(
      config.minFontSize,
      Math.min(config.maxFontSize, referenceSize * ratio)
    );

    // Correction pass — kerning / hinting can shift things slightly
    element.style.fontSize = `${idealSize}px`;
    const finalWidth = element.scrollWidth;

    if (Math.abs(finalWidth - targetWidth) > 0.5) {
      const correctionRatio = targetWidth / finalWidth;
      idealSize = Math.max(
        config.minFontSize,
        Math.min(config.maxFontSize, idealSize * correctionRatio)
      );
    }

    // ── Restore original style properties ───────────────────────────────────
    element.style.overflow   = prevOverflow;
    element.style.maxWidth   = prevMaxWidth;
    element.style.width      = prevWidth;
    // (whiteSpace and fontSize intentionally set below)

    // ── Apply result ─────────────────────────────────────────────────────────
    if (config.mode === 'viewport') {
      const vwSize = (idealSize / window.innerWidth) * 100;
      element.style.fontSize = `${vwSize}vw`;
    } else {
      element.style.fontSize = `${idealSize}px`;
    }

    // Prevent text from wrapping (always safe)
    element.style.whiteSpace = 'nowrap';

    // In viewport mode, also center-align the text
    if (config.mode === 'viewport') {
      element.style.display    = 'block';
      element.style.width      = '100%';
      element.style.textAlign  = 'center';
    }
    // In container mode we intentionally do NOT force display/width — the
    // element's CSS layout should be respected.
  }

  /**
   * Recalculate all elements within a specific container
   * @param {HTMLElement} container - Container element
   */
  recalculateElementsInContainer(container) {
    this.elements.forEach((config, element) => {
      // Check if element is inside container or IS the container
      if (config.mode === 'container' && (container === element || container.contains(element))) {
        this.calculateFontSize(element, config);
      }
    });
  }

  /**
   * Recalculate all registered elements
   */
  recalculateAll() {
    this.elements.forEach((config, element) => {
      if (document.contains(element)) {
        this.calculateFontSize(element, config);
      } else {
        // Clean up removed elements
        this.elements.delete(element);
      }
    });
  }

  /**
   * Manually register an element for filling
   * @param {string|HTMLElement} element - Selector or element
   * @param {'container'|'viewport'} mode - Fill mode
   */
  fill(element, mode = 'container') {
    const el = typeof element === 'string' 
      ? document.querySelector(element) 
      : element;
    
    if (!el) {
      console.warn('TextFill: Element not found');
      return;
    }

    // Add appropriate class
    el.classList.add(mode === 'viewport' ? 'fill-viewport' : 'fill-container');
    
    this.registerElement(el, mode);
  }

  /**
   * Remove an element from text filling
   * @param {string|HTMLElement} element - Selector or element
   */
  remove(element) {
    const el = typeof element === 'string' 
      ? document.querySelector(element) 
      : element;
    
    if (!el || !this.elements.has(el)) return;

    const config = this.elements.get(el);
    
    // Clean up styles set by text-fill
    el.style.fontSize = '';
    el.style.whiteSpace = '';
    el.style.display = '';
    el.style.width = '';
    el.style.textAlign = '';
    
    // Remove classes
    el.classList.remove('fill-container', 'fill-viewport');
    
    this.elements.delete(el);
  }

  /**
   * Re-scan the document for elements with fill classes
   * Useful after dynamic content changes
   */
  refresh() {
    this.lastWindowWidth = window.innerWidth;
    this.scanForElements(document.body);
    this.recalculateAll();
  }

  /**
   * Update the viewport fill percentage
   * @param {number} percent - Percentage of viewport to fill (0-100)
   */
  setViewportFillPercent(percent) {
    this.config.viewportFillPercent = Math.max(0, Math.min(100, percent));
    this.recalculateAll();
  }

  /**
   * Destroy the instance and clean up
   */
  destroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
    
    window.removeEventListener('resize', this.resizeHandler);

    this.elements.forEach((config, element) => {
      this.remove(element);
    });

    this.elements.clear();
    this.isInitialized = false;
  }
}

// Create singleton instance
const textFill = new TextFill();

/**
 * Fill text to its container
 * @param {string|HTMLElement} element - Selector or element
 */
export function fillContainer(element) {
  return textFill.fill(element, 'container');
}

/**
 * Fill text to viewport (92% width)
 * @param {string|HTMLElement} element - Selector or element
 */
export function fillViewport(element) {
  return textFill.fill(element, 'viewport');
}

/**
 * Remove text filling from an element
 * @param {string|HTMLElement} element - Selector or element
 */
export function removeFill(element) {
  return textFill.remove(element);
}

/**
 * Refresh all fill calculations
 */
export function refreshFill() {
  return textFill.refresh();
}

/**
 * Set the viewport fill percentage
 * @param {number} percent - Percentage (default: 92)
 */
export function setViewportFillPercent(percent) {
  return textFill.setViewportFillPercent(percent);
}

// Export the class for advanced usage
export { TextFill };

// Export singleton instance
export { textFill };

// Default export
export default {
  fillContainer,
  fillViewport,
  removeFill,
  refreshFill,
  setViewportFillPercent,
  TextFill,
  textFill,
};
