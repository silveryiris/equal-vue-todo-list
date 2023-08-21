import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"
import { useI18n } from "vue-i18n"

export type LocaleCodes = "en" | "tw"
export type DefaultLocaleSettings = { locale: LocaleCodes }

const isoCodeMap = new Map([
  ["tw", "zh-TW"],
  ["en", "en"],
])

export const useLocaleStore = defineStore("locale", () => {
  const validLocaleCodes: LocaleCodes[] = ["en", "tw"]

  const theDefault: DefaultLocaleSettings = { locale: "en" }

  const localeStorage = useStorage("locale", theDefault)

  const { locale } = useI18n()

  const changeLocale = (code: LocaleCodes) => {
    if (validLocaleCodes.includes(code) === false) {
      console.error(`🍍 [store][locale] Locale ${code} is not available!`)

      return
    }

    localeStorage.value.locale = code
    // Sync with vue-i18n
    locale.value = code

    // Update HTML lang
    const lang = isoCodeMap.get(code) || "en"

    document.querySelector("html")?.setAttribute("lang", lang)
  }

  // Startup sync with vue-i18n
  changeLocale(localeStorage.value.locale)

  return { localeStorage, changeLocale, isoCodeMap, validLocaleCodes }
})
