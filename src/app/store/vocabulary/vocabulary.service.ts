import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWord } from '../../models/word';
import ApiConstants from '../../constants/api';

const words = [
  {
    id: '1',
    word: 'eau',
    translation: 'agua',
    categoryId: '1',
    languageId: '1'
  }
] as IWord[];

@Injectable()
export class VocabularyService {
  constructor(private http: HttpClient) {}

  getVocabulary(): Observable<IWord[]> {
    return Observable.create((observer) => {
      observer.next(words);
      observer.complete();
    });
  }
}
