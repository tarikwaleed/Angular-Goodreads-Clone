import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/registration/services/auth.service';
import { User } from 'src/app/user/models/user';

@Injectable({
  providedIn: 'root'
})
export class BookReviewService {

  private readonly url = "http://localhost:3000/api/book-review"
  user!: User | null
  constructor(private authService: AuthService, private http: HttpClient) {
    this.authService.getUser().subscribe(data => this.user = data)
  }
  getBookReviews(bookId: string): Observable<any> {
    const params = new HttpParams()
      .set('bookId', `${bookId}`);
    return this.http.get(this.url, { params }).pipe(
      map((reviews: any) => {
        if (reviews.length > 0) {
          return reviews.data.map((review: any) => {
            let data
            data = {
              userName: review.user.username,
              reviewText: review.review
            }
            return data
          })
        }
        else {
          return []


        }
      })
    )
  }
}
