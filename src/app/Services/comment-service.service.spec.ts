import { TestBed } from '@angular/core/testing';
import { CommentserviceService } from './comment-service.service';

describe('CommentServiceService', () => {
  let service: CommentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
