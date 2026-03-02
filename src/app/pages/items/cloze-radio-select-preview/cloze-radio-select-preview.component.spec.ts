import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClozeRadioSelectPreviewComponent } from './cloze-radio-select-preview.component';

describe('ClozeRadioSelectPreviewComponent', () => {
  let component: ClozeRadioSelectPreviewComponent;
  let fixture: ComponentFixture<ClozeRadioSelectPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClozeRadioSelectPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClozeRadioSelectPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
