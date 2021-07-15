import { TestBed } from '@angular/core/testing';

import { GenerateRecentPostsService } from './generate-recent-posts.service';

describe('GenerateRecentPostsService', () => {
  let service: GenerateRecentPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateRecentPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
