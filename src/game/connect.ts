import type { Cell, ConnectState, GameResult, Side, ValidationResult } from './types';

export const CONNECT_COLS = 7;
export const CONNECT_ROWS = 6;
export const CONNECT_WIN = 4;

export function createConnectState(firstTurn: Side = 'challenger'): ConnectState {
  return {
    kind: 'connect',
    cols: CONNECT_COLS,
    rows: CONNECT_ROWS,
    winLength: CONNECT_WIN,
    board: Array.from({ length: CONNECT_COLS }, () => Array<Cell>(CONNECT_ROWS).fill(null)),
    turn: firstTurn,
    moveCount: 0,
    status: 'playing',
    lastDrop: null,
  };
}

export function columnHasSpace(state: ConnectState, col: number): boolean {
  const column = state.board[col];
  if (!column) return false;
  return column[CONNECT_ROWS - 1] === null;
}

export function getLegalMovesConnect(state: ConnectState): number[] {
  if (state.status !== 'playing') return [];
  const moves: number[] = [];
  for (let c = 0; c < state.cols; c++) {
    if (columnHasSpace(state, c)) moves.push(c);
  }
  return moves;
}

function dropRow(column: Cell[]): number {
  for (let r = 0; r < column.length; r++) {
    if (column[r] === null) return r;
  }
  return -1;
}

function checkWinFrom(
  board: Cell[][],
  col: number,
  row: number,
  side: Side,
  winLength: number,
): boolean {
  const directions = [
    [1, 0],
    [0, 1],
    [1, 1],
    [1, -1],
  ] as const;

  for (const [dc, dr] of directions) {
    let count = 1;
    for (const sign of [-1, 1] as const) {
      let c = col + dc * sign;
      let r = row + dr * sign;
      while (
        c >= 0 &&
        c < board.length &&
        r >= 0 &&
        r < CONNECT_ROWS &&
        board[c]?.[r] === side
      ) {
        count++;
        c += dc * sign;
        r += dr * sign;
      }
    }
    if (count >= winLength) return true;
  }
  return false;
}

export function evaluateConnect(state: ConnectState): GameResult {
  if (state.status !== 'playing') {
    return {
      status: state.status,
      winner: state.status === 'won' ? 'challenger' : state.status === 'lost' ? 'lord' : undefined,
    };
  }

  if (state.lastDrop) {
    const { col, row } = state.lastDrop;
    const side = state.board[col]![row];
    if (side && checkWinFrom(state.board, col, row, side, state.winLength)) {
      return {
        status: side === 'challenger' ? 'won' : 'lost',
        winner: side,
      };
    }
  }

  if (getLegalMovesConnect(state).length === 0) {
    return { status: 'draw' };
  }
  return { status: 'playing' };
}

function applyResult(state: ConnectState): ConnectState {
  const result = evaluateConnect(state);
  return { ...state, status: result.status };
}

export function validateConnect(state: ConnectState, col: number): ValidationResult {
  if (state.status !== 'playing') return { ok: false, reason: 'The battle has ended.' };
  if (!getLegalMovesConnect(state).includes(col)) {
    return { ok: false, reason: 'That column is full.' };
  }
  return { ok: true };
}

export function applyConnect(state: ConnectState, col: number): ConnectState {
  const validation = validateConnect(state, col);
  if (!validation.ok) return state;

  const board = state.board.map((column) => [...column]);
  const row = dropRow(board[col]!);
  if (row < 0) return state;

  board[col]![row] = state.turn;

  const next: ConnectState = {
    ...state,
    board,
    moveCount: state.moveCount + 1,
    turn: state.turn === 'challenger' ? 'lord' : 'challenger',
    lastDrop: { col, row },
  };
  return applyResult(next);
}

export function cloneConnect(state: ConnectState): ConnectState {
  return {
    ...state,
    board: state.board.map((col) => [...col]),
    lastDrop: state.lastDrop ? { ...state.lastDrop } : null,
  };
}
