import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomCenterComponent } from './create-custom-center.component';

describe('CreateCustomCenterComponent', () => {
  let component: CreateCustomCenterComponent;
  let fixture: ComponentFixture<CreateCustomCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustomCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
