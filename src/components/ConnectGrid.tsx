import { columnHasSpace } from '../game/connect';
import type { ConnectState } from '../game/types';

type Props = {
  state: ConnectState;
  opponentGlyph: string;
  onDrop: (column: number) => void;
  disabled: boolean;
};

export function ConnectGrid({ state, opponentGlyph, onDrop, disabled }: Props) {
  const { cols, rows, board } = state;

  return (
    <div className="connect-wrap">
      <div className="connect-columns" role="grid" aria-label="Avalanche columns">
        {Array.from({ length: cols }, (_, col) => {
          const full = !columnHasSpace(state, col);
          return (
            <div key={col} className="connect-column">
              <button
                type="button"
                className="connect-drop"
                disabled={disabled || full}
                aria-label={full ? `Column ${col + 1} full` : `Drop in column ${col + 1}`}
                onClick={() => onDrop(col)}
              >
                ↓
              </button>
              <div className="connect-cells">
                {Array.from({ length: rows }, (_, rowIndex) => {
                  const row = rows - 1 - rowIndex;
                  const cell = board[col]![row];
                  return (
                    <div
                      key={row}
                      className={[
                        'connect-cell',
                        cell === 'challenger' ? 'challenger' : '',
                        cell === 'lord' ? 'lord' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {cell === 'challenger' ? 'X' : cell === 'lord' ? opponentGlyph : ''}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
