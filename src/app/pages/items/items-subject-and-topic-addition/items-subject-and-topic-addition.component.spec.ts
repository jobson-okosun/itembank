import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSubjectAndTopicAdditionComponent } from './items-subject-and-topic-addition.component';

describe('ItemsSubjectAndTopicAdditionComponent', () => {
  let component: ItemsSubjectAndTopicAdditionComponent;
  let fixture: ComponentFixture<ItemsSubjectAndTopicAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsSubjectAndTopicAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsSubjectAndTopicAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
