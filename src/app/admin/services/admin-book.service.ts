import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/book/models/book';

@Injectable({
  providedIn: 'root'
})
export class AdminBookService {

  private apiUrl = 'http://localhost:3000/api/admin/book';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Book>(url);
  }

  addBook(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);

  }

  updateBook(bookId: string, formData: any): Observable<any> {
    const url = `${this.apiUrl}/${bookId}`;
    return this.http.put<any>(url, formData);
  }

  deleteBook(bookId: string): Observable<any> {
    const url = `${this.apiUrl}/${bookId}`;
    return this.http.delete<any>(url);
  }

}
