import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegisterNewComponent } from './patient-register-new.component';

describe('PatientRegisterNewComponent', () => {
  let component: PatientRegisterNewComponent;
  let fixture: ComponentFixture<PatientRegisterNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRegisterNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRegisterNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
