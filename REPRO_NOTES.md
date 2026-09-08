# Repository file summaries

Processed after a 350s wait. One-line summaries by directory.

## / (root)

- `.gitignore` — Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html` — HTML shell titled Kingdom of Lexica; loads Cinzel/Crimson Pro fonts and mounts `/src/main.tsx`.
- `package.json` — Vite + React 19 + TypeScript project `onboarding-crosses` with `dev`/`build`/`preview` scripts.
- `package-lock.json` — npm lockfile v3 pinning React 19, Vite 6, TypeScript 5.8, and related deps.
- `README2` — Placeholder file containing only the text "this is a test".
- `README.md` — Campaign docs for Kingdom of Lexica: local run, letter-lord game modes, and how to add a letter.
- `tsconfig.app.json` — Strict TypeScript config for the `src` app (ES2022, react-jsx, bundler resolution).
- `tsconfig.json` — Solution-style tsconfig that references app and node configs.
- `tsconfig.node.json` — Strict TypeScript config for `vite.config.ts` (ES2023, noEmit).
- `vite.config.ts` — Vite config that enables the React plugin.

## src/

- `src/App.tsx` — Root React app: title/map/briefing/battle screens, campaign progress, and battle outcome handling.
- `src/main.tsx` — React 19 entry that mounts `<App />` into `#root` under StrictMode.
- `src/vite-env.d.ts` — Vite client type reference for the TypeScript app.

## src/campaign/

- `src/campaign/letters.ts` — Campaign letter-lord registry (O/A/B/E/L/M/U/K) with rules, AI strategy, and state factories.
- `src/campaign/progress.ts` — localStorage campaign progress: unlocks, victories, Lord O draw/boredom tracking.

## src/components/

- `src/components/BattleBriefing.tsx` — Pre-battle screen showing a lord's title, decree, rules, and enter/back actions.
- `src/components/BattleView.tsx` — Active battle UI: status, grid by game kind, rematch/retreat, and outcome reporting.
- `src/components/ClassicGrid.tsx` — Clickable NxN grid for classic/overflow modes with blocked cells and oldest-mark styling.
- `src/components/ConnectGrid.tsx` — Connect Four column-drop grid for Lord A's avalanche battle.
- `src/components/OutcomeOverlay.tsx` — Modal for win/loss/draw with Lord O-specific copy and continue/retry actions.
- `src/components/ThroneMap.tsx` — Campaign map of unlocked/defeated/locked letter thrones plus epilogue.
- `src/components/TitleScreen.tsx` — Title screen with new-game and continue-campaign buttons.
- `src/components/UltimateGrid.tsx` — Nine mini-boards UI for ultimate tic-tac-toe with legal-move highlighting.

## src/game/

- `src/game/classic.ts` — Classic NxN tic-tac-toe: create/validate/apply, blocked cells, misère, and bonus placements.
- `src/game/connect.ts` — Connect Four (7×6, four-in-a-row) with column drops and win/draw evaluation.
- `src/game/engine.ts` — Unified clone/legal-moves/validate/apply dispatcher across all game kinds.
- `src/game/overflow.ts` — 5×5 FIFO overflow mode: max three marks per side, oldest removed on the fourth.
- `src/game/types.ts` — Shared types for sides, actions, and classic/connect/overflow/ultimate game states.
- `src/game/ultimate.ts` — Ultimate tic-tac-toe: nine boards, active-realm routing, and meta-board wins.

## src/game/ai/

- `src/game/ai/lordO.ts` — Lord O boredom threshold and throwing-move logic after two draws.
- `src/game/ai/minimax.ts` — Alpha-beta minimax, heuristics, and default AI move selection.
- `src/game/ai/strategies.ts` — Strategy router: perfect, weak, misère-fool, connect, and bored Lord O.

## src/hooks/

- `src/hooks/useBattle.ts` — Battle hook: human/AI turns, delayed lord moves, errors, and rematch reset.

## src/styles/

- `src/styles/app.css` — Layout and component styles for title, map, briefing, grids, overlay, and connect UI.
- `src/styles/tokens.css` — Design tokens (colors, fonts, radius) and global body/button resets.
