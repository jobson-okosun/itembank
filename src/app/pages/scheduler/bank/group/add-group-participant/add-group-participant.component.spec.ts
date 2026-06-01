import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupParticipantComponent } from './add-group-participant.component';

describe('AddGroupParticipantComponent', () => {
  let component: AddGroupParticipantComponent;
  let fixture: ComponentFixture<AddGroupParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGroupParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
