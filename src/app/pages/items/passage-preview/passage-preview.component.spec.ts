import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagePreviewComponent } from './passage-preview.component';

describe('PassagePreviewComponent', () => {
  let component: PassagePreviewComponent;
  let fixture: ComponentFixture<PassagePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassagePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
