import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aiq-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  @Input() header: string;
  constructor() { }

  ngOnInit() {
  }

}
