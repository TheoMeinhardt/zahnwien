## Purpose
Short, actionable guidance to help AI coding agents be productive in the zahnwien repo.

## Big-picture architecture
- Framework: Vue 3 + Vite. UI Framework: Quasar. Language: TypeScript in `.vue` SFCs (`<script setup lang="ts">`).
- Entry points:
  - `src/main.ts` — mounts the app, registers Quasar and the router.
  - `src/App.vue` — root component that delegates to `<RouterView />`.
- Routing: `src/router/index.ts` defines routes (Landing, Dornbacherstrasse, Mariahilferstrasse, AboutUs).
- Static assets: `public/img/...` (example usage in `src/views/LandingView.vue` where backgrounds reference `../../img/...`).
- Imports: Vite alias `@` → `./src` (see `vite.config.ts`). Use `@/components/...` or `@/views/...` for consistency.

## Developer flows / important commands
- Install: `npm install` (uses Node >= 20 as declared in `package.json`).
- Dev server: `npm run dev` (Vite hot-reload).
- Build: `npm run build` (runs type-check then Vite build). See `package.json` scripts — the build runs `vue-tsc` first.
- Preview production build: `npm run preview`.
- Type checking: `npm run type-check` (uses `vue-tsc --build`).
- Lint & format: `npm run lint` (ESLint) and `npm run format` (Prettier for `src/`).

If you change public/static assets, reference them using absolute `/img/...` or follow the repository's existing pattern (many views use relative `../../img/...` in in-file styles).

## Project-specific conventions
- Components use the Composition API with `script setup` and typed props. Example pattern from `src/components/ServiceBox.vue`:
  - `defineProps<{ header: string; subtext: string; image: string }>()`
  - use `ref()` for local reactive state (e.g. `frontHidden`).
  - scoped styles are common; many files use `lang="scss"` or `lang="sass"`.
- Quasar usage:
  - Quasar is installed as a plugin in `src/main.ts` with `quasar/lang/de`.
  - Quasar components (e.g. `<q-btn>`, `<q-img>`) appear directly in templates; prefer Quasar components for consistency.
- File layout:
  - `src/components/` — reusable UI components (small, focused).
  - `src/views/` — page-level components mapped to routes.
  - `src/assets/` — global CSS (`main.css`, base styles) and fonts.
- Styling conventions:
  - Many components use `scoped` SFC styles and the repository uses Sass/SCSS; preserve variable names in `src/quasar-variables.sass` when touching Quasar theme variables.

## Integration / external deps
- Quasar via `@quasar/vite-plugin` and `quasar` package (see `vite.config.ts` and `src/main.ts`).
- Vue Router v4 for SPA navigation — add new routes in `src/router/index.ts` and create corresponding `src/views/*` files.
- Type-checking relies on `vue-tsc`; do not remove it from the build pipeline.

## Patterns & examples an agent can use directly
- Add a route:
  - Edit `src/router/index.ts`, import the view from `@/views/YourView.vue` and add a route object to `routes`.
- Component prop typing (copyable):
  - In `src/components/ServiceBox.vue`:
    ```ts
    const props = defineProps<{ header: string; subtext: string; image: string }>()
    ```
- Use alias import:
  - `import NavBar from '@/components/NavBar.vue'`

## What to avoid / gotchas (discoverable from codebase)
- Do not bypass `vue-tsc` in CI/build — the `build` script runs type checks before building.
- When changing Quasar theme variables, update `src/quasar-variables.sass` and confirm the plugin in `vite.config.ts` still points to it.
- Asset paths: some views reference `../../img/...` (relative) — be cautious when moving files; prefer the `/img/...` public path for global/static resources.

## Files to consult for examples or rules
- `package.json` — scripts, engines, key deps
- `vite.config.ts` — alias `@`, Quasar plugin setup
- `src/main.ts` — Quasar registration and router mounting
- `src/router/index.ts` — route patterns and names
- `src/components/ServiceBox.vue` — prop typing, script-setup, Quasar components, SCSS usage
- `src/quasar-variables.sass` — theme variables

If any section above is unclear or you want more examples (e.g., exact ESLint rules, or how images are bundled in production), tell me which area to expand and I'll iterate.
