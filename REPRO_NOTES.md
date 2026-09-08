# Repository file summaries

Listed every file in the repository (excluding `.git` internals):

- `.gitignore`
- `index.html`
- `package.json`
- `package-lock.json`
- `README.md`
- `README2`
- `tsconfig.app.json`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`
- `src/App.tsx`
- `src/main.tsx`
- `src/vite-env.d.ts`
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
- `src/game/classic.ts`
- `src/game/connect.ts`
- `src/game/engine.ts`
- `src/game/overflow.ts`
- `src/game/types.ts`
- `src/game/ultimate.ts`
- `src/game/ai/lordO.ts`
- `src/game/ai/minimax.ts`
- `src/game/ai/strategies.ts`
- `src/hooks/useBattle.ts`
- `src/styles/app.css`
- `src/styles/tokens.css`

## Root directory

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica that mounts React at `#root` and loads Cinzel/Crimson Pro fonts.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/React 19 scripts and TypeScript tooling.
- `package-lock.json`: npm lockfile v3 pinning React 19, Vite 6, TypeScript 5.8, and related transitive deps.
- `README.md`: Documents Kingdom of Lexica campaign lords, local run/build commands, and how to add a letter.
- `README2`: Single-line test placeholder (`this is a test`).
- `tsconfig.json`: Solution tsconfig that references app and node configs with no emit files of its own.
- `tsconfig.app.json`: Strict ES2022/DOM/React-JSX compiler options including the `src` tree.
- `tsconfig.node.json`: Strict ES2023 compiler options for `vite.config.ts` only.
- `vite.config.ts`: Vite config enabling the official React plugin.

## src/

- `src/App.tsx`: Top-level screen router for title, throne map, briefing, and battle, plus campaign progress and Lord O draw tracking.
- `src/main.tsx`: React 19 entry that mounts `App` in StrictMode on `#root`.
- `src/vite-env.d.ts`: Triple-slash reference so TypeScript picks up Vite client types.

## src/campaign/

- `src/campaign/letters.ts`: Campaign letter registry for lords O/A/B/E/L/M/U/K with rules, AI strategy, and state factories.
- `src/campaign/progress.ts`: localStorage campaign progress (defeated lords, unlocks, Lord O draws) plus victory/reset helpers.

## src/components/

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx`: Live battle UI that picks classic/connect/ultimate grids, reports outcomes, and shows Lord O boredom hints.
- `src/components/ClassicGrid.tsx`: Clickable NxN cell grid for classic and overflow modes, including blocked bastions and oldest-mark styling.
- `src/components/ConnectGrid.tsx`: Connect Four-style column drop board with per-column drop buttons.
- `src/components/OutcomeOverlay.tsx`: Modal for win/loss/draw with Lord O-specific copy and rematch or map return.
- `src/components/ThroneMap.tsx`: Campaign path of letter thrones plus locked leftover alphabet letters.
- `src/components/TitleScreen.tsx`: Kingdom of Lexica title with new-game or continue based on saved progress.
- `src/components/UltimateGrid.tsx`: Nine mini-boards for ultimate tic-tac-toe highlighting the active legal realm.

## src/game/

- `src/game/classic.ts`: Classic grid rules: create/validate/apply moves, win-length/misère/crown/blocked cells, and bonus placements.
- `src/game/connect.ts`: 7×6 connect-four logic with gravity drops, legal columns, and four-in-a-row evaluation.
- `src/game/engine.ts`: Kind-dispatch wrapper for clone, legal moves, validate, and apply across all game modes.
- `src/game/overflow.ts`: 5×5 FIFO overflow mode that drops a side's oldest mark after three stones.
- `src/game/types.ts`: Shared Side/Cell/GameState unions and action/validation types for all modes.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe: nine boards, active-realm routing, and meta-board winners.

## src/game/ai/

- `src/game/ai/lordO.ts`: Lord O boredom threshold, throwaway-move picker, and doodling thinking lines after two draws.
- `src/game/ai/minimax.ts`: Alpha-beta minimax with mode heuristics and `chooseAiMove` for lord-minimizing play.
- `src/game/ai/strategies.ts`: Per-lord AI dispatch (perfect, weak blunders, misère-fool, connect, bored Lord O).

## src/hooks/

- `src/hooks/useBattle.ts`: Battle reducer hook that applies human moves and schedules delayed lord AI turns.

## src/styles/

- `src/styles/app.css`: Layout and component styles for title, throne map, briefing, grids, overlays, and battle chrome.
- `src/styles/tokens.css`: Design tokens (gold/purple palette, Cinzel/Crimson fonts) plus global body and reduced-motion resets.

