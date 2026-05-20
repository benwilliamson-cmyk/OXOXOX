import type { Cell, ClassicOptions, ClassicState, GameResult, Side, ValidationResult } from './types';

export function createClassicState(options: ClassicOptions, firstTurn: Side = 'challenger'): ClassicState {
  const len = options.size * options.size;
  return {
    kind: 'classic',
    options,
    board: Array<Cell>(len).fill(null),
    turn: firstTurn,
    moveCount: 0,
    bonusPlacementsLeft: options.challengerBonusPlacements ?? 0,
    status: 'playing',
  };
}

export function getBlockedSet(options: ClassicOptions): Set<number> {
  return new Set(options.blockedCells ?? []);
}

export function isCellPlayable(state: ClassicState, index: number): boolean {
  const { options, board } = state;
  if (index < 0 || index >= board.length) return false;
  if (board[index] !== null) return false;
  if (getBlockedSet(options).has(index)) return false;
  return true;
}

export function getLegalMovesClassic(state: ClassicState): number[] {
  if (state.status !== 'playing') return [];
  const moves: number[] = [];
  for (let i = 0; i < state.board.length; i++) {
    if (!isCellPlayable(state, i)) continue;
    moves.push(i);
  }
  return moves;
}

function lineIndices(size: number): number[][] {
  const lines: number[][] = [];
  for (let r = 0; r < size; r++) {
    lines.push(Array.from({ length: size }, (_, c) => r * size + c));
  }
  for (let c = 0; c < size; c++) {
    lines.push(Array.from({ length: size }, (_, r) => r * size + c));
  }
  lines.push(Array.from({ length: size }, (_, i) => i * size + i));
  lines.push(Array.from({ length: size }, (_, i) => i * size + (size - 1 - i)));
  return lines;
}

function countInLine(board: Cell[], indices: number[], side: Side, crownCell?: number): number {
  let count = 0;
  for (const idx of indices) {
    if (board[idx] === side) {
      count += crownCell !== undefined && idx === crownCell ? 2 : 1;
    }
  }
  return count;
}

export function evaluateClassic(state: ClassicState): GameResult {
  const { options, board, status } = state;
  if (status !== 'playing') {
    return {
      status,
      winner: status === 'won' ? 'challenger' : status === 'lost' ? 'lord' : undefined,
    };
  }

  const { size, winLength, crownCell, misere } = options;
  const lines = lineIndices(size);

  for (const side of ['challenger', 'lord'] as Side[]) {
    for (const line of lines) {
      const count = countInLine(board, line, side, crownCell);
      if (count >= winLength) {
        if (misere) {
          const loser: Side = side;
          return {
            status: loser === 'challenger' ? 'lost' : 'won',
            winner: loser === 'challenger' ? 'lord' : 'challenger',
          };
        }
        return {
          status: side === 'challenger' ? 'won' : 'lost',
          winner: side,
        };
      }
    }
  }

  const legal = getLegalMovesClassic(state);
  if (legal.length === 0) {
    return { status: 'draw' };
  }
  return { status: 'playing' };
}

function applyResult(state: ClassicState): ClassicState {
  const result = evaluateClassic(state);
  return { ...state, status: result.status };
}

export function validateClassic(state: ClassicState, index: number): ValidationResult {
  if (state.status !== 'playing') return { ok: false, reason: 'The battle has ended.' };
  if (!getLegalMovesClassic(state).includes(index)) {
    return { ok: false, reason: 'That square is not allowed by the royal decree.' };
  }
  return { ok: true };
}

export function applyClassic(state: ClassicState, index: number): ClassicState {
  const validation = validateClassic(state, index);
  if (!validation.ok) return state;

  const board = [...state.board];
  board[index] = state.turn;
  const moveCount = state.moveCount + 1;

  let bonusPlacementsLeft = state.bonusPlacementsLeft;
  let turn: Side;

  if (state.turn === 'challenger' && bonusPlacementsLeft > 0) {
    bonusPlacementsLeft -= 1;
    turn = 'challenger';
  } else {
    turn = state.turn === 'challenger' ? 'lord' : 'challenger';
  }

  const next: ClassicState = {
    ...state,
    board,
    moveCount,
    bonusPlacementsLeft,
    turn,
  };
  return applyResult(next);
}

export function cloneClassic(state: ClassicState): ClassicState {
  return {
    ...state,
    board: [...state.board],
    options: { ...state.options },
  };
}
