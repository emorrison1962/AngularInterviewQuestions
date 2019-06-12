import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiQuestionsComponent } from './api-questions.component';

describe('ApiQuestionsComponent', () => {
  let component: ApiQuestionsComponent;
  let fixture: ComponentFixture<ApiQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
