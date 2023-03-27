import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthorDataService } from './author-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorDetailsService {

  constructor(private authorDataService: AuthorDataService) { }
  getAuthorDetails(authorId: string): Observable<any> {
    return this.authorDataService.getAuthorDetails(authorId).pipe(
      map((author) => {
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
          author: {
            authorName: authorName,
            dateOfBirth: author.author.date_of_birth,
            photo: photo
          },
          books: author.authors_books.map((book: any) => book._id)
        }
        return data
      })
    )

  }


}
