import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldSettingsComponent } from './custom-field-settings.component';

describe('CustomFieldSettingsComponent', () => {
  let component: CustomFieldSettingsComponent;
  let fixture: ComponentFixture<CustomFieldSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFieldSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFieldSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
