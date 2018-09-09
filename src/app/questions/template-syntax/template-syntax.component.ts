import { QuestionAndAnswer } from './../../shared/models/question-and-answer';
import { Observable } from "rxjs"

import { Component, OnInit, OnDestroy } from '@angular/core';
import { StubService } from '../../shared/services/stub.service';


@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit, OnDestroy {

  private _bound: string = "Bound Text.";
  _numbers = new Array<number>();
  _numbers$: Observable<Array<number>>;
  numbersObserver: any;
  MAX: number = 5;

  q1: QuestionAndAnswer = new QuestionAndAnswer();
  lyrics: string;

  format(str: string) {
    var before = str.length;
    str = str.trim();
    var after = str.length;
    return str;
  }

  get boundString(): string {
    return this._bound;
  }
  set boundString(input: string) {
    this._bound = input;
  }

  constructor(private svc: StubService) {

  }

  ngOnInit() {
    this.numbersObserver = this.svc.getNumbers().subscribe(val => this.onObservableChanged(val));

    this.q1.question = "How can you add an active class to a selected element in a list component?";
    this.q1.htmlSnippet = `
<input (change)="true" (keyup)="0" (select)="0" #textInput type="text">
<label> Template Reference Varible: {{textInput.value}}</label>	
`;
    console.log(this.q1.htmlSnippet);

  }

  ngOnDestroy(): void {
    this.numbersObserver.unsubcribe();
  }

  onObservableChanged(val: Array<number>) {
    // this._numbers = val;
  }

  getBoundString(): string {
    return this._bound;
  }

}
