import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectRecycleComponent } from './subject-recycle.component';

describe('SubjectRecycleComponent', () => {
  let component: SubjectRecycleComponent;
  let fixture: ComponentFixture<SubjectRecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectRecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectRecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
