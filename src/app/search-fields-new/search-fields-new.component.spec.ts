import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFieldsNewComponent } from './search-fields-new.component';

describe('SearchFieldsNewComponent', () => {
  let component: SearchFieldsNewComponent;
  let fixture: ComponentFixture<SearchFieldsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFieldsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFieldsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
