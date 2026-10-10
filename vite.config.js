import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this site from /vaishali-portfolio/ (the repo name)
export default defineConfig({
  base: '/vaishali-portfolio/',
  plugins: [react(), tailwindcss()],
})
