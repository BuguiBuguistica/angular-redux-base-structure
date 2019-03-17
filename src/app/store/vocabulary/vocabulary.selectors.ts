import { createSelector } from '@ngrx/store';
import { getAppState, AppState } from '..';
import { VocabularyState } from './vocabulary.state-type';

const getWords = (state: VocabularyState) => state.words;

export const vocabularyState = createSelector(
  getAppState,
  (state: AppState) => state.vocabularyState
);

export const getWordsSelector = createSelector(
  vocabularyState,
  getWords
);
