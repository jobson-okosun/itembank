import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClozeDropdownPreviewComponent } from './cloze-dropdown-preview.component';

describe('ClozeDropdownPreviewComponent', () => {
  let component: ClozeDropdownPreviewComponent;
  let fixture: ComponentFixture<ClozeDropdownPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClozeDropdownPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClozeDropdownPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
