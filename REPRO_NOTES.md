# Repository file summaries

## /

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell for Kingdom of Lexica; mounts `#root` and loads `/src/main.tsx` with Cinzel/Crimson Pro fonts.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/React 19 scripts and TypeScript toolchain.
- `package-lock.json`: npm lockfile v3 pinning React 19, Vite 6, TypeScript 5.8, and related resolved packages.
- `README2`: Placeholder file containing the text "this is a test".
- `README.md`: Kingdom of Lexica campaign tic-tac-toe onboarding docs covering run, lords, and how to add a letter.
- `tsconfig.app.json`: Strict ES2022/DOM TypeScript config for the `src` React app (noEmit, bundler resolution).
- `tsconfig.json`: Solution-style tsconfig that references app and node projects.
- `tsconfig.node.json`: Strict ES2023 TypeScript config scoped to `vite.config.ts`.
- `vite.config.ts`: Vite config enabling the official React plugin.

## /src

- `App.tsx`: Root React app that routes title/map/briefing/battle screens and persists campaign progress.
- `main.tsx`: React 19 entry that mounts `App` into `#root` under StrictMode.
- `vite-env.d.ts`: Triple-slash reference so Vite client types are available to TypeScript.

## /src/campaign

- `letters.ts`: Letter IDs, campaign order, and registry of each lord's rules, AI strategy, and state factory.
- `progress.ts`: localStorage campaign progress (defeated lords, unlocks, Lord O draws) with load/save/reset helpers.

## /src/components

- `BattleBriefing.tsx`: Pre-battle screen showing a lord's title, decree, rules, and begin/back actions.
- `BattleView.tsx`: Active battle UI that picks a grid, reports outcomes, and shows Lord O boredom/hints.
- `ClassicGrid.tsx`: Clickable n×n grid for classic/overflow modes, including blocked and oldest-mark cells.
- `ConnectGrid.tsx`: Connect-style column-drop board with per-column drop buttons.
- `OutcomeOverlay.tsx`: Modal for win/loss/draw with Lord O-specific copy and rematch/continue actions.
- `ThroneMap.tsx`: Campaign path of unlocked/defeated/locked letter thrones plus leftover alphabet.
- `TitleScreen.tsx`: Kingdom of Lexica title with continue/new-game entry points.
- `UltimateGrid.tsx`: Nine mini-boards for ultimate tic-tac-toe with legal-move highlighting.

## /src/game

- `classic.ts`: Classic n×n rules: legal moves, win/misère evaluation, bonus placements, and apply/clone.
- `connect.ts`: 7×6 connect-four gravity drops, win checks from last drop, and apply/clone helpers.
- `engine.ts`: Dispatch layer that clones, lists legal moves, validates, and applies actions by game kind.
- `overflow.ts`: 5×5 FIFO max-3-marks mode that reuses classic evaluation after each place.
- `types.ts`: Shared sides, statuses, actions, and state types for classic/connect/overflow/ultimate.
- `ultimate.ts`: Ultimate tic-tac-toe: nine boards, active-realm routing, meta-win, and apply/clone.

## /src/game/ai

- `lordO.ts`: After two draws, Lord O throws games via gift moves and bored thinking lines.
- `minimax.ts`: Alpha-beta minimax, heuristics, legal-action mapping, and best-move selection for lords.
- `strategies.ts`: Per-lord AI strategies: perfect, weak blunders, misère-fool, connect, and bored Lord O.

## /src/hooks

- `useBattle.ts`: Battle hook that reduces game state, applies human moves, and schedules lord AI turns.

## /src/styles

- `app.css`: Layout and component styles for title, throne map, briefing, grids, overlays, and battle chrome.
- `tokens.css`: Design tokens (colors, fonts, radius) plus global body/button and reduced-motion resets.

