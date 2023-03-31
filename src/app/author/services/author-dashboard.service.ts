import { EventEmitter, Injectable } from '@angular/core';
import { AuthorDataService } from './author-data.service';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorDashboardService {
  authorDeleted = new EventEmitter();
  constructor(private authorDataService: AuthorDataService) {}
  getAuthors(): Observable<any[]> {
    return this.authorDataService.getAuthors().pipe(
      map((authors: any[]) => {
        return authors.map((author) => {
          const authorName =
            author.author.first_name + ' ' + author.author.last_name;
          let photo!: string;
          const originalPhoto = author.author.photo.split('/');
          if (originalPhoto[0] === 'uploads') {
            photo = originalPhoto[1];
          } else {
            photo = originalPhoto[0];
          }
          const data = {
            id: author.author._id,
            first_name: author.author.first_name,
            last_name: author.author.last_name,
            date_of_birth: author.author.date_of_birth,
            date_of_death: author.author.date_of_death,
            photo: photo,
          };
          return data;
        });
      })
    );
  }
  deleteAuthor(authorId: string) {
    return this.authorDataService.deleteAuthor(authorId).pipe(
      tap(() => {
        this.authorDeleted.emit();
      })
    );
  }
}
