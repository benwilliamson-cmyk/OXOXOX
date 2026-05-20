import type { LetterDefinition } from '../campaign/letters';

type Props = {
  letter: LetterDefinition;
  lordOBored?: boolean;
  onBegin: () => void;
  onBack: () => void;
};

export function BattleBriefing({ letter, lordOBored = false, onBegin, onBack }: Props) {
  return (
    <div className="briefing">
      <div className="lord-glyph">{letter.opponentGlyph}</div>
      <h2>Lord {letter.id}</h2>
      <p className="throne-title">{letter.title}</p>
      {letter.id === 'O' && lordOBored && (
        <p className="decree bored-decree">
          &ldquo;Fine. You have bored me into error. I shall play, as the scholars say,
          suboptimally.&rdquo;
        </p>
      )}
      <p className="decree">{letter.decree}</p>
      <p className="rules">{letter.rules}</p>
      <button type="button" className="btn" onClick={onBegin}>
        Enter the grid
      </button>
      <button type="button" className="btn btn-secondary" onClick={onBack}>
        Return to the map
      </button>
    </div>
  );
}
