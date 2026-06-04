import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelImageWithTextComponent } from './label-image-with-text.component';

describe('LabelImageWithTextComponent', () => {
  let component: LabelImageWithTextComponent;
  let fixture: ComponentFixture<LabelImageWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelImageWithTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelImageWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
