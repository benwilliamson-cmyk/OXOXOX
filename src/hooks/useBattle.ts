import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { getLordOBoredThinkingLine } from '../game/ai/lordO';
import { chooseLordMove } from '../game/ai/strategies';
import { applyAction, isHumanTurn } from '../game/engine';
import type { GameAction, GameState } from '../game/types';
import { getLetter, type LetterId } from '../campaign/letters';

type BattleState = {
  game: GameState;
  error: string | null;
};

type Action =
  | { type: 'RESET'; initial: GameState }
  | { type: 'DISPATCH'; action: GameAction }
  | { type: 'SET_ERROR'; error: string | null };

function reducer(state: BattleState, action: Action): BattleState {
  switch (action.type) {
    case 'RESET':
      return { game: action.initial, error: null };
    case 'SET_ERROR':
      return { ...state, error: action.error };
    case 'DISPATCH': {
      const next = applyAction(state.game, action.action);
      if (next === state.game) {
        return { ...state, error: 'That move is not allowed.' };
      }
      return { game: next, error: null };
    }
  }
}

type BattleOptions = {
  lordOBored?: boolean;
};

export function useBattle(letterId: LetterId, options?: BattleOptions) {
  const letter = getLetter(letterId);
  const [state, dispatch] = useReducer(reducer, {
    game: letter.createState(),
    error: null,
  });
  const [aiThinking, setAiThinking] = useState(false);
  const [aiThinkingLine, setAiThinkingLine] = useState<string | null>(null);
  const aiForMove = useRef(-1);
  const lordOBored = options?.lordOBored ?? false;

  const reset = useCallback(() => {
    dispatch({ type: 'RESET', initial: letter.createState() });
    aiForMove.current = -1;
    setAiThinking(false);
  }, [letter]);

  const playHuman = useCallback(
    (action: GameAction) => {
      if (!isHumanTurn(state.game) || aiThinking) return;
      dispatch({ type: 'DISPATCH', action });
    },
    [state.game, aiThinking],
  );

  useEffect(() => {
    const game = state.game;
    if (game.status !== 'playing' || game.turn !== 'lord') {
      setAiThinking(false);
      return;
    }

    const moveId =
      game.kind === 'ultimate' ||
      game.kind === 'classic' ||
      game.kind === 'overflow' ||
      game.kind === 'connect'
        ? game.moveCount
        : 0;
    if (aiForMove.current === moveId) return;
    aiForMove.current = moveId;

    setAiThinking(true);
    if (letterId === 'O' && lordOBored) {
      setAiThinkingLine(getLordOBoredThinkingLine());
    } else {
      setAiThinkingLine(null);
    }

    const delay = letterId === 'O' && lordOBored ? 700 : 450;
    const timer = window.setTimeout(() => {
      const move = chooseLordMove(game, letter, lordOBored);
      dispatch({ type: 'DISPATCH', action: move });
      setAiThinking(false);
      setAiThinkingLine(null);
    }, delay);

    return () => {
      window.clearTimeout(timer);
    };
  }, [state.game, letter.aiDepth, letterId, lordOBored]);

  return {
    game: state.game,
    error: state.error,
    aiThinking,
    aiThinkingLine,
    lordOBored,
    playHuman,
    reset,
    letter,
  };
}
