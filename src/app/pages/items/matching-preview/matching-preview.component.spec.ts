import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingPreviewComponent } from './matching-preview.component';

describe('MatchingPreviewComponent', () => {
  let component: MatchingPreviewComponent;
  let fixture: ComponentFixture<MatchingPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
