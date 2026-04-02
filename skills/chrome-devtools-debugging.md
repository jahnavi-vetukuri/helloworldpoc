# chrome-devtools-debugging.md

This file describes the skills needed to effectively use Chrome DevTools for debugging frontend applications.

## Chrome DevTools Debugging Skills

### Overview
Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. It provides a powerful suite of tools for debugging, profiling, and optimizing web applications.

### Key Features
1. **Elements Panel**: Inspect and modify the DOM and CSS styles in real-time.
2. **Console Panel**: View logs, run JavaScript code, and interact with the page.
3. **Sources Panel**: Debug JavaScript with breakpoints, step through code, and view call stacks.
4. **Network Panel**: Monitor network requests, view response times, and analyze resource loading.
5. **Performance Panel**: Profile runtime performance and identify bottlenecks.
6. **Application Panel**: Inspect storage, service workers, and other application-related data.

### Debugging Workflow
1. **Open DevTools**: Right-click on the page and select "Inspect" or press `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac).
2. **Use the Console**: Log messages using `console.log()`, inspect variables, and run commands directly.
3. **Set Breakpoints**: In the Sources panel, click on the line number to set breakpoints in your JavaScript code.
4. **Step Through Code**: Use the controls to step over, step into, or step out of functions while debugging.
5. **Analyze Network Activity**: Check the Network panel to see all requests made by the application and their statuses.
6. **Inspect Elements**: Use the Elements panel to modify HTML and CSS on the fly to see changes immediately.

### Best Practices
- Regularly use the Console for logging and debugging.
- Utilize breakpoints effectively to isolate issues.
- Monitor network requests to ensure resources are loading correctly.
- Profile performance to identify slow-running scripts or rendering issues.

### Additional Resources
- [Chrome DevTools Documentation](https://developer.chrome.com/docs/devtools/)
- [Debugging JavaScript](https://developers.google.com/web/fundamentals/performance/rendering/debugging-javascript)

This document serves as a guide for utilizing Chrome DevTools effectively in frontend development and debugging processes.

# Skill: Chrome DevTools Debugging

## Purpose
Step-by-step rules the Debugger agent MUST follow when diagnosing runtime issues.

---

## When Debugger Agent is Invoked
- Implementer has made changes but page does not render correctly
- Tester reports a failing test
- Console errors are present on page load
- Visual output does not match expected design

---

## Debugging Steps (in order)

### Step 1: Navigate and Screenshot
1. Use Puppeteer MCP to navigate to the target URL
2. Take a screenshot immediately on load
3. Record page title and H1 text

### Step 2: Capture Console Output
1. Evaluate `window.__console_errors` or capture via MCP console listener
2. List all errors and warnings
3. Classify each as: `BLOCKING` | `WARNING` | `INFO`

### Step 3: Inspect DOM
1. Check that expected elements exist: headings, buttons, links, cards
2. Verify CSS classes are applied correctly
3. Check for missing or broken images

### Step 4: Check Network
1. Verify page returns HTTP 200
2. Check for any failed asset requests (images, fonts, CSS)
3. Check for failed API calls if applicable

### Step 5: Root Cause Report
Debugger MUST output:
- Screenshot (attached)
- Console errors list (classified)
- DOM issues found (if any)
- Network failures (if any)
- Root cause hypothesis
- Recommended fix → hand back to Implementer agent

---

## Evidence Requirements
Debugger agent MUST NEVER say "it looks fine" without attaching:
- At least one screenshot
- Console output (even if empty)