import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisitButtonComponent } from './revisit-button.component';

describe('RevisitButtonComponent', () => {
  let component: RevisitButtonComponent;
  let fixture: ComponentFixture<RevisitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisitButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
