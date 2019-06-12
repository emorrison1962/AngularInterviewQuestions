/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StubService } from './stub.service';

describe('Service: Stub', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StubService]
    });
  });

  it('should ...', inject([StubService], (service: StubService) => {
    expect(service).toBeTruthy();
  }));
});
