import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 
  ],
  // test: {
  //   globals: true,         // ✅ gives you `expect`, `describe`, `it/test`
  //   environment: 'jsdom',  // ✅ needed for React component testing
  //   setupFiles: './src/setupTests.ts', // we'll create this
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
