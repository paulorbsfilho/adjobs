import { TestBed } from '@angular/core/testing';

import { AdvertisementJobService } from './advertisement-job.service';

describe('AdvertisementJobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvertisementJobService = TestBed.get(AdvertisementJobService);
    expect(service).toBeTruthy();
  });
});
