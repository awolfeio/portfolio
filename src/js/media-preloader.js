/**
 * MediaPreloader - Intelligent media asset discovery and preloading
 */
class MediaPreloader {
  constructor() {
    this.cache = new Map(); // URL -> Promise
    this.priorities = new Map(); // URL -> priority level
    this.stats = { images: 0, videos: 0, cached: 0 };
  }

  /**
   * Discover all media assets from HTML string or DOM element
   * @param {string|HTMLElement} source - HTML string or DOM element
   * @returns {Object} - Categorized media assets
   */
  discoverAssets(source) {
    const container = typeof source === 'string'
      ? this._parseHTML(source)
      : source;

    const assets = {
      critical: [],   // Above-fold, first .large-photo/.large-video
      high: [],       // Remaining visible media
      low: []         // Below-fold, lazy-loaded
    };

    // Discover images
    const images = container.querySelectorAll('img');
    images.forEach((img, index) => {
      const src = img.getAttribute('src') || img.dataset.src;
      if (!src) return;

      const priority = this._determinePriority(img, index);
      assets[priority].push({
        type: 'image',
        url: src,
        element: img
      });
    });

    // Discover videos
    const videos = container.querySelectorAll('video source, video[src]');
    videos.forEach((video, index) => {
      const src = video.getAttribute('src') || video.querySelector('source')?.getAttribute('src');
      if (!src) return;

      const priority = this._determinePriority(video, index);
      assets[priority].push({
        type: 'video',
        url: src,
        element: video
      });
    });

    return assets;
  }

  /**
   * Determine asset priority based on position and classes
   */
  _determinePriority(element, index) {
    // First large media element is critical
    if (index === 0 && element.closest('.large-photo, .large-video')) {
      return 'critical';
    }

    // Has loading="lazy" or is far down the page
    if (element.getAttribute('loading') === 'lazy' || index > 5) {
      return 'low';
    }

    return 'high';
  }

  /**
   * Preload assets with priority-based loading
   * @param {Object} assets - Categorized assets from discoverAssets()
   * @returns {Promise} - Resolves when critical/high assets loaded
   */
  async preload(assets) {
    const criticalPromises = assets.critical.map(a => this._loadAsset(a));
    const highPromises = assets.high.map(a => this._loadAsset(a));
    
    // Load critical first, then high priority in parallel
    await Promise.all(criticalPromises);
    
    // Don't wait for high priority, but start loading
    Promise.all(highPromises).then(() => {
      console.log('High priority assets loaded');
    });

    // Low priority loads in background (fire and forget)
    assets.low.forEach(a => this._loadAsset(a));

    return { critical: criticalPromises.length, high: highPromises.length };
  }

  /**
   * Load a single asset and cache the promise
   */
  _loadAsset(asset) {
    // Handle relative URLs by making them absolute if needed, or just let browser handle it.
    // Ideally we treat the URL as the key.
    
    if (this.cache.has(asset.url)) {
      return this.cache.get(asset.url);
    }

    const promise = asset.type === 'image' 
      ? this._loadImage(asset.url)
      : this._loadVideo(asset.url);

    this.cache.set(asset.url, promise);
    return promise;
  }

  _loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.stats.images++;
        resolve(url);
      };
      img.onerror = () => {
          // Resolve anyway to not block
          console.warn(`Failed to preload image: ${url}`);
          resolve(url); 
      };
      img.src = url;
    });
  }

  _loadVideo(url) {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.preload = 'auto';
      video.oncanplaythrough = () => {
        this.stats.videos++;
        resolve(url);
      };
      video.onerror = () => {
          // Resolve anyway to not block
          console.warn(`Failed to preload video: ${url}`);
          resolve(url);
      };
      video.src = url;
      video.load(); // Trigger load
    });
  }

  _parseHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    return div;
  }
}

export default new MediaPreloader();
