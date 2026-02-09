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
      this.resizeObserver = new ResizeObserver((entries) => {
        window.requestAnimationFrame(() => {
          entries.forEach((entry) => {
            // Find elements within resized containers
            this.recalculateElementsInContainer(entry.target);
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

    // Window resize handler for viewport-based elements
    this.resizeHandler = this.debounce(() => {
      this.recalculateAll();
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

    // Observe parent container for container mode
    if (mode === 'container' && this.resizeObserver && element.parentElement) {
      this.resizeObserver.observe(element.parentElement);
    }

    // Calculate initial size
    this.calculateFontSize(element, config);
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
      // Use parent container width, accounting for parent padding and element borders/padding
      const parent = element.parentElement;
      if (!parent) return window.innerWidth;

      // Get computed styles
      const parentStyle = window.getComputedStyle(parent);
      const elementStyle = window.getComputedStyle(element);
      
      const parentWidth = parent.clientWidth;
      const parentPadding = parseFloat(parentStyle.paddingLeft) + parseFloat(parentStyle.paddingRight);
      
      // Calculate available width in parent content box
      let availableWidth = parentWidth - parentPadding;
      
      // Subtract element margins
      const elementMargin = parseFloat(elementStyle.marginLeft) + parseFloat(elementStyle.marginRight);
      availableWidth -= elementMargin;
      
      // Subtract element border and padding (since text lives inside content box)
      const elementBorder = parseFloat(elementStyle.borderLeftWidth) + parseFloat(elementStyle.borderRightWidth);
      const elementPadding = parseFloat(elementStyle.paddingLeft) + parseFloat(elementStyle.paddingRight);
      
      availableWidth -= (elementBorder + elementPadding);
      
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

    // Create measurer
    const measurer = this.createMeasurer(element);
    document.body.appendChild(measurer);

    // Use a reference font size to calculate ratio
    const referenceSize = 100;
    measurer.style.fontSize = `${referenceSize}px`;
    
    const measuredWidth = measurer.getBoundingClientRect().width;
    
    if (measuredWidth === 0) {
      document.body.removeChild(measurer);
      return;
    }

    // Calculate ideal font size based on ratio
    const ratio = targetWidth / measuredWidth;
    let idealSize = referenceSize * ratio;

    // Clamp size
    idealSize = Math.max(config.minFontSize, Math.min(config.maxFontSize, idealSize));

    // Refinement: Double check fit and adjust if needed
    // Sometimes sub-pixel rendering or kerning changes non-linearly
    measurer.style.fontSize = `${idealSize}px`;
    const finalWidth = measurer.getBoundingClientRect().width;
    
    // If we overshot/undershot by > 1px, adjust scaling
    if (Math.abs(finalWidth - targetWidth) > 1) {
       const correctionRatio = targetWidth / finalWidth;
       idealSize *= correctionRatio;
    }

    // Clean up
    document.body.removeChild(measurer);

    // Apply calculated font size
    if (config.mode === 'viewport') {
      // Convert to vw for viewport mode
      const vwSize = (idealSize / window.innerWidth) * 100;
      element.style.fontSize = `${vwSize}vw`;
    } else {
      // For container mode, use px
      element.style.fontSize = `${idealSize}px`;
    }

    // Ensure the element doesn't wrap and obeys layout
    element.style.whiteSpace = 'nowrap';
    element.style.display = 'block';
    element.style.width = '100%';
    
    // Align text centered if viewport mode
    if (config.mode === 'viewport') {
      element.style.textAlign = 'center';
    }
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
    
    // Clean up styles
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
