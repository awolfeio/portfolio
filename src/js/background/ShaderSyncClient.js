import * as THREE from 'three';

/**
 * ShaderSyncClient
 *
 * Uses Vite's import.meta.hot (HMR WebSocket) for zero-dependency
 * real-time shader uniform mirroring between desktop and mobile.
 *
 * Roles (auto-detected):
 *   'broadcaster' — desktop (localhost / no URL param)
 *                   Intercepts uniform changes and pushes them to the server.
 *   'receiver'    — mobile mirror (?mirror=true)
 *                   Receives patches from server and applies them instantly.
 */

const POLL_INTERVAL_MS = 100; // how often to check for GSAP-tweened changes

// ---------------------------------------------------------------------------
// Serialization helpers
// ---------------------------------------------------------------------------

function serializeValue(value) {
  if (value instanceof THREE.Color) return '#' + value.getHexString();
  if (value && typeof value.x === 'number' && typeof value.y === 'number') {
    return { x: value.x, y: value.y };
  }
  return value;
}

function deserializeValue(raw, existingValue) {
  if (existingValue instanceof THREE.Color) {
    if (typeof raw === 'string') return new THREE.Color(raw);
    if (raw && 'r' in raw)       return new THREE.Color(raw.r, raw.g, raw.b);
  }
  if (existingValue instanceof THREE.Vector2 && raw && 'x' in raw) {
    return new THREE.Vector2(raw.x, raw.y);
  }
  return raw;
}

function snapshotUniforms(material) {
  const out = {};
  Object.keys(material.uniforms).forEach((key) => {
    out[key] = serializeValue(material.uniforms[key].value);
  });
  return out;
}

// ---------------------------------------------------------------------------
// Broadcaster
// ---------------------------------------------------------------------------

class BroadcasterSync {
  constructor(backgroundManager) {
    this.backgroundManager = backgroundManager;
    this._lastJson = '';
    this._pollTimer = null;

    if (!import.meta.hot) {
      console.warn('[ShaderSync broadcaster] import.meta.hot unavailable — sync disabled');
      return;
    }

    // Announce role to server
    import.meta.hot.send('shader-sync:role', { role: 'broadcaster' });

    // Server asks for a full snapshot when a new receiver joins
    import.meta.hot.on('shader-sync:state-request', () => {
      this._sendFullSnapshot();
    });

    // Start polling loop for GSAP-tweened transitions
    // (GSAP mutates the THREE.Color/number values directly, bypassing updateUniform)
    this._startPoller();

    console.log('[ShaderSync] 🖥️  Broadcaster ready');
  }

  _getMaterial() {
    return this.backgroundManager.getShaderController()?.material;
  }

  _sendFullSnapshot() {
    const mat = this._getMaterial();
    if (!mat) return;
    const uniforms = snapshotUniforms(mat);
    import.meta.hot.send('shader-sync:full', { uniforms });
    console.log('[ShaderSync] 📤 Full snapshot sent');
  }

  _startPoller() {
    this._pollTimer = setInterval(() => {
      const mat = this._getMaterial();
      if (!mat) return;
      const snapshot = snapshotUniforms(mat);
      const json = JSON.stringify(snapshot);
      if (json !== this._lastJson) {
        this._lastJson = json;
        import.meta.hot?.send('shader-sync:patch', { uniforms: snapshot });
      }
    }, POLL_INTERVAL_MS);
  }

  destroy() {
    clearInterval(this._pollTimer);
  }
}

// ---------------------------------------------------------------------------
// Receiver
// ---------------------------------------------------------------------------

class ReceiverSync {
  constructor(backgroundManager) {
    this.backgroundManager = backgroundManager;
    this._patchQueue = [];

    if (!import.meta.hot) {
      console.warn('[ShaderSync receiver] import.meta.hot unavailable — sync disabled');
      return;
    }

    // Announce role to server
    import.meta.hot.send('shader-sync:role', { role: 'receiver' });

    // Listen for patches
    import.meta.hot.on('shader-sync:patch', ({ uniforms }) => this._applyPatch(uniforms));
    import.meta.hot.on('shader-sync:full',  ({ uniforms }) => this._applyPatch(uniforms));

    // Hide the DevGUI — desktop controls everything
    setTimeout(() => {
      const gui = this.backgroundManager.getDevGUI?.()?.gui;
      if (gui) {
        gui.hide();
        console.log('[ShaderSync] DevGUI hidden on receiver');
      }
    }, 500);

    // Enable performance stats on the receiver and apply compact mobile styles
    this._enableCompactStats();

    // Show status badge
    this._mountBadge();

    console.log('[ShaderSync] 📱 Receiver ready — mirroring desktop shader');
  }

