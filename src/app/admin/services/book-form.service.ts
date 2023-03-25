import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookFormService {

  bookAdded: EventEmitter<void> = new EventEmitter<void>();
  bookUpdated: EventEmitter<void> = new EventEmitter<void>();
  constructor(private http: HttpClient) { }
  addBook(formData: any): Observable<any> {
    const url = 'http://localhost:3000/api/admin/book';
    return this.http.post<any>(url, formData).pipe(
      tap(() => {
        this.emitbookAddedEvent()
      })
    )

  }
  updateBook(formData: any): Observable<any> {
    const url = 'http://localhost:3000/api/admin/book/';
    console.log(formData);
    return this.http.put<any>(url, formData).pipe(
      tap(() => {
        this.emitbookUpdatedEvent()
      })
    )

  }
  private emitbookAddedEvent() {
    this.bookAdded.emit();
  }
  private emitbookUpdatedEvent() {
    this.bookUpdated.emit();
  }
}
