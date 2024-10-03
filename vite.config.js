import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
import jsconfigPaths from 'vite-jsconfig-paths';

// Vite configuration
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
