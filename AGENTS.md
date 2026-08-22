# Repository Guidance

## Project
Coding Project Ideas Recommender — suggests coding project ideas to users (e.g. based on skill level, interests, or time available). This is a fresh repository with no established stack yet.

## Stack
Plain static HTML/CSS — `index.html`, `style.css`, `favicon.svg` at the repo root. No build step, no dependencies. Chosen because the site is a simple one-pager: zero-build static files are the fastest-loading and most widely-supported option, and deploy to Vercel as-is ("Other" framework preset). Treat this as fixed — do not introduce a framework or build tooling without flagging it as a significant change first.

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
- Run locally: `python3 -m http.server 8000` from the repo root (any static file server works).
- Deploy: import the repo in Vercel with the default "Other" preset — no build command needed.
- Test: serve the site and smoke-test that `/`, `/style.css`, and `/favicon.svg` return 200, the HTML parses without unclosed tags, and every `href` on the page resolves. There is no automated test suite; do not leave a task "done" without at least this smoke test.

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
