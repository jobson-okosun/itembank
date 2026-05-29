import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseDropdownComponent } from './close-dropdown.component';

describe('CloseDropdownComponent', () => {
  let component: CloseDropdownComponent;
  let fixture: ComponentFixture<CloseDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
