import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleResponsePreviewComponent } from './multiple-response-preview.component';

describe('MultipleResponsePreviewComponent', () => {
  let component: MultipleResponsePreviewComponent;
  let fixture: ComponentFixture<MultipleResponsePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleResponsePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleResponsePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
