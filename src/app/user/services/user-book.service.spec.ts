/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserBookService } from './user-book.service';

describe('Service: UserBook', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserBookService]
    });
  });

  it('should ...', inject([UserBookService], (service: UserBookService) => {
    expect(service).toBeTruthy();
  }));
});
