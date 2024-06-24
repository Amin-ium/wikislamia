import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.jsx'], // Ensure this points to your main JS file
      refresh: true,
    }),
    react(),
  ],
  build: {
    outDir: 'public/build', // Output directory for built assets
    emptyOutDir: true, // Empty the output directory before building
    manifest: true, // Generate a manifest.json file
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
      },
    },
  },
});
