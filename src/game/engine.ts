import { applyClassic, cloneClassic, getLegalMovesClassic, validateClassic } from './classic';
import {
  applyConnect,
  cloneConnect,
  getLegalMovesConnect,
  validateConnect,
} from './connect';
import { applyOverflow, cloneOverflow, getLegalMovesOverflow, validateOverflow } from './overflow';
import { applyUltimate, cloneUltimate, getLegalMovesUltimate, validateUltimate } from './ultimate';
import type { GameAction, GameState, ValidationResult } from './types';

export function cloneState(state: GameState): GameState {
  switch (state.kind) {
    case 'classic':
      return cloneClassic(state);
    case 'connect':
      return cloneConnect(state);
    case 'overflow':
      return cloneOverflow(state);
    case 'ultimate':
      return cloneUltimate(state);
  }
}

export function getLegalMoves(
  state: GameState,
): number[] | { board: number; cell: number }[] {
  switch (state.kind) {
    case 'classic':
      return getLegalMovesClassic(state);
    case 'connect':
      return getLegalMovesConnect(state);
    case 'overflow':
      return getLegalMovesOverflow(state);
    case 'ultimate':
      return getLegalMovesUltimate(state);
  }
}

export function validateAction(state: GameState, action: GameAction): ValidationResult {
  switch (state.kind) {
    case 'classic':
      if (action.type !== 'PLACE') return { ok: false, reason: 'Invalid action.' };
      return validateClassic(state, action.index);
    case 'connect':
      if (action.type !== 'DROP') return { ok: false, reason: 'Invalid action.' };
      return validateConnect(state, action.column);
    case 'overflow':
      if (action.type !== 'PLACE') return { ok: false, reason: 'Invalid action.' };
      return validateOverflow(state, action.index);
    case 'ultimate':
      if (action.type !== 'PLACE_ULTIMATE') return { ok: false, reason: 'Invalid action.' };
      return validateUltimate(state, action.board, action.cell);
  }
}

export function applyAction(state: GameState, action: GameAction): GameState {
  const validation = validateAction(state, action);
  if (!validation.ok) return state;

  switch (state.kind) {
    case 'classic':
      if (action.type !== 'PLACE') return state;
      return applyClassic(state, action.index);
    case 'connect':
      if (action.type !== 'DROP') return state;
      return applyConnect(state, action.column);
    case 'overflow':
      if (action.type !== 'PLACE') return state;
      return applyOverflow(state, action.index);
    case 'ultimate':
      if (action.type !== 'PLACE_ULTIMATE') return state;
      return applyUltimate(state, action.board, action.cell);
  }
}

export function isHumanTurn(state: GameState): boolean {
  return state.status === 'playing' && state.turn === 'challenger';
}
