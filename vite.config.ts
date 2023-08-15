import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vitest/config"
import vue from "@vitejs/plugin-vue"
import svgLoader from "vite-svg-loader"
import vueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    vueI18nPlugin({
      include: [path.resolve(__dirname, "./src/locales/**")],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    coverage: {
      provider: "v8",
    },
    setupFiles: "vitest.config.ts",
  },
})
