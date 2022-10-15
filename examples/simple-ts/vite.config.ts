import { defineConfig } from 'vite'
import { VitePlaygroundElements } from 'vite-plugin-playground-elements'

export default defineConfig({
  plugins: [
    VitePlaygroundElements({
      ide: {
        editableFileSystem: false,
      },
    }),
  ],
})
