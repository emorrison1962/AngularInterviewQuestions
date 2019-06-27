import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAnswer]'
})
export class AnswerDirective {

  constructor(el: ElementRef) {

    el.nativeElement.style.fontStyle = 'normal';
    el.nativeElement.style.color = 'blue';
    //console.log(typeof (el.nativeElement.style));
  }

}
