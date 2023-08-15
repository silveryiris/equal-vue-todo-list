<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">{{ t("home-page") }}</h1>
        <p class="py-6">
          Lorem ipsum sollicitudin malesuada tellus potenti quisque vel imperdiet, justo lobortis
          habitasse fringilla fames ornare per, conubia neque potenti dui faucibus netus fames.
        </p>
        <button class="btn btn-primary">{{ t("hello") }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t } = useI18n()
</script>
