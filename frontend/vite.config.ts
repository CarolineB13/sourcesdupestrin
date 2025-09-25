import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sourcesdupestrin/',              // pour GitHub Pages / sous-dossier
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4000',   // ton mini-serveur PHP local
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, ''),
      },
    },
  },
})
