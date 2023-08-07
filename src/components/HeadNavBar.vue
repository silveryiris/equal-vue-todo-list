<template>
  <nav class="join">
    <RouterLink to="/" class="btn btn-secondary btn-sm join-item">
      <HomeIcon class="h-4 w-4" />Home
    </RouterLink>
    <RouterLink to="/about" class="btn btn-secondary btn-sm join-item">
      <TrophyIcon class="h-4 w-4" />About
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { HomeIcon, TrophyIcon } from "@heroicons/vue/20/solid"
</script>
