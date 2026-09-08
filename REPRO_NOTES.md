# Repository file summaries

Generated after a 350s wait. One-line summary per file, directory by directory.

## / (repository root)

- `.gitignore` — Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html` — Vite HTML shell titled Kingdom of Lexica that mounts React at `#root` via `/src/main.tsx` and loads Cinzel/Crimson Pro fonts.
- `package.json` — Private `onboarding-crosses` 0.1.0 Vite+React+TypeScript app with `dev`/`build`/`preview` scripts.
- `package-lock.json` — npm lockfileVersion 3 pinning React 19.1.0, Vite 6.3.5, TypeScript 5.8.3, and related deps.
- `README2` — One-line test placeholder (`this is a test`).
- `README.md` — Kingdom of Lexica campaign tic-tac-toe onboarding docs: run instructions, letter-lord table, and how to add a letter.
- `tsconfig.app.json` — Strict TypeScript config for the `src` app (ES2022, react-jsx, bundler resolution, noEmit).
- `tsconfig.json` — Solution-style tsconfig that only references `tsconfig.app.json` and `tsconfig.node.json`.
- `tsconfig.node.json` — Strict TypeScript config for `vite.config.ts` (ES2023, noEmit).
- `vite.config.ts` — Vite config enabling the React plugin.

## /src

- `src/App.tsx` — Top-level screen router (title/map/briefing/battle) that loads campaign progress, handles Lord O draws/victories, and mounts overlays.
- `src/main.tsx` — React 19 entry that mounts `<App />` in StrictMode on `#root`.
- `src/vite-env.d.ts` — Vite client type reference for the app.

## /src/campaign

- `src/campaign/letters.ts` — Campaign letter registry (O/A/B/E/L/M/U/K) with titles, rules, AI strategy/depth, and game-state factories.
- `src/campaign/progress.ts` — localStorage campaign progress: unlocks, victories, Lord O draw count, and reset helpers.

## /src/components

- `src/components/BattleBriefing.tsx` — Pre-battle screen showing a lord's glyph, title, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx` — Active battle UI that picks Classic/Connect/Ultimate grids, reports outcomes, and shows Lord O boredom hints.
- `src/components/ClassicGrid.tsx` — Clickable n×n cell grid for classic and overflow modes, including blocked bastions and oldest-mark highlighting.
- `src/components/ConnectGrid.tsx` — Connect-style column drop UI with gravity cells and full-column disable.
- `src/components/OutcomeOverlay.tsx` — Modal for win/loss/draw with Lord O–specific copy and continue/retry actions.
- `src/components/ThroneMap.tsx` — Campaign path of letter thrones (unlocked/defeated/locked) plus leftover-alphabet placeholders.
- `src/components/TitleScreen.tsx` — Kingdom of Lexica title with continue/new-game entry depending on saved progress.
- `src/components/UltimateGrid.tsx` — Nine mini-boards for ultimate tic-tac-toe with legal-move highlighting.

## /src/game

- `src/game/classic.ts` — Classic n×n rules: create/validate/apply/evaluate with blocked cells, misère, crown cells, and bonus placements.
- `src/game/connect.ts` — Connect Four (7×6, win-4) drop, legal columns, win check from last drop, and cloning.
- `src/game/engine.ts` — Unified clone/legal-moves/validate/apply dispatcher across classic, connect, overflow, and ultimate.
- `src/game/overflow.ts` — 5×5 FIFO max-3-marks mode that drops the oldest mark and reuses classic evaluation.
- `src/game/types.ts` — Shared game types: sides, actions, Classic/Connect/Overflow/Ultimate state unions.
- `src/game/ultimate.ts` — Ultimate tic-tac-toe: nine boards, active-realm routing, meta-win, and legal-move helpers.

## /src/game/ai

- `src/game/ai/lordO.ts` — Lord O boredom after 2 draws: flavor thinking lines and a throwing-move picker that gifts wins.
- `src/game/ai/minimax.ts` — Alpha-beta minimax with heuristics, legal-action mapping, and best-move selection for the lord.
- `src/game/ai/strategies.ts` — Per-lord AI strategies: perfect, weak (blunders), misère-fool, connect, and bored Lord O.

## /src/hooks

- `src/hooks/useBattle.ts` — Battle hook: reducer for human/AI moves, delayed lord thinking, reset, and invalid-move errors.

## /src/styles

- `src/styles/app.css` — Screen and component styles for title, throne map, briefing, battle grids, overlays, and connect/ultimate layouts.
- `src/styles/tokens.css` — Design tokens (gold/purple palette, Cinzel/Crimson Pro) plus global body and reduced-motion resets.
