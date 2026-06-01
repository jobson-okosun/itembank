import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClozeImageWithDropdownComponent } from './cloze-image-with-dropdown.component';

describe('ClozeImageWithDropdownComponent', () => {
  let component: ClozeImageWithDropdownComponent;
  let fixture: ComponentFixture<ClozeImageWithDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClozeImageWithDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClozeImageWithDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
