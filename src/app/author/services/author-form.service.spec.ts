import { TestBed } from '@angular/core/testing';

import { AuthorFormService } from './author-form.service';

describe('AuthorFormService', () => {
  let service: AuthorFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
