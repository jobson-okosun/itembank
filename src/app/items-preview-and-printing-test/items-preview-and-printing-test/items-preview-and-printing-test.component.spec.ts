import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsPreviewAndPrintingTestComponent } from './items-preview-and-printing-test.component';

describe('ItemsPreviewAndPrintingTestComponent', () => {
  let component: ItemsPreviewAndPrintingTestComponent;
  let fixture: ComponentFixture<ItemsPreviewAndPrintingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsPreviewAndPrintingTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsPreviewAndPrintingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
