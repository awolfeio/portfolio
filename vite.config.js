// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import glsl from "vite-plugin-glsl";
import { shaderSyncPlugin } from "./vite-plugin-shader-sync.js";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// Determine the base path based on build mode
// For GitHub Pages (build:gh): use '/portfolio/'
// For custom domain or local dev: use '/'
const base = process.env.GITHUB_PAGES === "true" ? "/portfolio/" : "/";

export default defineConfig({
  root,
  base,
  publicDir: resolve(__dirname, "public"),
  plugins: [
    glsl(),
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
    shaderSyncPlugin(),
    {
      name: "watch-scss",
      handleHotUpdate({ file, server }) {
        if (file.endsWith(".scss")) {
          server.ws.send({ type: "full-reload", path: "*" });
        }
      },
    },
  ],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "about.html"),
        works: resolve(root, "works.html"),
        contact: resolve(root, "contact.html"),
        "projects/scholastic": resolve(root, "projects/scholastic.html"),
        "projects/rowmark": resolve(root, "projects/rowmark.html"),
        "projects/aave": resolve(root, "projects/aave.html"),
        "projects/bright-future": resolve(root, "projects/bright-future.html"),
        "projects/healpool": resolve(root, "projects/healpool.html"),
        "projects/rentaru": resolve(root, "projects/rentaru.html"),
        "projects/ipi": resolve(root, "projects/ipi.html"),
        "projects/jpplus": resolve(root, "projects/jpplus.html"),
        "projects/wabash": resolve(root, "projects/wabash.html"),
        "labs/index": resolve(root, "labs/index.html"),
        "labs/replica": resolve(root, "labs/replica.html"),
        "labs/rentaru": resolve(root, "labs/rentaru.html"),
        "labs/designsynth": resolve(root, "labs/designsynth.html"),
        "labs/catio": resolve(root, "labs/catio.html"),
        "labs/pdxlist": resolve(root, "labs/pdxlist.html"),
        "labs/card-cascade": resolve(root, "labs/card-cascade.html"),
        "labs/wolfe-tokyo": resolve(root, "labs/wolfe-tokyo.html"),
      },
    },
    //commonjsOptions: {
    //  transformMixedEsModules: true,
    //},
  },
  server: {
    port: 1000,
    strictPort: true, // fail instead of auto-picking another port
    watch: {
      usePolling: true,
    },
  },
});
