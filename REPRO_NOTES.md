# Repository file summaries

## . (root)

- `.gitignore`: Ignores node_modules, dist, local env files, and macOS .DS_Store.
- `README.md`: Documents Kingdom of Lexica, a campaign tic-tac-toe onboarding game with per-lord rule variants.
- `README2`: Short test placeholder file containing the text "this is a test".
- `index.html`: Vite HTML shell titled Kingdom of Lexica that loads Cinzel/Crimson Pro fonts and `/src/main.tsx`.
- `package.json`: NPM package `onboarding-crosses` with React 19, Vite 6, TypeScript, and dev/build/preview scripts.
- `package-lock.json`: npm lockfile v3 pinning React 19, Vite 6, TypeScript, and transitive dependencies.
- `tsconfig.app.json`: Strict TypeScript config for the `src` app (ES2022, react-jsx, bundler resolution, noEmit).
- `tsconfig.json`: Solution-style tsconfig that references app and node project configs.
- `tsconfig.node.json`: Strict TypeScript config used only for `vite.config.ts` (ES2023, noEmit).
- `vite.config.ts`: Vite config enabling the React plugin with default settings.

## src

- `src/App.tsx`: Root React app that routes title/map/briefing/battle screens and persists campaign progress.
- `src/main.tsx`: React 19 entry point that mounts `App` under StrictMode into `#root`.
- `src/vite-env.d.ts`: Triple-slash reference that pulls in Vite client TypeScript types.

## src/campaign

- `src/campaign/letters.ts`: Campaign letter registry defining lords O/A/B/E/L/M/U/K with rules, AI strategy, and state factories.
- `src/campaign/progress.ts`: localStorage campaign progress helpers for unlocks, victories, reset, and Lord O draw boredom.
