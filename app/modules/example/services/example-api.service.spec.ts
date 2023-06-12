import { TestBed } from '@angular/core/testing';

import { ExampleApiService } from './example-api.service';

describe('ExampleApiService', () => {
  let service: ExampleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
