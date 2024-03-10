import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: false, // Enable CORS
    proxy: {
      '/api': {
        target: 'https://acikyesil.bursa.bel.tr/api/3/action/datastore_search?resource_id=1b8c32eb-d586-4d5c-ad6c-ebcb9e856496',
        secure: false,
        changeOrigin: true, // Set to true if the target is a domain and not a path
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite /api path
      },
    },
  },
  plugins: [react()],
})
