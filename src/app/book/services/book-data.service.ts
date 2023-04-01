import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor(private http: HttpClient) {}
  private readonly baseUrl = 'http://localhost:3000/api/book';
  getBooks(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getBook(bookId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${bookId}`);
  }

  getPopularBooks(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/popular`);
  }
}
