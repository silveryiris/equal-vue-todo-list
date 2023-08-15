<template>
  <nav id="main-nav-bar" class="join">
    <RouterLink to="/" class="btn btn-neutral join-item btn-sm" title="home page link">
      <HomeIcon class="h-4 w-4" />{{ t("home-page") }}
    </RouterLink>
    <RouterLink to="/about" class="btn btn-neutral join-item btn-sm" title="about page link">
      <TrophyIcon class="h-4 w-4" />{{ t("about-page") }}
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { HomeIcon, TrophyIcon } from "@heroicons/vue/24/solid"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
</script>
