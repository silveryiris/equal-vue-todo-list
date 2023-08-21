import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vitest/config"
import vue from "@vitejs/plugin-vue"
import svgLoader from "vite-svg-loader"
import vueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"
import path from "path"
import markdown from "unplugin-vue-markdown/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    markdown({}),
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
})
