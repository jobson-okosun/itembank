import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClozeTextComponent } from './cloze-text.component';

describe('ClozeTextComponent', () => {
  let component: ClozeTextComponent;
  let fixture: ComponentFixture<ClozeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClozeTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClozeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
