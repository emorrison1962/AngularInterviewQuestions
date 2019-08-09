import { Component, OnInit, Input, } from '@angular/core';
import { Answer } from '../../models/question';

@Component({
  selector: 'aiq-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() isReadOnly: boolean;
  @Input()
  answer: Answer
  constructor() { }

  ngOnInit() {
    console.log(this.answer);
  }

}
