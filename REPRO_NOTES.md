# Repository file summaries

## / (root)

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica; loads Cinzel/Crimson Pro fonts and mounts `/src/main.tsx`.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/React 19 scripts and TypeScript tooling.
- `package-lock.json`: npm lockfile v3 pinning React 19.1.0, Vite 6.3.5, TypeScript 5.8.3, and their dependency tree.
- `README.md`: Documents Kingdom of Lexica, local run/build commands, campaign lords/rules, and how to add a letter.
- `README2`: Placeholder text file containing `this is a test`.
- `tsconfig.app.json`: Strict TypeScript app config targeting ES2022/DOM with React JSX and `src` included.
- `tsconfig.json`: Solution-style tsconfig that references `tsconfig.app.json` and `tsconfig.node.json`.
- `tsconfig.node.json`: Strict TypeScript config for `vite.config.ts` targeting ES2023.
- `vite.config.ts`: Vite config enabling the official React plugin.

## /src

- `src/App.tsx`: Root React app that routes title/map/briefing/battle screens and persists campaign progress and battle outcomes.
- `src/main.tsx`: React 19 entry point that mounts `<App />` in StrictMode on `#root`.
- `src/vite-env.d.ts`: Triple-slash reference so TypeScript picks up Vite client types.

## /src/campaign

- `src/campaign/letters.ts`: Defines letter-lord IDs, campaign order, AI strategies, and per-lord rules/state factories for O/A/B/E/L/M/U/K.
- `src/campaign/progress.ts`: Loads/saves campaign progress in localStorage and tracks unlocks, victories, and Lord O draw boredom.

## /src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, title, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx`: Live battle UI that picks the grid, reports outcomes, and shows turn/AI/Lord O status.
- `src/components/ClassicGrid.tsx`: Clickable NxN grid for classic/overflow modes with blocked, crown, and oldest-mark styling.
- `src/components/ConnectGrid.tsx`: Connect-style column-drop board with drop buttons and gravity cells.
- `src/components/OutcomeOverlay.tsx`: Modal for win/loss/draw with Lord O-specific copy and continue/retry actions.
- `src/components/ThroneMap.tsx`: Campaign map of unlockable letter thrones plus a row of still-locked alphabet letters.
- `src/components/TitleScreen.tsx`: Title screen with continue/new-game or first-entry buttons for Kingdom of Lexica.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting legal/active realms.

## /src/game

- `src/game/classic.ts`: Classic grid rules: create/validate/apply moves, blocked cells, bonus placements, misère, and win/draw evaluation.
- `src/game/connect.ts`: 7×6 connect-four engine with gravity drops, legal columns, and four-in-a-row checks.
- `src/game/engine.ts`: Mode dispatcher that clones, lists legal moves, validates, and applies actions across all game kinds.
- `src/game/overflow.ts`: 5×5 FIFO overflow mode that keeps at most three marks per side and evaluates with classic win logic.
- `src/game/types.ts`: Shared TypeScript types for sides, statuses, actions, and classic/connect/overflow/ultimate state.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe engine with nine boards, active-realm routing, and meta-board winners.

## /src/game/ai

- `src/game/ai/lordO.ts`: Lord O boredom after two draws, flavor thinking lines, and a throwing-move picker.
- `src/game/ai/minimax.ts`: Alpha-beta minimax, heuristics, legal-action conversion, and best-move selection for the AI.
- `src/game/ai/strategies.ts`: Per-lord AI strategies (perfect, weak, misère-fool, connect) plus bored Lord O routing.

## /src/hooks

- `src/hooks/useBattle.ts`: Battle hook that reduces game actions, runs delayed lord AI, and exposes play/reset/error/thinking state.

## /src/styles

- `src/styles/app.css`: Layout and component styles for title, map, briefing, battle grids, overlays, and connect columns.
- `src/styles/tokens.css`: Design tokens, global reset, body typography/background, and reduced-motion rules.
