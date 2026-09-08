# Repository file summaries

## /

- `.gitignore`: Ignores `node_modules`, `dist`, `*.local`, and `.DS_Store`.
- `index.html`: HTML shell titled Kingdom of Lexica that mounts React at `#root` and loads Cinzel/Crimson Pro fonts.
- `package.json`: Private Vite + React 19 package `onboarding-crosses` with `dev`, `build`, and `preview` scripts.
- `package-lock.json`: npm lockfile v3 pinning React 19, Vite 6, TypeScript 5.8, and related transitive deps.
- `README2`: Single-line placeholder that says "this is a test".
- `README.md`: Campaign overview for Kingdom of Lexica with local run steps, lord-to-game table, and how to add letters.
- `REPRO_NOTES.md`: One-line summaries of every repository file, grouped by directory.
- `tsconfig.app.json`: Strict TypeScript config for the `src` app (ES2022, react-jsx, bundler resolution, noEmit).
- `tsconfig.json`: Solution-style tsconfig that references app and node configs.
- `tsconfig.node.json`: Strict TypeScript config for `vite.config.ts` targeting ES2023.
- `vite.config.ts`: Vite config that enables the React plugin.

## /src

- `App.tsx`: Root React screen machine for title, map, briefing, and battle, including campaign progress and Lord O draw tracking.
- `main.tsx`: Vite entry that mounts `<App />` under React StrictMode on `#root`.
- `vite-env.d.ts`: Triple-slash reference that pulls in Vite client type declarations.

## /src/campaign

- `letters.ts`: Campaign letter registry (O/A/B/E/L/M/U/K) with titles, rules, AI strategy, and state factories.
- `progress.ts`: localStorage campaign progress for unlocks, victories, reset, and Lord O boredom draws.

## /src/components

- `BattleBriefing.tsx`: Pre-battle screen showing a lord's glyph, decree, rules, and begin/back actions.
- `BattleView.tsx`: Live battle UI that picks Classic/Connect/Ultimate grids, reports outcomes, and shows Lord O hints.
- `ClassicGrid.tsx`: Clickable classic/overflow board with blocked cells, crown highlight, and oldest-mark styling.
- `ConnectGrid.tsx`: Connect-Four style column-drop grid with per-column drop buttons.
- `OutcomeOverlay.tsx`: Modal copy and actions for win, loss, and draw, including Lord O boredom flavor.
- `ThroneMap.tsx`: Campaign path of letter thrones with lock/defeat state plus locked leftover alphabet.
- `TitleScreen.tsx`: Title splash with continue vs new-game entry depending on saved progress.
- `UltimateGrid.tsx`: Nine mini-boards for ultimate tic-tac-toe highlighting legal and active realms.

## /src/game

- `classic.ts`: Classic-grid rules for variable size, blocked cells, misère, crown weighting, and bonus opening placements.
- `connect.ts`: 7×6 connect-four engine with gravity drops, legal columns, win checks, and validation.
- `engine.ts`: Dispatcher that clones, lists legal moves, validates, and applies actions across all game kinds.
- `overflow.ts`: FIFO max-3-marks mode on a 5×5 board that reuses classic evaluation for four-in-a-row.
- `types.ts`: Shared Side/Cell/status unions plus Classic, Connect, Overflow, Ultimate state and action types.
- `ultimate.ts`: Ultimate tic-tac-toe rules for nine boards, active-realm routing, meta wins, and draws.

## /src/game/ai

- `lordO.ts`: Lord O boredom threshold, flavor thinking lines, and a throwing-move picker that gifts wins.
- `minimax.ts`: Alpha-beta search, heuristics, legal-action mapping, and best-move selection for the lords.
- `strategies.ts`: Strategy router for perfect, weak, misère-fool, connect, and bored-Lord-O play.

## /src/hooks

- `useBattle.ts`: Battle hook that reduces human moves, delays lord AI, and surfaces thinking/error state.

## /src/styles

- `app.css`: Layout and component styles for title, map, briefing, grids, overlays, and connect columns.
- `tokens.css`: Design tokens, global reset, body typography/background, and reduced-motion rules.





