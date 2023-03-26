import { EventEmitter, Injectable } from '@angular/core';
import { AuthorDataService } from './author-data.service';
import { Observable, last, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorFormService {
  authorAdded = new EventEmitter<any>()
  authorUpdated = new EventEmitter<any>()
  constructor(private authorDataService: AuthorDataService) { }
  addAuthor(formData: any): Observable<any> {
    return this.authorDataService.addAuthor(formData).pipe(
      tap(() => {
        this.emitAuthorAddedEvent()
      })
    )
  }
  updateAuthor(formData: any) {
    const first_name = formData.get('authorName').split(' ')[0]
    const last_name = formData.get('authorName').split(' ')[1]
    const data = {
      _id: formData.get('_id'),
      first_name: first_name,
      last_name: last_name,
      date_of_birth: formData.get('dateOfBirth'),
      photo: formData.get('photo')
    }
    return this.authorDataService.updateAuthor(data).pipe(
      tap(() => {
        this.emitAuthorUpdatedEvent()
      })
    )
  }
  private emitAuthorAddedEvent() {
    this.authorAdded.emit()
  }
  private emitAuthorUpdatedEvent() {
    this.authorUpdated.emit()
  }
}
