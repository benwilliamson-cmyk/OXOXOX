import { LORD_O_DRAWS_UNTIL_BORED } from '../game/ai/lordO';
import { CAMPAIGN_ORDER, type LetterId } from './letters';

const STORAGE_KEY = 'lexica-campaign-v1';

export type CampaignProgress = {
  defeated: LetterId[];
  highestUnlocked: LetterId;
  /** Stalemates vs Lord O before he gets bored and throws the match. */
  lordODraws: number;
};

export function defaultProgress(): CampaignProgress {
  return {
    defeated: [],
    highestUnlocked: CAMPAIGN_ORDER[0]!,
    lordODraws: 0,
  };
}

export function loadProgress(): CampaignProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw) as Partial<CampaignProgress>;
    if (!parsed.highestUnlocked || !Array.isArray(parsed.defeated)) {
      return defaultProgress();
    }
    return {
      defeated: parsed.defeated,
      highestUnlocked: parsed.highestUnlocked,
      lordODraws: typeof parsed.lordODraws === 'number' ? parsed.lordODraws : 0,
    };
  } catch {
    return defaultProgress();
  }
}

export function saveProgress(progress: CampaignProgress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function isLetterUnlocked(progress: CampaignProgress, id: LetterId): boolean {
  const unlockIdx = CAMPAIGN_ORDER.indexOf(progress.highestUnlocked);
  const letterIdx = CAMPAIGN_ORDER.indexOf(id);
  return letterIdx <= unlockIdx;
}

export function isLetterDefeated(progress: CampaignProgress, id: LetterId): boolean {
  return progress.defeated.includes(id);
}

export function recordVictory(progress: CampaignProgress, id: LetterId): CampaignProgress {
  const defeated = progress.defeated.includes(id)
    ? progress.defeated
    : [...progress.defeated, id];

  const nextIdx = CAMPAIGN_ORDER.indexOf(id) + 1;
  const next = CAMPAIGN_ORDER[nextIdx];
  const highestUnlocked =
    next && CAMPAIGN_ORDER.indexOf(next) > CAMPAIGN_ORDER.indexOf(progress.highestUnlocked)
      ? next
      : progress.highestUnlocked;

  return { ...progress, defeated, highestUnlocked };
}

export function resetProgress(): CampaignProgress {
  const fresh = defaultProgress();
  saveProgress(fresh);
  return fresh;
}

export function recordLordODraw(progress: CampaignProgress): CampaignProgress {
  if (progress.defeated.includes('O')) return progress;
  return { ...progress, lordODraws: progress.lordODraws + 1 };
}

export function isLordOBored(progress: CampaignProgress): boolean {
  return (
    !progress.defeated.includes('O') &&
    progress.lordODraws >= LORD_O_DRAWS_UNTIL_BORED
  );
}
