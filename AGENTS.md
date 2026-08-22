# Repository Guidance

## Project
Coding Project Ideas Recommender — suggests coding project ideas to users (e.g. based on skill level, interests, or time available). This is a fresh repository with no established stack yet.

## Stack
Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui (Base UI registry). npm for dependencies. Light/dark theming via next-themes with shadcn design tokens defined in `app/globals.css`; favicon lives at `app/icon.svg`. The site is a static one-pager composed of small section components under `components/`. Migrated from the original zero-build static HTML/CSS per explicit user request — do not revert to static HTML or introduce a different framework without flagging it as a significant change first.

## Recommendation Logic
Not yet decided — could be a static/curated list, a rules-based filter, or an LLM-call-based generator. If a task requires you to make this decision, state the tradeoff briefly (e.g. "static list = simple, no ongoing cost, less variety" vs "LLM-based = more variety, requires an API key and has runtime cost") and pick one rather than partially implementing both.

## UI
UI Framework & Design Direction:
- Tech stack for UI: Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- Design quality bar: Production-grade, modern SaaS aesthetic (comparable to Linear or Vercel)
- Design system: Use shadcn/ui components consistently. Create a cohesive theme with a carefully chosen color palette, typography scale, and spacing system.
- Visual style: Clean, refined, slightly premium. Good contrast, excellent readability, subtle animations where they improve UX.
- Responsive: Mobile-first, looks excellent on all screen sizes.
- Avoid: Plain unstyled pages, generic Bootstrap-style layouts, or minimal default styling.

## Run & Test
- Run locally: `npm install && npm run dev` from the repo root, open http://localhost:3000.
- Production build: `npm run build`, serve with `npm start`.
- Deploy: import the repo in Vercel — the Next.js framework preset is detected automatically.
- Test: `npm run build` must compile (it runs ESLint + type checks), then serve the production build and smoke-test that `/` returns 200, the HTML parses without unclosed tags, and every `href` on the page resolves. There is no automated test suite; do not leave a task "done" without at least this smoke test.

## Conventions
- Keep functions and files small and single-purpose.
- Write self-documenting code with clear naming over heavy comments.
- Match existing style/formatting once established — do not reformat unrelated code in the same change.
- Prefer explicit error handling over silent failures.

## Guardrails — do not do these without being explicitly asked
- Do not commit or hardcode API keys, tokens, or secrets — use environment variables and add them to `.gitignore`.
- Do not add paid/metered third-party services (LLM APIs, hosting, databases) without flagging the cost implication first.
- Do not delete or rewrite existing files wholesale when a smaller, targeted change would do.
- Do not push directly to `main` — work on a branch and open a PR unless told otherwise.
- Do not introduce new major dependencies for something solvable with the standard library or an existing dependency.
- Do not change the recommendation logic's core approach (e.g. static → LLM-based) once established, without flagging it as a significant change first.

## Do not touch
- `.env` and any file matching `*secret*` or `*credentials*`
- `node_modules/`, `venv/`, `dist/`, `build/`, or other generated/dependency directories
- CI/deployment config files, unless the task is specifically about CI/deployment

## Notes for future updates
As the stack and recommendation approach get decided, update the "Stack", "Recommendation Logic", and "Run & Test" sections above so future tasks don't have to rediscover them.
