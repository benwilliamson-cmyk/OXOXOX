# Repository file summaries

## .

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica that mounts `#root` and loads `/src/main.tsx` plus Cinzel/Crimson Pro fonts.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with React 19, Vite 6, TypeScript, and `dev`/`build`/`preview` scripts.
- `package-lock.json`: npm lockfileVersion 3 pin of React 19, Vite, TypeScript, and transitive dependencies for onboarding-crosses.
- `README2`: One-line test placeholder (`this is a test`).
- `README.md`: Kingdom of Lexica campaign tic-tac-toe onboarding docs covering run steps, eight letter-lords, localStorage progress, and how to add a letter.
- `tsconfig.app.json`: Strict ES2022/DOM TypeScript config for `src` with React JSX and noEmit bundler resolution.
- `tsconfig.json`: Solution-style tsconfig that only references `tsconfig.app.json` and `tsconfig.node.json`.
- `tsconfig.node.json`: Strict ES2023 TypeScript config that type-checks `vite.config.ts` without emit.
- `vite.config.ts`: Vite config enabling the official React plugin.

## src

- `src/App.tsx`: Top-level campaign app that routes title, throne map, briefing, and battle screens and persists victories/Lord O draws.
- `src/main.tsx`: React 19 entry that mounts `App` under StrictMode on `#root`.
- `src/vite-env.d.ts`: Triple-slash reference that pulls in Vite client type declarations.

## src/campaign

- `src/campaign/letters.ts`: Defines LetterId, AI strategies, CAMPAIGN_ORDER, and LETTER_REGISTRY for lords O/A/B/E/L/M/U/K plus helpers to look up and unlock the next letter.
- `src/campaign/progress.ts`: Loads and saves campaign progress in localStorage (`lexica-campaign-v1`), tracking defeats, unlocks, and Lord O draw boredom.

## src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, title, decree, rules, and bored-Lord-O flavor before entering the grid.
- `src/components/BattleView.tsx`: Live battle UI that picks Classic/Connect/Ultimate grids, reports outcomes, and shows Lord O boredom banners plus rematch/retreat.
- `src/components/ClassicGrid.tsx`: Clickable classic or overflow board rendering X, opponent glyphs, blocked bastions, crown cells, and oldest FIFO marks.
- `src/components/ConnectGrid.tsx`: Connect Four-style column drop UI for the avalanche arena with per-column full-state handling.
- `src/components/OutcomeOverlay.tsx`: Modal overlay for win, loss, or draw with Lord O-specific copy and continue/retry actions.
- `src/components/ThroneMap.tsx`: Campaign map of unlocked, current, defeated, and locked letter thrones plus a completion epilogue.
- `src/components/TitleScreen.tsx`: Kingdom of Lexica title screen with continue/new-game or first-enter actions based on saved progress.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting legal cells and won/active mini-boards.



