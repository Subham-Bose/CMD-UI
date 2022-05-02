import { TestBed } from '@angular/core/testing';

import { ViewdoctorpatientcardService } from './viewdoctorpatientcard.service';

describe('ViewdoctorpatientcardService', () => {
  let service: ViewdoctorpatientcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewdoctorpatientcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
