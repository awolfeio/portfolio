/**
 * Portfolio Authentication Module
 * 
 * Manages password-gated portfolio modes that control which projects
 * and resume are visible. Three modes:
 * - default (no password): Only "all"-flagged projects visible
 * - "A" (password: portfolioA): "all" + "A" projects, Resume1
 * - "B" (password: portfolioB): "all" + "B" projects, Resume2
 */

const STORAGE_KEY = 'portfolio-auth-mode';

// Password → mode mapping
const PASSWORD_MAP = {
  'portfolioA': 'A',
  'portfolioB': 'B',
  'portfolioAll': 'all',
};

// __GATED_PROJECTS_RAW__ and __IS_BUILD_MODE__ are injected automatically by vite.config.js during build
const __GATED_PROJECTS__ = __IS_BUILD_MODE__
  ? JSON.parse(atob(__GATED_PROJECTS_RAW__))
  : JSON.parse(__GATED_PROJECTS_RAW__);

// Canonical ordered project list with group assignments
const PROJECTS = [
  ...__GATED_PROJECTS__,
  { slug: 'scholastic', group: 'all', href: '/projects/scholastic.html' },
  { slug: 'jpplus', group: 'all', href: '/projects/jpplus.html' },
  { slug: 'rowmark', group: 'all', href: '/projects/rowmark.html' },
  { slug: 'ipi', group: 'all', href: '/projects/ipi.html' },
];

// Resume URLs per mode
const RESUME_URLS = {
  'A': '/assets/documents/AdrainWolfe_Resume1.pdf',
  'B': '/assets/documents/AdrainWolfe_Resume2.pdf',
  'default': '/assets/documents/AdrainWolfe_Resume.pdf',
};

/**
 * Get the current auth mode from sessionStorage
 * @returns {string|null} 'A', 'B', or null (default/no password)
 */
export function getMode() {
  return sessionStorage.getItem(STORAGE_KEY);
}

/**
 * Set the auth mode
 * @param {string|null} mode - 'A', 'B', or null to clear
 */
function setMode(mode) {
  if (mode) {
    sessionStorage.setItem(STORAGE_KEY, mode);
  } else {
    sessionStorage.removeItem(STORAGE_KEY);
  }
}

/**
 * Authenticate with a password
 * @param {string} password
 * @returns {string|false} The mode if successful, false otherwise
 */
export function authenticate(password) {
  const mode = PASSWORD_MAP[password];
  if (mode) {
    setMode(mode);
    return mode;
  }
  return false;
}

/**
 * Clear authentication (return to default mode)
 */
export function clearAuth() {
  setMode(null);
}

/**
 * Check if a project is visible in the given mode
 * @param {string} group - The project's auth group ('all', 'A', 'B')
 * @param {string|null} mode - The current mode ('A', 'B', or null)
 * @returns {boolean}
 */
function isProjectVisible(group, mode) {
  // If we are in "all" mode (shows everything), all projects are visible
  if (mode === 'all') return true;
  // "all"-flagged projects are always visible
  if (group === 'all') return true;
  // A/B projects are only visible in their respective mode
  if (mode === 'A' && group === 'A') return true;
  if (mode === 'B' && group === 'B') return true;
  return false;
}

/**
 * Get the list of visible projects for the current mode
 * @param {string|null} mode
 * @returns {Array} Filtered project list
 */
export function getVisibleProjects(mode) {
  return PROJECTS.filter(p => isProjectVisible(p.group, mode));
}

/**
 * Get the next visible project in the circular list
 * @param {string} currentSlug - Current project's slug
 * @param {string|null} mode - Current mode
 * @returns {object} The next visible project { slug, group, href }
 */
export function getNextProject(currentSlug, mode) {
  const visible = getVisibleProjects(mode);
  if (visible.length === 0) return PROJECTS[0]; // fallback

  // Find the current project's position in the full list
  const currentIndex = PROJECTS.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1) return visible[0]; // fallback

  // Walk forward through the full list to find the next visible project
  for (let i = 1; i <= PROJECTS.length; i++) {
    const nextIndex = (currentIndex + i) % PROJECTS.length;
    const nextProject = PROJECTS[nextIndex];
    if (isProjectVisible(nextProject.group, mode)) {
      return nextProject;
    }
  }

  return visible[0]; // fallback
}

/**
 * Get the resume URL for the current mode
 * @param {string|null} mode
 * @returns {string}
 */
export function getResumeUrl(mode) {
  if (mode && RESUME_URLS[mode]) {
    return RESUME_URLS[mode];
  }
  return RESUME_URLS['default'];
}

/**
 * Apply the current mode to the page
 * - Hides/shows project links in .projects containers
 * - Updates next-project-banner hrefs on project detail pages
 * - Updates the resume nav link href
 */
