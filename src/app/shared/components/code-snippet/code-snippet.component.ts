import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aiq-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.css']
})
export class CodeSnippetComponent implements OnInit {

  @Input() header: string;

  constructor() { }

  ngOnInit() {
  }

}
