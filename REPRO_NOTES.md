# Repository file summaries

## .

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica that mounts `#root` and loads `/src/main.tsx` plus Cinzel/Crimson Pro fonts.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/React 19 scripts and TypeScript toolchain.
- `package-lock.json`: npm lockfileVersion 3 pinning React 19.1.0, Vite 6.3.5, and related deps.
- `README.md`: Kingdom of Lexica campaign docs covering local run, letter-lord games, localStorage progress, and how to add a letter.
- `README2`: Contains only the test line `this is a test`.
- `tsconfig.json`: Solution-style TypeScript config that references `tsconfig.app.json` and `tsconfig.node.json`.
- `tsconfig.app.json`: Strict ES2022/DOM/React-JSX compiler options including the `src` tree.
- `tsconfig.node.json`: Strict ES2023 TypeScript config that typechecks `vite.config.ts` only.
- `vite.config.ts`: Vite config that enables the official React plugin.

## src

- `src/App.tsx`: Root campaign UI that routes title/map/briefing/battle screens and persists victories plus Lord O draw boredom.
- `src/main.tsx`: React 19 entry that mounts `<App />` under StrictMode on `#root`.
- `src/vite-env.d.ts`: Triple-slash reference that pulls in Vite client type definitions.

## src/campaign

- `src/campaign/letters.ts`: Defines LetterId registry, campaign order O-A-B-E-L-M-U-K, AI strategies, and factory functions for each lord's ruleset.
- `src/campaign/progress.ts`: Loads/saves campaign progress in localStorage key `lexica-campaign-v1`, tracking defeats, unlocks, and Lord O draws.

## src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, title, decree, rules, and bored-O quote plus begin/back actions.
- `src/components/BattleView.tsx`: Live battle shell that picks Classic/Connect/Ultimate grids, reports outcomes, and shows Lord O boredom/hint banners.
- `src/components/ClassicGrid.tsx`: Button grid for classic/overflow boards with blocked bastions, crown cells, and oldest-mark highlighting.
- `src/components/ConnectGrid.tsx`: Connect-Four column UI with drop buttons and gravity-stacked cells for Lord A's avalanche arena.
- `src/components/OutcomeOverlay.tsx`: Modal for win/loss/draw copy, including Lord O boredom and draw-patience flavor text.
- `src/components/ThroneMap.tsx`: Campaign path of unlockable letter thrones plus a locked-letter row and completion epilogue.
- `src/components/TitleScreen.tsx`: Kingdom of Lexica title screen with new-game and continue-when-progress-exists buttons.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid that highlights the active realm and legal cells.

## src/game

- `src/game/classic.ts`: Classic n×n rules: legal moves, line wins (misère/crown/bonus placements), validation, apply, and clone.
- `src/game/connect.ts`: 7×6 connect-four engine with gravity drops, four-in-a-row from lastDrop, and column validation.
- `src/game/engine.ts`: Kind-dispatched facade for clone, legal moves, validate, apply, and human-turn checks across all modes.
- `src/game/overflow.ts`: 5×5 FIFO overflow mode that keeps at most three marks per side and reuses classic win evaluation.
- `src/game/types.ts`: Shared Side/Cell/status unions plus Classic, Connect, Overflow, Ultimate state and action types.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe with nine boards, active-realm routing, meta-line wins, and draw-when-no-legal-moves.

## src/game/ai

- `src/game/ai/lordO.ts`: After two draws Lord O throws by gifting wins or picking the worst minimax move, plus bored thinking lines.
- `src/game/ai/minimax.ts`: Alpha-beta minimax with center-first ordering, line-window heuristics, and `chooseAiMove` for the lord.
- `src/game/ai/strategies.ts`: Dispatches perfect/weak/misère-fool/connect strategies and bored-O throwing from `chooseLordMove`.

## src/hooks

- `src/hooks/useBattle.ts`: Battle reducer hook that applies human moves and delayed AI turns, including bored Lord O thinking copy.

## src/styles

- `src/styles/app.css`: Layout and component styles for title, throne map, briefing, grids, connect columns, overlay, and banners.
- `src/styles/tokens.css`: Dark royal design tokens (gold/lord/challenger colors, Cinzel/Crimson Pro fonts) plus global body reset.
