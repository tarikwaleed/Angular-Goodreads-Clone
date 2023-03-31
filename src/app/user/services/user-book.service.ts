import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { AuthService } from 'src/app/registration/services/auth.service';
import { UserBook } from '../models/user-book';

@Injectable({
  providedIn: 'root',
})
export class UserBookService {
  private baseUrl = `http://localhost:3000/api/user/book`;
  userId!: string | undefined;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.getUser().subscribe((user) => (this.userId = user?._id));
  }

  getUserBooks(shelf: string): Observable<any> {
    let url = `${this.baseUrl}/${shelf}`;
    if (shelf === 'a') {
      url = `${this.baseUrl}`;
    }
    const params = new HttpParams().set('userId', `${this.userId}`);

    return this.http.get<any>(url, { params }).pipe(
      map((books: any) => {
        return books.map((book: any) => {
          let coverImage!: string;
          const originalCoverImage = book.coverImage.split('/');
          if (originalCoverImage[0] === 'uploads') {
            coverImage = originalCoverImage[1];
          } else {
            coverImage = originalCoverImage[0];
          }
          return {
            _id: book.id,
            title: book.title,
            coverImage: coverImage,
            authorName: book.author[0].authorName,
            shelf: book.shelf,
            rating: book.rating,
            averageRating: book.averageRating,
          };
        });
      })
    );
  }
  getUserBook(bookId: string): Observable<any> {
    const url = `${this.baseUrl}/search`;
    const params = new HttpParams()
      .set('userId', `${this.userId}`)
      .set('bookId', `${bookId}`);

    if (!this.userId) {
      return of([]);
    }
    return this.http.get<any>(url, { params }).pipe(
      map((userBook: any) => {
        let data;
        if (userBook.length === 0) {
          data = {
            shelf: 'd',
            rating: 0,
          };
        } else {
          data = {
            shelf: userBook.data[0].shelf,
            rating: userBook.data[0].rating,
          };
        }
        return data;
      })
    );
  }
}
