# Repository file list

- .gitignore
- index.html
- package.json
- package-lock.json
- README2
- README.md
- tsconfig.app.json
- tsconfig.json
- tsconfig.node.json
- vite.config.ts
- src/App.tsx
- src/main.tsx
- src/vite-env.d.ts
- src/campaign/letters.ts
- src/campaign/progress.ts
- src/components/BattleBriefing.tsx
- src/components/BattleView.tsx
- src/components/ClassicGrid.tsx
- src/components/ConnectGrid.tsx
- src/components/OutcomeOverlay.tsx
- src/components/ThroneMap.tsx
- src/components/TitleScreen.tsx
- src/components/UltimateGrid.tsx
- src/game/ai/lordO.ts
- src/game/ai/minimax.ts
- src/game/ai/strategies.ts
- src/game/classic.ts
- src/game/connect.ts
- src/game/engine.ts
- src/game/overflow.ts
- src/game/types.ts
- src/game/ultimate.ts
- src/hooks/useBattle.ts
- src/styles/app.css
- src/styles/tokens.css

# File summaries

## Directory: . (repository root)

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store` from version control.
- `index.html`: Vite HTML shell titled Kingdom of Lexica that loads Cinzel/Crimson Pro fonts and mounts `/src/main.tsx`.
- `package.json`: Private `onboarding-crosses` package with Vite/TypeScript scripts and React 19 dependencies.
- `package-lock.json`: npm lockfile v3 pinning React 19, Vite 6, TypeScript 5.8, and related transitive packages.
- `README2`: Single-line test file containing the text `this is a test`.
- `README.md`: Project readme describing Kingdom of Lexica campaign lords, local run/build commands, and how to add letters.
- `tsconfig.app.json`: Strict TypeScript app config targeting ES2022/DOM with React JSX and `src` included.
- `tsconfig.json`: Solution-style tsconfig that only references the app and node project configs.
- `tsconfig.node.json`: Strict TypeScript config for Node tooling that includes `vite.config.ts`.
- `vite.config.ts`: Vite config enabling the official React plugin with default options.

## Directory: src

- `src/App.tsx`: Root React app that routes title/map/briefing/battle screens and persists campaign progress plus Lord O draw state.
- `src/main.tsx`: React 19 entry point that mounts `App` into `#root` under `StrictMode`.
- `src/vite-env.d.ts`: Triple-slash reference that pulls in Vite client TypeScript types.

## Directory: src/campaign

- `src/campaign/letters.ts`: Defines campaign letter IDs, AI strategies, and the registry of lords O/A/B/E/L/M/U/K with rules and state factories.
- `src/campaign/progress.ts`: Loads and saves campaign progress in `localStorage`, including unlocks, victories, and Lord O boredom after draws.

## Directory: src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's title, decree, rules, and optional bored-Lord-O quote with begin/back actions.
- `src/components/BattleView.tsx`: Active battle UI that picks classic/connect/ultimate grids, reports outcomes, and shows Lord O boredom/hint banners.
- `src/components/ClassicGrid.tsx`: Clickable NxN grid renderer for classic and overflow modes, including blocked bastions and oldest-mark highlighting.
- `src/components/ConnectGrid.tsx`: Connect Four column-drop UI that disables full columns and renders gravity-stacked cells.
- `src/components/OutcomeOverlay.tsx`: Modal overlay for win/loss/draw with Lord O-specific copy and continue/retry buttons.
- `src/components/ThroneMap.tsx`: Campaign map of unlocked/defeated/locked letter thrones plus a locked-letter row and completion epilogue.
- `src/components/TitleScreen.tsx`: Title screen for Kingdom of Lexica with new-game and continue-campaign buttons.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid that highlights legal boards and cells.

## Directory: src/game

- `src/game/classic.ts`: Classic grid engine with blocked cells, misère, crown scoring, bonus opening placements, and win/draw evaluation.
- `src/game/connect.ts`: Connect Four engine for a 7×6 board with gravity drops, legal columns, and four-in-a-row checks.
- `src/game/engine.ts`: Shared dispatcher that clones, lists legal moves, validates, and applies actions across all game kinds.
- `src/game/overflow.ts`: FIFO overflow mode on a 5×5 board that removes a side's oldest mark after three pieces.
- `src/game/types.ts`: Shared TypeScript types for sides, actions, and classic/connect/overflow/ultimate game states.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe rules for nine sub-boards, active-board routing, and meta-line winners.

## Directory: src/game/ai

- `src/game/ai/lordO.ts`: Lord O boredom constant, flavor thinking lines, and a throwing-move picker that gifts wins after two draws.
- `src/game/ai/minimax.ts`: Alpha-beta minimax with heuristics, move ordering, and `chooseAiMove` for the lord's best replies.
- `src/game/ai/strategies.ts`: Strategy router for perfect, weak, misère-fool, connect, and bored-Lord-O AI personalities.

## Directory: src/hooks

- `src/hooks/useBattle.ts`: Battle hook that reduces game actions, delays lord AI turns, and exposes human play/reset plus thinking state.

## Directory: src/styles

- `src/styles/app.css`: Component stylesheet for title, throne map, briefing, battle grids, overlays, and Connect Four layout.
- `src/styles/tokens.css`: Global design tokens, dark royal theme, fonts, and reduced-motion resets for the app shell.
