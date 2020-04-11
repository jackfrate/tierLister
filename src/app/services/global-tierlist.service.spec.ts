import { TestBed } from '@angular/core/testing';

import { GlobalTierlistService } from './global-tierlist.service';

describe('GlobalTierlistService', () => {
  let service: GlobalTierlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalTierlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
