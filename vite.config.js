// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
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
        scholastic: resolve(root, "projects/scholastic.html"),
        rowmark: resolve(root, "projects/rowmark.html"),
        aave: resolve(root, "projects/aave.html"),
        brightfuture: resolve(root, "projects/bright-future.html"),
        healpool: resolve(root, "projects/healpool.html"),
        rentaru: resolve(root, "projects/rentaru.html"),
        ipi: resolve(root, "projects/ipi.html"),
        jpplus: resolve(root, "projects/jpplus.html"),
        wabash: resolve(root, "projects/wabash.html"),
      },
    },
    //commonjsOptions: {
    //  transformMixedEsModules: true,
    //},
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
