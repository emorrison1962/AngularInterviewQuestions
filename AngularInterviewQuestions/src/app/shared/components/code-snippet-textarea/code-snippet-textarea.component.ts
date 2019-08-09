import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aiq-code-snippet-textarea',
  templateUrl: './code-snippet-textarea.component.html',
  styleUrls: ['./code-snippet-textarea.component.css']
})
export class CodeSnippetTextareaComponent implements OnInit {
  _snippet: string;
  @Input()
  set snippet(input: string) {
    this._snippet = input;
    this.snippetChange.emit(this._snippet);
  }
  get snippet(): string {
    return this._snippet;
  }

  @Output() snippetChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
