import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelImageTextComponent } from './label-image-text.component';

describe('LabelImageTextComponent', () => {
  let component: LabelImageTextComponent;
  let fixture: ComponentFixture<LabelImageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelImageTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
