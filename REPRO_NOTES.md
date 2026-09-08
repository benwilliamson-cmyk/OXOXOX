# Repository file summaries

## / (root)

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica that mounts React at `#root` and loads Cinzel/Crimson Pro fonts.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/React 19 scripts and TypeScript toolchain.
- `package-lock.json`: npm lockfileVersion 3 lock pinning React 19, Vite 6, and TypeScript 5.8 dependencies.
- `README2`: Single-line test placeholder file (`this is a test`).
- `README.md`: Kingdom of Lexica campaign tic-tac-toe onboarding game docs covering lords, run/build, and adding letters.
- `tsconfig.app.json`: Strict ES2022/DOM TypeScript config for the `src` React app with noEmit and bundler resolution.
- `tsconfig.json`: Solution-style tsconfig that references `tsconfig.app.json` and `tsconfig.node.json`.
- `tsconfig.node.json`: Strict ES2023 TypeScript config that typechecks `vite.config.ts` only.
- `vite.config.ts`: Vite config enabling the `@vitejs/plugin-react` plugin.

## /src

- `src/App.tsx`: Root React screen machine for title, throne map, briefing, battle, and outcome overlay with campaign progress persistence.
- `src/main.tsx`: React 19 entry that mounts `App` under `StrictMode` on `#root`.
- `src/vite-env.d.ts`: Triple-slash reference that pulls in Vite client TypeScript types.

## /src/campaign

- `src/campaign/letters.ts`: Campaign letter registry for lords O/A/B/E/L/M/U/K with decrees, rules, AI strategy, and state factories.
- `src/campaign/progress.ts`: localStorage campaign progress for defeats, unlocks, Lord O draws, and victory/reset helpers.

## /src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, title, decree, rules, and enter/back actions.
- `src/components/BattleView.tsx`: Live battle UI that picks classic/connect/ultimate grids, reports outcomes, and shows Lord O boredom hints.
- `src/components/ClassicGrid.tsx`: Button grid for classic and overflow boards, including blocked bastions and oldest-mark styling.
- `src/components/ConnectGrid.tsx`: Connect Four column-drop grid with gravity cells and full-column disable.
- `src/components/OutcomeOverlay.tsx`: Modal overlay for win/loss/draw copy, including Lord O boredom and rematch/map actions.
- `src/components/ThroneMap.tsx`: Campaign path of unlocked/defeated/locked letter thrones plus a locked-alphabet row.
- `src/components/TitleScreen.tsx`: Kingdom of Lexica title with continue/new-game or first-enter buttons.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting legal cells and active sub-boards.

## /src/game

- `src/game/classic.ts`: Classic NxN rules: legal cells, win/misère evaluation, bonus placements, and apply/validate/clone helpers.
- `src/game/connect.ts`: 7×6 Connect Four drop rules with four-in-a-row checks from the last drop.
- `src/game/engine.ts`: Kind-dispatch facade to clone, list legal moves, validate, and apply actions across game modes.
- `src/game/overflow.ts`: 5×5 FIFO overflow mode that keeps at most three marks per side and reuses classic evaluation.
- `src/game/types.ts`: Shared Side/Cell/status types plus Classic, Connect, Overflow, and Ultimate state and action unions.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe with nine boards, active-board routing, and meta-line winners.

## /src/game/ai

- `src/game/ai/lordO.ts`: After two draws, Lord O throws by gifting wins or picking the worst minimax move.
- `src/game/ai/minimax.ts`: Alpha-beta minimax, heuristics, legal-action mapping, and best-move selection for the lord.
- `src/game/ai/strategies.ts`: Strategy dispatcher for perfect, weak, misère-fool, connect, and bored-Lord-O play.

## /src/hooks

- `src/hooks/useBattle.ts`: Battle reducer hook that applies human moves, delays lord AI, and exposes thinking/error/reset state.

## /src/styles

- `src/styles/app.css`: Layout and component styles for title, throne map, briefing, battle grids, overlay, and connect columns.
- `src/styles/tokens.css`: Design tokens, global reset, body background, button font, and reduced-motion overrides.
