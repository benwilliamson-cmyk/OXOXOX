# Repository file summaries

Processed after a 350s wait. One-line summaries by directory.

## .

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `README.md`: Documents Kingdom of Lexica, a campaign tic-tac-toe onboarding game with local run/build steps and letter-lord rules.
- `README2`: Placeholder file containing the text "this is a test".
- `index.html`: Vite HTML shell titled Kingdom of Lexica that loads Cinzel/Crimson Pro fonts and mounts `/src/main.tsx`.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/React 19 scripts and TypeScript toolchain.
- `package-lock.json`: npm lockfileVersion 3 pinning React 19, Vite 6, and related install tree.
- `tsconfig.app.json`: Strict ES2022/DOM TypeScript config for the `src` app with react-jsx and noEmit.
- `tsconfig.json`: Solution-style project that references app and node tsconfigs.
- `tsconfig.node.json`: Strict ES2023 TypeScript config used only for `vite.config.ts`.
- `vite.config.ts`: Vite config enabling the official React plugin.

## src

- `src/App.tsx`: Root React app that routes title/map/briefing/battle screens and persists campaign progress plus Lord O draws.
- `src/main.tsx`: React 19 entry that mounts `App` under StrictMode on `#root`.
- `src/vite-env.d.ts`: Vite client type reference for the TypeScript app.

## src/campaign

- `src/campaign/letters.ts`: Registers letter-lords O/A/B/E/L/M/U/K with titles, rules, AI strategies, and factory functions for each throne.
- `src/campaign/progress.ts`: Loads and saves campaign progress in localStorage, including unlocks, victories, and Lord O draw boredom.

## src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, title, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx`: Live battle UI that picks classic/connect/ultimate grids, reports outcomes, and shows Lord O boredom hints.
- `src/components/ClassicGrid.tsx`: Clickable n×n grid for classic and overflow modes, including blocked cells and oldest-mark styling.
- `src/components/ConnectGrid.tsx`: Connect Four column-drop board with per-column drop buttons and gravity-stacked cells.
- `src/components/OutcomeOverlay.tsx`: Modal for win/loss/draw with Lord O-specific copy and continue/retry buttons.
- `src/components/ThroneMap.tsx`: Campaign map of unlocked, current, defeated, and locked letter thrones plus a completion epilogue.
- `src/components/TitleScreen.tsx`: Title screen for Kingdom of Lexica with new-game and continue-campaign buttons.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting legal boards and claimed mini-boards.

## src/game

- `src/game/classic.ts`: Classic n×n rules engine with blocked cells, misère, bonus placements, legal moves, and win evaluation.
- `src/game/connect.ts`: 7×6 Connect Four engine with gravity drops, column legality, and four-in-a-row checks.
- `src/game/engine.ts`: Dispatches clone, legal-move, validate, and apply helpers across classic, connect, overflow, and ultimate states.
- `src/game/overflow.ts`: 5×5 FIFO overflow mode that keeps only three marks per side and reuses classic win checks.
- `src/game/types.ts`: Shared game types for sides, actions, validation, and classic/connect/overflow/ultimate state shapes.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe engine with nine boards, active-realm routing, and meta-board winners.





