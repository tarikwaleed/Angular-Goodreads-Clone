/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookRatingService } from './book-rating.service';

describe('Service: BookRating', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookRatingService]
    });
  });

  it('should ...', inject([BookRatingService], (service: BookRatingService) => {
    expect(service).toBeTruthy();
  }));
});
