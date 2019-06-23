/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CategoryComponent as Component } from './category.component';

describe('QuestionBaseComponent', () => {
  let component: Component;
  let fixture: ComponentFixture<Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
