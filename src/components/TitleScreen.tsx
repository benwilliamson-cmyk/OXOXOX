type Props = {
  onContinue: () => void;
  onNewGame: () => void;
  hasProgress: boolean;
};

export function TitleScreen({ onContinue, onNewGame, hasProgress }: Props) {
  return (
    <div className="title-screen">
      <h1>Kingdom of Lexica</h1>
      <p className="subtitle">A chronicle of grids, crowns, and the letters that rule them</p>
      {hasProgress ? (
        <>
          <button type="button" className="btn" onClick={onContinue}>
            Continue the march
          </button>
          <button type="button" className="btn btn-secondary" onClick={onNewGame}>
            Begin anew
          </button>
        </>
      ) : (
        <button type="button" className="btn" onClick={onNewGame}>
          Enter the kingdom
        </button>
      )}
    </div>
  );
}
