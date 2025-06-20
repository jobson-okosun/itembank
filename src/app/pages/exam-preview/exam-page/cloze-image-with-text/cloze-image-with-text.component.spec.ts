import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClozeImageWithTextComponent } from './cloze-image-with-text.component';

describe('ClozeImageWithTextComponent', () => {
  let component: ClozeImageWithTextComponent;
  let fixture: ComponentFixture<ClozeImageWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClozeImageWithTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClozeImageWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
