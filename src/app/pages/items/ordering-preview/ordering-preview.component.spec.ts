import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingPreviewComponent } from './ordering-preview.component';

describe('OrderingPreviewComponent', () => {
  let component: OrderingPreviewComponent;
  let fixture: ComponentFixture<OrderingPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
