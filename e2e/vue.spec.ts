import { test, expect } from "@playwright/test"

// See here how to get started:
// https://playwright.dev/docs/intro

test("visits the app root url", async ({ page }) => {
  await page.goto("/")
  await expect(page.locator(".container.mx-auto")).toBeVisible()
})

test("switch layouts by page route meta", async ({ page }) => {
  await page.goto("/")
  await expect(page.locator("#main-layout")).toHaveClass("@container/main container mx-auto p-4")

  await page.goto("/about")
  await expect(page.locator("#default-layout")).toHaveClass(
    "@container/default container mx-auto p-4"
  )
})
