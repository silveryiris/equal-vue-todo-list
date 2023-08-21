import { describe, it, expect, vi } from "vitest"
import { mount } from "@vue/test-utils"
import { createRouter, createWebHistory } from "vue-router"
import HeadNavBar from "../HeadNavBar.vue"
import { routes } from "@/router"

const router = createRouter({
  history: createWebHistory(),
  routes,
})

vi.mock("vue-i18n", () => ({
  useI18n: () => ({ t: (key: string) => key }),
}))

describe("HeadNavBar", () => {
  it("matches header nav bar i18n key properly 🧋", async () => {
    router.push("/")

    await router.isReady()

    const mountOptions = {
      global: {
        plugins: [router],
      },
    }

    const wrapper = mount(HeadNavBar, mountOptions)

    expect(wrapper.isVisible()).toBeTruthy()
    expect(wrapper.find("nav").exists()).toBeTruthy()

    const links = wrapper.findAll("nav a")

    expect(links.length).toEqual(2)

    // first link
    expect(links[0].attributes().href).toEqual("/")
    expect(links[0].text()).toEqual("home-page")

    // second link
    expect(links[1].attributes().href).toEqual("/about")
    expect(links[1].text()).toEqual("about-page")
  })
})
