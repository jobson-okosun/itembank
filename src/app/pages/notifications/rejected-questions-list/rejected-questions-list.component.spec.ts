import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedQuestionsListComponent } from './rejected-questions-list.component';

describe('RejectedQuestionsListComponent', () => {
  let component: RejectedQuestionsListComponent;
  let fixture: ComponentFixture<RejectedQuestionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedQuestionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedQuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
