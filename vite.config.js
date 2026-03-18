import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/my-pwa-app/', //поменяй
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Prohect tracker',
        short_name: 'App',
        theme_color: '#000000',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ]
});