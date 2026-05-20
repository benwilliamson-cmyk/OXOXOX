import { useCallback, useMemo, useState } from 'react';
import { CAMPAIGN_ORDER, getLetter, type LetterId } from './campaign/letters';
import {
  isLordOBored,
  loadProgress,
  recordLordODraw,
  recordVictory,
  resetProgress,
  saveProgress,
  type CampaignProgress,
} from './campaign/progress';
import { BattleBriefing } from './components/BattleBriefing';
import { BattleView } from './components/BattleView';
import { OutcomeOverlay } from './components/OutcomeOverlay';
import { ThroneMap } from './components/ThroneMap';
import { TitleScreen } from './components/TitleScreen';
import './styles/app.css';
import './styles/tokens.css';

type Screen = 'title' | 'map' | 'briefing' | 'battle';

export default function App() {
  const [screen, setScreen] = useState<Screen>('title');
  const [progress, setProgress] = useState<CampaignProgress>(() => loadProgress());
  const [selectedLetter, setSelectedLetter] = useState<LetterId | null>(null);
  const [outcome, setOutcome] = useState<'won' | 'lost' | 'draw' | null>(null);
  const [battleKey, setBattleKey] = useState(0);

  const hasProgress = progress.defeated.length > 0;
  const campaignComplete = CAMPAIGN_ORDER.every((id) =>
    progress.defeated.includes(id),
  );

  const handleNewGame = () => {
    const fresh = resetProgress();
    setProgress(fresh);
    setScreen('map');
    setSelectedLetter(null);
    setOutcome(null);
  };

  const handleContinue = () => {
    setScreen('map');
    setOutcome(null);
  };

  const handleSelectLetter = (id: LetterId) => {
    setSelectedLetter(id);
    setScreen('briefing');
    setOutcome(null);
  };

  const handleBeginBattle = () => {
    setBattleKey((k) => k + 1);
    setScreen('battle');
    setOutcome(null);
  };

  const handleOutcome = useCallback(
    (result: 'won' | 'lost' | 'draw') => {
      setOutcome(result);
      setProgress((p) => {
        let next = p;
        if (result === 'draw' && selectedLetter === 'O') {
          next = recordLordODraw(next);
        }
        if (result === 'won' && selectedLetter) {
          next = recordVictory(next, selectedLetter);
        }
        if (next !== p) saveProgress(next);
        return next;
      });
    },
    [selectedLetter],
  );

  const letter = selectedLetter ? getLetter(selectedLetter) : null;

  const overlay = useMemo(() => {
    if (!outcome || !letter) return null;
    return (
      <OutcomeOverlay
        outcome={outcome}
        lordName={letter.id}
        lordODraws={letter.id === 'O' ? progress.lordODraws : undefined}
        lordOBored={letter.id === 'O' ? isLordOBored(progress) : false}
        onContinue={() => {
          setOutcome(null);
          setScreen('map');
          setSelectedLetter(null);
        }}
        onRetry={() => {
          setOutcome(null);
          setBattleKey((k) => k + 1);
        }}
      />
    );
  }, [outcome, letter, progress.lordODraws]);

  return (
    <div className="app">
      {screen === 'title' && (
        <TitleScreen
          hasProgress={hasProgress}
          onContinue={handleContinue}
          onNewGame={handleNewGame}
        />
      )}

      {screen === 'map' && (
        <>
          <ThroneMap
            progress={progress}
            campaignComplete={campaignComplete}
            onSelect={handleSelectLetter}
          />
          <button type="button" className="btn btn-secondary" onClick={() => setScreen('title')}>
            Title
          </button>
        </>
      )}

      {screen === 'briefing' && letter && (
        <BattleBriefing
          letter={letter}
          lordOBored={selectedLetter === 'O' && isLordOBored(progress)}
          onBegin={handleBeginBattle}
          onBack={() => {
            setScreen('map');
            setSelectedLetter(null);
          }}
        />
      )}

      {screen === 'battle' && selectedLetter && (
        <BattleView
          key={battleKey}
          letterId={selectedLetter}
          lordOBored={selectedLetter === 'O' && isLordOBored(progress)}
          lordODraws={selectedLetter === 'O' ? progress.lordODraws : 0}
          onOutcome={handleOutcome}
          onRetreat={() => {
            setScreen('map');
            setSelectedLetter(null);
            setOutcome(null);
          }}
        />
      )}

      {overlay}
    </div>
  );
}
