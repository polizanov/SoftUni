import { TestBed } from '@angular/core/testing';

import { GeneratePostsService } from './generate-posts.service';

describe('GeneratePostsService', () => {
  let service: GeneratePostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratePostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
