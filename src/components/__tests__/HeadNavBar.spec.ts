import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import { createRouter, createWebHistory } from "vue-router"
import HeadNavBar from "../HeadNavBar.vue"
import { routes } from "@/router"

const router = createRouter({
  history: createWebHistory(),
  routes,
})

describe("HeadNavBar", () => {
  it("home page header bar renders properly", async () => {
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
    expect(links[0].text()).toEqual("Home")

    // second link
    expect(links[1].attributes().href).toEqual("/about")
    expect(links[1].text()).toEqual("About")
  })
})
