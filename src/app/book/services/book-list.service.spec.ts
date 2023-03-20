/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookListService } from './book-list.service';

describe('Service: BookList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookListService]
    });
  });

  it('should ...', inject([BookListService], (service: BookListService) => {
    expect(service).toBeTruthy();
  }));
});
