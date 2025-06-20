import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageAndItemComponent } from './passage-and-item.component';

describe('PassageAndItemComponent', () => {
  let component: PassageAndItemComponent;
  let fixture: ComponentFixture<PassageAndItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassageAndItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassageAndItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
