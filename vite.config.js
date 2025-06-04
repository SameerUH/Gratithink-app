import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), 
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'Gratithink.svg'],
      manifest: {
        name: 'Gratithink',
        short_name: 'Grati',
        description: 'Reflective journal app for students struggling with motivation!!!',
        theme_color: '#2f4f4f',
        icons: [
          {
            src: '/gratithink/app/favicon-assets/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },

          {
            src: '/gratithink/app/favicon-assets/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: '/gratithink/app/'
})
