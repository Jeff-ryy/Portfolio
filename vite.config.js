import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Allows access from your IP
    port: 3000,      // Replace with your desired port
  },
  plugins: [react()],
});

