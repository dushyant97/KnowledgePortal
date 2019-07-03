import { TestBed } from '@angular/core/testing';

import { ForumParameterService } from './forum-parameter.service';

describe('ForumParameterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForumParameterService = TestBed.get(ForumParameterService);
    expect(service).toBeTruthy();
  });
});
