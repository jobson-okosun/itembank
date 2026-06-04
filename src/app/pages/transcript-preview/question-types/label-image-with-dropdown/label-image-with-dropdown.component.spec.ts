import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelImageWithDropdownComponent } from './label-image-with-dropdown.component';

describe('LabelImageWithDropdownComponent', () => {
  let component: LabelImageWithDropdownComponent;
  let fixture: ComponentFixture<LabelImageWithDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelImageWithDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelImageWithDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
