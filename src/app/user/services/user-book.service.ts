import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/registration/services/auth.service';
import { UserBook } from '../models/user-book';

@Injectable({
  providedIn: 'root'
})
export class UserBookService {

  private baseUrl = `http://localhost:3000/api/user/book`;
  userId!: string | undefined
  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.getUser().subscribe(user => this.userId = user?._id)
  }

  getUserBooks(): Observable<UserBook[]> {
    const url = `${this.baseUrl}/${this.userId}/book`
    // const url = `${this.baseUrl}/640c0061aeffb8f34a17f789/book`
    console.log(url);
    return this.http.get<UserBook[]>(url);
  }
  getUserBook(bookId: string): Observable<any> {
    const url = `${this.baseUrl}/search`
    const params = new HttpParams()
      .set('userId', `${this.userId}`)
      .set('bookId', `${bookId}`);
    return this.http.get<any>(url, { params }).pipe(
      map((userBook: any) => {
        let data
        if (userBook.length === 0) {
          data = {
            shelf: "d",
            rating: 0
          }
        }
        else {
          data = {
            shelf: userBook.data[0].shelf,
            rating: userBook.data[0].rating
          }

        }
        return data

      })
    )
  }
}
