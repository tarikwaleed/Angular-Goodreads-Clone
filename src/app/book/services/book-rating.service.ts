import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/registration/services/auth.service';
import { User } from 'src/app/user/models/user';
import { BookRatingModel } from '../models/book-rating.model';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {
  private readonly url = "http://localhost:3000/api/rating"
  user!: User | null
  constructor(private authService: AuthService, private http: HttpClient) {
    this.authService.getUser().subscribe(data => this.user = data)
  }
  changeBookStatus(bookId: string, rating: number) {
    const body: BookRatingModel = {
      bookID: bookId,
      userID: this.user?._id,
      rating: rating,
    }
    this.http.put(this.url,body)
  }


}
