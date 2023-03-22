import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from './models/author';

// import { Book} from '../';

@Injectable({
  providedIn: 'root'
})
export class AuthorDataService {

  constructor(private _HttpClient:HttpClient,) {}
  private readonly baseUrl = 'http://localhost:3000/api/book'
  getAuthors(): Observable<Author[]> {
    return this._HttpClient.get<Author[]>(this.baseUrl);
  }

}
