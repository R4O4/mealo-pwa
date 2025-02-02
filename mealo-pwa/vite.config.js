import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Active l'enregistrement automatique du Service Worker
      devOptions: {
        enabled: true, // Permet de tester la PWA en mode développement
      },
      manifest: {
        name: 'Mealo',
        short_name: 'Mealo',
        description: 'Une application de gestion de repas',
        start_url: '/',
        display: 'standalone',
        background_color: '#FFFFFF',
        theme_color: '#80C288', // Changez cette couleur en fonction de votre thème
        icons: [
          {
            src: '/mealo_ico.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/mealo_ico.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
