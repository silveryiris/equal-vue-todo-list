import { computed, defineAsyncComponent } from "vue"
import type { Ref } from "vue"

// https://vitejs.dev/guide/features.html#glob-import
const loadMarkdownComponent = (locale: Ref<String>, filePath: string) => {
  const modules: any = import.meta.glob(["@/contents/**/*.md"])

  const baseLocation = "/src/contents"

  const result = computed(() => {
    const path = `${baseLocation}/${filePath}.${locale.value.toLowerCase()}.md`

    const loadModule = modules[path]

    return locale.value ? defineAsyncComponent(() => loadModule()) : ""
  })

  return result
}

export const useMarkdown = () => {
  return { loadMarkdownComponent }
}
