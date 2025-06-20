import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssayPreviewComponent } from './essay-preview.component';

describe('EssayPreviewComponent', () => {
  let component: EssayPreviewComponent;
  let fixture: ComponentFixture<EssayPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssayPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssayPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
