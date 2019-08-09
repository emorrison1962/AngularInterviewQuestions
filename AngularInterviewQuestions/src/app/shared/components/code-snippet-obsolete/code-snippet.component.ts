import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aiq-code-snippet-obsolete',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.css']
})
export class Obsolete_CodeSnippetComponent implements OnInit {

  @Input() header: string;

  constructor() { }

  ngOnInit() {
  }

}
