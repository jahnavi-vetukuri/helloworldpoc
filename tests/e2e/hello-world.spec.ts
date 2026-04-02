import { test, expect } from '@playwright/test';

test.describe('Hello World E2E Tests', () => {
  test('should load the main page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/Hello World/);
    await expect(page.locator('h1')).toHaveText('Welcome to Hello World');
  });

  test('should navigate to the new page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('text=Go to New Page');
    await expect(page).toHaveURL(/new-page/);
    await expect(page.locator('h1')).toHaveText('This is the new page');
  });
});