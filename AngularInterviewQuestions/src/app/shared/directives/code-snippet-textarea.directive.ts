import { Directive, ElementRef, HostListener, Input, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appCodeSnippetTextarea]'
})
export class CodeSnippetTextareaDirective implements AfterContentInit {
  constructor(public element: ElementRef) {
  }
  @Input() maximumHeight: number;
  @Input() minHeight: number; // based on pixel
  @HostListener('input', ['$event.target'])
  @HostListener('cut', ['$event.target'])
  @HostListener('paste', ['$event.target'])
  @HostListener('change', ['$event.target'])
  @HostListener('load', ['$event.target']) onload() {
    this.adjustCustom();
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.adjustCustom();

  }


  // _maximumHeight: number;
  // _minHeight: number;

  // @Input()
  // set maximumHeight(input: number) {
  //   this._maximumHeight = input;
  // }
  // get maximumHeight(): number {
  //   return this._maximumHeight;
  // }




  // ngOnInit(): void {
  //   this.adjustCustom();
  // }

  adjustCustom(): void {
    const element = this.element.nativeElement as HTMLTextAreaElement;
    console.log(element.rows);
    //element.style.height = this.minHeight + 'px';
    element.style.height = (element.scrollHeight) + 'px';
    console.log(element.style.fontSize);

    if (element.scrollHeight <= this.maximumHeight) {
      element.style.overflowY = 'hidden'
      delete element.style.maxHeight
      //      console.log('if');
    } else {
      element.style.overflowY = 'scroll'
      element.style.height = 'auto';//element.scrollHeight + 'px';
      console.log('height=' + element.style.height
        + ', scrollHeight=' + element.scrollHeight
        + ', rows=' + element.rows);
      //element.style.height = element.scrollHeight + 'px';
      //element.style.maxHeight = element.scrollHeight + 'px';
      //console.log('else');
    }
    new Object();
  }
}
