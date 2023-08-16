import { fileURLToPath } from "node:url"
import { mergeConfig } from "vite"
import { configDefaults, defineConfig } from "vitest/config"
import { config } from "@vue/test-utils"
import viteConfig from "./vite.config"
import { createI18n } from "vue-i18n"

const i18n = createI18n({})
config.global.plugins = [i18n]

config.global.mocks = {
  t: (key: string) => key,
}

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/*"],
      root: fileURLToPath(new URL("./", import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/],
      },
    },
  })
)
