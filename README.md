# Hello World Agentic Frontend

This project is a simple Next.js application that demonstrates the integration of various frontend technologies, including ShadCN, TailwindCSS, and React. The application is designed to showcase how to set up an agentic environment for frontend development, enabling automated testing and debugging.

## Project Structure

The project is organized as follows:

- **app/**: Contains the main application files.
  - **layout.tsx**: Defines the layout component for the application.
  - **page.tsx**: Serves as the main entry point for the application.
  - **new-page/**: Contains additional pages for the application.
    - **page.tsx**: Defines a new page component.

- **components/**: Contains reusable UI components.
  - **ui/**: Directory for UI components.
    - **button.tsx**: Exports a reusable button component.

- **tests/**: Contains end-to-end tests for the application.
  - **e2e/**: Directory for end-to-end tests.
    - **hello-world.spec.ts**: Contains Playwright tests for the application.

- **skills/**: Documentation for the skills required in the project.
  - **frontend-dev.md**: Outlines frontend development skills.
  - **playwright-testing.md**: Details skills for writing Playwright tests.
  - **chrome-devtools-debugging.md**: Describes skills for using Chrome DevTools.

- **mcp/**: Contains Multi-Channel Protocol configurations.
  - **nextjs.mcp.json**: Configuration for Next.js.
  - **chrome-devtools.mcp.json**: Configuration for Chrome DevTools.
  - **playwright.mcp.json**: Configuration for Playwright.

- **subagents/**: Documentation for subagents used in the project.
  - **implementer.md**: Describes the implementer subagent.
  - **debugger.md**: Outlines the debugger subagent.
  - **tester.md**: Details the tester subagent.

- **agents.md**: Overview of the agents used in the project.

- **components.json**: Metadata or configuration related to components.

- **package.json**: Configuration file for npm, listing dependencies and scripts.

- **next.config.ts**: Configuration settings for the Next.js application.

- **tailwind.config.ts**: Configuration for TailwindCSS.

- **postcss.config.js**: Configuration for PostCSS.

- **tsconfig.json**: Configuration file for TypeScript.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd hello-world-agentic-frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Features

- A simple layout and page structure using Next.js.
- Reusable UI components styled with TailwindCSS.
- End-to-end testing capabilities using Playwright.
- Integrated debugging tools with Chrome DevTools.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.