<template>
  <div class="min-h-screen bg-base-200 sm:hero">
    <div class="text-center sm:hero-content">
      <div class="max-w-md">
        <h1 class="pt-8 text-5xl font-bold sm:pt-0">{{ t("home-page") }}</h1>
        <component
          class="prose w-[100vw] px-4 py-12 pb-4 text-left prose-p:whitespace-normal prose-p:break-words"
          :is="Features"
        />
        <a class="btn btn-primary m-4" :href="projectSourceLink">{{ t("project-link") }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { useMarkdown } from "@/composables/markdown"
import { useSiteStore } from "@/stores/site"

const { t, locale } = useI18n()

const { loadMarkdownComponent } = useMarkdown()

const { projectSourceLink } = useSiteStore()

const Features = loadMarkdownComponent(locale, "home/features")
</script>
