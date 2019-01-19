import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArsacConsultingComponent } from './arsac-consulting.component';

describe('ArsacConsultingComponent', () => {
  let component: ArsacConsultingComponent;
  let fixture: ComponentFixture<ArsacConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArsacConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArsacConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
