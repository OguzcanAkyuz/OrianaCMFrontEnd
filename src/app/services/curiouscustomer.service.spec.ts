import { TestBed } from '@angular/core/testing';

import { CuriouscustomerService } from './curiouscustomer.service';

describe('CuriouscustomerService', () => {
  let service: CuriouscustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuriouscustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
