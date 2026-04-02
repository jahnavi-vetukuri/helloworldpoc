# Skill: Frontend Development

## Purpose
Step-by-step rules the Implementer agent MUST follow when making any code change.

---

## Stack Rules
- Framework: Next.js App Router (app/ directory only, no pages/)
- Styling: TailwindCSS utility classes only, no inline styles, no CSS modules
- Components: Functional components only, no class components
- Language: TypeScript strict mode, all props must be explicitly typed
- Path alias: Always use `@/` for imports (e.g. `@/components/ui/card`)
- Images: Use next/image for local images, plain <img> only for external URLs

---

## File Conventions
- Pages: `app/[route]/page.tsx` — default export, named `[Route]Page`
- Layouts: `app/[route]/layout.tsx` — default export
- Components: `components/ui/[name].tsx` — named export
- Types: Define types at the top of the file, above the component

---

## Pre-implementation Checklist
Before writing any code:
1. Identify all files to create or modify
2. Confirm no new dependencies are needed — if they are, state them explicitly
3. Confirm `@/` path alias resolves correctly for all imports
4. Check if a similar component already exists in `components/ui/`

---

## Implementation Steps
1. Create or modify component files first
2. Create or modify page files second
3. Update navigation/links in `app/page.tsx` last
4. Never modify `app/globals.css` or `app/layout.tsx` unless explicitly asked

---

## Post-implementation Checklist
After writing code:
1. Confirm all imports resolve to real files
2. Confirm all TypeScript types are explicit (no `any`)
3. Confirm no hardcoded colors outside Tailwind classes
4. Hand off to Debugger agent with: list of changed files + URL to verify