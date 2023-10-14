import { TestBed } from '@angular/core/testing';

import { ApideezerService } from './apideezer.service';

describe('ApideezerService', () => {
  let service: ApideezerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApideezerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
