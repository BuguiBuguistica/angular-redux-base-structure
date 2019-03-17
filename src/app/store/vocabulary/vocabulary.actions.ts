import { Action } from '@ngrx/store';
import { IWord } from '../../models/word';

export enum VocabularyActionTypes {
  getVocabularyRequest = '[Vocabulary] get vocabulary request',
  getVocabularyResponse = '[Vocabulary] get vocabulary response'
}

export class GetVocabularyRequest implements Action {
  readonly type = VocabularyActionTypes.getVocabularyRequest;
}

export class GetVocabularyResponse implements Action {
  readonly type = VocabularyActionTypes.getVocabularyResponse;
  constructor(public payload: { vocabulary: IWord[] }) {}
}
