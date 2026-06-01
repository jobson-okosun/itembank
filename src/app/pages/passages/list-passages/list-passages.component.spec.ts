import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPassagesComponent } from './list-passages.component';

describe('ListPassagesComponent', () => {
  let component: ListPassagesComponent;
  let fixture: ComponentFixture<ListPassagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPassagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPassagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
