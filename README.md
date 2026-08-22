# CHT-Test

Personal single-page website for Pheelip Sim — AI Educator & Enterprise AI Practitioner.

## Stack

Plain static HTML/CSS (`index.html`, `style.css`, `favicon.svg`). No build step, no dependencies.

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

Any static file server works.

## Deploy (Vercel)

Import this repo in Vercel with the default "Other" framework preset — no build command or output directory needed; Vercel serves `index.html` from the repo root automatically. Pushes to `main` deploy to production.
