import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';



@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],

  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),

    trigger('heroWildcardState', [
      state('*', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1)'
      })),
      transition('* => *', [animate('400ms ease-in'), animate('400ms ease-out')])
    ])
  ]

})
export class AnimationsComponent implements OnInit {

  public heroes: Array<Hero> = new Array<Hero>();

  constructor() {
    this.heroes = [new Hero("Manny"), new Hero("Moe"), new Hero("Jack")];
  }

  ngOnInit() {
  }

}

export class Hero {

  states: Array<string> = ['active', 'inactive', 'unknown'];
  constructor(public name: string, public state = 'inactive') {
  }

  toggleState() {
    let ndx = this.states.findIndex(state => state === this.state);
    ndx = ++ndx % this.states.length;
    this.state = this.states[ndx];
  }

}