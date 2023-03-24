import { TestBed } from '@angular/core/testing';

import { AuthorSelectService } from './author-select.service';

describe('AuthorSelectService', () => {
  let service: AuthorSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
