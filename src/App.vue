<script setup lang="ts">
import { ref } from "vue"
import { RouterLink, RouterView } from "vue-router"
import HelloWorld from "./components/HelloWorld.vue"
import FormCheckbox from "./components/FormCheckbox.vue"

const typeCheck = ref(false)
</script>

<template>
  <header class="p-4">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <FormCheckbox class="mr-2" label="Checkbox 1" variant="warning" size="lg"></FormCheckbox>
      <FormCheckbox class="mr-2" label="Checkbox 2" :input-value="typeCheck"></FormCheckbox>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
