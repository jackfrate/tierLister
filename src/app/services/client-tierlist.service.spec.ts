import { TestBed } from '@angular/core/testing';

import { ClientTierlistService } from './client-tierlist.service';

describe('ClientTierlistService', () => {
  let service: ClientTierlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientTierlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
