# Repository file summaries

## /

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica that mounts React at `#root` and loads Cinzel/Crimson Pro fonts.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/React 19 scripts and TypeScript tooling.
- `package-lock.json`: npm lockfileVersion 3 pinning React 19 and Vite 6 dependency trees.
- `README.md`: Documents the Kingdom of Lexica campaign tic-tac-toe game, local run steps, and letter-lord rules.
- `REPRO_NOTES.md`: One-line summaries of every repository file, grouped by directory.
- `README2`: Placeholder file containing only the text `this is a test`.
- `tsconfig.json`: Solution-style TypeScript config that references app and node projects.
- `tsconfig.app.json`: Strict ES2022/DOM/React-JSX compiler options for the `src` tree.
- `tsconfig.node.json`: Strict ES2023 compiler options scoped to `vite.config.ts`.
- `vite.config.ts`: Vite config enabling the official React plugin.

## /src

- `src/App.tsx`: Root React app that routes title/map/briefing/battle screens and persists campaign progress.
- `src/main.tsx`: React 19 entry that mounts `App` under StrictMode on `#root`.
- `src/vite-env.d.ts`: Vite client type reference for the TypeScript app.

## /src/campaign

- `src/campaign/letters.ts`: Defines campaign letter-lords (O,A,B,E,L,M,U,K) with rules, AI strategy, and state factories.
- `src/campaign/progress.ts`: Loads and saves campaign unlocks and Lord O draw counts in `localStorage`.

## /src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's title, decree, rules, and enter/back actions.
- `src/components/BattleView.tsx`: Active-match UI that picks a grid, reports outcomes, and shows Lord O boredom hints.
- `src/components/ClassicGrid.tsx`: Clickable n×n cell grid for classic and overflow battles, including blocked and oldest marks.
- `src/components/ConnectGrid.tsx`: Column-drop Connect Four board with gravity cells and full-column guards.
- `src/components/OutcomeOverlay.tsx`: Modal for win/loss/draw copy plus continue or rematch actions.
- `src/components/ThroneMap.tsx`: Campaign path of unlocked, current, defeated, and locked letter thrones.
- `src/components/TitleScreen.tsx`: Kingdom of Lexica title with new-game and continue buttons.
- `src/components/UltimateGrid.tsx`: Nine mini-boards for ultimate tic-tac-toe with legal-move highlighting.

## /src/game

- `src/game/classic.ts`: Classic n×n rules: legal cells, win/misère evaluation, bonus placements, and apply/clone helpers.
- `src/game/connect.ts`: 7×6 Connect Four gravity drops, four-in-a-row checks, and column validation.
- `src/game/engine.ts`: Kind-dispatch facade for clone, legal moves, validate, and apply across game modes.
- `src/game/overflow.ts`: 5×5 FIFO max-3-marks mode that expires oldest stones and reuses classic evaluation.
- `src/game/types.ts`: Shared Side/Cell/status types plus Classic, Connect, Overflow, and Ultimate state shapes.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe with nine boards, active-realm routing, and meta-win detection.

## /src/game/ai

- `src/game/ai/lordO.ts`: After two draws, Lord O picks throwing moves and bored thinking-line copy.
- `src/game/ai/minimax.ts`: Alpha-beta minimax, heuristics, and `chooseAiMove` for lord-minimizing play.
- `src/game/ai/strategies.ts`: Dispatches perfect, weak, misère-fool, connect, and bored-O lord move choosers.

## /src/hooks

- `src/hooks/useBattle.ts`: Battle reducer hook that applies human moves and schedules delayed lord AI turns.

## /src/styles

- `src/styles/app.css`: Layout and component styles for title, map, briefing, grids, overlays, and connect columns.
- `src/styles/tokens.css`: Design tokens, global body typography, and reduced-motion resets for the dark royal theme.