export function applyMode(mode, animate = false) {
  if (mode === undefined) {
    mode = getMode();
  }

  console.log(`[portfolio-auth] Applying mode: ${mode || 'default'}`);

  // 1. Filter project links in .projects containers
  const projectContainers = document.querySelectorAll('.projects');
  projectContainers.forEach(container => {
    // Remove currently injected gated projects that don't match the new mode
    const existingInjected = container.querySelectorAll('.gated-project');
    existingInjected.forEach(el => {
      const group = el.getAttribute('data-auth-group');
      if (!isProjectVisible(group, mode)) {
        if (animate) {
          el.setAttribute('disabled', '');
          // Remove from DOM after transition completes (matching CSS timing)
          setTimeout(() => el.remove(), 1250); 
        } else {
          el.remove();
        }
      }
    });

    // Inject new gated projects if needed
    if (mode) {
      // Create a list of projects to inject for the current mode
      const projectsToInject = __GATED_PROJECTS__.filter(p => isProjectVisible(p.group, mode));
      
      // Reverse iterate so prepend keeps them in original array order (ACS then Wabash)
      [...projectsToInject].reverse().forEach(projectData => {
        let el = container.querySelector(`a[data-project="${projectData.slug}"]`);
        if (!el) {
          el = document.createElement('a');
          el.href = projectData.href;
          el.setAttribute('data-project', projectData.slug);
          el.setAttribute('data-text', projectData.text);
          el.setAttribute('data-auth-group', projectData.group);
          el.className = 'gated-project';
          el.textContent = projectData.text;
          
          if (animate) {
            el.setAttribute('disabled', '');
            container.prepend(el);
            void el.offsetWidth; // Reflow
            el.removeAttribute('disabled');
          } else {
            container.prepend(el);
          }
        } else {
          if (!animate) {
             el.removeAttribute('disabled');
          }
        }
      });
    }
  });

  // 2. Update next-project-banner on project detail pages
  const projectPage = document.querySelector('.page.project[data-current-project]');
  if (projectPage) {
    const currentSlug = projectPage.getAttribute('data-current-project');
    const nextProject = getNextProject(currentSlug, mode);
    const bannerLink = projectPage.querySelector('.next-project-banner a');
    if (bannerLink && nextProject) {
      bannerLink.setAttribute('href', nextProject.href);
      console.log(`[portfolio-auth] Next project: ${currentSlug} → ${nextProject.slug}`);
    }
  }

  // 3. Update resume nav link
  const resumeLink = document.querySelector('#resume-nav-link');
  if (resumeLink) {
    if (mode) {
      resumeLink.setAttribute('href', getResumeUrl(mode));
    } else {
      // No mode set — we'll handle the click intercept in event-handlers.js
      // Keep a placeholder href so it looks like a normal link
      resumeLink.setAttribute('href', '#resume');
    }
  }

  // 4. Update auth UI (password input / mode indicator)
  updateAuthUI(mode);
}

/**
 * Update the auth UI elements on the page
 */
function updateAuthUI(mode) {
  const authContainers = document.querySelectorAll('.portfolio-auth');
  authContainers.forEach(container => {
    const errorMsg = container.querySelector('.auth-error');

    if (mode) {
      // Hide the entire auth container smoothly
      container.style.transition = 'opacity 0.5s ease, max-height 0.5s ease, margin 0.5s ease';
      container.style.opacity = '0';
      container.style.pointerEvents = 'none';
      container.style.maxHeight = '0';
      container.style.overflow = 'hidden';
      if (errorMsg) errorMsg.style.display = 'none';
      container.classList.add('authenticated');
    } else {
      container.style.transition = 'opacity 0.5s ease, max-height 0.5s ease';
      container.style.opacity = '1';
      container.style.pointerEvents = 'auto';
      container.style.maxHeight = '';
      if (errorMsg) errorMsg.style.display = 'none';
      container.classList.remove('authenticated');
    }
  });
}

/**
 * Handle password submission from the inline input
 * @param {string} password
 * @param {HTMLElement} errorElement - Element to show error message
 * @returns {boolean} True if authenticated successfully
 */
export function handlePasswordSubmit(password, errorElement) {
  const result = authenticate(password);
  if (result) {
    applyMode(result, true);
    return true;
  } else {
    if (errorElement) {
      errorElement.textContent = 'Invalid access code';
      errorElement.style.display = '';
      setTimeout(() => {
        errorElement.style.display = 'none';
      }, 2500);
    }
    return false;
  }
}

/**
 * Show the password modal (used when Resume is clicked without auth)
 * @returns {Promise<string|null>} Resolves with the mode or null if cancelled
 */
