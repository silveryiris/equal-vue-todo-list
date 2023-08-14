<template>
  <div id="main-layout" class="drawer @container/main">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="navbar w-full bg-base-300">
        <div class="flex-none lg:hidden">
          <label for="my-drawer" class="btn btn-square btn-ghost">
            <Bars3Icon class="inline-block h-6 w-6 stroke-current" />
          </label>
        </div>
        <div class="mx-2 hidden flex-1 px-2 font-bold md:flex" title="nav bar title">
          <SiteLogoIcon class="mr-2 h-6 w-6" alt="site logo" /> {{ navBarTitle }}
        </div>
        <div class="mx-2 flex w-full justify-center px-2 md:hidden" title="mobile nav bar logo">
          <SiteLogoIcon class="mr-14 h-6 w-6" alt="mobile site logo" />
        </div>
        <div class="hidden md:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li>
              <a :href="projectSourceLink"><GithubIcon class="h-4 w-4" /></a>
            </li>
            <li class="mx-2 justify-center"><HeadNavBar class="gap-0 p-0" /></li>
            <li class="justify-center"><SwitchDarkMode class="mx-2 gap-0 p-0" /></li>
          </ul>
        </div>
      </div>
      <!-- Page content here -->
      <slot></slot>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu h-full w-80 bg-base-200 p-4">
        <!-- Sidebar content here -->
        <li class="grid grid-cols-1">
          <div class="mb-4 text-lg">{{ navBarTitle }}</div>
          <div class="flex">
            <a class="flex" :href="projectSourceLink">
              <GithubIcon class="mr-2 h-5 w-5" alt="github icon" />
              <span class="text-accent">Project link</span>
            </a>
          </div>
        </li>

        <div class="divider" />

        <li class="text-lg">
          <RouterLink to="/" title="side home link">
            <HomeIcon class="mr-4 h-4 w-4" />
            Home
          </RouterLink>
        </li>
        <li class="text-lg">
          <RouterLink to="about" title="side about link">
            <TrophyIcon class="mr-4 h-4 w-4" />
            About
          </RouterLink>
        </li>
        <li class="mt-auto" title="bottom dark mode switch"><SwitchDarkMode /></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bars3Icon, HomeIcon, TrophyIcon } from "@heroicons/vue/24/solid"
import HeadNavBar from "@/components/HeadNavBar.vue"
import SwitchDarkMode from "@/components/SwitchDarkMode.vue"
import { useSiteStore } from "@/stores/site"
import SiteLogoIcon from "@/assets/icons/site-logo.svg"
import GithubIcon from "@/assets/icons/github.svg"

const { navBarTitle, projectSourceLink } = useSiteStore()
</script>
