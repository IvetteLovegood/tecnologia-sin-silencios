# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Type-check (tsc -b) then bundle
npm run lint      # Run oxlint
npm run preview   # Preview production build locally
```

No test suite is configured.

## Architecture

This is a single-page React 19 + TypeScript app (Vite, no router) that guides users through an interactive educational journey about structural barriers in tech — specifically for two audiences: students (`est`) and working professionals (`pro`).

### Step flow

`App.tsx` owns all state and controls a linear step machine (0–9):
- **Step 0** — `Home`: user picks a `Camino` (`'est'` | `'pro'`)
- **Steps 1–8** — `Journey`: 7 content modules + initial context/eval steps, driven by `data` for the chosen camino
- **Step 9** — `Result`: adaptive result screen based on accumulated `UserResponses`

### Data layer (`src/data/`)

- `types.ts` — all shared types. `CaminoData` is the main content shape; `UserResponses` accumulates answers; `PerfilAdaptativo` drives adaptive content in the result.
- `estudiantes.ts` / `profesionistas.ts` — full content objects implementing `CaminoData` for each audience path.
- `adaptive.ts` — derives a `PerfilAdaptativo` from `UserResponses` (rules-based, no backend).
- `preguntas.ts` / `barreras.ts` — question and barrier card data used by modules.
- `sendMentoria.ts` — posts `MentoriaFormData` to a Google Apps Script web app URL (defined in `APPS_SCRIPT_URL`). The script itself lives in `docs/apps-script.js`. In development the current URL check causes it to simulate a successful send; to wire it to a real sheet, deploy the Apps Script and update the constant.

### Mentorship form

`MentoriaFormData` combines user-entered contact fields with automatically-collected journey context (camino, responses, derived profile, timestamp). This is sent as `text/plain` JSON to avoid CORS preflight with Apps Script.

### Styling

CSS Modules (`.module.css` per component/page) plus global variables in `src/styles/variables.css`. No CSS framework.
