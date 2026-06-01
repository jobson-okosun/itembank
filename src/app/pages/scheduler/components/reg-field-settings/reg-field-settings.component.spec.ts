import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegFieldSettingsComponent } from './reg-field-settings.component';

describe('RegFieldSettingsComponent', () => {
  let component: RegFieldSettingsComponent;
  let fixture: ComponentFixture<RegFieldSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegFieldSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegFieldSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
