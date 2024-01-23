import { TestBed } from '@angular/core/testing';

import { CalsService } from './cals.service';

describe('CalsService', () => {
  let service: CalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
