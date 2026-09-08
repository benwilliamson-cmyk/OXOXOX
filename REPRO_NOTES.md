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

