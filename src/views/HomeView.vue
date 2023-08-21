<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">{{ t("home-page") }}</h1>
        <component class="prose py-12 text-left" :is="Features" />
        <button class="btn btn-primary">{{ t("hello") }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { useMarkdown } from "@/composables/markdown"

const { t, locale } = useI18n()
const { loadMarkdownComponent } = useMarkdown()

const Features = loadMarkdownComponent(locale, "home/features")
</script>
