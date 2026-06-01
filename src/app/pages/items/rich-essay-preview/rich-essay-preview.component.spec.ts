import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichEssayPreviewComponent } from './rich-essay-preview.component';

describe('RichEssayPreviewComponent', () => {
  let component: RichEssayPreviewComponent;
  let fixture: ComponentFixture<RichEssayPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichEssayPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RichEssayPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
