import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/registration/services/auth.service';
import { BookShelfModel } from '../models/book-shelf.model';
import { User } from 'src/app/user/models/user';

@Injectable({
  providedIn: 'root'
})
export class BookShelfService {

  private readonly url = "http://localhost:3000/api/user/book"
  user!: User | null
  constructor(private authService: AuthService, private http: HttpClient) {
    this.authService.getUser().subscribe(data => this.user = data)
  }
  changeBookStatus(bookId: string, bookStatus: string) {
    const body: BookShelfModel = {
      bookID: bookId,
      bookStatus: bookStatus,
      userID: this.user?._id
    }
    this.http.put(this.url, body)
  }

}
