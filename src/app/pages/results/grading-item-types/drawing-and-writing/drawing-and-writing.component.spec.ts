import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingAndWritingComponent } from './drawing-and-writing.component';

describe('DrawingAndWritingComponent', () => {
  let component: DrawingAndWritingComponent;
  let fixture: ComponentFixture<DrawingAndWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawingAndWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingAndWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
