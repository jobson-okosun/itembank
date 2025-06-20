import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPassageItemComponent } from './new-passage-item.component';

describe('NewPassageItemComponent', () => {
  let component: NewPassageItemComponent;
  let fixture: ComponentFixture<NewPassageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPassageItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPassageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
