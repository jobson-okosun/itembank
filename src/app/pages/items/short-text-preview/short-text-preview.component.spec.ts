import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTextPreviewComponent } from './short-text-preview.component';

describe('ShortTextPreviewComponent', () => {
  let component: ShortTextPreviewComponent;
  let fixture: ComponentFixture<ShortTextPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortTextPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortTextPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
