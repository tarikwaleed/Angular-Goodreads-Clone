import { EventEmitter, Injectable } from '@angular/core';
import { AuthorDataService } from './author-data.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorFormService {
  authorAdded = new EventEmitter<any>()
  constructor(private authorDataService: AuthorDataService) { }
  addAuthor(formData: any): Observable<any> {
    return this.authorDataService.addAuthor(formData).pipe(
      tap(() => {
        this.emitAuthorAddedEvent()
      })
    )
  }
  private emitAuthorAddedEvent() {
    this.authorAdded.emit()
  }
}
