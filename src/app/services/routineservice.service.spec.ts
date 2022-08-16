import { TestBed } from '@angular/core/testing';

import { RoutineserviceService } from './routineservice.service';

describe('RoutineserviceService', () => {
  let service: RoutineserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutineserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
