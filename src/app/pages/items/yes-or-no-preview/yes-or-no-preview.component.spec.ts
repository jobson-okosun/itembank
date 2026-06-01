import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesOrNoPreviewComponent } from './yes-or-no-preview.component';

describe('YesOrNoPreviewComponent', () => {
  let component: YesOrNoPreviewComponent;
  let fixture: ComponentFixture<YesOrNoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesOrNoPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YesOrNoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
