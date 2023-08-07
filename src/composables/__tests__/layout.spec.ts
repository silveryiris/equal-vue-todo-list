import { describe, it, expect } from "vitest"

import { useLayout, getRouteMetaLayout } from "../layout"

describe("composables layout", () => {
  it("returns Vue component by layout name", () => {
    const t1 = useLayout("DefaultLayout")

    expect(t1.name).toEqual("DefaultLayout")

    const t2 = useLayout("MainLayout")

    expect(t2.name).toEqual("MainLayout")
  })

  it("returns layout name by route meta layout", () => {
    const mockRoute = {
      meta: { layout: "main" },
    }

    const t1 = getRouteMetaLayout()

    expect(t1).toEqual("Default")

    const t2 = getRouteMetaLayout(mockRoute.meta.layout)

    expect(t2).toEqual("Main")
  })
})
