# Repository file summaries

## /

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: Vite HTML shell titled Kingdom of Lexica; loads Cinzel/Crimson Pro fonts and mounts `/src/main.tsx`.
- `package.json`: Private ESM app `onboarding-crosses` 0.1.0 with Vite/React 19 scripts and TypeScript tooling.
- `package-lock.json`: npm lockfile v3 pinning React 19, Vite 6, TypeScript 5.8, and related transitive deps.
- `README2`: Placeholder file containing only `this is a test`.
- `README.md`: Kingdom of Lexica campaign tic-tac-toe onboarding game docs (run, lords, adding letters, build).
- `tsconfig.app.json`: Strict ES2022/DOM TypeScript config for `src` with React JSX and no emit.
- `tsconfig.json`: Solution-style project that references app and node tsconfigs.
- `tsconfig.node.json`: Strict ES2023 TypeScript config scoped to `vite.config.ts`.
- `vite.config.ts`: Vite config enabling the official React plugin.

## /src

- `src/App.tsx`: Root React app that routes title/map/briefing/battle screens and persists campaign progress.
- `src/main.tsx`: React 19 entry that mounts `App` into `#root` under StrictMode.
- `src/vite-env.d.ts`: Triple-slash reference so Vite client types are available.

## /src/campaign

- `src/campaign/letters.ts`: Campaign letter registry (O/A/B/E/L/M/U/K) with titles, rules, AI strategy, and state factories.
- `src/campaign/progress.ts`: localStorage campaign progress: defeats, unlocks, Lord O draw-boredom, reset/save/load.

## /src/components

- `src/components/BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, decree, rules, and begin/back actions.
- `src/components/BattleView.tsx`: Live battle UI: chooses grid by game kind, reports outcomes, retreat/rematch, and rules toggle.
- `src/components/ClassicGrid.tsx`: Button grid for classic/overflow boards with blocked, crown, and oldest-mark styling.
- `src/components/ConnectGrid.tsx`: Connect-Four style column drop UI with gravity cells and full-column disable.
- `src/components/OutcomeOverlay.tsx`: Modal for win/loss/draw with Lord O boredom copy and continue/retry actions.
- `src/components/ThroneMap.tsx`: Campaign path of letter thrones (unlocked/defeated/locked) plus leftover alphabet.
- `src/components/TitleScreen.tsx`: Title screen with continue/new-game entry into the Kingdom of Lexica.
- `src/components/UltimateGrid.tsx`: Nine mini-boards for ultimate tic-tac-toe, highlighting legal active realms.

## /src/game

- `src/game/classic.ts`: Classic n×n rules: legal moves, win/misère/draw eval, bonus placements, clone/apply/validate.
- `src/game/connect.ts`: 7×6 connect-four engine with gravity drops, four-in-a-row checks, and column validation.
- `src/game/engine.ts`: Kind-dispatch facade for clone, legal moves, validate, apply, and human-turn checks.
- `src/game/overflow.ts`: 5×5 FIFO overflow mode (max 3 marks) that reuses classic evaluation for four-in-a-row.
- `src/game/types.ts`: Shared game types for sides, actions, classic/connect/overflow/ultimate state unions.
- `src/game/ultimate.ts`: Ultimate tic-tac-toe: nine boards, active-realm routing, meta-wins, and legal-move listing.

## /src/game/ai

- `src/game/ai/lordO.ts`: Lord O boredom after two draws plus a throwing-move picker that gifts wins.
- `src/game/ai/minimax.ts`: Alpha-beta minimax, heuristics, legal-action conversion, and best AI move selection.
- `src/game/ai/strategies.ts`: Strategy router for perfect/weak/misère-fool/connect and bored Lord O play.

## /src/hooks

- `src/hooks/useBattle.ts`: Battle hook: reducer for moves/errors, delayed lord AI turns, reset, and thinking lines.

## /src/styles

- `src/styles/app.css`: Component styles for title, thrones, briefing, battle grids, overlays, and buttons.
- `src/styles/tokens.css`: Design tokens, global body/root reset, and reduced-motion rules for the Lexica theme.
