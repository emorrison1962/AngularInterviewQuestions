import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ContentChildren, Directive, Input, QueryList } from '@angular/core';
import { AnswerComponent } from 'src/app/shared/components/answer/answer.component';
import { QuestionAndAnswer } from '../../models/question-and-answer';
import { Question } from '../../models/question';


@Component({
  selector: 'aiq-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, AfterContentInit {
  @ContentChildren(AnswerComponent, { descendants: true })
  answers: QueryList<AnswerComponent>;
  unanswered: boolean;
  _qna: QuestionAndAnswer;
  question: Question;

  @Input()
  set qna(value: QuestionAndAnswer) {
    this.question = value.question;
    this._qna = value;
  }
  get qna(): QuestionAndAnswer {
    return this._qna;
  }



  constructor() { }

  ngOnInit() {
    new Object();
    this.unanswered = this.qna.isNotAnswered;
    //console.log(this.qna.question.Text);
    new Object();
  }


  ngAfterContentInit() {
    if (0 === this.answers.length) {
      //this.unanswered = false;
    }
  }

}
