<template>
  <div id="main-layout" class="@container/main container mx-auto p-4">
    <HeadNavBar></HeadNavBar>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import HeadNavBar from "@/components/HeadNavBar.vue"
</script>
