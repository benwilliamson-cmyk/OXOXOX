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

