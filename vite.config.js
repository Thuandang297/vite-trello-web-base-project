import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [
    react(),
    svgr(),
    tailwindcss()
  ],
  resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  }
})