export function showPasswordModal() {
  return new Promise((resolve) => {
    // Don't create multiple modals
    if (document.querySelector('.password-modal')) {
      resolve(null);
      return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'password-modal';
    overlay.innerHTML = `
      <div class="password-modal-backdrop"></div>
      <div class="password-modal-content">
        <button class="password-modal-close" aria-label="Close">&times;</button>
        <p class="password-modal-title">Enter access code to view resume</p>
        <div class="auth-input-wrapper" style="width: 100%; margin: 0;">
          <svg class="auth-lock-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <input type="text" class="auth-password-field" placeholder="Access code..." autocomplete="off" />
          <button class="auth-submit-btn" aria-label="Submit">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        <p class="auth-error"></p>
      </div>
    `;

    document.body.appendChild(overlay);

    // Force a synchronous layout/reflow so the browser registers the initial CSS states (blur 0, background 0)
    // This is critical for preventing browsers from skipping the backdrop-filter transition.
    void overlay.offsetHeight;

    // Trigger animation
    requestAnimationFrame(() => {
      overlay.classList.add('visible');
    });

    const input = overlay.querySelector('.auth-password-field');
    const submitBtn = overlay.querySelector('.auth-submit-btn');
    const errorMsg = overlay.querySelector('.auth-error');
    const closeBtn = overlay.querySelector('.password-modal-close');
    const backdrop = overlay.querySelector('.password-modal-backdrop');

    const cleanup = (result) => {
      overlay.classList.remove('visible');
      setTimeout(() => {
        overlay.remove();
      }, 300);
      resolve(result);
    };

    const trySubmit = () => {
      const password = input.value.trim();
      if (!password) return;

      const result = authenticate(password);
      if (result) {
        applyMode(result);
        // Open the resume in a new tab
        const resumeUrl = getResumeUrl(result);
        window.open(resumeUrl, '_blank');
        cleanup(result);
      } else {
        errorMsg.textContent = 'Invalid access code';
        errorMsg.style.display = '';
        input.classList.add('shake');
        setTimeout(() => {
          input.classList.remove('shake');
          errorMsg.style.display = 'none';
        }, 2000);
      }
    };

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') trySubmit();
      if (e.key === 'Escape') cleanup(null);
    });

    submitBtn.addEventListener('click', trySubmit);
    closeBtn.addEventListener('click', () => cleanup(null));
    backdrop.addEventListener('click', () => cleanup(null));

    // Focus input after animation
    setTimeout(() => input.focus(), 100);
  });
}

/**
 * Create and inject the inline auth UI into .portfolio-auth containers
 * (Called once on initial page load, and after Barba transitions)
 */
export function injectAuthUI() {
  const containers = document.querySelectorAll('.portfolio-auth');
  containers.forEach(container => {
    // Skip if already populated
    if (container.querySelector('.auth-input')) return;

    container.innerHTML = `
      <div class="auth-input">
        <div class="auth-input-wrapper">
          <svg class="auth-lock-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <input type="text" class="auth-password-field" placeholder="Enter access code to view more" autocomplete="off" />
          <button class="auth-submit-btn" aria-label="Submit">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        <p class="auth-error"></p>
      </div>
    `;

    // Bind events
    const inputField = container.querySelector('.auth-password-field');
    const submitBtn = container.querySelector('.auth-submit-btn');
    const errorMsg = container.querySelector('.auth-error');

    const trySubmit = () => {
      const password = inputField.value.trim();
      if (!password) return;
      handlePasswordSubmit(password, errorMsg);
      inputField.value = '';
    };

    inputField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') trySubmit();
    });

    submitBtn.addEventListener('click', trySubmit);
  });
}

/**
 * Initialize the portfolio auth system
 * Called once on DOMContentLoaded
 */
export function init() {
  const mode = getMode();
  console.log(`[portfolio-auth] Initializing with mode: ${mode || 'default'}`);

  injectAuthUI();
  applyMode(mode);

  // Dev-only helper to clear auth
  if (import.meta.env.DEV) {
    if (!document.getElementById('dev-clear-auth')) {
      const btn = document.createElement('button');
      btn.id = 'dev-clear-auth';
      btn.textContent = 'Dev: Clear Auth';
      btn.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 999999; padding: 8px 12px; background: rgba(0,0,0,0.8); color: #fff; border: none; border-radius: 6px; font-family: sans-serif; font-size: 12px; cursor: pointer; opacity: 0.3; transition: opacity 0.2s;';
      btn.onmouseover = () => btn.style.opacity = '1';
      btn.onmouseout = () => btn.style.opacity = '0.3';
      btn.onclick = () => {
        clearAuth();
        applyMode(null, true);
        document.querySelectorAll('.auth-password-field').forEach(input => input.value = '');
      };
      document.body.appendChild(btn);
    }
  }
}

export default {
  init,
  getMode,
  authenticate,
  clearAuth,
  applyMode,
  getVisibleProjects,
  getNextProject,
  getResumeUrl,
  handlePasswordSubmit,
  showPasswordModal,
  injectAuthUI,
};
