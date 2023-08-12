import { test, expect } from "@playwright/test"

// See here how to get started:
// https://playwright.dev/docs/intro

test("home page top main nav bar should working", async ({ page }) => {
  await page.goto("/")
  await expect(page.locator("#main-layout")).toBeVisible()
  await expect(page.locator("#main-nav-bar")).toBeVisible()

  await expect(page.getByTitle("home page link")).toHaveText("Home ")
  await expect(page.getByTitle("home page link")).toHaveAttribute("href", "/")
  await expect(page.getByTitle("about page link")).toHaveText("About ")
  await expect(page.getByTitle("about page link")).toHaveAttribute("href", "/about")

  await page.getByTitle("about page link").click()

  await expect(page).toHaveURL(/.*about/)

  await page.getByTitle("home page link").click()

  await expect(page).toHaveURL("/")

  await expect(page.locator("h1")).toHaveText("Home")
})
