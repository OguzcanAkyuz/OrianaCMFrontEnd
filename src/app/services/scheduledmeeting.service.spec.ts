import { TestBed } from '@angular/core/testing';

import { ScheduledmeetingService } from './scheduledmeeting.service';

describe('ScheduledmeetingService', () => {
  let service: ScheduledmeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduledmeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
