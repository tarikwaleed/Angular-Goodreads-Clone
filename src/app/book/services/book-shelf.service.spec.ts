/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookShelfService } from './book-shelf.service';

describe('Service: BookShelf', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookShelfService]
    });
  });

  it('should ...', inject([BookShelfService], (service: BookShelfService) => {
    expect(service).toBeTruthy();
  }));
});
