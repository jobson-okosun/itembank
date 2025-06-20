import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubjectTagComponent } from './view-subject-tag.component';

describe('ViewSubjectTagComponent', () => {
  let component: ViewSubjectTagComponent;
  let fixture: ComponentFixture<ViewSubjectTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubjectTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubjectTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
