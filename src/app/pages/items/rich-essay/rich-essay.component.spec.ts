import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichEssayComponent } from './rich-essay.component';

describe('RichEssayComponent', () => {
  let component: RichEssayComponent;
  let fixture: ComponentFixture<RichEssayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichEssayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RichEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
