import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelImageTextPreviewComponent } from './label-image-text-preview.component';

describe('LabelImageTextPreviewComponent', () => {
  let component: LabelImageTextPreviewComponent;
  let fixture: ComponentFixture<LabelImageTextPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelImageTextPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelImageTextPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
