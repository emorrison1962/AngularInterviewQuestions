import { Observable, Subscription } from "rxjs"

import { Component, OnInit, OnDestroy, AfterContentInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { StubService } from '../../shared/services/stub.service';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild("textInput01", { static: true }) observedInput: AbstractControl;

  private _bound: string = "Bound Text.";
  _numbers = new Array<number>();
  _numbers$: Observable<Array<number>>;
  numbersObserver: Subscription;
  inputObserver: Subscription;
  MAX: number = 5;

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
  }

  observedStatus: any = null;
  ngAfterViewInit(): void {
    console.log(this.observedInput);
    this.inputObserver = this.observedInput.statusChanges.subscribe(
      status => {
        this.observedStatus = status;
      }
    );
  }

  ngOnDestroy(): void {
    this.numbersObserver.unsubscribe();
    this.inputObserver.unsubscribe();
  }

  onObservableChanged(val: Array<number>) {
    // this._numbers = val;
  }

  getBoundString(): string {
    return this._bound;
  }

}
