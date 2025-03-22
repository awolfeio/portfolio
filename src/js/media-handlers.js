/**
 * Handle video preloading
 * @param {Array} videosArray An array of video sources to preload
 */
export function preloadVideos(videosArray) {
  videosArray.forEach((videoSrc) => {
    const videoElement = document.createElement("video");
    videoElement.preload = "auto";
    videoElement.src = videoSrc;
    videoElement.oncanplaythrough = () => {
      console.log(`Preloaded: ${videoSrc}`);
    };
  });
}

/**
 * Setup video player controls
 */
export function setupVideoControls() {
  const videos = document.querySelectorAll("video");

  if (videos.length > 0) {
    /**
     * Toggle video state and update UI classes
     * @param {HTMLVideoElement} videoElement - The video element to toggle
     */
    function toggleVideoState(videoElement) {
      const parent = videoElement.closest(".large-video");
      if (!videoElement.paused && !videoElement.ended) {
        parent.classList.add("playing");
        parent.classList.remove("paused");
      } else {
        parent.classList.remove("playing");
        parent.classList.add("paused");
      }
    }

    // Handle the SVG pause button click events
    document.querySelectorAll("svg.pause").forEach((pauseBtn) => {
      pauseBtn.addEventListener("click", function () {
        const videoElement = this.parentElement.querySelector("video");
        if (!videoElement.paused) {
          videoElement.pause();
        } else {
          videoElement.play();
        }
        toggleVideoState(videoElement);
      });
    });

    // Handle the SVG play button click events
    document.querySelectorAll("svg.play").forEach((playBtn) => {
      playBtn.addEventListener("click", function () {
        const videoElement = this.parentElement.querySelector("video");
        if (videoElement.paused) {
          videoElement.play();
        }
        toggleVideoState(videoElement);
      });
    });
  }
}
