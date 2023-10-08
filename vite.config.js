import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@classes': path.resolve(__dirname, './shared_code/svelete_common/classes'),
    },
  },
  plugins: [svelte()],
})
