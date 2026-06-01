import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelImageDropdownComponent } from './label-image-dropdown.component';

describe('LabelImageDropdownComponent', () => {
  let component: LabelImageDropdownComponent;
  let fixture: ComponentFixture<LabelImageDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelImageDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelImageDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
