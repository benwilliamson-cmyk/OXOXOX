# Repository file summaries

Generated after a 350s wait. One-line summaries by directory.

## . (repository root)

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: HTML shell titled Kingdom of Lexica that loads Cinzel/Crimson Pro fonts and mounts `/src/main.tsx`.
- `package.json`: Private Vite+React+TypeScript package `onboarding-crosses` v0.1.0 with `dev`/`build`/`preview` scripts.
- `package-lock.json`: npm lockfile v3 pinning React 19, Vite 6, TypeScript 5.8, and related deps.
- `README2`: Contains the single test line `this is a test`.
- `README.md`: Documents Kingdom of Lexica campaign tic-tac-toe, local run steps, lord/game table, and how to add a letter.
- `tsconfig.app.json`: Strict app TypeScript config targeting ES2022 with React JSX and `src` include.
- `tsconfig.json`: Solution-style tsconfig that references app and node projects only.
- `tsconfig.node.json`: Strict TypeScript config for `vite.config.ts` targeting ES2023.
- `vite.config.ts`: Vite config that enables the React plugin.

## src

- `src/App.tsx`: Top-level screen router for title/map/briefing/battle, campaign progress, and Lord O draw/victory handling.
- `src/main.tsx`: React 19 entry that mounts `App` in StrictMode on `#root`.
- `src/vite-env.d.ts`: Triple-slash reference that pulls in Vite client types.

## src/campaign

- `src/campaign/letters.ts`: Defines letter IDs, AI strategies, campaign order, and the LETTER_REGISTRY of eight lords with rules and state factories.
- `src/campaign/progress.ts`: Loads/saves campaign progress in localStorage, including unlocks, victories, and Lord O boredom after draws.

## src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, title, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx`: Active battle UI that picks a grid, reports outcomes, and shows Lord O boredom/hint banners.
- `src/components/ClassicGrid.tsx`: Clickable n×n grid for classic and overflow modes, including blocked and oldest-mark cells.
- `src/components/ConnectGrid.tsx`: Connect-style column drop UI with per-column drop buttons and gravity-stacked cells.
- `src/components/OutcomeOverlay.tsx`: Modal for win/loss/draw copy, including Lord O boredom and rematch/continue actions.
- `src/components/ThroneMap.tsx`: Campaign map of unlockable letter thrones plus locked leftover alphabet letters.
- `src/components/TitleScreen.tsx`: Title screen with continue/new-game or first-entry buttons for Kingdom of Lexica.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting legal/active mini-boards.

## src/game

- `src/game/classic.ts`: Classic n×n rules: legal moves, win/misère evaluation, bonus placements, and apply/validate/clone.
- `src/game/connect.ts`: 7×6 connect-four drop rules with gravity, win-from-last-drop, and apply/validate/clone.
- `src/game/engine.ts`: Kind-dispatched clone, legal-move, validate, and apply helpers across all game modes.
- `src/game/overflow.ts`: 5×5 FIFO max-3 overflow mode that removes oldest marks and reuses classic evaluation.
- `src/game/types.ts`: Shared Side/Cell/status types plus Classic, Connect, Overflow, Ultimate state and action unions.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe with nine boards, active-board routing, meta-wins, and legal-move checks.

## src/game/ai

- `src/game/ai/lordO.ts`: Lord O boredom after two draws, flavor thinking lines, and a throwing-move picker that gifts wins.
- `src/game/ai/minimax.ts`: Alpha-beta minimax, heuristics, action conversion, and best-move selection for the lords.
- `src/game/ai/strategies.ts`: Strategy dispatcher for perfect, weak, misère-fool, connect, and bored Lord O play.

## src/hooks

- `src/hooks/useBattle.ts`: Battle hook that applies human moves, delays AI turns, and tracks thinking/error/reset state.

## src/styles

- `src/styles/app.css`: Component styles for title, map, briefing, battle grids, overlays, and chrome.
- `src/styles/tokens.css`: CSS variables, base body/button styles, and reduced-motion reset for the Lexica theme.

