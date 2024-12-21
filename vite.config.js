import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@ag-grid-community/client-side-row-model'],
  },
  resolve: {
    alias: {
      global: 'global', // Resolves `global` to the polyfill
      
    },
  },
  define: {
    global: 'globalThis', // Ensures `global` is defined globally in the environment
  },
  
});
