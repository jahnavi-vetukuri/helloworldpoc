import { test, expect } from "@playwright/test";

test.describe("Feed Page", () => {
  let consoleErrors: string[] = [];

  test.beforeEach(async ({ page }) => {
    consoleErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    await page.goto("http://localhost:3000/feed");
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshot = await page.screenshot();
      await testInfo.attach("failure-screenshot", {
        body: screenshot,
        contentType: "image/png",
      });
    }
  });

  test("should load the feed page without errors", async ({ page }) => {
    await expect(page).toHaveTitle(/Hello World/);
    await expect(page.getByTestId("feed-page")).toBeVisible();
    expect(consoleErrors).toHaveLength(0);
  });

  test("should display the main heading", async ({ page }) => {
    await expect(page.getByTestId("feed-heading")).toBeVisible();
    await expect(page.getByTestId("feed-heading")).toHaveText("The Pulse");
  });

  test("should render 5 posts in the feed", async ({ page }) => {
    const posts = page.getByTestId("feed-list").locator("article");
    await expect(posts).toHaveCount(5);
  });

  test("should show the Holiday post", async ({ page }) => {
    await expect(page.getByTestId("feed-post-1")).toBeVisible();
    await expect(page.getByTestId("post-category-1")).toContainText("Holiday");
    await expect(page.getByTestId("feed-post-1")).toContainText("Spring Break");
  });

  test("should show the Product Update post", async ({ page }) => {
    await expect(page.getByTestId("feed-post-2")).toBeVisible();
    await expect(page.getByTestId("post-category-2")).toContainText("Product Update");
    await expect(page.getByTestId("feed-post-2")).toContainText("Dark Mode");
  });

  test("should show the Launch post", async ({ page }) => {
    await expect(page.getByTestId("feed-post-3")).toBeVisible();
    await expect(page.getByTestId("post-category-3")).toContainText("Launch");
    await expect(page.getByTestId("feed-post-3")).toContainText("v2.0");
  });

  test("should show the Promotion post", async ({ page }) => {
    await expect(page.getByTestId("feed-post-4")).toBeVisible();
    await expect(page.getByTestId("post-category-4")).toContainText("Promotion");
    await expect(page.getByTestId("feed-post-4")).toContainText("David Kim");
  });

  test("should show the Anniversary post", async ({ page }) => {
    await expect(page.getByTestId("feed-post-5")).toBeVisible();
    await expect(page.getByTestId("post-category-5")).toContainText("Anniversary");
    await expect(page.getByTestId("feed-post-5")).toContainText("Bob");
  });

  test("should toggle a reaction on a post", async ({ page }) => {
    const kudosBtn = page.getByTestId("reaction-1-kudos");
    const initialText = await kudosBtn.textContent();
    await kudosBtn.click();
    await expect(kudosBtn).toHaveAttribute("aria-pressed", "true");
    const updatedText = await kudosBtn.textContent();
    expect(updatedText).not.toEqual(initialText);
  });

  test("should untoggle a reaction when clicked again", async ({ page }) => {
    const kudosBtn = page.getByTestId("reaction-1-kudos");
    await kudosBtn.click();
    await expect(kudosBtn).toHaveAttribute("aria-pressed", "true");
    await kudosBtn.click();
    await expect(kudosBtn).toHaveAttribute("aria-pressed", "false");
  });

  test("should navigate back to home from feed page", async ({ page }) => {
    await page.getByRole("link", { name: /Back to Home/i }).click();
    await expect(page).toHaveURL("http://localhost:3000/");
  });
});

test.describe("Home Page — Feed Link", () => {
  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshot = await page.screenshot();
      await testInfo.attach("failure-screenshot", {
        body: screenshot,
        contentType: "image/png",
      });
    }
  });

  test("should show The Pulse link on the home page", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await expect(page.getByRole("link", { name: /The Pulse/i })).toBeVisible();
  });

  test("should navigate to feed from home page", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.getByRole("link", { name: /The Pulse/i }).click();
    await expect(page).toHaveURL(/feed/);
    await expect(page.getByTestId("feed-heading")).toHaveText("The Pulse");
  });
});
