/**
 * Text Viewport Fitter
 * A utility to automatically size text to fill the viewport width with customizable margins
 * Handles resize events and recalculates sizing automatically
 */

class TextViewportFitter {
  constructor() {
    this.elements = new Map();
    this.resizeObserver = null;
    this.isInitialized = false;
    this.init();
  }

  init() {
    if (this.isInitialized) return;

    // Set up resize observer for better performance than window resize
    if (window.ResizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        this.recalculateAll();
      });
      this.resizeObserver.observe(document.documentElement);
    } else {
      // Fallback to window resize with throttling
      let resizeTimeout;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          this.recalculateAll();
        }, 100);
      });
    }

    this.isInitialized = true;
  }

  /**
   * Apply viewport fitting to a text element
   * @param {string|HTMLElement} element - CSS selector or DOM element
   * @param {Object} options - Configuration options
   * @param {number} options.marginLeft - Left margin in pixels (default: 0)
   * @param {number} options.marginRight - Right margin in pixels (default: 0)
   * @param {number} options.minFontSize - Minimum font size in pixels (default: 12)
   * @param {number} options.maxFontSize - Maximum font size in pixels (default: 500)
   * @param {string} options.className - CSS class to apply (default: 'viewport-fitted-text')
   * @param {boolean} options.useVW - Use VW units instead of pixels (default: true)
   */
  fitText(element, options = {}) {
    const el = typeof element === "string" ? document.querySelector(element) : element;

    if (!el) {
      console.warn("TextViewportFitter: Element not found");
      return;
    }

    const config = {
      marginLeft: options.marginLeft || 0,
      marginRight: options.marginRight || 0,
      minFontSize: options.minFontSize || 12,
      maxFontSize: options.maxFontSize || 500,
      className: options.className || "viewport-fitted-text",
      useVW: options.useVW !== false,
      ...options,
    };

    // Apply the CSS class
    el.classList.add(config.className);

    // Store element and config for resize handling
    this.elements.set(el, config);

    // Initial calculation
    this.calculateFontSize(el, config);
  }

  /**
   * Calculate and apply the optimal font size for an element
   * @param {HTMLElement} element - The text element
   * @param {Object} config - Configuration object
   */
  calculateFontSize(element, config) {
    const text = element.textContent || element.innerText;
    if (!text.trim()) return;

    // Get viewport width
    const viewportWidth = window.innerWidth;
    const availableWidth = viewportWidth - config.marginLeft - config.marginRight;

    // Create a temporary element to measure text width
    const measurer = this.createMeasurer(element);
    document.body.appendChild(measurer);

    // Binary search for optimal font size
    let minSize = config.minFontSize;
    let maxSize = config.maxFontSize;
    let optimalSize = minSize;

    while (minSize <= maxSize) {
      const midSize = Math.floor((minSize + maxSize) / 2);
      measurer.style.fontSize = `${midSize}px`;

      const textWidth = measurer.scrollWidth;

      if (textWidth <= availableWidth) {
        optimalSize = midSize;
        minSize = midSize + 1;
      } else {
        maxSize = midSize - 1;
      }
    }

    // Clean up measurer
    document.body.removeChild(measurer);

    // Apply the calculated font size
    if (config.useVW) {
      // Convert to VW units for responsive scaling
      const vwSize = (optimalSize / viewportWidth) * 100;
      element.style.fontSize = `${vwSize}vw`;
    } else {
      element.style.fontSize = `${optimalSize}px`;
    }

    // Apply margins if specified
    if (config.marginLeft || config.marginRight) {
      element.style.paddingLeft = `${config.marginLeft}px`;
      element.style.paddingRight = `${config.marginRight}px`;
    }
  }

  /**
   * Create a hidden element for measuring text width
   * @param {HTMLElement} originalElement - The original text element
   * @returns {HTMLElement} The measurer element
   */
  createMeasurer(originalElement) {
    const measurer = document.createElement("div");
    measurer.textContent = originalElement.textContent || originalElement.innerText;

    // Copy relevant styles
    const computedStyle = window.getComputedStyle(originalElement);
    measurer.style.position = "absolute";
    measurer.style.visibility = "hidden";
    measurer.style.whiteSpace = "nowrap";
    measurer.style.top = "-9999px";
    measurer.style.left = "-9999px";
    measurer.style.fontFamily = computedStyle.fontFamily;
    measurer.style.fontWeight = computedStyle.fontWeight;
    measurer.style.fontStyle = computedStyle.fontStyle;
    measurer.style.letterSpacing = computedStyle.letterSpacing;
    measurer.style.textTransform = computedStyle.textTransform;

    return measurer;
  }

  /**
   * Recalculate font sizes for all registered elements
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
   * Remove an element from viewport fitting
   * @param {string|HTMLElement} element - CSS selector or DOM element
   */
  removeElement(element) {
    const el = typeof element === "string" ? document.querySelector(element) : element;
    if (el && this.elements.has(el)) {
      const config = this.elements.get(el);
      el.classList.remove(config.className);
      el.style.fontSize = "";
      el.style.paddingLeft = "";
      el.style.paddingRight = "";
      this.elements.delete(el);
    }
  }

  /**
   * Destroy the fitter instance and clean up
   */
  destroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }

    this.elements.forEach((config, element) => {
      element.classList.remove(config.className);
      element.style.fontSize = "";
      element.style.paddingLeft = "";
      element.style.paddingRight = "";
    });

    this.elements.clear();
    this.isInitialized = false;
  }
}

// Create a singleton instance
const textViewportFitter = new TextViewportFitter();

/**
 * Convenience function to fit text to viewport width
 * @param {string|HTMLElement} element - CSS selector or DOM element
 * @param {Object} options - Configuration options
 */
export function fitTextToViewport(element, options = {}) {
  return textViewportFitter.fitText(element, options);
}

/**
 * Remove viewport fitting from an element
 * @param {string|HTMLElement} element - CSS selector or DOM element
 */
export function removeFitText(element) {
  return textViewportFitter.removeElement(element);
}

/**
 * Manually trigger recalculation for all fitted text elements
 */
export function recalculateFittedText() {
  return textViewportFitter.recalculateAll();
}

// Export the class for advanced usage
export { TextViewportFitter };

// Default export for easy importing
export default {
  fitTextToViewport,
  removeFitText,
  recalculateFittedText,
  TextViewportFitter,
};
