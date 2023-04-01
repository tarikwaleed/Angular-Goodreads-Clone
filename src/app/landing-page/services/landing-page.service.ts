import { Injectable } from '@angular/core';
import { BookDataService } from '../../book/services/book-data.service';
import { AuthorDataService } from '../../author/services/author-data.service';
import { Observable, map } from 'rxjs';
// import { BookCardModel } from '../models/book-card.model';
import { Book } from '../../book/models/book';
import { AuthorCardModel } from '../../author/models/author-card.model';

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  constructor(
    private bookDataService: BookDataService,
    private authorDataService: AuthorDataService
  ) {}
  getPopularBooks(): Observable<any[]> {
    return this.bookDataService.getPopularBooks().pipe(
      map((books: Book[]) => {
        return books.map((book: any) => {
          //sanitize the data
          // const author_name: string = `${book.author[0].first_name} ${book.author[0].last_name}`
          let coverImage!: string;
          const originalCoverImage = book.book.coverImage.split('/');
          if (originalCoverImage[0] === 'uploads') {
            coverImage = originalCoverImage[1];
          } else {
            coverImage = originalCoverImage[0];
          }

          //then return
          //book.coverImage = coverImage;
          return {
            _id: book.book._id,
            title: book.book.title,
            summary: book.book.summary,
            genre: book.book.genre,
            coverImage: coverImage,
            avgRating: book.avgRating,
          };
        });
      })
    );
  }

  getPopularAuthors(): Observable<any[]> {
    return this.authorDataService.getPopularAuthors().pipe(
      map((author: AuthorCardModel[]) => {
        return author.map((author: any) => {
          //sanitize the data
          // const author_name: string = `${book.author[0].first_name} ${book.author[0].last_name}`
          let coverImage!: string;
          const originalCoverImage = author.author.photo.split('/');
          if (originalCoverImage[0] === 'uploads') {
            coverImage = originalCoverImage[1];
          } else {
            coverImage = originalCoverImage[0];
          }

          //then return
          //book.coverImage = coverImage;
          return {
            id: author.author._id,
            first_name: author.author.first_name,
            last_name: author.author.last_name,
            date_of_birth: author.author.date_of_birth,
            date_of_death: author.author.date_of_death,
            photo: coverImage,
          };
        });
      })
    );
  }
}
