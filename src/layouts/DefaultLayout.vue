<template>
  <div id="default-layout" class="@container/default container mx-auto p-4">
    <HeadNavBar></HeadNavBar>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import HeadNavBar from "@/components/HeadNavBar.vue"
</script>
