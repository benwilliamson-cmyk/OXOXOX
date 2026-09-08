# Repository file notes

## .

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica that mounts React at `#root` and loads Cinzel/Crimson Pro fonts.
- `package.json`: npm manifest for `onboarding-crosses` with Vite/TypeScript scripts and React 19 dependencies.
- `package-lock.json`: npm lockfile v3 pinning React 19, Vite 6, TypeScript 5.8, and related packages.
- `README2`: Placeholder file containing only the text "this is a test".
- `README.md`: Kingdom of Lexica campaign tic-tac-toe onboarding docs covering run, lords, and adding letters.
- `tsconfig.app.json`: Strict TypeScript config for the `src` app with React JSX and bundler module resolution.
- `tsconfig.json`: Solution-style tsconfig that references the app and node configs.
- `tsconfig.node.json`: Strict TypeScript config used only for `vite.config.ts`.
- `vite.config.ts`: Vite config that enables the React plugin.

## src

- `src/App.tsx`: Root screen router for title, throne map, briefing, and battle, plus campaign progress and outcomes.
- `src/main.tsx`: React 19 entry that mounts `App` under StrictMode on `#root`.
- `src/vite-env.d.ts`: Vite client type reference for the TypeScript app.
