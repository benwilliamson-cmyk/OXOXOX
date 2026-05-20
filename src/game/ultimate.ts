import type { Cell, Side, UltimateState, ValidationResult } from './types';

const LINES_3 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const META_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function emptyBoard(): Cell[] {
  return Array<Cell>(9).fill(null);
}

export function createUltimateState(firstTurn: Side = 'challenger'): UltimateState {
  return {
    kind: 'ultimate',
    boards: Array.from({ length: 9 }, () => emptyBoard()),
    boardWinners: Array(9).fill(null),
    activeBoard: null,
    turn: firstTurn,
    status: 'playing',
    moveCount: 0,
  };
}

function checkBoardWinner(board: Cell[]): Side | 'draw' | null {
  for (const side of ['challenger', 'lord'] as Side[]) {
    for (const line of LINES_3) {
      if (line.every((i) => board[i] === side)) return side;
    }
  }
  if (board.every((c) => c !== null)) return 'draw';
  return null;
}

function updateBoardWinners(state: UltimateState): (Side | 'draw' | null)[] {
  return state.boards.map((b) => checkBoardWinner(b));
}

function checkMetaWinner(winners: (Side | 'draw' | null)[]): Side | null {
  for (const side of ['challenger', 'lord'] as Side[]) {
    for (const line of META_LINES) {
      if (line.every((i) => winners[i] === side)) return side;
    }
  }
  return null;
}

function boardHasSpace(board: Cell[]): boolean {
  return board.some((c) => c === null) && checkBoardWinner(board) === null;
}

function resolveTargetBoard(state: UltimateState, cell: number): number {
  const winners = updateBoardWinners(state);
  const target = cell;
  const w = winners[target];
  if (w !== null || !boardHasSpace(state.boards[target]!)) {
    const open = winners
      .map((bw, i) => ({ bw, i }))
      .filter(({ bw, i }) => bw === null && boardHasSpace(state.boards[i]!))
      .map(({ i }) => i);
    if (open.length === 0) return target;
    return open[0]!;
  }
  return target;
}

export function getActiveBoard(state: UltimateState): number {
  if (state.activeBoard === null) return -1; // any board
  return state.activeBoard;
}

export function getLegalMovesUltimate(state: UltimateState): { board: number; cell: number }[] {
  if (state.status !== 'playing') return [];
  const moves: { board: number; cell: number }[] = [];
  const winners = updateBoardWinners(state);

  const boardsToPlay =
    state.activeBoard === null
      ? Array.from({ length: 9 }, (_, i) => i).filter(
          (i) => winners[i] === null && boardHasSpace(state.boards[i]!),
        )
      : [state.activeBoard].filter(
          (b) => winners[b] === null && boardHasSpace(state.boards[b]!),
        );

  for (const b of boardsToPlay) {
    const board = state.boards[b]!;
    for (let c = 0; c < 9; c++) {
      if (board[c] === null) moves.push({ board: b, cell: c });
    }
  }
  return moves;
}

export function validateUltimate(
  state: UltimateState,
  board: number,
  cell: number,
): ValidationResult {
  if (state.status !== 'playing') return { ok: false, reason: 'The battle has ended.' };
  const legal = getLegalMovesUltimate(state);
  if (!legal.some((m) => m.board === board && m.cell === cell)) {
    return { ok: false, reason: 'You must play in the active realm.' };
  }
  return { ok: true };
}

export function applyUltimate(state: UltimateState, board: number, cell: number): UltimateState {
  const validation = validateUltimate(state, board, cell);
  if (!validation.ok) return state;

  const boards = state.boards.map((b) => [...b]);
  boards[board]![cell] = state.turn;

  const boardWinners = boards.map((b) => checkBoardWinner(b));
  const metaWinner = checkMetaWinner(boardWinners);

  let status = state.status;
  if (metaWinner === 'challenger') status = 'won';
  else if (metaWinner === 'lord') status = 'lost';

  const nextActive = resolveTargetBoard(
    { ...state, boards, boardWinners },
    cell,
  ); // opponent sent to sub-board index = cell played in current board

  const anyLegal =
    status === 'playing' &&
  getLegalMovesUltimate({
      ...state,
      boards,
      boardWinners,
      activeBoard: nextActive,
      turn: state.turn === 'challenger' ? 'lord' : 'challenger',
      status: 'playing',
      moveCount: state.moveCount + 1,
    }).length > 0;

  const finalStatus =
    status !== 'playing'
      ? status
      : !anyLegal && metaWinner === null
        ? 'draw'
        : 'playing';

  return {
    ...state,
    boards,
    boardWinners,
    activeBoard: nextActive,
    turn: state.turn === 'challenger' ? 'lord' : 'challenger',
    moveCount: state.moveCount + 1,
    status: finalStatus,
  };
}

export function cloneUltimate(state: UltimateState): UltimateState {
  return {
    ...state,
    boards: state.boards.map((b) => [...b]),
    boardWinners: [...state.boardWinners],
  };
}
