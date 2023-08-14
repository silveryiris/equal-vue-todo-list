<template>
  <div
    class="relative h-6 w-10 rounded-3xl border-[0.5px] border-neutral-content bg-base-100 transition"
    @click="switchTheme"
  >
    <button
      :class="isDarkTheme ? darkStyleClass : lightStyleClass"
      class="btn btn-circle btn-xs absolute"
      type="button"
      title="switch theme icon"
    >
      <span>
        <MoonIcon v-show="isDarkTheme" class="h-4 w-4" />
        <SunIcon v-show="!isDarkTheme" class="h-4 w-4 text-white" />
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid"
import { useThemeStore } from "@/stores/theme"
import { storeToRefs } from "pinia"

const themeStore = useThemeStore()

const { isDarkTheme } = storeToRefs(themeStore)
const { switchTheme } = themeStore

const darkStyleClass = ["right-[-5px]", "btn-neutral"]
const lightStyleClass = ["left-[-5px]", "btn-success"]
</script>
