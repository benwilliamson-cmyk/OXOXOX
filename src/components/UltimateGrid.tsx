import { getLegalMovesUltimate } from '../game/ultimate';
import type { UltimateState } from '../game/types';

type Props = {
  state: UltimateState;
  opponentGlyph: string;
  onPlace: (board: number, cell: number) => void;
  disabled: boolean;
};

export function UltimateGrid({ state, opponentGlyph, onPlace, disabled }: Props) {
  const legal = getLegalMovesUltimate(state);
  const legalSet = new Set(legal.map((m) => `${m.board}-${m.cell}`));

  const activeBoards = new Set(
    state.activeBoard === null ? legal.map((m) => m.board) : [state.activeBoard],
  );

  return (
    <div className="ultimate-wrap" role="grid" aria-label="Nine realms">
      {state.boards.map((board, boardIndex) => {
        const winner = state.boardWinners[boardIndex];
        const isActive = activeBoards.has(boardIndex) && state.status === 'playing';
        const boardClass = [
          'mini-board',
          isActive ? 'active' : '',
          winner === 'challenger' ? 'won-challenger' : '',
          winner === 'lord' ? 'won-lord' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <div
            key={boardIndex}
            className={boardClass}
            role="rowgroup"
            aria-label={`Realm ${boardIndex + 1}`}
          >
            {board.map((cell, cellIndex) => {
              const key = `${boardIndex}-${cellIndex}`;
              const canPlay = !disabled && legalSet.has(key);
              return (
                <button
                  key={cellIndex}
                  type="button"
                  className={[
                    'cell mini-cell',
                    cell === 'challenger' ? 'challenger' : '',
                    cell === 'lord' ? 'lord' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  disabled={cell !== null || !canPlay}
                  onClick={() => onPlace(boardIndex, cellIndex)}
                  aria-label={
                    cell === 'challenger' ? 'X' : cell === 'lord' ? opponentGlyph : 'Empty'
                  }
                >
                  {cell === 'challenger' ? 'X' : cell === 'lord' ? opponentGlyph : ''}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
