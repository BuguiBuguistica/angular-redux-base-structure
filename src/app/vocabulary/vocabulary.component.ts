import { Component, OnInit } from '@angular/core';
import { VocabularyState } from '../store/vocabulary/vocabulary.state-type';
import { Store } from '@ngrx/store';
import { GetVocabularyRequest } from '../store/vocabulary/vocabulary.actions';
import { Observable } from 'rxjs';
import { IWord } from '../models/word';
import { getWordsSelector } from '../store/vocabulary/vocabulary.selectors';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss']
})
export class VocabularyComponent implements OnInit {

  constructor(private store: Store<VocabularyState>) { }

  public vocabulary$: Observable<IWord[]>;

  ngOnInit() {
    this.store.dispatch(new GetVocabularyRequest());
    this.init();
  }

  private init() {
    this.vocabulary$ = this.store.select(getWordsSelector);
  }

}
