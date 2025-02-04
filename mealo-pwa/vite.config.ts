import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Mon chef personnel',
        short_name: 'Mealo',
        description: 'Un site de recettes en ligne pratique et rapide !',
        theme_color: '#ffffff',
        background_color: '#FFF5E4',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: 'logo_mealo_app.png', sizes: '192x192', type: 'image/png' },
          { src: 'logo_mealo_app.png', sizes: '512x512', type: 'image/png' },
          { src: 'logo_mealo_app.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
      },
      devOptions: {
        enabled: true, // Active le service worker en mode dev
      },
    }),
  ],
});
