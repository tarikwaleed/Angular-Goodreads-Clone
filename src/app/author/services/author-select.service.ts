import { Injectable } from '@angular/core';
import { AuthorDataService } from './author-data.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorSelectService {

  constructor(private authorDataService: AuthorDataService) {


  }
  getAuthors(): Observable<any> {
    return this.authorDataService.getAuthors().pipe(
      map((authors: any) => {
        return authors.map((author: any) => {
          return {
            authorName:author.author.first_name+' '+author.author.last_name,
            _id:author.author._id
          }

        })
      })
    )
  }
}
