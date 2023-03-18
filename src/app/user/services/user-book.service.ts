import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/registration/services/auth.service';
import { UserBook } from '../models/user-book';

@Injectable({
  providedIn: 'root'
})
export class UserBookService {

  private baseUrl = `http://localhost:3000/api/user`;
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
}
