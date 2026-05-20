import type { Cell, OverflowState, Side, ValidationResult } from './types';
import { evaluateClassic, createClassicState } from './classic';

const SIZE = 5;
const WIN_LENGTH = 4;
const MAX_MARKS = 3;

export function createOverflowState(firstTurn: Side = 'challenger'): OverflowState {
  return {
    kind: 'overflow',
    size: SIZE,
    winLength: WIN_LENGTH,
    maxMarks: MAX_MARKS,
    board: Array<Cell>(SIZE * SIZE).fill(null),
    queues: { challenger: [], lord: [] },
    turn: firstTurn,
    moveCount: 0,
    status: 'playing',
  };
}

export function getLegalMovesOverflow(state: OverflowState): number[] {
  if (state.status !== 'playing') return [];
  const moves: number[] = [];
  for (let i = 0; i < state.board.length; i++) {
    if (state.board[i] === null) moves.push(i);
  }
  return moves;
}

function evaluateOverflowBoard(state: OverflowState): OverflowState {
  const classic = createClassicState({ size: 5, winLength: WIN_LENGTH });
  const asClassic = {
    ...classic,
    board: [...state.board],
    turn: state.turn,
    moveCount: 0,
    status: 'playing' as const,
  };
  const result = evaluateClassic(asClassic);
  if (result.status === 'won') return { ...state, status: 'won' };
  if (result.status === 'lost') return { ...state, status: 'lost' };
  if (result.status === 'draw') return { ...state, status: 'draw' };
  return state;
}

export function validateOverflow(state: OverflowState, index: number): ValidationResult {
  if (state.status !== 'playing') return { ok: false, reason: 'The battle has ended.' };
  if (!getLegalMovesOverflow(state).includes(index)) {
    return { ok: false, reason: 'That square is occupied.' };
  }
  return { ok: true };
}

export function applyOverflow(state: OverflowState, index: number): OverflowState {
  const validation = validateOverflow(state, index);
  if (!validation.ok) return state;

  const board = [...state.board];
  const side = state.turn;
  const queues = {
    challenger: [...state.queues.challenger],
    lord: [...state.queues.lord],
  };

  board[index] = side;
  const q = side === 'challenger' ? queues.challenger : queues.lord;
  q.push(index);

  if (q.length > MAX_MARKS) {
    const removed = q.shift()!;
    board[removed] = null;
  }

  const next: OverflowState = {
    ...state,
    board,
    queues,
    turn: side === 'challenger' ? 'lord' : 'challenger',
    moveCount: state.moveCount + 1,
  };
  return evaluateOverflowBoard(next);
}

export function cloneOverflow(state: OverflowState): OverflowState {
  return {
    ...state,
    board: [...state.board],
    queues: {
      challenger: [...state.queues.challenger],
      lord: [...state.queues.lord],
    },
  };
}
