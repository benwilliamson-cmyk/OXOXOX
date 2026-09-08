# Repository file summaries

## .

- `.gitignore`: Ignores node_modules, dist, local env files, and macOS .DS_Store.
- `index.html`: Vite HTML shell titled Kingdom of Lexica that mounts the React app from src/main.tsx.
- `package.json`: npm package onboarding-crosses with Vite/React/TypeScript scripts and dependencies.
- `package-lock.json`: npm lockfile v3 pinning React 19, Vite 6, TypeScript 5.8, and related packages.
- `README2`: One-line placeholder file containing "this is a test".
- `README.md`: Kingdom of Lexica onboarding campaign docs covering run, lords, and adding letters.
- `tsconfig.app.json`: Strict TypeScript config for the src React app with bundler module resolution.
- `tsconfig.json`: Solution tsconfig that references the app and node TypeScript projects.
- `tsconfig.node.json`: Strict TypeScript config used only for vite.config.ts.
- `vite.config.ts`: Vite config enabling the official React plugin.

## src

- `src/App.tsx`: Root React app that routes title/map/briefing/battle screens and persists campaign progress.
- `src/main.tsx`: React 19 entry that mounts App into #root under StrictMode.
- `src/vite-env.d.ts`: Triple-slash reference that pulls in Vite client type declarations.

## src/campaign

- `src/campaign/letters.ts`: Campaign letter registry defining eight lords, rules, AI strategies, and board factories.
- `src/campaign/progress.ts`: localStorage campaign progress helpers for unlocks, victories, and Lord O boredom.

## src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's title, decree, rules, and enter/back actions.
- `src/components/BattleView.tsx`: Active battle UI that picks the right grid, reports outcomes, and shows AI thinking.
- `src/components/ClassicGrid.tsx`: Clickable n×n grid for classic/overflow modes with blocked cells and oldest-mark hints.
- `src/components/ConnectGrid.tsx`: Connect Four style column-drop board with gravity cells and full-column disable.
- `src/components/OutcomeOverlay.tsx`: Modal for win/loss/draw with Lord O-specific copy and continue/retry actions.
- `src/components/ThroneMap.tsx`: Campaign map of unlocked, current, defeated, and locked letter thrones.
- `src/components/TitleScreen.tsx`: Kingdom of Lexica title screen with new-game and continue buttons.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting legal active realms.

## src/game

- `src/game/classic.ts`: Classic n×n rules engine with blocked cells, misère, bonus placements, and win evaluation.
- `src/game/connect.ts`: 7×6 connect-four engine with gravity drops, legal columns, and four-in-a-row checks.
- `src/game/engine.ts`: Unified clone/validate/apply dispatcher across classic, connect, overflow, and ultimate modes.
- `src/game/overflow.ts`: 5×5 FIFO overflow mode that removes a side's oldest mark after three stones.
- `src/game/types.ts`: Shared TypeScript types for sides, actions, and all four GameState variants.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe rules for nine boards, active-realm routing, and meta wins.

## src/game/ai

- `src/game/ai/lordO.ts`: Lord O boredom threshold, flavor lines, and a throwing-move chooser for gift losses.
- `src/game/ai/minimax.ts`: Alpha-beta minimax, heuristics, legal-action mapping, and best-move selection for lords.
- `src/game/ai/strategies.ts`: Strategy router for perfect, weak, misère-fool, connect, and bored Lord O play.

## src/hooks

- `src/hooks/useBattle.ts`: Battle hook that applies human/AI moves, delays lord turns, and tracks thinking copy.

## src/styles

- `src/styles/app.css`: Component styles for title, map, briefing, battle grids, overlays, and chrome.
- `src/styles/tokens.css`: Design tokens, global typography, dark royal palette, and reduced-motion defaults.

