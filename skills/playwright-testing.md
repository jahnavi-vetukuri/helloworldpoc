# Skill: Playwright Testing

## Purpose
Step-by-step rules the Tester agent MUST follow when writing and running tests.

---

## Test File Location
- All tests go in: `tests/e2e/[feature-name].spec.ts`
- One spec file per feature/page

---

## Test Writing Rules
1. Always import from `@playwright/test`
2. Always use `test.describe()` to group tests per page/feature
3. Always navigate using full URL: `http://localhost:3000/[route]`
4. Use `page.locator()` over `page.$()`
5. Use semantic selectors in order of preference:
   - `getByRole()` — preferred
   - `getByText()`
   - `locator('h1')`, `locator('[data-testid="..."]')`
   - CSS selectors — last resort only

---

## Hooks

### `test.beforeEach` — Use when multiple tests share the same starting URL
Deduplicate `page.goto()` calls inside a `test.describe()` block:

```typescript
test.describe("Contact Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/contact");
  });

  test("should display heading", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Contact Us");
  });
});
```

**Rule**: If 3 or more tests in a describe block navigate to the same URL, extract the `page.goto()` into `test.beforeEach`.

### `test.afterEach` — Use to capture failure evidence
Always attach a screenshot on failure for debugging handoff:

```typescript
test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshot = await page.screenshot();
    await testInfo.attach("failure-screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  }
});
```

**Rule**: Every `test.describe()` block that tests a page MUST include this `afterEach` hook.

### Console Error Collection Hook — Required for error-checking tests
Set up the console listener BEFORE navigation using `beforeEach`, not inside individual tests:

```typescript
test.describe("Home Page", () => {
  let consoleErrors: string[] = [];

  test.beforeEach(async ({ page }) => {
    consoleErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    await page.goto("http://localhost:3000/");
  });

  test("should have no console errors", async () => {
    expect(consoleErrors).toHaveLength(0);
  });
});
```

**Rule**: Never register `page.on("console", ...)` inside a single test. Always use `beforeEach` so the listener is attached before navigation.

---

---

## Required Test Coverage Per Feature
For every new page or component, the Tester MUST verify:
- [ ] Page loads without errors (HTTP 200)
- [ ] Page title is correct
- [ ] Main heading (h1) is visible and correct
- [ ] Key UI elements are visible
- [ ] Navigation links work (click → correct URL)
- [ ] No console errors during load

---

## Running Tests
```bash
# Run all tests
npm run test

# Run specific spec file
npx playwright test tests/e2e/[feature].spec.ts

# Run with UI mode for debugging
npx playwright test --ui

# Run with headed browser
npx playwright test --headed
```

---

## Post-run Checklist
1. All tests must PASS before marking task done
2. If any test fails: capture screenshot + console log → hand to Debugger agent
3. Attach HTML report path in task summary: `playwright-report/index.html`

---

## Evidence Requirements
Tester agent MUST output:
- Pass/fail count
- Screenshot of final UI state
- Any console errors captured during test