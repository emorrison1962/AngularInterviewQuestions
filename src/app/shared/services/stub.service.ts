import { Observable, pipe, interval, from, timer, Subject } from "rxjs"
import { delay, publish } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StubService {

  _intVal: number = 0;
  _currentNumber: number = 0;
  _numbers = new Array<number>();
  _subject$: Subject<Array<number>>
  _timer: Observable<number>;
  MAX: number = 5;


  get numbers$(): Subject<Array<number>> {
    if (!this._subject$) {
      //this._numbers$ = interval(500);
      this._subject$ = new Subject();
      this._subject$.next(this._numbers);
    }
    return this._subject$;
  }

  //#region Construction
  constructor() {
    this._timer = timer(1000, 500);
    //output: 0,1,2,3,4,5......
    const subscribe = this._timer.subscribe(val => this.onTimer(val));
  }
  //#endregion

  onTimer(val: number) {
    if (this.MAX <= this._numbers.length) {
      this._numbers.shift();
    }
    this._numbers.push(val);
    console.log(this._numbers);
    this._subject$.next(Object.assign({}, this._numbers)); // emit completely new value
  }


  // foo() {

  //   this._numbers.push(++this._intVal);
  //   this._subject$.next(++this._intVal);
  //   this.subject.next(Object.assign({}, this._proposals)); // emit completely new value

  //   console.log(this._numbers);
  // }

  getNumbers(): Observable<Array<number>> {
    // var x = this.$numbers.pipe(delay(500));
    // this._numbers.push(1, 2, 3, 4, 5);
    return this.numbers$;
  }

}
