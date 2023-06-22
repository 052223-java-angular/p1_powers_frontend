import { TestBed } from '@angular/core/testing';

import { TrailInfoServiceService } from './trail-info-service.service';

describe('TrailInfoServiceService', () => {
  let service: TrailInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrailInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
