import { defineAsyncComponent } from "vue"

export const getRouteMetaLayout = (key?: string | unknown) => {
  const defaultLayoutKey = "Default"

  // const metaLayout = route.meta?.layout as string | null

  const result =
    key && typeof key === "string" ? key[0].toUpperCase() + key.slice(1) : defaultLayoutKey

  return result
}

export const useLayout = (key: string | unknown) => {
  const layoutKey = getRouteMetaLayout(key)

  const layoutComponent = defineAsyncComponent(() => {
    // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
    return import(`../layouts/${layoutKey}Layout.vue`)
  })

  layoutComponent.name = layoutKey

  return layoutComponent
}
