import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupRegFieldSettingsComponent } from './group-reg-field-settings.component';

describe('GroupRegFieldSettingsComponent', () => {
  let component: GroupRegFieldSettingsComponent;
  let fixture: ComponentFixture<GroupRegFieldSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupRegFieldSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupRegFieldSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
