/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookCardService } from './book-card.service';

describe('Service: BookCard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookCardService]
    });
  });

  it('should ...', inject([BookCardService], (service: BookCardService) => {
    expect(service).toBeTruthy();
  }));
});
