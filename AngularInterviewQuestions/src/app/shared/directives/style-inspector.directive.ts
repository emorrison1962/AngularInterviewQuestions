import { Directive, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[aiqStyleInspector]'
})
export class StyleInspectorDirective implements AfterContentInit, AfterViewInit {

  constructor(public element: ElementRef) {
  }

  ngAfterContentInit(): void {
    var pre = this.element.nativeElement as HTMLPreElement;
  }

  ngAfterViewInit(): void {
    var pre = this.element.nativeElement as HTMLPreElement;
  }

}
