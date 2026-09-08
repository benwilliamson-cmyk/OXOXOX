# Repository file summaries

Generated after a 350-second wait. Every tracked project file is listed, then summarized one directory at a time.

## All files

- `.gitignore`
- `index.html`
- `package.json`
- `package-lock.json`
- `README2`
- `README.md`
- `src/App.tsx`
- `src/campaign/letters.ts`
- `src/campaign/progress.ts`
- `src/components/BattleBriefing.tsx`
- `src/components/BattleView.tsx`
- `src/components/ClassicGrid.tsx`
- `src/components/ConnectGrid.tsx`
- `src/components/OutcomeOverlay.tsx`
- `src/components/ThroneMap.tsx`
- `src/components/TitleScreen.tsx`
- `src/components/UltimateGrid.tsx`
- `src/game/ai/lordO.ts`
- `src/game/ai/minimax.ts`
- `src/game/ai/strategies.ts`
- `src/game/classic.ts`
- `src/game/connect.ts`
- `src/game/engine.ts`
- `src/game/overflow.ts`
- `src/game/types.ts`
- `src/game/ultimate.ts`
- `src/hooks/useBattle.ts`
- `src/main.tsx`
- `src/styles/app.css`
- `src/styles/tokens.css`
- `src/vite-env.d.ts`
- `tsconfig.app.json`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`

Directories walked: `/` (root), `src`, `src/campaign`, `src/components`, `src/game`, `src/game/ai`, `src/hooks`, `src/styles`.

## Root (`/`)

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica; mounts `#root` and loads `/src/main.tsx` with Cinzel/Crimson Pro fonts.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/React 19 scripts and TypeScript toolchain.
- `package-lock.json`: npm lockfileVersion 3 pinning React 19 and Vite 6 dependency tree.
- `README2`: Single-line test file containing `this is a test`.
- `README.md`: Kingdom of Lexica campaign tic-tac-toe onboarding docs (run, lords, adding letters, build).
- `tsconfig.app.json`: Strict app TypeScript config targeting ES2022/DOM with `src` included and no emit.
- `tsconfig.json`: Solution-style tsconfig that references app and node projects.
- `tsconfig.node.json`: Strict TypeScript config for `vite.config.ts` targeting ES2023.
- `vite.config.ts`: Vite config enabling the React plugin only.

## `src/`

- `src/App.tsx`: Root React app that routes title/map/briefing/battle screens and persists campaign progress.
- `src/main.tsx`: React 19 entry that mounts `App` into `#root` under StrictMode.
- `src/vite-env.d.ts`: Triple-slash reference so Vite client types are available to the app.

## `src/campaign/`

- `src/campaign/letters.ts`: Defines campaign letter IDs, AI strategies, and the LETTER_REGISTRY of eight lords with rules and state factories.
- `src/campaign/progress.ts`: Loads/saves campaign progress in localStorage, including unlocks, victories, and Lord O draw boredom.

## `src/components/`

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx`: Active battle UI that picks classic/connect/ultimate grids, reports outcomes, and shows rules.
- `src/components/ClassicGrid.tsx`: Clickable NxN grid for classic and overflow modes with blocked, crown, and oldest-mark styling.
- `src/components/ConnectGrid.tsx`: Connect Four column-drop grid with gravity cells and per-column drop buttons.
- `src/components/OutcomeOverlay.tsx`: Modal overlay for win/loss/draw copy, including Lord O boredom flavor text.
- `src/components/ThroneMap.tsx`: Campaign map of unlocked/defeated/locked letter thrones plus a locked-alphabet row.
- `src/components/TitleScreen.tsx`: Kingdom of Lexica title screen with new-game and continue buttons.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting legal boards and cells.

## `src/game/`

- `src/game/classic.ts`: Classic NxN rules: legal moves, win/misere evaluation, bonus placements, and apply/validate/clone.
- `src/game/connect.ts`: 7×6 Connect Four drop rules with win-from-last-drop checks and column validation.
- `src/game/engine.ts`: Game-kind dispatcher for clone, legal moves, validate, apply, and human-turn checks.
- `src/game/overflow.ts`: 5×5 FIFO overflow mode that removes a side's oldest mark after three stones.
- `src/game/types.ts`: Shared types for sides, actions, validation, and classic/connect/overflow/ultimate states.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe: nine boards, active-board targeting, meta-wins, and legal moves.

## `src/game/ai/`

- `src/game/ai/lordO.ts`: Lord O boredom threshold, flavor lines, and throwing-move picker after two draws.
- `src/game/ai/minimax.ts`: Alpha-beta minimax, heuristics, legal-action mapping, and best-move selection.
- `src/game/ai/strategies.ts`: Strategy router for perfect, weak, misère-fool, connect, and bored Lord O play.

## `src/hooks/`

- `src/hooks/useBattle.ts`: Battle reducer hook that applies human moves and schedules delayed lord AI turns.

## `src/styles/`

- `src/styles/app.css`: Layout and component styles for title, map, briefing, grids, connect, overlay, and battle chrome.
- `src/styles/tokens.css`: Design tokens (colors, fonts, radius) plus global body/button and reduced-motion resets.

