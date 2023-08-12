<template>
  <Suspense>
    <template #default>
      <div>
        <component :is="currentLayout" :key="currentLayout ? currentLayout.name : 'nope'">
          <RouterView />
        </component>
      </div>
    </template>
    <template #fallback><CommonLoading /></template>
  </Suspense>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import { watch, shallowRef } from "vue"
import { useLayout } from "@/composables/layout"
import CommonLoading from "@/components/CommonLoading.vue"

const route = useRoute()

const currentLayout = shallowRef()

watch(route, async (to) => {
  currentLayout.value = useLayout(to.meta?.layout)
})
</script>
