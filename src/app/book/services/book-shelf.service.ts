import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/registration/services/auth.service';
import { BookShelfModel } from '../models/book-shelf.model';
import { User } from 'src/app/user/models/user';
import { Observable, EMPTY, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookShelfService {
  private readonly url = 'http://localhost:3000/api/user/book';
  user!: User | null;
  constructor(private authService: AuthService, private http: HttpClient) {
    this.authService.getUser().subscribe((data) => (this.user = data));
  }
  changeBookStatus(bookId: string, bookStatus: string) {
    if (this.user) {
      const body: BookShelfModel = {
        bookId: bookId,
        bookStatus: bookStatus,
        userId: this.user?._id,
      };
      console.log(this.user?._id);
      console.log(bookId);
      console.log(bookStatus);
      return this.http.put<BookShelfModel>(this.url, body);
    } else {
      // this.loginButtonComponent.openLoginForm();
      return of({});
    }
  }
}
