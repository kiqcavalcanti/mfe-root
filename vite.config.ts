import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vueJsx(),
    vue({})
  ],
  build: {
    outDir: 'dist/elements',
    rollupOptions: {
      input: {
        'comerc-meu-component': resolve(__dirname, 'src/elements/ComercMeuComponent.ts'),
      },
      output: {
        entryFileNames(chunkInfo) {
          return `${chunkInfo.name}.js`
        },
      },
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
