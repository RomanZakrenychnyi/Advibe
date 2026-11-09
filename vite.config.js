import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Public base path. Set VITE_BASE (e.g. "/Advibe/" for GitHub Pages) in .env or the shell.
// Defaults to "/" (site served from the domain root).
function normalizeBase(value) {
  if (!value || value === '/') {
    return '/'
  }
  const withLeading = value.startsWith('/') ? value : `/${value}`
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    base: normalizeBase(env.VITE_BASE),
  }
})
