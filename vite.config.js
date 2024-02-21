import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Core configuration options
  build: {
    // Output options for various environments
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'index',
      fileName: (format, name) => {
        if (format === "es") {
          return `${name}.js`;
        }
        return `${name}.${format}.js`;
      },
    },
    // Rollup-specific options for advanced control (optional)
    rollupOptions: {
      
    },
    // Terser-specific options for minification (optional)
    minify: 'terser',
  },
  // Other Vite options: plugins, server configuration, etc. (optional)
});
