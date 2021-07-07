import { TestBed } from '@angular/core/testing';

import { GetAvatarsService } from './get-avatars.service';

describe('GetAvatarsService', () => {
  let service: GetAvatarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAvatarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
