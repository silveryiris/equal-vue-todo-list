import { describe, it, expect } from "vitest"

import { mount } from "@vue/test-utils"
import { createRouter, createWebHistory } from "vue-router"
import LayoutContainer from "../LayoutContainer.vue"
import { routes } from "@/router"

const router = createRouter({
  history: createWebHistory(),
  routes,
})

describe("Layout container renders properly", () => {
  it("renders properly", async () => {
    router.push("/")

    await router.isReady()

    const mountOptions = {
      global: {
        plugins: [router],
      },
    }

    const wrapper = mount(LayoutContainer, mountOptions)
    expect(wrapper.isVisible()).toBeTruthy()
  })
})
