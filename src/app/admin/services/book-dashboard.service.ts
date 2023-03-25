import { EventEmitter, Injectable } from '@angular/core';
import { AdminBookService } from './admin-book.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDashboardService {

  bookUpdated = new EventEmitter<void>();

  constructor(private adminBookService: AdminBookService) { }
  updateBook(bookId: string, formData: any): Observable<any> {
    return this.adminBookService.updateBook(bookId, formData).pipe(
      tap(() => {
        this.emitBookUpdatedEvent()
      })
    )
  }
  private emitBookUpdatedEvent() {
    this.bookUpdated.emit()
  }


}
