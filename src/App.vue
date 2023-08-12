<template>
  <Suspense>
    <template #default>
      <LayoutContainer />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import LayoutContainer from "@/components/LayoutContainer.vue"
import { useThemeStore } from "@/stores/theme"

const { updateDataTheme } = useThemeStore()

updateDataTheme()
</script>
