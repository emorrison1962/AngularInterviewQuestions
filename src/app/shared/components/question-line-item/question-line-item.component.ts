import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ContentChildren, Directive, Input, QueryList } from '@angular/core';
import { AnswerComponent } from 'src/app/shared/components/answer/answer.component';


@Component({
  selector: 'aiq-question',
  templateUrl: './question-line-item.component.html',
  styleUrls: ['./question-line-item.component.css']
})
export class QuestionLineItemComponent implements OnInit, AfterContentInit {
  @ContentChildren(AnswerComponent, { descendants: true })
  answers: QueryList<AnswerComponent>;
  unanswered: boolean;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (0 === this.answers.length) {
      this.unanswered = true;
    }
  }

}
