import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuringSystemComponent } from './turing-system.component';

describe('TuringSystemComponent', () => {
  let component: TuringSystemComponent;
  let fixture: ComponentFixture<TuringSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuringSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuringSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
