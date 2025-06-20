import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomCenterComponent } from './edit-custom-center.component';

describe('EditCustomCenterComponent', () => {
  let component: EditCustomCenterComponent;
  let fixture: ComponentFixture<EditCustomCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustomCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
