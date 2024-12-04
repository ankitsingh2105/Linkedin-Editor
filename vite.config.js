import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: 'index.html',
        content: 'src/contentScript.jsx', 
      },
      output: {
        entryFileNames: (chunk) => {
          if (chunk.name === 'content') {
            return 'contentScript.js';
          }
          if (chunk.name === 'popup') {
            return 'assets/[name].js'; 
          }
          return '[name].js';
        },
      },
    },
  },
});
