import {
  CAMPAIGN_ORDER,
  LOCKED_LETTERS,
  type LetterId,
} from '../campaign/letters';
import type { CampaignProgress } from '../campaign/progress';
import { isLetterDefeated, isLetterUnlocked } from '../campaign/progress';

type Props = {
  progress: CampaignProgress;
  onSelect: (id: LetterId) => void;
  campaignComplete: boolean;
};

export function ThroneMap({ progress, onSelect, campaignComplete }: Props) {
  return (
    <div className="throne-map">
      <h2>The Throne Road</h2>
      <div className="throne-path">
        {CAMPAIGN_ORDER.map((id) => {
          const unlocked = isLetterUnlocked(progress, id);
          const defeated = isLetterDefeated(progress, id);
          const isCurrent = progress.highestUnlocked === id && !defeated;

          let className = 'throne';
          if (defeated) className += ' defeated';
          else if (unlocked) className += ' available';
          else className += ' locked';
          if (isCurrent) className += ' current';

          return (
            <button
              key={id}
              type="button"
              className={className}
              disabled={!unlocked || defeated}
              onClick={() => onSelect(id)}
              title={defeated ? 'Defeated' : unlocked ? 'Challenge' : 'Locked'}
            >
              {id}
            </button>
          );
        })}
      </div>

      {campaignComplete && (
        <div className="epilogue">
          You have claimed the eight great thrones. The alphabet stirs — many letters yet
          slumber, awaiting future decrees.
        </div>
      )}

      <div className="locked-row">
        <div className="label">Thrones yet to awaken</div>
        <div className="throne-path">
          {LOCKED_LETTERS.map((letter) => (
            <span key={letter} className="throne locked" aria-hidden>
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
