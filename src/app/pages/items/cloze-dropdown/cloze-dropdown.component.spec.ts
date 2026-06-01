import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClozeDropdownComponent } from './cloze-dropdown.component';

describe('ClozeDropdownComponent', () => {
  let component: ClozeDropdownComponent;
  let fixture: ComponentFixture<ClozeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClozeDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClozeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
