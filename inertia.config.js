import { defineConfig } from '@inertiajs/inertia';

export default defineConfig({
  roots: ['resources/js'],
  manifest: 'public/mix-manifest.json',
  apiUrl: process.env.INERTIA_API_URL,
  frontendUrl: process.env.INERTIA_FRONTEND_URL,
});
