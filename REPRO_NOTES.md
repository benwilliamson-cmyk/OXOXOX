# Repository file summaries

## .

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `README.md`: Documents Kingdom of Lexica, a campaign tic-tac-toe onboarding game with local run/build steps and letter-lord rules.
- `README2`: Placeholder file containing the text "this is a test".
- `index.html`: Vite HTML shell titled Kingdom of Lexica that loads Cinzel/Crimson Pro fonts and mounts `/src/main.tsx`.
- `package-lock.json`: npm lockfile (lockfileVersion 3) pinning React 19, Vite 6, TypeScript 5.8, and related deps.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/React scripts and React 19 dependencies.
- `tsconfig.app.json`: Strict TypeScript app config targeting ES2022/DOM with React JSX for the `src` tree.
- `tsconfig.json`: Solution-style tsconfig that references the app and node configs.
- `tsconfig.node.json`: Strict TypeScript config for `vite.config.ts` targeting ES2023.
- `vite.config.ts`: Vite config enabling the React plugin.

## src

- `src/App.tsx`: Root React app that routes title/map/briefing/battle screens and persists campaign progress.
- `src/main.tsx`: React 19 entry point that mounts `App` into `#root` under StrictMode.
- `src/vite-env.d.ts`: Vite client type reference for the TypeScript app.

## src/campaign

- `src/campaign/letters.ts`: Registers letter-lords O/A/B/E/L/M/U/K with titles, rules, AI strategy, and game-state factories.
- `src/campaign/progress.ts`: Loads and saves campaign unlocks, victories, and Lord O draw-boredom in localStorage.

## src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx`: In-battle UI that picks classic/connect/ultimate grids, reports outcomes, and shows Lord O hints.
- `src/components/ClassicGrid.tsx`: Clickable square grid for classic and overflow modes, including blocked and oldest-mark cells.
- `src/components/ConnectGrid.tsx`: Connect-Four style column-drop board with gravity cells and drop buttons.
- `src/components/OutcomeOverlay.tsx`: Modal for win/loss/draw copy, including Lord O boredom flavor, with retry or map return.
- `src/components/ThroneMap.tsx`: Campaign map of unlocked/defeated letter thrones plus locked leftover alphabet letters.
- `src/components/TitleScreen.tsx`: Title screen with continue/new-game actions for Kingdom of Lexica.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting legal/active realms.

## src/game

- `src/game/classic.ts`: Classic n×n placement rules, legal moves, win/misère evaluation, and bonus opening placements.
- `src/game/connect.ts`: 7×6 Connect Four logic for gravity drops, four-in-a-row wins, and column validation.
- `src/game/engine.ts`: Dispatches clone/legal-move/validate/apply across classic, connect, overflow, and ultimate states.
- `src/game/overflow.ts`: 5×5 FIFO overflow mode that removes a side's oldest mark after three stones.
- `src/game/types.ts`: Shared game types for sides, actions, and classic/connect/overflow/ultimate state shapes.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe rules for nine boards, active-realm targeting, and meta-board wins.

## src/game/ai

- `src/game/ai/lordO.ts`: After two draws, Lord O throws games via gift moves and bored thinking lines.
- `src/game/ai/minimax.ts`: Alpha-beta minimax with heuristics and `chooseAiMove` for lord-side play.
- `src/game/ai/strategies.ts`: Selects perfect, weak, misère-fool, connect, or bored-O move policies per letter.

## src/hooks

- `src/hooks/useBattle.ts`: Battle hook that applies human moves, delays lord AI, and tracks thinking/error state.

## src/styles

- `src/styles/app.css`: Layout and component styles for title, throne map, briefing, battle grids, and overlays.
- `src/styles/tokens.css`: Design tokens and global body styles (gold/purple theme, Cinzel/Crimson Pro fonts).
