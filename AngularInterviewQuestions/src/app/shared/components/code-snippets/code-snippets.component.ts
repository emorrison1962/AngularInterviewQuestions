import { CodeSnippets } from './../../models/question';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aiq-code-snippets',
  templateUrl: './code-snippets.component.html',
  styleUrls: ['./code-snippets.component.css']
})
export class CodeSnippetsComponent implements OnInit {

  _snippets: CodeSnippets
  @Input()
  set snippets(value: CodeSnippets) {
    this._snippets = value;
  }

  get snippets(): CodeSnippets {
    return this._snippets;
  }




  constructor() {
    console.log(this.snippets);
    new Object();
  }

  ngOnInit() {
  }

}
