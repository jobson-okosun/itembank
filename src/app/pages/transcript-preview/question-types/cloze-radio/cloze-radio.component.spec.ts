import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClozeRadioComponent } from './cloze-radio.component';

describe('ClozeRadioComponent', () => {
  let component: ClozeRadioComponent;
  let fixture: ComponentFixture<ClozeRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClozeRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClozeRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
