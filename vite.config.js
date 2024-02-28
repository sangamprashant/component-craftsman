import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, "src/index.js"),
        resolve(__dirname, "src/icons/index.js"),
      ],
      name: "index",
      fileName: 'index',
    },
    css: {
      include: ['dist/style.css'],
    },
    rollupOptions: {
      
    },

    output: {
      dir: 'dist', // Output directory (both components and icons)
      // Include icons in the output (optional):
      assetsDir: './icons', // Or a subdirectory for icons within "dist"
    },
  },
});