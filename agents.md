# Overview of Agents in the Project

This document outlines the various agents utilized in the hello-world-agentic-frontend project, detailing their roles and interactions within the development environment.

## Agents

### 1. Implementer Agent
- **Role**: Responsible for implementing requested changes in the codebase.
- **Capabilities**:
  - Modify existing components and pages.
  - Create new components and pages as per specifications.
  - Ensure adherence to coding standards and best practices.

### 2. Debugger Agent
- **Role**: Assists in identifying and fixing issues within the application.
- **Capabilities**:
  - Utilize Chrome DevTools for debugging frontend applications.
  - Analyze console logs and network requests to diagnose problems.
  - Provide insights and suggestions for resolving identified issues.

### 3. Tester Agent
- **Role**: Responsible for writing and executing tests to verify application functionality.
- **Capabilities**:
  - Write end-to-end tests using Playwright.
  - Execute tests and report results.
  - Ensure that new features and changes do not introduce regressions.

## Multi-Channel Protocol (MCP) Configurations

### 1. Next.js MCP
- **Purpose**: Defines how the agent interacts with the Next.js framework.
- **Key Features**:
  - Configuration for routing and page rendering.
  - Integration with Next.js lifecycle methods.

### 2. Chrome DevTools MCP
- **Purpose**: Specifies how the agent can utilize Chrome DevTools for debugging.
- **Key Features**:
  - Access to console logs and network activity.
  - Tools for inspecting elements and performance profiling.

### 3. Playwright MCP
- **Purpose**: Outlines how the agent can run tests and interact with the browser.
- **Key Features**:
  - Configuration for launching browsers and executing test scripts.
  - Support for capturing screenshots and recording videos during tests.

## Skills Required

### Frontend Development
- Proficiency in React, Next.js, and TailwindCSS.
- Understanding of component-based architecture and state management.

### Playwright Testing
- Knowledge of writing automated tests using Playwright.
- Familiarity with test-driven development (TDD) practices.

### Chrome DevTools Debugging
- Skills in using Chrome DevTools for effective debugging.
- Ability to analyze performance and optimize frontend applications.

## Conclusion

The agents in this project work collaboratively to enhance the development process, ensuring that changes are implemented efficiently, issues are resolved promptly, and the application is thoroughly tested. This structured approach allows for a more streamlined and effective frontend development workflow.

# Agents Orchestration Policy

## Stack
- Next.js App Router + React + TailwindCSS + ShadCN
- TypeScript strict mode
- Playwright for E2E testing
- Puppeteer MCP for browser inspection
- Project root: `e:\poc\hello-world-agentic-frontend`
- Dev server: `http://localhost:3000`

---

## MCP Servers in Use

| MCP Server | Config File | Purpose |
|---|---|---|
| `@playwright/mcp` | `mcp/playwright.mcp.json` | Browser automation, screenshots, interaction |
| `@modelcontextprotocol/server-puppeteer` | `mcp/chrome-devtools.mcp.json` | DOM inspection, console logs, network |
| `@modelcontextprotocol/server-everything` | `mcp/nextjs.mcp.json` | Terminal commands, file ops, dev server |

---

## Subagents

| Agent | Spec File | Responsibility |
|---|---|---|
| Implementer | `subagents/implementer.md` | Write code changes only |
| Debugger | `subagents/debugger.md` | Runtime verification only |
| Tester | `subagents/tester.md` | Write + run Playwright tests only |

---

## Standard Feature Loop

```
User Request
    │
    ▼
[Orchestrator] reads request → assigns to Implementer
    │
    ▼
[Implementer]
  - reads skills/frontend-dev.md
  - implements code changes
  - outputs: changed files + verification URL
    │
    ▼
[Debugger]
  - reads skills/chrome-devtools-debugging.md
  - uses Puppeteer MCP: navigate + screenshot + console + DOM
  - outputs: PASS or FAIL + evidence
    │
    ├─ FAIL → back to [Implementer] with root cause
    │
    ▼ PASS
[Tester]
  - reads skills/playwright-testing.md
  - uses Playwright MCP: write + run spec file
  - outputs: ALL PASS or FAILURES FOUND + evidence
    │
    ├─ FAILURES FOUND → back to [Implementer] with failure details
    │
    ▼ ALL PASS
[Orchestrator] marks task DONE
  - Summary: changed files, test spec path, screenshot, pass count
```

---

## Definition of Done
A task is only DONE when ALL of the following are true:
- [ ] Implementer has produced working code with no TS errors
- [ ] Debugger has attached a screenshot showing correct render
- [ ] Debugger confirms zero blocking console errors
- [ ] Tester spec file exists in `tests/e2e/`
- [ ] All Playwright tests PASS
- [ ] Pass count and screenshot attached to task summary

---

## Escalation Rules
- If Implementer fails same fix 3 times → Orchestrator flags for human review
- If Debugger cannot load page → check dev server, restart with `npm run dev`
- If Tester has flaky tests → mark as `FLAKY`, do not block task completion

---

## Skills Reference

| Skill | File | Used By |
|---|---|---|
| Frontend coding rules | `skills/frontend-dev.md` | Implementer |
| Playwright test patterns | `skills/playwright-testing.md` | Tester |
| Browser debugging steps | `skills/chrome-devtools-debugging.md` | Debugger |