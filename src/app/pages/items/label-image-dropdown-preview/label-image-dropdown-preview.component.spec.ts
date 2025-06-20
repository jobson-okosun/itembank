import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelImageDropdownPreviewComponent } from './label-image-dropdown-preview.component';

describe('LabelImageDropdownPreviewComponent', () => {
  let component: LabelImageDropdownPreviewComponent;
  let fixture: ComponentFixture<LabelImageDropdownPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelImageDropdownPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelImageDropdownPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
