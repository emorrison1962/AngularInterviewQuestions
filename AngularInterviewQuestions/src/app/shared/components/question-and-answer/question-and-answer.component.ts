import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'aiq-question-and-answer',
  templateUrl: './question-and-answer.component.html',
  styleUrls: ['./question-and-answer.component.css']
})
export class QuestionAndAnswerComponent implements OnInit {

  @Input()
  question: Question;
  constructor() { }

  ngOnInit() {
    //console.log(this.question);
    new Object();

  }

}
