import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagAnalysisComponent } from './tag-analysis.component';

describe('TagAnalysisComponent', () => {
  let component: TagAnalysisComponent;
  let fixture: ComponentFixture<TagAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
