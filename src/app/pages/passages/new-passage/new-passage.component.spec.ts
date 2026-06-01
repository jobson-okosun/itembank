import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPassageComponent } from './new-passage.component';

describe('NewPassageComponent', () => {
  let component: NewPassageComponent;
  let fixture: ComponentFixture<NewPassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPassageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
