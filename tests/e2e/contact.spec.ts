import { test, expect } from "@playwright/test";

test.describe("Contact Page", () => {
  test("should load the contact page", async ({ page }) => {
    await page.goto("http://localhost:3000/contact");
    await expect(page).toHaveTitle(/Hello World/);
    await expect(page.locator("h1")).toContainText("Contact Us");
  });

  test("should display the contact form", async ({ page }) => {
    await page.goto("http://localhost:3000/contact");
    await expect(page.locator("#firstName")).toBeVisible();
    await expect(page.locator("#lastName")).toBeVisible();
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#reason")).toBeVisible();
    await expect(page.locator("#message")).toBeVisible();
  });

  test("should display all contact reason options", async ({ page }) => {
    await page.goto("http://localhost:3000/contact");
    const select = page.locator("#reason");
    await expect(select.locator("option[value='General Inquiry']")).toHaveCount(1);
    await expect(select.locator("option[value='Technical Support']")).toHaveCount(1);
    await expect(select.locator("option[value='Partnership']")).toHaveCount(1);
    await expect(select.locator("option[value='Feedback']")).toHaveCount(1);
    await expect(select.locator("option[value='Other']")).toHaveCount(1);
  });

  test("should fill and submit the contact form", async ({ page }) => {
    await page.goto("http://localhost:3000/contact");
    await page.locator("#firstName").fill("Alice");
    await page.locator("#lastName").fill("Chen");
    await page.locator("#email").fill("alice@example.com");
    await page.locator("#reason").selectOption("General Inquiry");
    await page.locator("#message").fill("Hello, this is a test message.");
    await expect(page.getByRole("button", { name: /Send Message/i })).toBeVisible();
  });

  test("should navigate back to home from contact page", async ({ page }) => {
    await page.goto("http://localhost:3000/contact");
    await page.getByRole("link", { name: /Back to Home/i }).click();
    await expect(page).toHaveURL("http://localhost:3000/");
  });

  test("should have no console errors on load", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto("http://localhost:3000/contact");
    expect(errors).toHaveLength(0);
  });
});

test.describe("Home Page Navigation", () => {
  test("should have a Contact Us link", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await expect(
      page.getByRole("link", { name: /Contact Us/i })
    ).toBeVisible();
  });

  test("should navigate to contact page from home", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.getByRole("link", { name: /Contact Us/i }).click();
    await expect(page).toHaveURL(/contact/);
    await expect(page.locator("h1")).toContainText("Contact Us");
  });
});