import { TestBed } from '@angular/core/testing';

import { FinishedmeetingService } from './finishedmeeting.service';

describe('FinishedmeetingService', () => {
  let service: FinishedmeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinishedmeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
