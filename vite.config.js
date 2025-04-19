import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', // Esto permite que los enlaces relativos funcionen correctamente en GitHub Pages
})
