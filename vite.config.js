import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //host: '192.168.2.223',
    port: 3002,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    },
    /*modules: {
      localsConvention: 'camelCase',
    },*/
  }
})
