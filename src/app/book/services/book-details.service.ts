import { Injectable } from '@angular/core';
import { BookDataService } from './book-data.service';
import { Observable, map } from 'rxjs';
import { Rating } from "../models/rating";
@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {

  constructor(private bookDataService: BookDataService) { }
  getBook(bookId: string): Observable<any> {

    return this.bookDataService.getBook(bookId).pipe(
      map((book: any) => {
        //sanitize the data
        const author_name: string = `${book.author[0].first_name} ${book.author[0].last_name}}`
        let coverImage!: string
        const originalCoverImage = book.coverImage.split('/')
        if (originalCoverImage[0] === 'uploads') {
          coverImage = originalCoverImage[1]
        }
        else {
          coverImage = originalCoverImage[0]
        }
        let totoalRating: number=0
        book.ratings.map((rating: Rating) => {
          totoalRating += rating.rating
        })
        console.log(totoalRating);
        const averageRating=totoalRating/book.ratingCount
        // then return
        return {
          _id: book._id,
          author_name: author_name,
          title: book.title,
          coverImage: coverImage,
          summary: book.summary,
          ratingCount: book.ratingCount,
          averageRating:averageRating

        };

      })
    );

  }
}
