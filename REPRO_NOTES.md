# Repository file summaries

Generated after listing every tracked file and reading each directory in turn.

## Repository file list

- `.gitignore`
- `README.md`
- `README2`
- `index.html`
- `package-lock.json`
- `package.json`
- `src/App.tsx`
- `src/campaign/letters.ts`
- `src/campaign/progress.ts`
- `src/components/BattleBriefing.tsx`
- `src/components/BattleView.tsx`
- `src/components/ClassicGrid.tsx`
- `src/components/ConnectGrid.tsx`
- `src/components/OutcomeOverlay.tsx`
- `src/components/ThroneMap.tsx`
- `src/components/TitleScreen.tsx`
- `src/components/UltimateGrid.tsx`
- `src/game/ai/lordO.ts`
- `src/game/ai/minimax.ts`
- `src/game/ai/strategies.ts`
- `src/game/classic.ts`
- `src/game/connect.ts`
- `src/game/engine.ts`
- `src/game/overflow.ts`
- `src/game/types.ts`
- `src/game/ultimate.ts`
- `src/hooks/useBattle.ts`
- `src/main.tsx`
- `src/styles/app.css`
- `src/styles/tokens.css`
- `src/vite-env.d.ts`
- `tsconfig.app.json`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`

## Root

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `README.md`: Documents Kingdom of Lexica, local run/build commands, the letter-lord campaign, and how to add a new letter.
- `README2`: Contains the single test line `this is a test`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica that loads Cinzel/Crimson Pro fonts and mounts `/src/main.tsx`.
- `package-lock.json`: npm lockfileVersion 3 pin of React 19, Vite 6, TypeScript 5.8, and related transitive deps.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/TypeScript scripts and React 19 dependencies.
- `tsconfig.json`: Solution-style TypeScript config that references the app and node project configs.
- `tsconfig.app.json`: Strict ES2022 + React JSX compiler options scoped to the `src` tree.
- `tsconfig.node.json`: Strict ES2023 compiler options scoped to `vite.config.ts`.
- `vite.config.ts`: Vite config that enables the official React plugin.

## src

- `src/App.tsx`: Top-level campaign router that loads/saves progress and switches among title, throne map, briefing, battle, and outcome overlay.
- `src/main.tsx`: React 19 entry that mounts `App` under StrictMode on `#root`.
- `src/vite-env.d.ts`: Triple-slash reference that pulls in Vite client TypeScript types.

## src/campaign

- `src/campaign/letters.ts`: Registers campaign letter-lords O/A/B/E/L/M/U/K with titles, rules, AI strategy, and game-state factories.
- `src/campaign/progress.ts`: Loads and saves campaign unlocks, victories, and Lord O draw counts in `localStorage`.

## src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, decree, rules, and Enter/Back actions.
- `src/components/BattleView.tsx`: Live battle shell that picks the right grid, reports outcomes, and shows Lord O boredom/hint banners.
- `src/components/ClassicGrid.tsx`: Clickable square grid for classic and overflow modes, including blocked bastions and oldest-mark styling.
- `src/components/ConnectGrid.tsx`: Connect-style column drop UI with gravity cells for Lord A's avalanche board.
- `src/components/OutcomeOverlay.tsx`: Modal copy and actions for win, loss, and draw, including Lord O-specific flavor.
- `src/components/ThroneMap.tsx`: Campaign path of unlocked/defeated letter thrones plus locked leftover alphabet letters.
- `src/components/TitleScreen.tsx`: Title menu that starts a new campaign or continues saved progress.
- `src/components/UltimateGrid.tsx`: Nine-board ultimate tic-tac-toe grid highlighting legal cells and active realms.

