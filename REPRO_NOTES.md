# Repository file summaries

Processed directory-by-directory after a 350s wait. One line per file.

## / (root)

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica that mounts `#root` and loads `/src/main.tsx`.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/React 19 scripts and TypeScript tooling.
- `package-lock.json`: npm lockfileVersion 3 pinning React 19, Vite 6, TypeScript 5.8, and related deps.
- `README2`: Short placeholder file containing the text `this is a test`.
- `README.md`: Kingdom of Lexica campaign tic-tac-toe onboarding docs covering lords, local run, and adding letters.
- `tsconfig.app.json`: Strict TypeScript config for the `src` app (ES2022, React JSX, bundler resolution).
- `tsconfig.json`: Solution-style tsconfig that references `tsconfig.app.json` and `tsconfig.node.json`.
- `tsconfig.node.json`: Strict TypeScript config used only for `vite.config.ts` (ES2023).
- `vite.config.ts`: Minimal Vite config enabling the official React plugin.

## /src

- `src/App.tsx`: Root React app that routes title, map, briefing, and battle screens and persists campaign progress.
- `src/main.tsx`: React 19 entry that mounts `<App />` into `#root` under StrictMode.
- `src/vite-env.d.ts`: Triple-slash reference that pulls in Vite client type declarations.

## /src/campaign

- `src/campaign/letters.ts`: Defines letter-lord IDs, campaign order, AI strategies, and per-lord rules plus game factories.
- `src/campaign/progress.ts`: Loads and saves campaign unlock/defeat state in localStorage, including Lord O draw boredom.

## /src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's title, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx`: Live battle UI that picks the right grid, reports outcomes, and shows AI thinking/rules.
- `src/components/ClassicGrid.tsx`: Clickable n×n grid for classic and overflow modes, including blocked and oldest cells.
- `src/components/ConnectGrid.tsx`: Connect-Four style column-drop grid with per-column drop buttons.
- `src/components/OutcomeOverlay.tsx`: Modal overlay for win, loss, and draw with Lord O–specific copy.
- `src/components/ThroneMap.tsx`: Campaign map of unlocked, current, defeated, and still-locked letter thrones.
- `src/components/TitleScreen.tsx`: Title screen with new-game and continue buttons for Kingdom of Lexica.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting legal active realms.

## /src/game

- `src/game/classic.ts`: Classic-grid rules: create, legal moves, win/misère evaluation, validation, and apply/clone.
- `src/game/connect.ts`: Connect-Four 7×6 drop logic with four-in-a-row checks and column validation.
- `src/game/engine.ts`: Shared dispatcher that clones, lists legal moves, validates, and applies actions by game kind.
- `src/game/overflow.ts`: FIFO max-3-marks 5×5 mode that removes oldest pieces and reuses classic win checks.
- `src/game/types.ts`: Shared Side/Cell/status types plus Classic, Connect, Overflow, and Ultimate state unions.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe boards, active-realm routing, meta-wins, and legal move listing.

## /src/game/ai

- `src/game/ai/lordO.ts`: Lord O boredom threshold, flavor thinking lines, and deliberate throwing-move selection.
- `src/game/ai/minimax.ts`: Alpha-beta minimax, heuristics, legal-action mapping, and best-move choice for the lord.
- `src/game/ai/strategies.ts`: Strategy router for perfect, weak, misère-fool, connect, and bored Lord O play.

## /src/hooks

- `src/hooks/useBattle.ts`: Battle reducer hook that applies human moves and schedules delayed lord AI turns.

## /src/styles

- `src/styles/app.css`: Layout and component styles for title, map, briefing, grids, overlay, and connect UI.
- `src/styles/tokens.css`: Design tokens, global typography, dark royal palette, and reduced-motion reset.

