import { TestBed } from '@angular/core/testing';

import { DoctorProfileDataService } from './doctor-profile-data.service';

describe('DoctorProfileDataService', () => {
  let service: DoctorProfileDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorProfileDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
