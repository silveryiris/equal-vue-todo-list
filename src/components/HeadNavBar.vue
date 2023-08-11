<template>
  <nav class="join">
    <RouterLink to="/" class="btn btn-neutral join-item btn-sm">
      <HomeIcon class="h-4 w-4" />Home
    </RouterLink>
    <RouterLink to="/about" class="btn btn-neutral join-item btn-sm">
      <TrophyIcon class="h-4 w-4" />About
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { HomeIcon, TrophyIcon } from "@heroicons/vue/20/solid"
</script>
