# Repository file summaries

## / (repository root)

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica; loads Cinzel/Crimson Pro fonts and mounts `/src/main.tsx`.
- `package.json`: Private `onboarding-crosses` 0.1.0 app with React 19, Vite 6, TypeScript, and `dev`/`build`/`preview` scripts.
- `package-lock.json`: npm lockfileVersion 3 pinning React 19, Vite 6, TypeScript, and transitive dependencies.
- `README2`: Short test placeholder file containing the text "this is a test".
- `README.md`: Kingdom of Lexica onboarding campaign docs covering local run, letter-lords, and how to add a letter.
- `tsconfig.app.json`: Strict TypeScript config for `src` with ES2022, bundler resolution, and React JSX.
- `tsconfig.json`: Solution-style tsconfig that references the app and node configs.
- `tsconfig.node.json`: Strict TypeScript config used only for `vite.config.ts` (ES2023).
- `vite.config.ts`: Minimal Vite config enabling the official React plugin.

## /src

- `src/App.tsx`: Top-level campaign UI state machine for title, map, briefing, battle, and outcome overlay.
- `src/main.tsx`: React 19 entry that mounts `App` into `#root` under StrictMode.
- `src/vite-env.d.ts`: Triple-slash reference so TypeScript picks up Vite client types.

## /src/campaign

- `src/campaign/letters.ts`: Letter-lord registry (O/A/B/E/L/M/U/K) with titles, rules, AI strategy, and state factories.
- `src/campaign/progress.ts`: localStorage campaign progress (defeated lords, unlocks, Lord O draw boredom).

## /src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx`: Live battle UI that picks a grid, reports outcomes, and shows Lord O boredom/hints.
- `src/components/ClassicGrid.tsx`: Clickable NxN grid for classic/overflow modes, including blocked bastions and oldest marks.
- `src/components/ConnectGrid.tsx`: Connect Four-style column drop UI for Lord A's avalanche arena.
- `src/components/OutcomeOverlay.tsx`: Modal for win/loss/draw copy, including Lord O boredom and rematch/continue.
- `src/components/ThroneMap.tsx`: Campaign map of unlocked, current, defeated, and still-locked letter thrones.
- `src/components/TitleScreen.tsx`: Title screen with continue/new-game entry into the Kingdom of Lexica.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting legal and active realms.