  _enableCompactStats() {
    const apply = () => {
      // Force the performance monitor on — it only auto-enables on localhost
      const pm = this.backgroundManager.getPerformanceMonitor?.();
      if (pm && !pm.isEnabled()) {
        pm.enable();
      }

      // Poll until #bg-performance-stats exists in the DOM, then style it
      const styleEl = () => {
        const el = document.getElementById('bg-performance-stats');
        if (!el) { requestAnimationFrame(styleEl); return; }

        // Scale the whole panel down via transform-origin bottom-left
        // so it stays anchored to the corner without eating screen space.
        // The internal layout stays at 280px; only the rendered size shrinks.
        Object.assign(el.style, {
          transformOrigin : 'bottom left',
          transform       : 'scale(0.52)',
          minWidth        : '280px',
          bottom          : '10px',
          left            : '10px',
          opacity         : '0.85',
        });
      };
      requestAnimationFrame(styleEl);
    };

    if (document.body) {
      apply();
    } else {
      document.addEventListener('DOMContentLoaded', apply);
    }
  }


  _getShaderController() {
    return this.backgroundManager.getShaderController();
  }


  _applyPatch(uniforms) {
    const sc = this._getShaderController();
    if (!sc || !sc.material) {
      this._patchQueue.push(uniforms);
      return;
    }
    // Flush any queued patches first
    while (this._patchQueue.length) {
      this._applyPatchImmediate(sc, this._patchQueue.shift());
    }
    this._applyPatchImmediate(sc, uniforms);
  }

  _applyPatchImmediate(sc, uniforms) {
    Object.entries(uniforms).forEach(([key, rawValue]) => {
      const uniform = sc.material.uniforms[key];
      if (!uniform) return;
      const deserialized = deserializeValue(rawValue, uniform.value);
      sc.updateUniform(key, deserialized);
    });
  }

  _mountBadge() {
    const mount = () => {
      if (document.getElementById('shader-mirror-badge')) return;

      const badge = document.createElement('div');
      badge.id = 'shader-mirror-badge';
      badge.innerHTML = `
        <span class="smb-dot"></span>
        <span class="smb-label">MIRROR</span>
        <span class="smb-status">connecting…</span>
      `;
      Object.assign(badge.style, {
        position: 'fixed', bottom: '16px', left: '50%',
        transform: 'translateX(-50%)', zIndex: '99999',
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '6px 14px', borderRadius: '999px',
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.12)',
        color: '#fff', fontFamily: 'system-ui, sans-serif',
        fontSize: '11px', fontWeight: '600', letterSpacing: '0.06em',
        pointerEvents: 'none', userSelect: 'none',
        opacity: '0', transition: 'opacity 0.4s ease',
      });

      const dot = badge.querySelector('.smb-dot');
      Object.assign(dot.style, {
        width: '7px', height: '7px', borderRadius: '50%',
        background: '#ffa500', flexShrink: '0',
        transition: 'background 0.3s ease',
      });
      badge.querySelector('.smb-label').style.cssText = 'opacity:0.65;font-size:10px';

      document.body.appendChild(badge);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        badge.style.opacity = '1';
      }));

      const setStatus = (connected) => {
        dot.style.background = connected ? '#22c55e' : '#ef4444';
        badge.querySelector('.smb-status').textContent = connected ? 'live' : 'reconnecting…';
      };

      // Vite's hot socket exposes 'connection' state changes we can react to
      // Use a patch/full message arrival as a proxy for "connected & receiving"
      const origPatch = this._applyPatch.bind(this);
      this._applyPatch = (uniforms) => {
        setStatus(true);
        origPatch(uniforms);
      };

      // Detect disconnect via Vite vite:ws-disconnect custom event if available,
      // otherwise fall back to polling the WebSocket state
      import.meta.hot?.on('vite:ws-disconnect', () => setStatus(false));
      import.meta.hot?.on('vite:ws-connect',    () => setStatus(true));
    };

    if (document.body) {
      mount();
    } else {
      document.addEventListener('DOMContentLoaded', mount);
    }
  }

  destroy() { /* nothing to teardown — import.meta.hot listeners persist per page */ }
}

// ---------------------------------------------------------------------------
// Public factory
// ---------------------------------------------------------------------------

/**
 * Initialize the shader sync system.
 * Auto-detects role from URL: ?mirror=true → receiver, otherwise broadcaster.
 *
 * @param {object} backgroundManager
 * @returns {BroadcasterSync | ReceiverSync | null}
 */
export function initShaderSync(backgroundManager) {
  // Only active in dev (Vite's import.meta.hot is undefined in production builds)
  if (!import.meta.hot) return null;

  const isIp = /^\d+\.\d+\.\d+\.\d+$/.test(location.hostname);
  const isLanOrLocal = (
    location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1' ||
    isIp
  );

  if (!isLanOrLocal) return null; // don't run on deployed prod domain

  const isMirror = new URLSearchParams(location.search).get('mirror') === 'true';

  if (isMirror) {
    return new ReceiverSync(backgroundManager);
  }

  // PERF FIX: Don't run the broadcaster on mobile devices.
  // BroadcasterSync._startPoller() runs setInterval(100ms) and calls JSON.stringify on
  // 80+ uniforms every 100ms, creating sustained allocation pressure. On mobile Chrome (V8),
  // this triggers a major GC (mark-compact) every 4–5 seconds with a 150–250ms pause.
  // Mobile devices should only ever be receivers (?mirror=true), not broadcasters.
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    || (navigator.maxTouchPoints > 1 && window.innerWidth < 1024);
  if (isMobile) return null;

  return new BroadcasterSync(backgroundManager);
}
