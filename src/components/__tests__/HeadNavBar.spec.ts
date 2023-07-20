import { describe, it, expect } from "vitest"

import { mount } from "@vue/test-utils"
import HeadNavBar from "../HeadNavBar.vue"

describe("HeadNavBar", () => {
  it("renders properly", () => {
    const wrapper = mount(HeadNavBar)
    expect(wrapper.isVisible()).toBeTruthy()
  })
})
