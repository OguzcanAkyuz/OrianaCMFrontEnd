import { TestBed } from '@angular/core/testing';

import { InvestmentrelationService } from './investmentrelation.service';

describe('InvestmentrelationService', () => {
  let service: InvestmentrelationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentrelationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
