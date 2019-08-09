import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ContentChildren, Directive, Input, QueryList } from '@angular/core';
import { AnswerComponent } from 'src/app/shared/components/answer/answer.component';
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
  @Input()
  question: Question;
  isReadOnly: boolean = true;;

  constructor() { }

  ngOnInit() {
    new Object();
    this.unanswered = this.question.Answers.length === 0;
    new Object();
  }


  ngAfterContentInit() {
    if (0 === this.answers.length) {
      //this.unanswered = false;
    }
  }

  editClicked() {
    this.isReadOnly = false;
  }

  saveClicked() {
    this.isReadOnly = true;
  }

  cancelClicked() {
    this.isReadOnly = true;
  }

}
