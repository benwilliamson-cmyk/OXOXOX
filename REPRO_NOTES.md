# Repository file summaries

Processed after a 350-second wait. One directory at a time.

## . (repository root)

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica that mounts `/src/main.tsx` and loads Cinzel/Crimson Pro fonts.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with React 19, Vite 6, and TypeScript scripts.
- `package-lock.json`: npm lockfileVersion 3 pinning React 19, Vite 6, TypeScript 5.8, and transitive deps.
- `README2`: Placeholder file containing only the text "this is a test".
- `README.md`: Kingdom of Lexica onboarding campaign docs covering run/build steps and letter-lord game modes.
- `tsconfig.app.json`: Strict ES2022/DOM TypeScript config for the `src` app (react-jsx, noEmit).
- `tsconfig.json`: Solution-style tsconfig that references app and node projects.
- `tsconfig.node.json`: Strict ES2023 TypeScript config that type-checks `vite.config.ts`.
- `vite.config.ts`: Minimal Vite config enabling the React plugin.

## src

- `src/App.tsx`: Campaign shell that routes title/map/briefing/battle screens and persists letter-lord progress.
- `src/main.tsx`: React 19 entry that mounts `App` under StrictMode on `#root`.
- `src/vite-env.d.ts`: Vite client type reference for the TypeScript app.

## src/campaign

- `src/campaign/letters.ts`: Registry of letter-lords (O, A, B, E, L, M, U, K) with decrees, rules, AI strategy, and game factories.
- `src/campaign/progress.ts`: localStorage campaign progress for defeated letters, unlocks, and Lord O draw boredom.

## src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's title, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx`: Active battle UI that picks the grid, reports outcomes, and shows Lord O boredom hints.
- `src/components/ClassicGrid.tsx`: Square-grid renderer for classic/overflow modes with blocked cells and oldest-mark styling.
- `src/components/ConnectGrid.tsx`: Column-drop board UI for Lord A's 7×6 connect-style battle.
- `src/components/OutcomeOverlay.tsx`: Modal for win/loss/draw with Lord O-specific copy and retry/map actions.
- `src/components/ThroneMap.tsx`: Campaign path of unlockable letter thrones plus locked leftover alphabet letters.
- `src/components/TitleScreen.tsx`: Title screen with new-game and continue buttons for Kingdom of Lexica.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting legal/active realms.

## src/game

- `src/game/classic.ts`: Classic NxN rules with blocked cells, misère, bonus placements, and line evaluation.
- `src/game/connect.ts`: Connect-Four style 7×6 gravity drops with four-in-a-row win checks.
- `src/game/engine.ts`: Dispatch layer that clones, validates, and applies actions across all game kinds.
- `src/game/overflow.ts`: 5×5 FIFO mode that removes a side's oldest mark after three stones.
- `src/game/types.ts`: Shared Side/Cell/status types and state shapes for classic, connect, overflow, and ultimate.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe with nine boards, active-realm routing, and meta-win detection.

