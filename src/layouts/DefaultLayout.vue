<template>
  <div id="default-layout" class="container mx-auto p-4 @container/default">
    <HeadNavBar></HeadNavBar>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import HeadNavBar from "@/components/HeadNavBar.vue"
</script>
