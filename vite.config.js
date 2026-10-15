import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The demo is served from https://erfankhadiv.github.io/Kouman/
  base: '/Kouman/',
})
