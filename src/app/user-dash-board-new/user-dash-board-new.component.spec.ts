import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashBoardNewComponent } from './user-dash-board-new.component';

describe('UserDashBoardNewComponent', () => {
  let component: UserDashBoardNewComponent;
  let fixture: ComponentFixture<UserDashBoardNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashBoardNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashBoardNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
