# Kingdom of Lexica

A single-player campaign tic-tac-toe game built for Cursor onboarding. Battle letter-lords of the alphabet; each throne changes the rules of the grid.

## Run locally

```bash
cd onboarding-crosses
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Campaign (v1)

Each lord is a **different game** (or a beatable opponent), not a tweak on solved 3×3.

| Lord | Game | Why you can win |
|------|------|-----------------|
| **O** | Classic 3×3 | Perfect until bored (2 draws), then throws |
| **A** | **Connect Four** (7×6, drop pieces) | Different game entirely; lord blunders |
| **B** | 5×5 with 4 bastions, 4 in a row | Weak AI |
| **E** | 4×4, only **3** in a row | Weak AI |
| **L** | 5×5 FIFO max-3 marks | Weak AI |
| **M** | Misère 3×3 | Lord plays normal rules by mistake |
| **U** | Ultimate tic-tac-toe | Shallow AI (depth 2) |
| **K** | 4×4, 3 in a row + **two opening moves** | Weak AI + gambit |

Progress is saved in `localStorage`.

## Adding a new letter

1. Add a `LetterId` and entry in `src/campaign/letters.ts` (`CAMPAIGN_ORDER` + `LETTER_REGISTRY`).
2. Reuse `createClassicState` options or add a mode under `src/game/`.
3. Tune `aiDepth` for board size.

## Build

```bash
npm run build
npm run preview
```
