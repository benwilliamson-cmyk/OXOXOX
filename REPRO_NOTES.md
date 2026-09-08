# Repository file summaries

Listed files (excluding `.git`):
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

Directories: `/` (root), `src`, `src/campaign`, `src/components`, `src/game`, `src/game/ai`, `src/hooks`, `src/styles`.

## /

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica that mounts `#root` and loads `src/main.tsx` plus Cinzel/Crimson Pro fonts.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/React 19 scripts and TypeScript tooling.
- `package-lock.json`: npm lockfileVersion 3 pinning React 19, Vite 6, TypeScript 5.8, and related transitive deps.
- `README2`: Short placeholder file containing the text "this is a test".
- `README.md`: Kingdom of Lexica campaign docs covering local run, letter-lord rules, localStorage progress, and how to add a letter.
- `tsconfig.app.json`: Strict TypeScript config for the `src` app (ES2022, React JSX, bundler resolution, noEmit).
- `tsconfig.json`: Solution-style tsconfig that only references `tsconfig.app.json` and `tsconfig.node.json`.
- `tsconfig.node.json`: Strict TypeScript config for `vite.config.ts` targeting ES2023 with noEmit.
- `vite.config.ts`: Vite config that enables the official React plugin.

## src

- `src/App.tsx`: Top-level screen router for title, throne map, briefing, and battle, plus campaign progress and Lord O draw/victory handling.
- `src/main.tsx`: React 19 entry that mounts `<App />` under StrictMode on `#root`.
- `src/vite-env.d.ts`: Triple-slash reference that pulls in Vite client type definitions.

## src/campaign

- `src/campaign/letters.ts`: Campaign letter registry (O/A/B/E/L/M/U/K) with titles, rules, AI strategy, and game-state factories.
- `src/campaign/progress.ts`: localStorage campaign progress (defeated letters, unlocks, Lord O draws) with load/save/victory helpers.

## src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, decree, rules, bored-O quote, and enter/back buttons.
- `src/components/BattleView.tsx`: Live battle UI that picks Classic/Connect/Ultimate grids, reports outcomes, and shows Lord O banners.
- `src/components/ClassicGrid.tsx`: Clickable NxN grid for classic/overflow modes with blocked, crown, and oldest-mark styling.
- `src/components/ConnectGrid.tsx`: Connect-Four column drop UI with per-column full-state and gravity cells.
- `src/components/OutcomeOverlay.tsx`: Modal for won/lost/draw with Lord O-specific copy and continue/retry actions.
- `src/components/ThroneMap.tsx`: Campaign path of unlocked/defeated/locked letter thrones plus a locked-alphabet row.
- `src/components/TitleScreen.tsx`: Title screen with continue/new-game or first-enter depending on saved progress.
- `src/components/UltimateGrid.tsx`: Nine mini-boards for ultimate tic-tac-toe highlighting legal/active realms.

## src/game

- `src/game/classic.ts`: Classic grid rules: create/legal/evaluate/apply with blocked cells, crown doubling, misère, and bonus placements.
- `src/game/connect.ts`: 7×6 connect-four engine with gravity drops, four-in-a-row checks, and column validation.
- `src/game/engine.ts`: Kind-dispatch facade for clone, legal moves, validate, apply, and human-turn checks across modes.
- `src/game/overflow.ts`: 5×5 FIFO max-3 marks mode that drops the oldest stone and reuses classic win evaluation.
- `src/game/types.ts`: Shared Side/Cell/status, action union, and Classic/Connect/Overflow/Ultimate state types.
- `src/game/ultimate.ts`: Ultimate 9-board tic-tac-toe with active-realm routing, sub-board winners, and meta-line wins.

## src/game/ai

- `src/game/ai/lordO.ts`: After two draws, bored Lord O picks gift/throwing moves and random thinking lines instead of perfect play.
- `src/game/ai/minimax.ts`: Alpha-beta minimax with center-first move ordering, line heuristics, and best-move selection for the lord.
- `src/game/ai/strategies.ts`: Strategy dispatcher for perfect, weak (38% blunder), misère-fool, connect, and bored-O throwing play.

## src/hooks

- `src/hooks/useBattle.ts`: Battle reducer hook that applies human moves, delays AI replies, and surfaces thinking lines/errors.

## src/styles

- `src/styles/app.css`: Component styles for title, throne map, briefing, battle grids, connect columns, overlay, and banners.
- `src/styles/tokens.css`: Design tokens, global reset, dark parchment theme, and reduced-motion overrides.





