import { TestBed } from '@angular/core/testing';

import { PotentialcustomerService } from './potentialcustomer.service';

describe('PotentialcustomerService', () => {
  let service: PotentialcustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotentialcustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
