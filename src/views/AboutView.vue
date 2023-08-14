<template>
  <div class="hero min-h-screen" :style="getGradientBackground">
    <div class="hero-overlay bg-opacity-50"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-12 text-5xl font-bold">Backgrounds</h1>

        <p class="mb-2">linear-gradient</p>
        <p class="mb-12 font-bold">
          <span>( </span>
          <span>{{ `${degree}` }}</span>
          <span> deg , </span>
          <span :style="`color:${colors.c1}`">{{ `${colors.c1} ` }}</span>
          <span> , </span>
          <span :style="`color:${colors.c2}`">{{ `${colors.c2} ` }}</span>
          <span> ) </span>
        </p>

        <div class="mb-12">
          <button @click="changeBackground" class="btn btn-accent btn-sm mx-auto my-4">
            <CursorArrowRaysIcon class="h-5 w-5" />
            Change Background
          </button>
        </div>

        <RouterLink class="btn btn-neutral btn-sm" to="/" title="home page link">
          <HomeIcon class="h-4 w-4" /> Home
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HomeIcon, CursorArrowRaysIcon } from "@heroicons/vue/24/solid"
import { useGradientBackground } from "@/composables/background"

const { colors, degree, changeBackground, getGradientBackground } = useGradientBackground()
</script>
