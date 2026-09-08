# Repository file summaries

Generated after a 350s wait. One-line summary per file, directory by directory.

## . (repository root)

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica that mounts the React app at `#root`.
- `package.json`: Private `onboarding-crosses` package with Vite/React 19/TypeScript scripts and dependencies.
- `package-lock.json`: npm lockfile v3 pinning React 19 and the Vite 6 / TypeScript toolchain.
- `README2`: Short placeholder file whose only content is `this is a test`.
- `README.md`: Documents Kingdom of Lexica, a single-player campaign of variant tic-tac-toe lords.
- `tsconfig.app.json`: Strict TypeScript config for the `src` React app (ES2022, bundler resolution, noEmit).
- `tsconfig.json`: Solution tsconfig that references `tsconfig.app.json` and `tsconfig.node.json`.
- `tsconfig.node.json`: Strict TypeScript config used only for `vite.config.ts`.
- `vite.config.ts`: Vite config that enables the official React plugin.

## src/

- `src/App.tsx`: Root React screen router for title, throne map, briefing, battle, and campaign progress.
- `src/main.tsx`: Vite entry that mounts `<App />` into `#root` under React StrictMode.
- `src/vite-env.d.ts`: Triple-slash reference that pulls in Vite client TypeScript types.

## src/campaign/

- `src/campaign/letters.ts`: Defines campaign letter IDs, AI strategies, and the eight-lord registry with rules and state factories.
- `src/campaign/progress.ts`: Loads, saves, and updates campaign progress (defeats, unlocks, Lord O draws) in `localStorage`.

## src/components/

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's title, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx`: Live battle UI that picks the grid type, reports outcomes, and shows status/rules.
- `src/components/ClassicGrid.tsx`: Clickable square grid for classic and overflow modes, including blocked and oldest cells.
- `src/components/ConnectGrid.tsx`: Column-drop Connect Four board with per-column drop buttons and gravity cells.
- `src/components/OutcomeOverlay.tsx`: Modal copy and actions for win, loss, and draw, including Lord O boredom text.
- `src/components/ThroneMap.tsx`: Campaign map of unlocked, current, defeated, and locked letter thrones.
- `src/components/TitleScreen.tsx`: Title screen with new-game and continue buttons for Kingdom of Lexica.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid that highlights legal active realms.

## src/game/

- `src/game/classic.ts`: Classic-grid rules: create, legal moves, win/misère evaluation, validation, and apply.
- `src/game/connect.ts`: Connect Four (7×6, four-in-a-row) drop rules, win check, and column validation.
- `src/game/engine.ts`: Dispatches clone, legal moves, validate, and apply across all game kinds.
- `src/game/overflow.ts`: FIFO max-3-marks overflow mode on a 5×5 board with four-in-a-row wins.
- `src/game/types.ts`: Shared types for sides, actions, validation, and classic/connect/overflow/ultimate states.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe: nine boards, active-realm routing, meta-wins, and apply.

## src/game/ai/

- `src/game/ai/lordO.ts`: After two draws, Lord O throws by picking gift or worst-for-lord moves.
- `src/game/ai/minimax.ts`: Alpha-beta minimax, heuristics, legal-action mapping, and best-move selection.
- `src/game/ai/strategies.ts`: Routes each lord to perfect, weak, misère-fool, connect, or bored-O play.

## src/hooks/

- `src/hooks/useBattle.ts`: Battle hook that applies human moves and schedules delayed AI replies.

## src/styles/

- `src/styles/app.css`: Layout and component styles for title, map, briefing, battle grids, and overlays.
- `src/styles/tokens.css`: Design tokens, global typography, dark royal background, and reduced-motion rules.
