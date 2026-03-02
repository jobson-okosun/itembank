import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrqComponent } from './mrq.component';

describe('MrqComponent', () => {
  let component: MrqComponent;
  let fixture: ComponentFixture<MrqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MrqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
