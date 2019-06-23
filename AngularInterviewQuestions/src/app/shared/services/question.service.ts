import { Injectable } from '@angular/core';
import { Question, IQuestion } from '../models/question';
import { Observable, from } from 'rxjs/';
import { map, take } from 'rxjs/operators';

import questionsJson from '../../../assets/questions.json'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  public getQuestions(): Array<Question> {
    let result: Array<Question> = questionsJson.questions.map(blob => { return Question.fromJson(blob) });
    return result;
  }
}
