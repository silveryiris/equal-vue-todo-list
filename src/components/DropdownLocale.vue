<template>
  <div :class="dropdownPositionStyle" class="dropdown m-0 p-0">
    <label tabindex="0" class="btn btn-ghost rounded-btn btn-sm">
      <LanguageIcon class="h-4 w-4" />
    </label>
    <ul
      tabindex="0"
      class="menu dropdown-content rounded-box top-1 z-[1] mt-8 w-52 bg-base-300 p-2 font-bold shadow"
    >
      <li>
        <a @click="changeLocale('en')">English</a>
      </li>
      <li>
        <a @click="changeLocale('tw')">繁體中文</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue"
import { LanguageIcon } from "@heroicons/vue/24/outline"
import { useLocaleStore } from "@/stores/locale"

const { changeLocale } = useLocaleStore()

export type DropdownPosition = "end" | "top" | "bottom" | "left" | "right"

const props = defineProps({
  dropdownPosition: { type: Array as PropType<DropdownPosition[]>, default: () => ["end"] },
})

const { dropdownPosition } = props

const dropdownPositionStyle = computed(() => dropdownPosition.map((x) => `dropdown-${x}`))
</script>
