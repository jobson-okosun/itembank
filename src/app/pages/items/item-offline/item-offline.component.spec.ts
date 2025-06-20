import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOfflineComponent } from './item-offline.component';

describe('ItemOfflineComponent', () => {
  let component: ItemOfflineComponent;
  let fixture: ComponentFixture<ItemOfflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemOfflineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
