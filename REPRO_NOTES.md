# Repository file summaries

## . (root)

- `.gitignore`: Ignores node_modules, dist, local env files, and macOS .DS_Store.
- `README.md`: Documents Kingdom of Lexica, a campaign tic-tac-toe onboarding game with per-lord rule variants.
- `README2`: Short test placeholder file containing the text "this is a test".
- `index.html`: Vite HTML shell titled Kingdom of Lexica that loads Cinzel/Crimson Pro fonts and `/src/main.tsx`.
- `package.json`: NPM package `onboarding-crosses` with React 19, Vite 6, TypeScript, and dev/build/preview scripts.
- `package-lock.json`: npm lockfile v3 pinning React 19, Vite 6, TypeScript, and transitive dependencies.
- `tsconfig.app.json`: Strict TypeScript config for the `src` app (ES2022, react-jsx, bundler resolution, noEmit).
- `tsconfig.json`: Solution-style tsconfig that references app and node project configs.
- `tsconfig.node.json`: Strict TypeScript config used only for `vite.config.ts` (ES2023, noEmit).
- `vite.config.ts`: Vite config enabling the React plugin with default settings.
- `REPRO_NOTES.md`: One-line summaries of every repository file, grouped by directory.

## src

- `src/App.tsx`: Root React app that routes title/map/briefing/battle screens and persists campaign progress.
- `src/main.tsx`: React 19 entry point that mounts `App` under StrictMode into `#root`.
- `src/vite-env.d.ts`: Triple-slash reference that pulls in Vite client TypeScript types.

## src/campaign

- `src/campaign/letters.ts`: Campaign letter registry defining lords O/A/B/E/L/M/U/K with rules, AI strategy, and state factories.
- `src/campaign/progress.ts`: localStorage campaign progress helpers for unlocks, victories, reset, and Lord O draw boredom.

## src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx`: Active battle UI that picks the right grid, reports outcomes, and shows Lord O hints.
- `src/components/ClassicGrid.tsx`: Clickable classic/overflow board with blocked cells, crown highlight, and oldest-mark styling.
- `src/components/ConnectGrid.tsx`: Connect Four column-drop grid with gravity cells and per-column drop buttons.
- `src/components/OutcomeOverlay.tsx`: Modal overlay for win/loss/draw with Lord O flavor text and continue/retry actions.
- `src/components/ThroneMap.tsx`: Campaign map of unlockable letter thrones plus locked leftover alphabet letters.
- `src/components/TitleScreen.tsx`: Title screen with continue/new-game or first-entry buttons for Kingdom of Lexica.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting legal/active sub-boards.

## src/game

- `src/game/classic.ts`: Classic NxN engine with blocked cells, misère, bonus placements, legal moves, and win evaluation.
- `src/game/connect.ts`: 7x6 Connect Four engine with gravity drops, column legality, and four-in-a-row checks.
- `src/game/engine.ts`: Unified clone/legal-move/validate/apply dispatcher across classic, connect, overflow, and ultimate.
- `src/game/overflow.ts`: 5x5 FIFO overflow mode that removes a side's oldest mark after three stones.
- `src/game/types.ts`: Shared TypeScript types for sides, actions, and classic/connect/overflow/ultimate game states.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe rules for nine boards, active-board routing, and meta-win detection.

## src/game/ai

- `src/game/ai/lordO.ts`: Lord O boredom logic that throws after two draws using gift moves and flavor thinking lines.
- `src/game/ai/minimax.ts`: Alpha-beta minimax search with heuristics, move ordering, and AI action selection.
- `src/game/ai/strategies.ts`: Per-lord AI strategies: perfect, weak blunders, misère-fool, connect, and bored Lord O.

## src/hooks

- `src/hooks/useBattle.ts`: Battle hook that applies human moves, delays lord AI turns, and surfaces thinking/error state.

## src/styles

- `src/styles/app.css`: Component styles for title, throne map, briefing, battle grids, overlays, and Connect Four UI.
- `src/styles/tokens.css`: Design tokens and global reset for the dark gold/purple Kingdom of Lexica theme.
