# Copilot Instructions for Aurex-landing

## Project Overview
- This is a Next.js app bootstrapped with `create-next-app`.
- Main entry point: `src/app/page.js` (auto-updates on edit).
- Uses the Next.js App Router (not Pages Router).
- Custom components are in `src/app/(home)/` and `src/components/`.
- Static assets (SVGs, images) are in `public/` and subfolders.

## Developer Workflows
- **Start dev server:** `npm run dev` (default port: 3000).
- **Install dependencies:** `npm i`
- **No test scripts or test files detected.**
- **Build for production:** `npm run build`
- **Deploy:** Recommended via Vercel; see README for details.

## Architectural Patterns
- All UI logic is in React function components (JSX).
- Global styles: `src/app/globals.css`.
- Layout: `src/app/layout.js` wraps all pages.
- No API routes or backend logic present.
- Font optimization via `next/font` (Geist).

## Conventions & Patterns
- Use named React components for each section (e.g., `HeroSection.jsx`, `Ambassador.jsx`).
- Images/SVGs referenced via `/public` path (e.g., `/images/services/sr1.jpg`).
- No TypeScript; all code is JavaScript/JSX.
- No custom ESLint, Prettier, or linting config detected.
- No environment variable usage detected.

## Integration Points
- No external APIs or data fetching logic present.
- No custom server or middleware.
- No authentication or user management.

## Examples
- To add a new homepage section: create a new component in `src/app/(home)/`, import and use it in `page.js`.
- To update the navigation/footer: edit `src/components/Navbar.jsx` or `Footer.jsx`.
- To add images: place in `public/images/` and reference via `/images/...` in JSX.

## Key Files & Directories
- `src/app/(home)/`: Homepage sections/components
- `src/components/`: Shared UI components
- `public/`: Static assets
- `src/app/layout.js`: Global layout
- `src/app/globals.css`: Global styles

---
**If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.**
