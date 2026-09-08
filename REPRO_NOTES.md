# Repository file notes

## .

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica that mounts React at `#root` and loads Cinzel/Crimson Pro fonts.
- `package.json`: npm manifest for `onboarding-crosses` with Vite/TypeScript scripts and React 19 dependencies.
- `package-lock.json`: npm lockfile v3 pinning React 19, Vite 6, TypeScript 5.8, and related packages.
- `README2`: Placeholder file containing only the text "this is a test".
- `README.md`: Kingdom of Lexica campaign tic-tac-toe onboarding docs covering run, lords, and adding letters.
- `tsconfig.app.json`: Strict TypeScript config for the `src` app with React JSX and bundler module resolution.
- `tsconfig.json`: Solution-style tsconfig that references the app and node configs.
- `tsconfig.node.json`: Strict TypeScript config used only for `vite.config.ts`.
- `vite.config.ts`: Vite config that enables the React plugin.

## src

- `src/App.tsx`: Root screen router for title, throne map, briefing, and battle, plus campaign progress and outcomes.
- `src/main.tsx`: React 19 entry that mounts `App` under StrictMode on `#root`.
- `src/vite-env.d.ts`: Vite client type reference for the TypeScript app.

## src/campaign

- `src/campaign/letters.ts`: Campaign letter registry defining lords O/A/B/E/L/M/U/K, rules, AI strategy, and state factories.
- `src/campaign/progress.ts`: localStorage campaign progress for unlocks, victories, and Lord O boredom draws.

## src/components

- `src/components/BattleBriefing.tsx`: Pre-battle briefing UI showing a lord's title, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx`: Active battle screen that routes classic/connect/ultimate grids and reports outcomes.
- `src/components/ClassicGrid.tsx`: Clickable n×n grid for classic and overflow modes, including blocked and oldest cells.
- `src/components/ConnectGrid.tsx`: Connect Four column-drop grid with per-column drop buttons and gravity cells.
- `src/components/OutcomeOverlay.tsx`: Modal overlay for win, loss, and draw with Lord O-specific copy and retry/continue.
- `src/components/ThroneMap.tsx`: Campaign map of unlocked, current, defeated, and locked letter thrones.
- `src/components/TitleScreen.tsx`: Title screen with new-game and continue-campaign entry points.
- `src/components/UltimateGrid.tsx`: Ultimate tic-tac-toe UI of nine mini-boards highlighting legal active realms.

## src/game

- `src/game/classic.ts`: Classic n×n rules: legal moves, win/misère evaluation, bonus placements, and apply/validate.
- `src/game/connect.ts`: Connect Four 7×6 gravity drops, column legality, and four-in-a-row evaluation.
- `src/game/engine.ts`: Shared game engine that clones, lists, validates, and applies actions across all modes.
- `src/game/overflow.ts`: FIFO overflow mode (5×5, max 3 marks) that expires the oldest mark on a fourth place.
- `src/game/types.ts`: Shared types for sides, actions, and classic/connect/overflow/ultimate game states.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe: nine boards, active-realm routing, sub-board and meta winners.

## src/game/ai

- `src/game/ai/lordO.ts`: Lord O boredom threshold and throwing-move picker that gifts wins after two draws.
- `src/game/ai/minimax.ts`: Alpha-beta minimax, heuristics, and best-move selection for classic, overflow, and connect.
- `src/game/ai/strategies.ts`: Lord move dispatcher for perfect, weak, misère-fool, connect, and bored-Lord-O play.

## src/hooks

- `src/hooks/useBattle.ts`: Battle hook that applies human moves, delays AI turns, and tracks Lord O thinking lines.

## src/styles

- `src/styles/app.css`: Layout and component styles for title, throne map, briefing, grids, overlay, and connect UI.
- `src/styles/tokens.css`: CSS custom properties, base body/font reset, and reduced-motion rules for the royal theme.
