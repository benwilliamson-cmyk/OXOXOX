# Repository file summaries

Generated after a 350-second wait. One-line summaries, directory by directory.

## / (root)

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: HTML shell for Kingdom of Lexica that loads Cinzel/Crimson Pro fonts and mounts `/src/main.tsx`.
- `package.json`: npm manifest for `onboarding-crosses` with Vite/React 19 scripts and TypeScript toolchain.
- `package-lock.json`: npm lockfile v3 pinning React 19.1.0, Vite 6.3.5, and related transitive dependencies.
- `README.md`: Project overview for the campaign tic-tac-toe game, local run steps, letter-lord table, and how to add a letter.
- `README2`: Short test placeholder file containing the text "this is a test".
- `tsconfig.app.json`: Strict TypeScript config for the `src` app (ES2022, react-jsx, bundler resolution, noEmit).
- `tsconfig.json`: Solution-style tsconfig that references `tsconfig.app.json` and `tsconfig.node.json`.
- `tsconfig.node.json`: Strict TypeScript config scoped to `vite.config.ts` (ES2023, noEmit).
- `vite.config.ts`: Vite config that enables the official React plugin.

## src

- `src/App.tsx`: Root React app that routes title/map/briefing/battle screens and persists campaign progress plus Lord O draw tracking.
- `src/main.tsx`: React 19 entry that mounts `App` into `#root` under `StrictMode`.
- `src/vite-env.d.ts`: Vite client type reference for the TypeScript app.

## src/campaign

- `src/campaign/letters.ts`: Campaign registry of eight letter-lords with titles, rules, AI strategies, and game-state factories.
- `src/campaign/progress.ts`: localStorage campaign progress (defeated lords, unlocks, Lord O draws) with load/save/victory helpers.

## src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, title, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx`: In-battle UI that picks classic/connect/ultimate grids, reports outcomes, and shows Lord O boredom hints.
- `src/components/ClassicGrid.tsx`: Clickable NxN grid for classic and overflow modes, including blocked bastions and oldest-mark styling.
- `src/components/ConnectGrid.tsx`: Connect-Four style column-drop board with gravity cells and full-column disable.
- `src/components/OutcomeOverlay.tsx`: Modal overlay for win/loss/draw copy, including Lord O boredom and rematch/map actions.
- `src/components/ThroneMap.tsx`: Campaign map of eight thrones plus locked leftover alphabet letters and a completion epilogue.
- `src/components/TitleScreen.tsx`: Title screen for Kingdom of Lexica with new-game and continue-when-progress-exists buttons.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting legal cells and active realms.

## src/game

- `src/game/classic.ts`: Classic N×N rules: legal moves, line evaluation (misère/crown/blocked), bonus placements, and apply/validate/clone.
- `src/game/connect.ts`: 7×6 Connect Four logic with gravity drops, four-in-a-row checks, and column validation.
- `src/game/engine.ts`: Shared game dispatcher that clones, lists legal moves, validates, and applies actions by mode.
- `src/game/overflow.ts`: 5×5 FIFO overflow mode that keeps at most three marks per side and reuses classic win checks.
- `src/game/types.ts`: Shared TypeScript types for sides, actions, and classic/connect/overflow/ultimate game states.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe rules for nine boards, active-realm routing, meta-wins, and legal moves.

## src/game/ai

- `src/game/ai/lordO.ts`: Lord O boredom after two draws, flavor thinking lines, and a throwing-move picker that gifts wins.
- `src/game/ai/minimax.ts`: Alpha-beta minimax, heuristics, legal-action mapping, and the default AI move chooser.
- `src/game/ai/strategies.ts`: Per-lord AI strategies (perfect, weak, misère-fool, connect) plus bored Lord O routing.

## src/hooks

- `src/hooks/useBattle.ts`: Battle hook that reduces game actions, runs delayed lord AI turns, and exposes play/reset/error state.

## src/styles

- `src/styles/app.css`: Component styles for title, throne map, briefing, battle grids, overlays, and Connect Four UI.
- `src/styles/tokens.css`: Design tokens (colors, fonts, radius) plus global body/button reset and reduced-motion rules.

