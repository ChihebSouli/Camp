import { TestBed } from '@angular/core/testing';

import { CentreServiceService } from './centre-service.service';

describe('CentreServiceService', () => {
  let service: CentreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
