import { applyAction, cloneState } from '../engine';
import type { GameAction, GameState } from '../types';
import { minimax, randomAction, toActions } from './minimax';

/** After this many draws vs Lord O, he stops playing perfectly. */
export const LORD_O_DRAWS_UNTIL_BORED = 2;

const BORED_THINKING_LINES = [
  'Lord O is doodling a solved proof in the margin…',
  'Lord O whispers: "The Nash equilibrium is *friendship*."',
  'Lord O checks whether Wikipedia still says he cannot lose.',
  'Lord O considers resigning to pursue competitive noughts.',
  'Lord O yawns. Perfect play is so perfectly dull.',
];

export function getLordOBoredThinkingLine(): string {
  return randomAction(BORED_THINKING_LINES);
}

/** Deliberately pick a weak move so a careful challenger can win. */
export function chooseLordOThrowingMove(state: GameState, aiDepth: number): GameAction {
  const actions = toActions(state);
  if (actions.length === 0) return { type: 'PLACE', index: 0 };

  const giftMoves: GameAction[] = [];

  for (const action of actions) {
    const afterLord = applyAction(cloneState(state), action);
    if (afterLord.status === 'lost') {
      giftMoves.push(action);
      continue;
    }
    if (afterLord.status !== 'playing' || afterLord.turn !== 'challenger') continue;

    const humanMoves = toActions(afterLord);
    for (const humanAction of humanMoves) {
      const afterHuman = applyAction(cloneState(afterLord), humanAction);
      if (afterHuman.status === 'won') {
        giftMoves.push(action);
        break;
      }
    }
  }

  if (giftMoves.length > 0) return randomAction(giftMoves);

  let worstForLord = actions[0]!;
  let bestForChallenger = -Infinity;

  for (const action of actions) {
    const child = applyAction(cloneState(state), action);
    const score = minimax(child, aiDepth - 1, -Infinity, Infinity, true);
    if (score > bestForChallenger) {
      bestForChallenger = score;
      worstForLord = action;
    }
  }

  return worstForLord;
}

export function isClassicLordO(state: GameState): boolean {
  return (
    state.kind === 'classic' &&
    state.options.size === 3 &&
    !state.options.misere &&
    !state.options.blockedCells?.length &&
    state.options.crownCell === undefined &&
    !state.options.challengerBonusPlacements
  );
}
