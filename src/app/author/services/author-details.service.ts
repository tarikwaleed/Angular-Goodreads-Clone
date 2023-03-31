import { Injectable } from '@angular/core';
import { Observable, combineLatest, forkJoin, map, of } from 'rxjs';
import { AuthorDataService } from './author-data.service';
import { BookDetailsService } from 'src/app/book/services/book-details.service';
import { identifierName } from '@angular/compiler';
import { UserBookService } from 'src/app/user/services/user-book.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorDetailsService {
  authorBooks!: any[];

  constructor(
    private authorDataService: AuthorDataService,
    private bookDetailsService: BookDetailsService,
    private userBookService: UserBookService
  ) {}
  getAuthorDetails(authorId: string): Observable<any> {
    return this.authorDataService.getAuthorDetails(authorId).pipe(
      map((author) => {
        const authorName =
          author.author.first_name + ' ' + author.author.last_name;
        let photo!: string;
        const originalPhoto = author.author.photo.split('/');
        if (originalPhoto[0] === 'uploads') {
          photo = originalPhoto[1];
        } else {
          photo = originalPhoto[0];
        }
        const data = {
          author: {
            authorName: authorName,
            dateOfBirth: author.author.date_of_birth,
            dateOfDeath: author.author.date_of_death ?? '',
            photo: photo,
          },
          books: author.authors_books.map((book: any) => book._id),
        };
        return data;
      })
    );
  }
  getAuthorBooks(bookIds: string[]): Observable<any[]> {
    if (bookIds.length === 0) {
      return of([]);
    }

    const bookObservables = bookIds.map((id) =>
      this.bookDetailsService.getBook(id)
    );

    const userBookObservables = bookIds.map((id) =>
      this.userBookService.getUserBook(id)
    );

    return combineLatest([
      forkJoin(bookObservables),
      forkJoin(userBookObservables),
    ]).pipe(
      map(([books, userBooks]) => {
        return books.map((book, index) => {
          return { ...book, userBook: userBooks[index] };
        });
      })
    );
  }
}
