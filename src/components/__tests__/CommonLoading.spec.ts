import { describe, it, expect } from "vitest"

import { mount } from "@vue/test-utils"
import CommonLoading from "../CommonLoading.vue"

describe("CommonLoading", () => {
  it("renders properly", () => {
    const wrapper = mount(CommonLoading)
    expect(wrapper.isVisible()).toBeTruthy()
  })
})
