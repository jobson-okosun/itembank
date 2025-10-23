import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentSectionsComponent } from './assessment-sections.component';

describe('AssessmentSectionsComponent', () => {
  let component: AssessmentSectionsComponent;
  let fixture: ComponentFixture<AssessmentSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
