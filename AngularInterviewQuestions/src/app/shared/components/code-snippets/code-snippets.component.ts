import { CodeSnippets } from './../../models/question';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aiq-code-snippets',
  templateUrl: './code-snippets.component.html',
  styleUrls: ['./code-snippets.component.css']
})
export class CodeSnippetsComponent implements OnInit {

  _snippets: CodeSnippets
  @Input() isReadOnly: boolean;
  @Input()
  set snippets(value: CodeSnippets) {
    this._snippets = value;
    this.snippetsChange.emit(this._snippets);
  }

  get snippets(): CodeSnippets {
    return this._snippets;
  }

  @Output() snippetsChange: EventEmitter<CodeSnippets> = new EventEmitter<CodeSnippets>();

  constructor() {
  }

  ngOnInit() {
  }

}
