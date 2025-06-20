import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycleDashboardComponent } from './recycle-dashboard.component';

describe('RecycleDashboardComponent', () => {
  let component: RecycleDashboardComponent;
  let fixture: ComponentFixture<RecycleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecycleDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecycleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
