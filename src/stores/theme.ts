import { defineStore } from "pinia"
import { useStorage, usePreferredDark } from "@vueuse/core"
import { computed } from "vue"

export type DefaultThemeSettings = { isDarkTheme: Boolean; isSaved: Boolean }

export const useThemeStore = defineStore("theme", () => {
  const isDefaultDarkTheme = usePreferredDark()

  // Load default local saved settings，isSaved false will initial settings
  const theDefault: DefaultThemeSettings = { isDarkTheme: true, isSaved: false }

  const themeStorage = useStorage("theme", theDefault)

  // First time setup
  if (themeStorage.value.isSaved === false) {
    const isDark = isDefaultDarkTheme.value === true

    themeStorage.value.isDarkTheme = isDark

    themeStorage.value.isSaved = true
  }

  const switchDarkMode = () => {
    themeStorage.value.isDarkTheme = !themeStorage.value.isDarkTheme

    updateDataTheme()
  }

  const isDarkTheme = computed(() => themeStorage.value.isDarkTheme)

  // Change theme data on body
  const updateDataTheme = () => {
    const theme = themeStorage.value.isDarkTheme ? "dark" : "light"

    const body = document.querySelector("body")

    if (body) body.dataset.theme = theme
  }

  return { isDefaultDarkTheme, themeStorage, switchDarkMode, updateDataTheme, isDarkTheme }
})
