# Repository file summaries

Listed every file in the repository (excluding `.git` internals):

- `.gitignore`
- `index.html`
- `package.json`
- `package-lock.json`
- `README.md`
- `README2`
- `tsconfig.app.json`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`
- `src/App.tsx`
- `src/main.tsx`
- `src/vite-env.d.ts`
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
- `src/game/classic.ts`
- `src/game/connect.ts`
- `src/game/engine.ts`
- `src/game/overflow.ts`
- `src/game/types.ts`
- `src/game/ultimate.ts`
- `src/game/ai/lordO.ts`
- `src/game/ai/minimax.ts`
- `src/game/ai/strategies.ts`
- `src/hooks/useBattle.ts`
- `src/styles/app.css`
- `src/styles/tokens.css`

## Root directory

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica that mounts React at `#root` and loads Cinzel/Crimson Pro fonts.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/React 19 scripts and TypeScript tooling.
- `package-lock.json`: npm lockfile v3 pinning React 19, Vite 6, TypeScript 5.8, and related transitive deps.
- `README.md`: Documents Kingdom of Lexica campaign lords, local run/build commands, and how to add a letter.
- `README2`: Single-line test placeholder (`this is a test`).
- `tsconfig.json`: Solution tsconfig that references app and node configs with no emit files of its own.
- `tsconfig.app.json`: Strict ES2022/DOM/React-JSX compiler options including the `src` tree.
- `tsconfig.node.json`: Strict ES2023 compiler options for `vite.config.ts` only.
- `vite.config.ts`: Vite config enabling the official React plugin.

## src/

- `src/App.tsx`: Top-level screen router for title, throne map, briefing, and battle, plus campaign progress and Lord O draw tracking.
- `src/main.tsx`: React 19 entry that mounts `App` in StrictMode on `#root`.
- `src/vite-env.d.ts`: Triple-slash reference so TypeScript picks up Vite client types.

