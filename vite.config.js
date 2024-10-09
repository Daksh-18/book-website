import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
  },
<<<<<<< Updated upstream
  base: '/book-website/',
=======
  // base: '/book-website/',
>>>>>>> Stashed changes
})
