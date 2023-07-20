import { describe, it, expect } from "vitest"

import { shallowMount } from "@vue/test-utils"
import LayoutContainer from "../LayoutContainer.vue"

describe("HeadNavBar", () => {
  it("renders properly", () => {
    const wrapper = shallowMount(LayoutContainer)
    expect(wrapper.isVisible()).toBeTruthy()
  })
})
