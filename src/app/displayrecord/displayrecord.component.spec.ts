import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayrecordComponent } from './displayrecord.component';

describe('DisplayrecordComponent', () => {
  let component: DisplayrecordComponent;
  let fixture: ComponentFixture<DisplayrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
