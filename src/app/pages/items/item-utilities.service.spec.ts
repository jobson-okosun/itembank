import { TestBed } from '@angular/core/testing';

import { ItemUtilitiesService } from './item-utilities.service';

describe('ItemUtilitiesService', () => {
  let service: ItemUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
