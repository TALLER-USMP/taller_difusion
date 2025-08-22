import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    // Solo usar base en producción (build), no en desarrollo
    base: command === 'build' ? '/taller_difusion/' : '/',
    
    plugins: [
      react(),
      tailwindcss(), 
    ],
  }
})