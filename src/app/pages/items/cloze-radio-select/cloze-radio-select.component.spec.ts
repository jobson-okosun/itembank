import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClozeRadioSelectComponent } from './cloze-radio-select.component';

describe('ClozeRadioSelectComponent', () => {
  let component: ClozeRadioSelectComponent;
  let fixture: ComponentFixture<ClozeRadioSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClozeRadioSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClozeRadioSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
