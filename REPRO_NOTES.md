# Repository file summaries

Processed after a 350-second wait. One-line summaries by directory.

## / (repository root)

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled "Kingdom of Lexica" that loads Cinzel/Crimson Pro fonts and mounts `/src/main.tsx`.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/React 19 scripts and TypeScript tooling.
- `package-lock.json`: npm lockfile v3 pinning React 19, Vite 6, TypeScript 5.8, and related transitive deps.
- `README2`: Single-line test placeholder (`this is a test`).
- `README.md`: Kingdom of Lexica onboarding campaign docs covering run/build steps and letter-lord game variants.
- `tsconfig.app.json`: Strict TypeScript config for the `src` React app (ES2022, bundler resolution, noEmit).
- `tsconfig.json`: Solution-style tsconfig that only references the app and node configs.
- `tsconfig.node.json`: Strict TypeScript config scoped to `vite.config.ts` (ES2023, noEmit).
- `vite.config.ts`: Minimal Vite config enabling the React plugin.

## /src

- `App.tsx`: Top-level campaign UI that routes title/map/briefing/battle screens and persists victories, draws, and Lord O boredom.
- `main.tsx`: React 19 entry that mounts `<App />` into `#root` under StrictMode.
- `vite-env.d.ts`: Triple-slash reference so TypeScript picks up Vite client types.

## /src/campaign

- `letters.ts`: Registers campaign letter-lords O/A/B/E/L/M/U/K with titles, rules, AI strategies, and game-state factories.
- `progress.ts`: Loads/saves campaign progress in `localStorage` (`lexica-campaign-v1`), including unlocks, victories, and Lord O draw counts.

## /src/components

- `BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, title, decree, rules, and begin/back actions.
- `BattleView.tsx`: Live battle UI that picks Classic/Connect/Ultimate grids, reports outcomes, and shows Lord O boredom/hints.
- `ClassicGrid.tsx`: Clickable n×n grid for classic and overflow modes, including blocked bastions and oldest-mark highlighting.
- `ConnectGrid.tsx`: Connect-Four column UI with drop buttons and gravity-stacked cells.
- `OutcomeOverlay.tsx`: Modal for win/loss/draw copy plus continue/retry, with Lord O-specific flavor.
- `ThroneMap.tsx`: Campaign path of letter thrones (unlocked/defeated/locked) plus a locked-alphabet row and completion epilogue.
- `TitleScreen.tsx`: Title splash with continue/new-game or first-entry depending on saved progress.
- `UltimateGrid.tsx`: Nine mini-boards for ultimate tic-tac-toe, highlighting legal/active realms.

## /src/game

- `classic.ts`: Classic grid engine with blocked cells, crown scoring, misère, bonus opening placements, and win/draw evaluation.
- `connect.ts`: 7×6 Connect Four engine for column drops, gravity, and four-in-a-row checks.
- `engine.ts`: Dispatch layer that clones, lists legal moves, validates, and applies actions across all game kinds.
- `overflow.ts`: 5×5 FIFO overflow mode that keeps only three marks per side and reuses classic win evaluation.
- `types.ts`: Shared TypeScript types for sides, actions, validation, and classic/connect/overflow/ultimate state.
- `ultimate.ts`: Ultimate tic-tac-toe rules: nine boards, active-realm targeting, sub-board winners, and meta-line victory.

## /src/game/ai

- `lordO.ts`: Lord O boredom constant, flavor thinking lines, and a throwing-move picker that gifts wins after two draws.
- `minimax.ts`: Alpha-beta minimax, heuristics, legal-action conversion, and `chooseAiMove` for lord-minimizing play.
- `strategies.ts`: Per-lord AI strategies (perfect, weak blunders, misère-fool, connect) plus bored Lord O routing.

## /src/hooks

- `useBattle.ts`: Battle reducer hook that applies human moves, delays lord AI, and surfaces thinking lines/errors.

## /src/styles

- `app.css`: Layout and component styles for title, throne map, briefing, battle grids, overlays, and Connect Four UI.
- `tokens.css`: Design tokens, global reset, body typography/background, and reduced-motion overrides.

## Directories processed

All project directories were read before finishing: `/`, `/src`, `/src/campaign`, `/src/components`, `/src/game`, `/src/game/ai`, `/src/hooks`, `/src/styles`.
