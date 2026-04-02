import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load the home page", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await expect(page).toHaveTitle(/Hello World/);
    await expect(page.locator("h1")).toContainText("Hello World");
  });

  test("should have a link to the About page", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await expect(
      page.getByRole("link", { name: /Meet the Team/i })
    ).toBeVisible();
  });

  test("should navigate to About page", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.getByRole("link", { name: /Meet the Team/i }).click();
    await expect(page).toHaveURL(/about/);
    await expect(page.locator("h1")).toContainText("Meet the Team");
  });
});

test.describe("About Page", () => {
  test("should load the about page", async ({ page }) => {
    await page.goto("http://localhost:3000/about");
    await expect(page.locator("h1")).toContainText("Meet the Team");
  });

  test("should display team member cards", async ({ page }) => {
    await page.goto("http://localhost:3000/about");
    await expect(page.getByText("Alice Chen")).toBeVisible();
    await expect(page.getByText("Bob Martinez")).toBeVisible();
    await expect(page.getByText("Carol Smith")).toBeVisible();
    await expect(page.getByText("David Kim")).toBeVisible();
  });

  test("should have a back link to home", async ({ page }) => {
    await page.goto("http://localhost:3000/about");
    await page.getByRole("link", { name: /Back to Home/i }).click();
    await expect(page).toHaveURL("http://localhost:3000/");
  });
});