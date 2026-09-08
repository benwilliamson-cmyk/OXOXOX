# Repository file summaries

Processed after a 350s wait. One-line summary per file, directory by directory.

## / (repository root)

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica; loads Cinzel/Crimson Pro fonts and mounts `/src/main.tsx`.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/React 19 scripts and TypeScript tooling.
- `package-lock.json`: npm lockfile pinning React 19, Vite 6, TypeScript 5.8, and related transitive dependencies.
- `README.md`: Documents Kingdom of Lexica, local run/build commands, campaign lords, and how to add a letter.
- `README2`: Short placeholder file containing the text `this is a test`.
- `tsconfig.json`: Solution-style TypeScript config that references app and node tsconfigs.
- `tsconfig.app.json`: Strict ES2022/DOM/React-JSX compiler options for the `src` tree.
- `tsconfig.node.json`: Strict ES2023 compiler options scoped to `vite.config.ts`.
- `vite.config.ts`: Vite config enabling the official React plugin.

## /src

- `src/App.tsx`: Campaign shell that routes title, throne map, briefing, and battle screens and persists progress/outcomes.
- `src/main.tsx`: React 19 entry point that mounts `App` under StrictMode into `#root`.
- `src/vite-env.d.ts`: Triple-slash reference that pulls in Vite client type definitions.

## /src/campaign

- `src/campaign/letters.ts`: Defines campaign letter IDs, AI strategies, and the LETTER_REGISTRY for lords O, A, B, E, L, M, U, and K.
- `src/campaign/progress.ts`: Loads and saves campaign progress in localStorage, including unlocks, victories, and Lord O draw boredom.

## /src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx`: Live battle UI that picks the right grid, reports outcomes, and shows AI thinking/status.
- `src/components/ClassicGrid.tsx`: Clickable classic/overflow board with blocked, crown, and oldest-mark styling.
- `src/components/ConnectGrid.tsx`: Column-drop Connect Four board with gravity cells and full-column handling.
- `src/components/OutcomeOverlay.tsx`: Modal copy for win, loss, and draw, including Lord O boredom flavor.
- `src/components/ThroneMap.tsx`: Campaign path of unlockable letter thrones plus locked leftover alphabet.
- `src/components/TitleScreen.tsx`: Title screen with continue/new-game actions for Kingdom of Lexica.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid that highlights legal active realms.

## /src/game

- `src/game/classic.ts`: Classic n×n rules: legal cells, win/misère evaluation, bonus placements, and apply/clone helpers.
- `src/game/connect.ts`: 7×6 Connect Four drop rules with four-in-a-row checks from the last drop.
- `src/game/engine.ts`: Dispatches clone, legal moves, validation, and apply across all game kinds.
- `src/game/overflow.ts`: 5×5 FIFO overflow mode that evicts a side's oldest mark after three on the board.
- `src/game/types.ts`: Shared Side/Cell/status types plus Classic, Connect, Overflow, and Ultimate state shapes.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe: nine boards, forced next realm, and meta-board winners.

## /src/game/ai

- `src/game/ai/lordO.ts`: After two draws, Lord O throws with gift moves, worst-for-lord minimax, and bored flavor lines.
- `src/game/ai/minimax.ts`: Alpha-beta search, heuristics, legal-action mapping, and `chooseAiMove` for the lord.
- `src/game/ai/strategies.ts`: Routes perfect, weak, misère-fool, connect, and bored-O move selection.

## /src/hooks

- `src/hooks/useBattle.ts`: Battle reducer that applies human moves and delayed AI turns with thinking status.

## /src/styles

- `src/styles/app.css`: Layout and component styles for title, map, briefing, grids, overlays, and battle chrome.
- `src/styles/tokens.css`: Theme tokens, global typography/background, and reduced-motion defaults.
