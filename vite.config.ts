import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

/**
 * Folds the built stylesheet into the HTML and drops the <link>.
 *
 * The stylesheet is render-blocking, so on a throttled connection its round
 * trip sits directly in front of first paint — measured at ~150ms of the mobile
 * LCP. It's small enough (~6 kB gzipped) that inlining is the better trade: one
 * fewer request, and nothing blocks the first paint. The cost is that the CSS
 * is no longer cached separately from the HTML, which is fine here — index.html
 * is served no-cache anyway.
 */
function inlineCriticalCss(): Plugin {
  return {
    name: 'inline-critical-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const html = Object.values(bundle).find(
        (file) => file.type === 'asset' && file.fileName.endsWith('.html')
      )
      if (!html || html.type !== 'asset') return

      let source = String(html.source)
      for (const [key, file] of Object.entries(bundle)) {
        if (file.type !== 'asset' || !file.fileName.endsWith('.css')) continue
        const linkTag = new RegExp(`<link[^>]+href="[^"]*${file.fileName}"[^>]*>`)
        if (!linkTag.test(source)) continue
        source = source.replace(linkTag, `<style>${file.source}</style>`)
        delete bundle[key]
      }
      html.source = source
    },
  }
}

export default defineConfig({
  root: path.resolve(__dirname, '.'),
  publicDir: path.resolve(__dirname, 'assets'),
  plugins: [react(), svgr(), inlineCriticalCss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      output: {
        // React changes far less often than the app does, so its own chunk stays
        // in the browser cache across deploys. Matched by path rather than by
        // entry name so react-dom's internals land here too, not in the app
        // chunk. The sections split themselves via the dynamic imports in App.tsx.
        manualChunks(id) {
          if (/node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return 'react-vendor'
        },
      },
    },
  },
})
