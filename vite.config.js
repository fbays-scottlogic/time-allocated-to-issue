import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.NODE_ENV === 'production' ? '/time-allocated-to-issue/' : '/';

export default defineConfig({
  plugins: [react()],
  // Use a project-base only for production builds (GitHub Pages).
  // In development we serve from `/` so the dev server does not 404 on absolute asset paths.
  base,
  server: {}
});
