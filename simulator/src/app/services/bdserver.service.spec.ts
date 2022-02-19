import { TestBed } from '@angular/core/testing';

import { BdserverService } from './bdserver.service';

describe('BdserverService', () => {
  let service: BdserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
