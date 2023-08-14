import { defineStore } from "pinia"
import { ref } from "vue"

export const useSiteStore = defineStore("site-configs", () => {
  const navBarTitle = ref("Verbena Vue Template")
  const projectSourceLink = ref("https://github.com/silveryiris/verbena-vue-template")

  return { navBarTitle, projectSourceLink }
})
