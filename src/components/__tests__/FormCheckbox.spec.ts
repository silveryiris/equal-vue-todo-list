import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"

import FormCheckbox from "../FormCheckbox.vue"

describe("FormCheckbox", () => {
  it("renders properly", () => {
    const wrapper = mount(FormCheckbox, { props: { inputValue: true } })
    const checkbox = wrapper.find("input[type=checkbox]")
    expect(checkbox.isVisible()).toEqual(true)
    expect(checkbox.attributes().class).toContain("checkbox")
    expect(wrapper.text()).toContain("")
  })

  it("renders default empty label", () => {
    const wrapper = mount(FormCheckbox, { props: { inputValue: true } })
    const label = wrapper.find("span.label-text")
    expect(label.text()).toBe("")
  })

  it("renders input label by props", () => {
    const labelText = "123456TEST!"
    const wrapper = mount(FormCheckbox, { props: { label: labelText } })
    const label = wrapper.find("span.label-text")
    expect(label.text()).toBe(labelText)
  })

  it("switches variant css classes by props", () => {
    const variant = "error"
    const wrapper = mount(FormCheckbox, { props: { variant } })
    const checkbox = wrapper.find("input[type=checkbox]")
    expect(checkbox.attributes().class).toContain("checkbox-error")
  })

  it("switches size css classes by props", () => {
    const size = "lg"
    const wrapper = mount(FormCheckbox, { props: { size } })
    const checkbox = wrapper.find("input[type=checkbox]")
    expect(checkbox.attributes().class).toContain("checkbox-lg")
  })
})
