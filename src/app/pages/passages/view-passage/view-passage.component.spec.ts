import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPassageComponent } from './view-passage.component';

describe('ViewPassageComponent', () => {
  let component: ViewPassageComponent;
  let fixture: ComponentFixture<ViewPassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPassageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
