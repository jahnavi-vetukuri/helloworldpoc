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
   - `locator('h1')`, `locator('[data-testid]')`
   - CSS selectors — last resort only

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