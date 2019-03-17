import { Action } from '@ngrx/store';
import { VocabularyState } from './vocabulary.state-type';
import { VocabularyActionTypes } from './vocabulary.actions';

export const initialState: VocabularyState = {
  words: []
};

export const vocabularyReducer = (state = initialState, action: any): VocabularyState => {
  switch (action.type) {
    case VocabularyActionTypes.getVocabularyResponse:
      return {
        ...state,
        words: action.payload.vocabulary
      };


    default:
      return state;
  }
};

