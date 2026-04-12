/**
 * vite-plugin-shader-sync.js
 *
 * Vite dev-server plugin for live shader parameter mirroring.
 *
 * Uses Vite's built-in WebSocket infrastructure (server.ws / import.meta.hot)
 * — no external 'ws' package needed.
 *
 * Custom events:
 *   shader-sync:role          client → server   { role: 'broadcaster' | 'receiver' }
 *   shader-sync:patch         broadcaster → server → receivers   { uniforms: {...} }
 *   shader-sync:full          broadcaster → server → receivers   { uniforms: {...} }
 *   shader-sync:state-request server → broadcaster  {}
 */

export function shaderSyncPlugin() {
  return {
    name: 'shader-sync',

    configureServer(server) {
      /** @type {{ send: Function, socket?: any } | null} */
      let broadcaster = null;

      /** @type {Set<{ send: Function, socket?: any }>} */
      const receivers = new Set();

      /** Relay an event+payload to all live receivers. */
      function relay(event, data) {
        const dead = new Set();
        for (const rx of receivers) {
          try {
            rx.send(event, data);
          } catch {
            dead.add(rx);
          }
        }
        dead.forEach((rx) => receivers.delete(rx));
      }

      /** Attach a close-listener to a client's raw socket for cleanup. */
      function onClose(client, cb) {
        try {
          // Vite's WebSocketClient exposes the raw ws socket as .socket
          client.socket?.on('close', cb);
        } catch { /* ignore if unavailable */ }
      }

      // ── Role announcements ─────────────────────────────────────────────────
      server.ws.on('shader-sync:role', (data, client) => {
        if (data.role === 'broadcaster') {
          if (broadcaster && broadcaster !== client) {
            // Evict stale broadcaster (reconnect scenario)
          }
          broadcaster = client;
          onClose(client, () => {
            if (broadcaster === client) {
              broadcaster = null;
              console.log('[shader-sync] 🖥️  Broadcaster disconnected');
            }
          });
          console.log('[shader-sync] 🖥️  Desktop broadcaster connected');

        } else if (data.role === 'receiver') {
          receivers.add(client);
          onClose(client, () => {
            receivers.delete(client);
            console.log(`[shader-sync] 📱 Receiver disconnected (${receivers.size} remaining)`);
          });
          console.log(`[shader-sync] 📱 Mobile receiver connected (${receivers.size} total)`);

          // Ask broadcaster for a full state snapshot for this new receiver
          if (broadcaster) {
            try { broadcaster.send('shader-sync:state-request', {}); } catch { /* ignore */ }
          }
        }
      });

      // ── Patch relay (live uniform changes) ────────────────────────────────
      server.ws.on('shader-sync:patch', (data, client) => {
        if (client === broadcaster) relay('shader-sync:patch', data);
      });

      // ── Full snapshot relay (sent when a new receiver joins) ───────────────
      server.ws.on('shader-sync:full', (data, client) => {
        if (client === broadcaster) relay('shader-sync:full', data);
      });

      const port = server.config?.server?.port ?? 1000;
      console.log(`[shader-sync] ✅ Ready — mirror mode: http://<LAN-IP>:${port}/?mirror=true`);
    },
  };
}
