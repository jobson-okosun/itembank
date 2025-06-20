import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorActivitiesComponent } from './moderator-activities.component';

describe('ModeratorActivitiesComponent', () => {
  let component: ModeratorActivitiesComponent;
  let fixture: ComponentFixture<ModeratorActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
