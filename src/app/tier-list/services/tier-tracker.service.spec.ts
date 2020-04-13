import { TestBed } from '@angular/core/testing';

import { TierTrackerService } from './tier-tracker.service';

describe('TierTrackerService', () => {
  let service: TierTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TierTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
