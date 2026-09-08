# Repository file summaries

Processed after a 350s wait. One-line summaries by directory.

## .

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `README.md`: Documents Kingdom of Lexica, a campaign tic-tac-toe onboarding game with local run/build steps and letter-lord rules.
- `README2`: Placeholder file containing the text "this is a test".
- `index.html`: Vite HTML shell titled Kingdom of Lexica that loads Cinzel/Crimson Pro fonts and mounts `/src/main.tsx`.
- `package.json`: Private `onboarding-crosses` 0.1.0 package with Vite/React 19 scripts and TypeScript toolchain.
- `package-lock.json`: npm lockfileVersion 3 pinning React 19, Vite 6, and related install tree.
- `tsconfig.app.json`: Strict ES2022/DOM TypeScript config for the `src` app with react-jsx and noEmit.
- `tsconfig.json`: Solution-style project that references app and node tsconfigs.
- `tsconfig.node.json`: Strict ES2023 TypeScript config used only for `vite.config.ts`.
- `vite.config.ts`: Vite config enabling the official React plugin.

## src

- `src/App.tsx`: Root React app that routes title/map/briefing/battle screens and persists campaign progress plus Lord O draws.
- `src/main.tsx`: React 19 entry that mounts `App` under StrictMode on `#root`.
- `src/vite-env.d.ts`: Vite client type reference for the TypeScript app.


