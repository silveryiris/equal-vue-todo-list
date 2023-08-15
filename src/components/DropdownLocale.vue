<template>
  <div class="dropdown dropdown-end m-0 p-0">
    <label tabindex="0" class="btn btn-ghost rounded-btn btn-sm">
      <LanguageIcon class="h-4 w-4" />
    </label>
    <ul
      tabindex="0"
      class="menu dropdown-content rounded-box top-1 z-[1] mt-8 w-52 bg-base-300 p-2 font-bold shadow"
    >
      <li>
        <a @click="locale = 'en'">English</a>
      </li>
      <li>
        <a @click="locale = 'tw'">繁體中文</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { LanguageIcon } from "@heroicons/vue/24/outline"
import { useI18n } from "vue-i18n"

const { locale } = useI18n()
</script>
