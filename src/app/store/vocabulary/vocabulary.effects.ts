import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { VocabularyService } from './vocabulary.service';
import { VocabularyActionTypes, GetVocabularyResponse } from './vocabulary.actions';
import { VocabularyState } from './vocabulary.state-type';
import { Store } from '@ngrx/store';

@Injectable()
export class VocabularyEffects {
  constructor(
    private actions$: Actions,
    private vocabularyService: VocabularyService,
    private store: Store<VocabularyState>
  ) {}

  @Effect()
  loadVocabulary$ = this.actions$
    .pipe(
      ofType(VocabularyActionTypes.getVocabularyRequest),
      mergeMap(() => this.vocabularyService.getVocabulary()),
      map(res => (new GetVocabularyResponse({vocabulary: res })))
    );
}
