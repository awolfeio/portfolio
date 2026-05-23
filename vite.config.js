// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import glsl from "vite-plugin-glsl";
import { shaderSyncPlugin } from "./vite-plugin-shader-sync.js";
import fs from "fs";
import path from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// Helper function to flat-copy documents from src/assets/documents/ to public/assets/documents/
function copyDocumentsFlat() {
  const srcDir = resolve(__dirname, "src/assets/documents");
  const destDir = resolve(__dirname, "public/assets/documents");

  if (!fs.existsSync(srcDir)) {
    console.warn(`[copy-documents] Source directory ${srcDir} does not exist.`);
    return;
  }

  // Ensure destination directory exists
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  function recurse(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        recurse(fullPath);
      } else if (stat.isFile()) {
                const destPath = path.join(destDir, item);
        fs.copyFileSync(fullPath, destPath);
        console.log(`[copy-documents] Copied flat: ${item} -> public/assets/documents/`);
      }
    }
  }

  recurse(srcDir);
}

// Determine the base path based on build mode
// For GitHub Pages (build:gh): use '/portfolio/'
// For custom domain or local dev: use '/'
const base = process.env.GITHUB_PAGES === "true" ? "/portfolio/" : "/";

const gatedProjects = [
  { slug: 'american-chemical-society', group: 'B', href: '/projects/american-chemical-society.html', text: 'ACS' },
  { slug: 'wabash', group: 'A', href: '/projects/wabash.html', text: 'Wabash' }
];

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  const gatedProjectsStr = JSON.stringify(gatedProjects);
  const gatedProjectsRaw = isBuild 
    ? Buffer.from(gatedProjectsStr).toString('base64')
    : gatedProjectsStr;

  return {
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
    {
      name: "copy-documents-flat",
      buildStart() {
        copyDocumentsFlat();
      }
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
        "projects/american-chemical-society": resolve(root, "projects/american-chemical-society.html"),
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
  define: {
    __GATED_PROJECTS_RAW__: JSON.stringify(gatedProjectsRaw),
    __IS_BUILD_MODE__: isBuild
  }
  };
});
