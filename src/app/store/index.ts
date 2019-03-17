import { ActionReducerMap } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';
import { VocabularyState } from './vocabulary/vocabulary.state-type';
import { vocabularyReducer } from './vocabulary/vocabulary.reducer';
import { VocabularyEffects } from './vocabulary/vocabulary.effects';

export const APP_STORE = 'app';

export interface AppState {
  vocabularyState: VocabularyState;
}

export const appReducers: ActionReducerMap<AppState> = {
  vocabularyState: vocabularyReducer
};

export const appEffects = [
  VocabularyEffects
];

export const getAppState = createFeatureSelector(
  APP_STORE
);
