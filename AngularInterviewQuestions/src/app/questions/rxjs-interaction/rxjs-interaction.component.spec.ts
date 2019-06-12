import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsInteractionComponent } from './rxjs-interaction.component';

describe('RxjsInteractionComponent', () => {
  let component: RxjsInteractionComponent;
  let fixture: ComponentFixture<RxjsInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
