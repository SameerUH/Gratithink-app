import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
<<<<<<< HEAD
import { VitePWA} from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
    includeAssets: ['cat.svg'],
    manifest: {
      name: "Gratithink",
      short_name: "Grati",
      description: "Reflective journalling app to help focus on studies!!!!",
      theme_color: "##FFC0CB",
      icons: [
        {
          src: 'cat.svg',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'cat.svg',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })],
  base: '/week10'
=======

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
>>>>>>> 966bbc0 (Went through the workshops for React and TailwindCSS so starting to make the app now.)
})
