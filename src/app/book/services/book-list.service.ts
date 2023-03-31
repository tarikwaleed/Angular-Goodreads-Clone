import { Injectable } from '@angular/core';
import { BookDataService } from './book-data.service';
import { Observable, map } from 'rxjs';
import { BookCardModel } from '../models/book-card.model';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookListService {
  constructor(private bookDataService: BookDataService) {}
  getAllBooks(): Observable<any[]> {
    return this.bookDataService.getBooks().pipe(
      map((books: Book[]) => {
        return books.map((book: Book) => {
          //sanitize the data
          // const author_name: string = `${book.author[0].first_name} ${book.author[0].last_name}`
          let coverImage!: string;
          const originalCoverImage = book.coverImage.split('/');
          if (originalCoverImage[0] === 'uploads') {
            coverImage = originalCoverImage[1];
          } else {
            coverImage = originalCoverImage[0];
          }

          //then return
          book.coverImage = coverImage;
          return book;
        });
      })
    );
  }
}
