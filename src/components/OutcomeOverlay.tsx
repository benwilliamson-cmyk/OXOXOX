type Props = {
  outcome: 'won' | 'lost' | 'draw';
  lordName: string;
  lordODraws?: number;
  lordOBored?: boolean;
  onContinue: () => void;
  onRetry: () => void;
};

export function OutcomeOverlay({
  outcome,
  lordName,
  lordODraws,
  lordOBored = false,
  onContinue,
  onRetry,
}: Props) {
  const panelClass =
    outcome === 'won' ? 'victory' : outcome === 'lost' ? 'defeat' : '';

  return (
    <div className="overlay" role="dialog" aria-modal="true">
      <div className={`overlay-panel ${panelClass}`}>
        {outcome === 'won' && (
          <>
            <h2>Throne claimed</h2>
            <p>
              {lordName === 'O' && lordOBored
                ? 'Lord O sighs. "Congratulations. You have defeated… my attention span." The road opens to Lord A.'
                : `Lord ${lordName} bows from the grid. The road opens to the next letter.`}
            </p>
            <button type="button" className="btn" onClick={onContinue}>
              Return to the map
            </button>
          </>
        )}
        {outcome === 'lost' && (
          <>
            <h2>Exiled from the grid</h2>
            <p>Lord {lordName} holds the field. Study the decree and try again.</p>
            <button type="button" className="btn" onClick={onRetry}>
              Challenge again
            </button>
            <button type="button" className="btn btn-secondary" onClick={onContinue}>
              Retreat to map
            </button>
          </>
        )}
        {outcome === 'draw' && (
          <>
            <h2>Neither yields</h2>
            <p>
              {lordName === 'O' && (lordODraws ?? 0) < 2
                ? 'Lord O nods. "Perfect play. Perfectly tedious." Another draw may change his mood.'
                : lordName === 'O'
                  ? 'Another draw. Lord O was distracted; try once more while his guard is down.'
                  : 'The grid stands undecided. A rematch may break the stalemate.'}
            </p>
            <button type="button" className="btn" onClick={onRetry}>
              Rematch
            </button>
            <button type="button" className="btn btn-secondary" onClick={onContinue}>
              Return to map
            </button>
          </>
        )}
      </div>
    </div>
  );
}
