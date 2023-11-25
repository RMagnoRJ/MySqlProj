import { TestBed } from '@angular/core/testing';

import { ServidorProviderService } from './servidor-provider.service';

describe('ServidorProviderService', () => {
  let service: ServidorProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServidorProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
