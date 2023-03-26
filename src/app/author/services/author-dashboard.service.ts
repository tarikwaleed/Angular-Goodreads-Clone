import { Injectable } from '@angular/core';
import { AuthorDataService } from './author-data.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorDashboardService {

  constructor(
    private authorDataService: AuthorDataService
  ) { }
  getAuthors(): Observable<any[]> {
    return this.authorDataService.getAuthors().pipe(
      map((authors: any[]) => {
        return authors.map((author) => {
          const authorName = author.author.first_name + ' ' + author.author.last_name
          let photo!: string
          const originalPhoto = author.author.photo.split('/')
          if (originalPhoto[0] === 'uploads') {
            photo = originalPhoto[1]
          }
          else {
            photo = originalPhoto[0]
          }
          const data = {
            _id: author.author._id,
            authorName: authorName,
            dateOfBirth: author.author.date_of_birth,
            photo: photo
          }
          return data
        })
      })
    )

  }
}
