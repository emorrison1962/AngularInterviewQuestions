import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuestion]'
})
export class QuestionDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.fontStyle = 'italic';
    console.log(typeof (el.nativeElement.style));
  }

}
