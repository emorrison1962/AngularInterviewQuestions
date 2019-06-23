import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ContentChildren, Directive, Input, QueryList } from '@angular/core';
import { AnswerComponent } from 'src/app/shared/components/answer/answer.component';
import { QuestionAndAnswer } from '../../models/question-and-answer';
import { Question } from '../../models/question';


@Component({
  selector: 'aiq-question-li',
  templateUrl: './question-line-item.component.html',
  styleUrls: ['./question-line-item.component.css']
})
export class QuestionLineItemComponent implements OnInit, AfterContentInit {
  @ContentChildren(AnswerComponent, { descendants: true })
  answers: QueryList<AnswerComponent>;
  unanswered: boolean;
  _qna: QuestionAndAnswer;
  question: Question;

  @Input()
  get qna(): QuestionAndAnswer {
    return this._qna;
  }

  set qna(value: QuestionAndAnswer) {
    this.question = value.question;
    this._qna = value;
  }


  constructor() { }

  ngOnInit() {
    new Object();
    this.unanswered = this.qna.isNotAnswered;
    console.log(this.qna.question.Text);
    new Object();
  }


  ngAfterContentInit() {
    if (0 === this.answers.length) {
      //this.unanswered = true;
    }
  }

}
