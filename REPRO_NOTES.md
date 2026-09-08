# Repository file summaries

## / (root)

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica; loads Cinzel/Crimson Pro fonts and mounts `/src/main.tsx`.
- `package.json`: npm manifest for onboarding-crosses (Vite + React 19 + TypeScript) with `dev`, `build`, and `preview` scripts.
- `package-lock.json`: npm lockfile v3 pinning React 19, Vite 6, TypeScript 5.8, and their transitive dependencies.
- `README2`: Short placeholder text: `this is a test`.
- `README.md`: Kingdom of Lexica campaign tic-tac-toe onboarding game docs (run, lords/modes, adding letters, build).
- `tsconfig.app.json`: Strict TypeScript config for the `src` app (ES2022, React JSX, bundler resolution, noEmit).
- `tsconfig.json`: Solution-style tsconfig that references `tsconfig.app.json` and `tsconfig.node.json`.
- `tsconfig.node.json`: Strict TypeScript config for `vite.config.ts` (ES2023, bundler resolution, noEmit).
- `vite.config.ts`: Vite config that enables the React plugin.

## /src

- `App.tsx`: Root React app that routes title/map/briefing/battle screens and persists campaign progress and battle outcomes.
- `main.tsx`: React 19 entry that mounts `App` into `#root` under `StrictMode`.
- `vite-env.d.ts`: Triple-slash reference so TypeScript picks up Vite client types.

## /src/campaign

- `letters.ts`: Campaign letter registry (O/A/B/E/L/M/U/K) with titles, rules, AI strategy, and `createState` factories.
- `progress.ts`: localStorage campaign progress (defeated lords, unlocks, Lord O draw/bored tracking).

## /src/components

- `BattleBriefing.tsx`: Pre-battle screen showing a lord's title, decree, rules, and begin/back actions.
- `BattleView.tsx`: Active battle UI that picks a grid by mode, reports outcomes, and shows AI thinking/rules.
- `ClassicGrid.tsx`: Clickable n×n grid for classic/overflow modes, including blocked and oldest-mark cells.
- `ConnectGrid.tsx`: Connect-Four style column-drop grid with gravity-oriented cells.
- `OutcomeOverlay.tsx`: Modal for win/loss/draw with Lord O–specific copy and continue/retry actions.
- `ThroneMap.tsx`: Campaign map of unlocked/defeated/locked letter thrones plus an epilogue.
- `TitleScreen.tsx`: Title screen with continue/new-game entry into the campaign.
- `UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting the active legal realm.

## /src/game

- `classic.ts`: Classic n×n rules: legal moves, win/misère eval, bonus opening placements, and apply/validate/clone.
- `connect.ts`: Connect-Four (7×6, four-in-a-row) drop rules, win check from last drop, and apply/validate/clone.
- `engine.ts`: Mode dispatcher for clone, legal moves, validate, and apply across classic/connect/overflow/ultimate.
- `overflow.ts`: 5×5 FIFO max-3-marks mode that evicts oldest stones and reuses classic evaluation.
- `types.ts`: Shared game types (sides, actions, Classic/Connect/Overflow/Ultimate state unions).
- `ultimate.ts`: Ultimate tic-tac-toe: nine boards, active-realm routing, meta-win, and apply/validate/clone.

## /src/game/ai

- `lordO.ts`: Lord O boredom threshold and throwing-move picker that gifts wins after two draws.
- `minimax.ts`: Alpha-beta minimax, heuristics, and `chooseAiMove` for lord-minimizing play.
- `strategies.ts`: AI strategy router (perfect/weak/misère-fool/connect) plus bored Lord O handling.

## /src/hooks

- `useBattle.ts`: Battle hook that applies human/AI moves, delays lord turns, and exposes thinking/error/reset.

## /src/styles

- `app.css`: Layout and component styles for title, map, briefing, grids, overlay, and connect UI.
- `tokens.css`: Design tokens, global reset, body background, and reduced-motion defaults.

