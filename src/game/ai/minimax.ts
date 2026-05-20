import { applyAction, cloneState, getLegalMoves } from '../engine';
import type { GameAction, GameState, Side } from '../types';

function scoreTerminal(state: GameState): number | null {
  if (state.status === 'won') return 1000;
  if (state.status === 'lost') return -1000;
  if (state.status === 'draw') return 0;
  return null;
}

export function randomAction<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function orderMoves(state: GameState, moves: GameAction[]): GameAction[] {
  const center =
    state.kind === 'classic' && state.options.size === 3
      ? 4
      : state.kind === 'connect'
        ? 3
        : -1;
  return [...moves].sort((a, b) => {
    const score = (action: GameAction) => {
      if (action.type === 'PLACE' && action.index === center) return -1;
      if (action.type === 'DROP' && action.column === center) return -1;
      return 0;
    };
    return score(a) - score(b);
  });
}

export function toActions(state: GameState): GameAction[] {
  const legal = getLegalMoves(state);
  if (state.kind === 'ultimate') {
    return (legal as { board: number; cell: number }[]).map((m) => ({
      type: 'PLACE_ULTIMATE' as const,
      board: m.board,
      cell: m.cell,
    }));
  }
  if (state.kind === 'connect') {
    return (legal as number[]).map((column) => ({ type: 'DROP' as const, column }));
  }
  return (legal as number[]).map((index) => ({ type: 'PLACE' as const, index }));
}

export function minimax(
  state: GameState,
  depth: number,
  alpha: number,
  beta: number,
  maximizing: boolean,
): number {
  const terminal = scoreTerminal(state);
  if (terminal !== null) return terminal;
  if (depth === 0) return heuristic(state);

  const actions = orderMoves(state, toActions(state));
  if (actions.length === 0) return 0;

  if (maximizing) {
    let value = -Infinity;
    for (const action of actions) {
      const child = applyAction(cloneState(state), action);
      value = Math.max(value, minimax(child, depth - 1, alpha, beta, false));
      alpha = Math.max(alpha, value);
      if (beta <= alpha) break;
    }
    return value;
  }

  let value = Infinity;
  for (const action of actions) {
    const child = applyAction(cloneState(state), action);
    value = Math.min(value, minimax(child, depth - 1, alpha, beta, true));
    beta = Math.min(beta, value);
    if (beta <= alpha) break;
  }
  return value;
}

function heuristic(state: GameState): number {
  if (state.kind === 'classic' || state.kind === 'overflow') {
    const board = state.board;
    const size = state.kind === 'classic' ? state.options.size : 5;
    let score = 0;
    const lines: number[][] = [];
    for (let r = 0; r < size; r++) {
      lines.push(Array.from({ length: size }, (_, c) => r * size + c));
    }
    for (let c = 0; c < size; c++) {
      lines.push(Array.from({ length: size }, (_, r) => r * size + c));
    }
    lines.push(Array.from({ length: size }, (_, i) => i * size + i));
    lines.push(Array.from({ length: size }, (_, i) => i * size + (size - 1 - i)));

    for (const line of lines) {
      let c = 0;
      let l = 0;
      let e = 0;
      for (const idx of line) {
        if (board[idx] === 'challenger') c++;
        else if (board[idx] === 'lord') l++;
        else e++;
      }
      if (c > 0 && l === 0) score += Math.pow(10, c);
      if (l > 0 && c === 0) score -= Math.pow(10, l);
    }
    return score;
  }

  if (state.kind === 'connect') {
    let score = 0;
    const { board, cols, rows, winLength } = state;
    const scoreWindow = (cells: (Side | null)[]) => {
      const c = cells.filter((x) => x === 'challenger').length;
      const l = cells.filter((x) => x === 'lord').length;
      if (c > 0 && l === 0) score += Math.pow(10, c);
      if (l > 0 && c === 0) score -= Math.pow(10, l);
    };

    for (let col = 0; col < cols; col++) {
      for (let start = 0; start <= rows - winLength; start++) {
        scoreWindow(board[col]!.slice(start, start + winLength));
      }
    }
    for (let row = 0; row < rows; row++) {
      for (let start = 0; start <= cols - winLength; start++) {
        const window: (Side | null)[] = [];
        for (let i = 0; i < winLength; i++) window.push(board[start + i]![row] ?? null);
        scoreWindow(window);
      }
    }
    return score;
  }

  return 0;
}

export function chooseAiMove(state: GameState, aiDepth: number): GameAction {
  const actions = toActions(state);
  if (actions.length === 0) {
    return state.kind === 'connect' ? { type: 'DROP', column: 0 } : { type: 'PLACE', index: 0 };
  }

  let bestScore = Infinity;
  let best: GameAction[] = [];

  for (const action of orderMoves(state, actions)) {
    const child = applyAction(cloneState(state), action);
    const score = minimax(child, aiDepth - 1, -Infinity, Infinity, true);
    if (score < bestScore) {
      bestScore = score;
      best = [action];
    } else if (score === bestScore) {
      best.push(action);
    }
  }

  return randomAction(best);
}

export function sideToMaximizing(turn: Side): boolean {
  return turn === 'lord';
}
