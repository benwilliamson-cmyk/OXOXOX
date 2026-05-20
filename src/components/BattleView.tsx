import { useEffect, useRef, useState } from 'react';
import type { LetterId } from '../campaign/letters';
import { useBattle } from '../hooks/useBattle';
import { ClassicGrid } from './ClassicGrid';
import { ConnectGrid } from './ConnectGrid';
import { UltimateGrid } from './UltimateGrid';

type Props = {
  letterId: LetterId;
  lordOBored?: boolean;
  lordODraws?: number;
  onOutcome: (outcome: 'won' | 'lost' | 'draw') => void;
  onRetreat: () => void;
};

export function BattleView({
  letterId,
  lordOBored = false,
  lordODraws = 0,
  onOutcome,
  onRetreat,
}: Props) {
  const { game, error, aiThinking, aiThinkingLine, playHuman, reset, letter } = useBattle(
    letterId,
    { lordOBored },
  );
  const [showRules, setShowRules] = useState(false);
  const reported = useRef(false);

  useEffect(() => {
    if (game.status === 'playing') {
      reported.current = false;
      return;
    }
    if (reported.current) return;
    reported.current = true;
    onOutcome(game.status);
  }, [game.status, onOutcome]);

  const statusMessage =
    game.status === 'playing'
      ? aiThinking
        ? aiThinkingLine ?? `Lord ${letter.id} considers the grid…`
        : game.kind === 'classic' &&
            game.bonusPlacementsLeft > 0 &&
            game.turn === 'challenger'
          ? "King's gambit — place your second opening stone"
          : 'Your turn, challenger'
      : game.status === 'won'
        ? 'Victory!'
        : game.status === 'lost'
          ? 'Defeat'
          : 'Stalemate';

  const disabled =
    game.status !== 'playing' || game.turn !== 'challenger' || aiThinking;

  return (
    <div>
      {letterId === 'O' && lordOBored && game.status === 'playing' && (
        <p className="lord-o-bored-banner" role="note">
          Lord O has declared tic-tac-toe &ldquo;solved&rdquo; and is no longer trying. Press
          your advantage, challenger.
        </p>
      )}
      {letterId === 'O' && !lordOBored && lordODraws === 1 && game.status === 'playing' && (
        <p className="lord-o-hint" role="note">
          Another perfect stalemate may test Lord O&apos;s patience…
        </p>
      )}
      <div className="battle-header">
        <button type="button" className="btn btn-secondary" onClick={onRetreat}>
          Retreat
        </button>
        <span
          className={`battle-status ${aiThinking ? 'thinking' : game.turn === 'challenger' ? 'your-turn' : ''}`}
        >
          {statusMessage}
        </span>
        <button type="button" className="btn btn-secondary" onClick={reset}>
          Rematch
        </button>
      </div>

      {game.kind === 'ultimate' ? (
        <UltimateGrid
          state={game}
          opponentGlyph={letter.opponentGlyph}
          disabled={disabled}
          onPlace={(board, cell) =>
            playHuman({ type: 'PLACE_ULTIMATE', board, cell })
          }
        />
      ) : game.kind === 'connect' ? (
        <ConnectGrid
          state={game}
          opponentGlyph={letter.opponentGlyph}
          disabled={disabled}
          onDrop={(column) => playHuman({ type: 'DROP', column })}
        />
      ) : (
        <ClassicGrid
          state={game}
          opponentGlyph={letter.opponentGlyph}
          disabled={disabled}
          onPlace={(index) => playHuman({ type: 'PLACE', index })}
        />
      )}

      <p className="error-toast" role="alert">
        {error ?? ''}
      </p>

      <button
        type="button"
        className="rules-toggle"
        onClick={() => setShowRules((v) => !v)}
      >
        {showRules ? 'Hide royal decree' : 'Show royal decree'}
      </button>
      {showRules && <div className="rules-panel">{letter.rules}</div>}
    </div>
  );
}
