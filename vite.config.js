import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    target: 'esnext',
    rollupOptions: {
      external: /\.skel$/,
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    host: true,
    port: 8080,
  },
})