# Repository Guidance

## Project
Coding Project Ideas Recommender — suggests coding project ideas to users (e.g. based on skill level, interests, or time available). This is a fresh repository with no established stack yet.

## Stack
Not yet decided. If this is the first task in the repo, propose a stack in your plan before writing code, and briefly note why. Prefer widely-supported, low-dependency choices over exotic ones unless the task specifically calls for something else. Once a stack is chosen and committed, treat it as fixed — do not silently switch languages or frameworks in a later task.

## Recommendation Logic
Not yet decided — could be a static/curated list, a rules-based filter, or an LLM-call-based generator. If a task requires you to make this decision, state the tradeoff briefly (e.g. "static list = simple, no ongoing cost, less variety" vs "LLM-based = more variety, requires an API key and has runtime cost") and pick one rather than partially implementing both.

## Run & Test
Once a stack is established, this section should be updated with the actual install/run/test commands. Until then:
- Set up the project so it can be run with a single documented command.
- Add tests as functionality is added — do not leave a task "done" without at least a basic smoke test that the feature works.
- Before considering any task complete, run whatever test suite exists.

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
