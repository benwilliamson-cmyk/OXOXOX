export type Side = 'challenger' | 'lord';

export type Cell = Side | null;

export type GameStatus = 'playing' | 'won' | 'lost' | 'draw';

export type GameAction =
  | { type: 'PLACE'; index: number }
  | { type: 'PLACE_ULTIMATE'; board: number; cell: number }
  | { type: 'DROP'; column: number };

export type ValidationResult = { ok: true } | { ok: false; reason: string };

export type ClassicOptions = {
  size: 3 | 4 | 5;
  winLength: number;
  blockedCells?: number[];
  crownCell?: number;
  misere?: boolean;
  /** Challenger may place this many extra stones before the lord's first reply (K's gambit). */
  challengerBonusPlacements?: number;
};

export type ClassicState = {
  kind: 'classic';
  options: ClassicOptions;
  board: Cell[];
  turn: Side;
  moveCount: number;
  bonusPlacementsLeft: number;
  status: GameStatus;
};

export type ConnectState = {
  kind: 'connect';
  cols: number;
  rows: number;
  winLength: number;
  board: Cell[][];
  turn: Side;
  moveCount: number;
  status: GameStatus;
  lastDrop: { col: number; row: number } | null;
};

export type OverflowState = {
  kind: 'overflow';
  size: 5;
  winLength: 4;
  maxMarks: 3;
  board: Cell[];
  queues: { challenger: number[]; lord: number[] };
  turn: Side;
  moveCount: number;
  status: GameStatus;
};

export type UltimateState = {
  kind: 'ultimate';
  boards: Cell[][];
  boardWinners: (Side | 'draw' | null)[];
  activeBoard: number | null;
  turn: Side;
  status: GameStatus;
  moveCount: number;
};

export type GameState = ClassicState | ConnectState | OverflowState | UltimateState;

export type GameResult = {
  status: GameStatus;
  winner?: Side;
};
