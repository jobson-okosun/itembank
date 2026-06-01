import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueOrFalsePreviewComponent } from './true-or-false-preview.component';

describe('TrueOrFalsePreviewComponent', () => {
  let component: TrueOrFalsePreviewComponent;
  let fixture: ComponentFixture<TrueOrFalsePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrueOrFalsePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueOrFalsePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
