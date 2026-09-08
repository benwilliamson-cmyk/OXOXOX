# Repository file summaries

Listed every tracked source file, then walked each directory and appended a one-line summary.

## File listing

- `.gitignore`
- `README.md`
- `README2`
- `index.html`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `tsconfig.app.json`
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

## / (root)

- `.gitignore`: Ignores `node_modules`, `dist`, local env files, and `.DS_Store`.
- `README.md`: Documents Kingdom of Lexica, local run/build commands, campaign lords, and how to add a letter.
- `README2`: Placeholder file containing the text `this is a test`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica; loads Cinzel/Crimson Pro fonts and `/src/main.tsx`.
- `package.json`: npm package `onboarding-crosses` with Vite/React 19 scripts and TypeScript tooling.
- `package-lock.json`: lockfileVersion 3 pin of React 19, Vite 6, TypeScript 5.8, and related deps.
- `tsconfig.json`: Solution tsconfig that references app and node configs with no emit of its own.
- `tsconfig.app.json`: Strict TypeScript + React JSX settings for the `src` tree.
- `tsconfig.node.json`: Strict TypeScript settings used only for `vite.config.ts`.
- `vite.config.ts`: Vite config enabling the official React plugin.

## src/

- `src/App.tsx`: Top-level screen router (title/map/briefing/battle) that owns campaign progress and battle outcomes.
- `src/main.tsx`: React 19 entry that mounts `<App />` under StrictMode.
- `src/vite-env.d.ts`: Triple-slash reference so Vite client types are available.

## src/campaign/

- `src/campaign/letters.ts`: Campaign letter IDs, order, locked alphabet leftovers, and per-lord rules/AI/state factories.
- `src/campaign/progress.ts`: localStorage load/save of defeated lords, unlocks, and Lord O draw/bored state.

## src/components/

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's title, decree, rules, and start/back actions.
- `src/components/BattleView.tsx`: Live battle UI: status, grid by mode, rules toggle, retreat/rematch, and outcome reporting.
- `src/components/ClassicGrid.tsx`: Clickable square grid for classic and overflow modes, including blocked and oldest cells.
- `src/components/ConnectGrid.tsx`: Connect-style column drop UI with gravity-ordered circular cells.
- `src/components/OutcomeOverlay.tsx`: Modal for win/loss/draw copy, including Lord O boredom and rematch/continue actions.
- `src/components/ThroneMap.tsx`: Campaign map of unlockable/defeated letter thrones plus locked leftover letters.
- `src/components/TitleScreen.tsx`: Title screen with continue vs new-game entry depending on saved progress.
- `src/components/UltimateGrid.tsx`: Nine-realm ultimate board that highlights the active sub-board and legal cells.

## src/game/

- `src/game/classic.ts`: Classic N×N placement rules, win/misère evaluation, blocked cells, and bonus opening placements.
- `src/game/connect.ts`: 7×6 gravity-drop Connect Four rules, legal columns, and four-in-a-row evaluation.
- `src/game/engine.ts`: Kind-dispatched clone/legal-moves/validate/apply helpers plus human-turn check.
- `src/game/overflow.ts`: 5×5 FIFO max-3-marks mode that reuses classic line evaluation after each fade.
- `src/game/types.ts`: Shared sides, actions, validation, and Classic/Connect/Overflow/Ultimate state unions.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe: nine boards, forced next realm, meta-win, and legal-cell listing.

## src/game/ai/

- `src/game/ai/lordO.ts`: After two draws, Lord O throws with gift moves and bored thinking-line flavor text.
- `src/game/ai/minimax.ts`: Alpha-beta minimax, heuristics, legal-action conversion, and best-move selection.
- `src/game/ai/strategies.ts`: Dispatches perfect/weak/misère-fool/connect strategies and bored Lord O throws.

## src/hooks/

- `src/hooks/useBattle.ts`: Battle reducer plus delayed AI turns, illegal-move errors, and Lord O bored thinking copy.

## src/styles/

- `src/styles/app.css`: Layout and component styles for title, map, briefing, grids, overlay, and connect UI.
- `src/styles/tokens.css`: Design tokens, global typography/background, button reset, and reduced-motion rules.
