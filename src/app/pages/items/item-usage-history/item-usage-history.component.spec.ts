import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUsageHistoryComponent } from './item-usage-history.component';

describe('ItemUsageHistoryComponent', () => {
  let component: ItemUsageHistoryComponent;
  let fixture: ComponentFixture<ItemUsageHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemUsageHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUsageHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
