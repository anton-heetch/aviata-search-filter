import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      repo: path.resolve(__dirname, './src/repositories'),
      atoms: path.resolve(__dirname, './src/components/atoms'),
      molecules: path.resolve(__dirname, './src/components/molecules'),
      organism: path.resolve(__dirname, './src/components/organism'),
    },
  },

  build: {
    outDir: 'dist',
  },
})
