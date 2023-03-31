import { Injectable } from '@angular/core';
import { BookDataService } from './book-data.service';
import { Observable, map } from 'rxjs';
import { Rating } from '../models/rating';
import { AuthorCardModel } from 'src/app/author/models/author-card.model';
@Injectable({
  providedIn: 'root',
})
export class BookDetailsService {
  constructor(private bookDataService: BookDataService) {}
  getBook(bookId: string): Observable<any> {
    return this.bookDataService.getBook(bookId).pipe(
      map((book: any) => {
        console.log(book);
        //sanitize the data
        interface auth {
          author_name?: string;
          author_id?: string;
        }

        let authorlist: auth[] = [];

        book.author.map((author: any) => {
          let authorobj: auth = {
            author_name: `${author.first_name} ${author.last_name}`,
            author_id: `${author._id}`,
          };
          // author_name.push(`${author.first_name} ${author.last_name}`);
          // author_id.push(`${author.id}`);
          authorlist.push(authorobj);
        });
        let coverImage!: string;
        const originalCoverImage = book.coverImage.split('/');
        if (originalCoverImage[0] === 'uploads') {
          coverImage = originalCoverImage[1];
        } else {
          coverImage = originalCoverImage[0];
        }
        let totoalRating: number = 0;
        book.ratings.map((rating: Rating) => {
          totoalRating += rating.rating;
        });
        const averageRating = totoalRating / book.ratingCount;
        // then return
        return {
          _id: book._id,
          author: authorlist,
          title: book.title,
          coverImage: coverImage,
          summary: book.summary,
          ratingCount: book.ratingCount,
          avgRating: averageRating || 0,
          reviews: book.reviews,
          isbn: book.isbn,
          genre: book.genre,
          ratings: book.ratings,
        };
      })
    );
  }
}
