import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { AuthService } from 'src/app/registration/services/auth.service';
import { User } from 'src/app/user/models/user';
import { BookRatingModel } from '../models/book-rating.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {
  bookRatingChanged = new EventEmitter()

  private readonly url = "http://localhost:3000/api/rating"
  user!: User | null
  constructor(private authService: AuthService, private http: HttpClient) {
    this.authService.getUser().subscribe(data => this.user = data)
  }
  changeBookRating(bookId: string, rating: number): Observable<any> {
    const body = {
      bookID: bookId,
      userID: this.user?._id,
      rating: rating,
    }
    return this.http.post<{}>(this.url, body).pipe(
      tap(() => {
        this.bookRatingChanged.emit()
      })
    )
  }


}
