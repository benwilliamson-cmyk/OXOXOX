import { createClassicState } from '../game/classic';
import { createConnectState } from '../game/connect';
import { createOverflowState } from '../game/overflow';
import { createUltimateState } from '../game/ultimate';
import type { GameState } from '../game/types';

export type LetterId = 'O' | 'A' | 'B' | 'E' | 'L' | 'M' | 'U' | 'K';

/** How the lord picks moves — most lords are beatable on purpose. */
export type AiStrategy = 'perfect' | 'weak' | 'misere-fool' | 'connect';

export type LetterDefinition = {
  id: LetterId;
  title: string;
  decree: string;
  rules: string;
  opponentGlyph: string;
  aiDepth: number;
  aiStrategy: AiStrategy;
  createState: () => GameState;
};

export const CAMPAIGN_ORDER: LetterId[] = ['O', 'A', 'B', 'E', 'L', 'M', 'U', 'K'];

export const LETTER_REGISTRY: Record<LetterId, LetterDefinition> = {
  O: {
    id: 'O',
    title: 'The Hollow Crown',
    opponentGlyph: 'O',
    decree:
      'Lord O holds the oldest throne. His law is the one every child learns — but even solved games grow dull when played forever.',
    rules:
      'Classic 3×3 tic-tac-toe. Three in a row wins. After two draws, Lord O stops playing seriously.',
    aiDepth: 9,
    aiStrategy: 'perfect',
    createState: () => createClassicState({ size: 3, winLength: 3 }),
  },
  A: {
    id: 'A',
    title: 'The Avalanche Arena',
    opponentGlyph: 'A',
    decree:
      'Lord A refuses the flat grid entirely. Stones fall from above; gravity decides where they land. Align four in a column, row, or diagonal.',
    rules:
      'Connect-style battle: 7 columns, 6 rows. Drop a stone in a column. First to four in a row wins. Not tic-tac-toe.',
    aiDepth: 4,
    aiStrategy: 'connect',
    createState: () => createConnectState(),
  },
  B: {
    id: 'B',
    title: 'The Bastion Fields',
    opponentGlyph: 'B',
    decree:
      'Lord B war on a grand field with shattered bastions — four ruined squares no one may hold. Four in a row still wins, but the map is wide and his scouts are poor.',
    rules:
      '5×5 grid, four blocked bastion cells, four in a row to win. Lord B is a careless tactician.',
    aiDepth: 2,
    aiStrategy: 'weak',
    createState: () =>
      createClassicState({
        size: 5,
        winLength: 4,
        blockedCells: [6, 8, 16, 18],
      }),
  },
  E: {
    id: 'E',
    title: 'The Edge Edict',
    opponentGlyph: 'E',
    decree:
      'Lord E widened the court but softened the law: only three marks need align upon a 4×4 field. He trusts size more than skill.',
    rules: '4×4 grid. Three in a row wins (not four). Lord E is easily outmaneuvered.',
    aiDepth: 2,
    aiStrategy: 'weak',
    createState: () => createClassicState({ size: 4, winLength: 3 }),
  },
  L: {
    id: 'L',
    title: 'The Lingering Levy',
    opponentGlyph: 'L',
    decree:
      'Lord L taxes every army: no more than three banners on the field. Place a fourth, and your eldest mark fades into mist.',
    rules:
      '5×5 grid. Max 3 marks per side; 4th placement removes your oldest. Four in a row wins.',
    aiDepth: 2,
    aiStrategy: 'weak',
    createState: () => createOverflowState(),
  },
  M: {
    id: 'M',
    title: 'The Misfortune Mandate',
    opponentGlyph: 'M',
    decree:
      'Lord M is a trickster-king: three in a row loses. Worse, he still plays as if pride were victory — and pride will ruin him.',
    rules:
      '3×3 misère: three in a row loses. Lord M does not understand his own decree.',
    aiDepth: 4,
    aiStrategy: 'misere-fool',
    createState: () =>
      createClassicState({
        size: 3,
        winLength: 3,
        misere: true,
      }),
  },
  U: {
    id: 'U',
    title: 'The United Underlands',
    opponentGlyph: 'U',
    decree:
      'Lord U rules nine lesser realms. Your move binds where the next battle is fought — but his marshals barely coordinate.',
    rules:
      'Ultimate tic-tac-toe (nine 3×3 boards). Win three sub-boards in a row. Lord U thinks only one move ahead.',
    aiDepth: 2,
    aiStrategy: 'weak',
    createState: () => createUltimateState(),
  },
  K: {
    id: 'K',
    title: "The King's Gambit",
    opponentGlyph: 'K',
    decree:
      'Lord K grants you an opening fit for royalty: place two stones before he answers once. Then prove yourself on a 4×4 court.',
    rules:
      '4×4 grid, three in a row wins. You place twice at the start; then play alternates. Lord K is overconfident.',
    aiDepth: 2,
    aiStrategy: 'weak',
    createState: () =>
      createClassicState({
        size: 4,
        winLength: 3,
        challengerBonusPlacements: 1,
      }),
  },
};

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
export const LOCKED_LETTERS = ALPHABET.filter(
  (c) => !CAMPAIGN_ORDER.includes(c as LetterId),
);

export function getLetter(id: LetterId): LetterDefinition {
  return LETTER_REGISTRY[id];
}

export function nextLetter(id: LetterId): LetterId | null {
  const idx = CAMPAIGN_ORDER.indexOf(id);
  if (idx < 0 || idx >= CAMPAIGN_ORDER.length - 1) return null;
  return CAMPAIGN_ORDER[idx + 1] ?? null;
}
