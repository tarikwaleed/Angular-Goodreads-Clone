import { Injectable } from '@angular/core';
import { BookDataService } from './book-data.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {

  constructor(private bookDataService: BookDataService) { }
  getBook(bookId: string): Observable<any> {
    return this.bookDataService.getBook(bookId).subscribe(data=)


  }
}
