<template>
  <div id="main-layout" class="drawer @container/main">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="navbar w-full bg-base-300">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-6 w-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
        <div class="mx-2 flex-1 px-2">Navbar Title</div>
        <div class="flex-none lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li><a>Navbar Item 1</a></li>
            <li><a>Navbar Item 2</a></li>
            <li class="justify-center"><HeadNavBar class="gap-0 p-0" /></li>
            <li class="justify-center"><SwitchTheme class="mx-2 gap-0 p-0" /></li>
          </ul>
        </div>
      </div>
      <!-- Page content here -->
      Content
      <slot></slot>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="menu h-full w-80 bg-base-200 p-4">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeadNavBar from "@/components/HeadNavBar.vue"
import SwitchTheme from "@/components/SwitchTheme.vue"
</script>
