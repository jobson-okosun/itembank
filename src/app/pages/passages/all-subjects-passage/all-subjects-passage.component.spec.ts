import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSubjectsPassageComponent } from './all-subjects-passage.component';

describe('AllSubjectsPassageComponent', () => {
  let component: AllSubjectsPassageComponent;
  let fixture: ComponentFixture<AllSubjectsPassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSubjectsPassageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSubjectsPassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
