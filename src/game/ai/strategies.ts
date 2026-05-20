import { applyAction, cloneState } from '../engine';
import type { GameAction, GameState } from '../types';
import type { LetterDefinition } from '../../campaign/letters';
import { chooseLordOThrowingMove } from './lordO';
import { chooseAiMove, minimax, randomAction, toActions } from './minimax';

const WEAK_BLUNDER_CHANCE = 0.38;

export function chooseMisereFoolMove(state: GameState, depth: number): GameAction {
  if (state.kind !== 'classic' || !state.options.misere) {
    return chooseAiMove(state, depth);
  }

  const fooled = {
    ...state,
    options: { ...state.options, misere: false },
  };

  return chooseAiMove(fooled, depth);
}

export function chooseWeakMove(state: GameState, depth: number): GameAction {
  const actions = toActions(state);
  if (actions.length === 0) return { type: 'PLACE', index: 0 };

  if (Math.random() < WEAK_BLUNDER_CHANCE) {
    return randomAction(actions);
  }

  return chooseAiMove(state, Math.min(depth, 3));
}

/** Prefer moves that set up or take immediate connect-four wins. */
export function chooseConnectMove(state: GameState, depth: number): GameAction {
  const actions = toActions(state);
  if (actions.length === 0) return { type: 'DROP', column: 0 };

  if (Math.random() < 0.28) {
    return randomAction(actions);
  }

  let bestScore = Infinity;
  let best: GameAction[] = [];

  for (const action of actions) {
    const child = applyAction(cloneState(state), action);
    const score = minimax(child, depth - 1, -Infinity, Infinity, true);
    if (score < bestScore) {
      bestScore = score;
      best = [action];
    } else if (score === bestScore) {
      best.push(action);
    }
  }

  return randomAction(best);
}

export function chooseLordMove(
  state: GameState,
  letter: Pick<LetterDefinition, 'id' | 'aiDepth' | 'aiStrategy'>,
  lordOBored: boolean,
): GameAction {
  if (letter.id === 'O' && lordOBored) {
    return chooseLordOThrowingMove(state, letter.aiDepth);
  }

  switch (letter.aiStrategy) {
    case 'perfect':
      return chooseAiMove(state, letter.aiDepth);
    case 'weak':
      return chooseWeakMove(state, letter.aiDepth);
    case 'misere-fool':
      return chooseMisereFoolMove(state, letter.aiDepth);
    case 'connect':
      return chooseConnectMove(state, letter.aiDepth);
    default:
      return chooseAiMove(state, letter.aiDepth);
  }
}
