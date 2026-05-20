import type { ClassicState, OverflowState } from '../game/types';
import { getBlockedSet } from '../game/classic';

type Props = {
  state: ClassicState | OverflowState;
  opponentGlyph: string;
  onPlace: (index: number) => void;
  disabled: boolean;
};

export function ClassicGrid({ state, opponentGlyph, onPlace, disabled }: Props) {
  const isOverflow = state.kind === 'overflow';
  const size = isOverflow ? 5 : state.options.size;
  const blocked = isOverflow ? new Set<number>() : getBlockedSet(state.options);
  const crownCell = isOverflow ? undefined : state.options.crownCell;
  const oldest =
    isOverflow
      ? new Set([
          state.queues.challenger[0],
          state.queues.lord[0],
        ].filter((x) => x !== undefined))
      : new Set<number>();

  const gridClass = `grid-classic size-${size}`;

  return (
    <div className={gridClass} role="grid" aria-label="Battle grid">
      {state.board.map((cell, index) => {
        const isBlocked = blocked.has(index);
        const label = isBlocked
          ? 'Blocked bastion'
          : cell === 'challenger'
            ? 'X'
            : cell === 'lord'
              ? opponentGlyph
              : 'Empty';

        return (
          <button
            key={index}
            type="button"
            role="gridcell"
            aria-label={label}
            className={[
              'cell',
              cell === 'challenger' ? 'challenger' : '',
              cell === 'lord' ? 'lord' : '',
              isBlocked ? 'blocked' : '',
              crownCell === index ? 'crown' : '',
              oldest.has(index) ? 'oldest' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            disabled={disabled || isBlocked || cell !== null}
            onClick={() => onPlace(index)}
          >
            {isBlocked ? '·' : cell === 'challenger' ? 'X' : cell === 'lord' ? opponentGlyph : ''}
          </button>
        );
      })}
    </div>
  );
}
