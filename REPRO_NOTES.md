# Repository file summaries

Processed after the required 350-second wait. One-line summaries by directory.

## / (repository root)

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: HTML shell titled Kingdom of Lexica that loads Cinzel/Crimson Pro fonts and mounts `/src/main.tsx`.
- `package.json`: Private Vite + React 19 + TypeScript package `onboarding-crosses` with `dev`, `build`, and `preview` scripts.
- `package-lock.json`: npm lockfile v3 pinning React 19, Vite 6, TypeScript 5.8, and related transitive deps.
- `README2`: Placeholder file containing the text "this is a test".
- `README.md`: Campaign overview for Kingdom of Lexica, a single-player letter-lord tic-tac-toe onboarding game.
- `tsconfig.app.json`: Strict app TypeScript config targeting ES2022/DOM/JSX and including `src`.
- `tsconfig.json`: Solution-style tsconfig that references the app and node configs.
- `tsconfig.node.json`: Strict TypeScript config for `vite.config.ts` targeting ES2023.
- `vite.config.ts`: Vite config that enables the React plugin.

## /src

- `src/App.tsx`: Top-level campaign router among title, map, briefing, and battle screens, with localStorage progress and Lord O draw tracking.
- `src/main.tsx`: React 19 entry that mounts `App` under `StrictMode` on `#root`.
- `src/vite-env.d.ts`: Vite client type reference for the app.

## /src/campaign

- `src/campaign/letters.ts`: Registry of letter-lords O/A/B/E/L/M/U/K with titles, rules, AI strategies, and state factories.
- `src/campaign/progress.ts`: localStorage campaign progress (defeated lords, unlocks, Lord O draws) under key `lexica-campaign-v1`.

## /src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, title, decree, rules, and enter/back actions.
- `src/components/BattleView.tsx`: Active battle UI that picks Classic/Connect/Ultimate grids, reports outcomes, and shows Lord O boredom hints.
- `src/components/ClassicGrid.tsx`: Clickable square grid for classic and overflow modes, including blocked bastions and oldest-mark styling.
- `src/components/ConnectGrid.tsx`: Connect-Four style column-drop board with per-column drop buttons.
- `src/components/OutcomeOverlay.tsx`: Modal for win/loss/draw copy, including Lord O boredom and rematch/map actions.
- `src/components/ThroneMap.tsx`: Campaign path of unlockable letter thrones plus a row of still-locked alphabet letters.
- `src/components/TitleScreen.tsx`: Title screen for Kingdom of Lexica with new-game and continue buttons.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting the active legal realm.

## /src/game

- `src/game/classic.ts`: Classic n×n rules with blocked cells, optional crown scoring, misère, bonus placements, and line evaluation.
- `src/game/connect.ts`: 7×6 Connect Four engine with gravity drops and four-in-a-row win checks.
- `src/game/engine.ts`: Dispatcher that clones, lists legal moves, validates, and applies actions across all game kinds.
- `src/game/overflow.ts`: 5×5 FIFO overflow mode that keeps at most three marks per side and then removes the oldest.
- `src/game/types.ts`: Shared types for sides, actions, classic/connect/overflow/ultimate states, and game results.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe engine for nine 3×3 boards, active-realm routing, and meta-board wins.

## /src/game/ai

- `src/game/ai/lordO.ts`: Lord O boredom after two draws, flavor thinking lines, and a throwing-move picker that gifts wins.
- `src/game/ai/minimax.ts`: Alpha-beta minimax with heuristics, legal-action conversion, and best-move selection for the lord.
- `src/game/ai/strategies.ts`: Strategy router for perfect, weak, misère-fool, connect, and bored-Lord-O move choice.

## /src/hooks

- `src/hooks/useBattle.ts`: Battle hook that reduces game state, applies human moves, and schedules delayed AI replies.

## /src/styles

- `src/styles/app.css`: Component styles for title, throne map, briefing, battle grids, connect board, and overlays.
- `src/styles/tokens.css`: Theme tokens, global body/background styles, and reduced-motion resets.
