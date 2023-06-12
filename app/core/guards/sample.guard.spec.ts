import { TestBed } from '@angular/core/testing';

import { SampleGuard } from './sample.guard';

describe('SampleGuard', () => {
  let guard: SampleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SampleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
