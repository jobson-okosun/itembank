import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceMatrixComponent } from './choice-matrix.component';

describe('ChoiceMatrixComponent', () => {
  let component: ChoiceMatrixComponent;
  let fixture: ComponentFixture<ChoiceMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
