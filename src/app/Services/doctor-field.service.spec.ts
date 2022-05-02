import { TestBed } from '@angular/core/testing';

import { DoctorFieldService } from './doctor-field.service';

describe('DoctorFieldService', () => {
  let service: DoctorFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
