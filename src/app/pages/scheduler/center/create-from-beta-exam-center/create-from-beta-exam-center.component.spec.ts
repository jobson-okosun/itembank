import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFromBetaExamCenterComponent } from './create-from-beta-exam-center.component';

describe('CreateFromBetaExamCenterComponent', () => {
  let component: CreateFromBetaExamCenterComponent;
  let fixture: ComponentFixture<CreateFromBetaExamCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFromBetaExamCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFromBetaExamCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
