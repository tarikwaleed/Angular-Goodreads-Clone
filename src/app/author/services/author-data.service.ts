import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// import { Book} from '../';

@Injectable({
  providedIn: 'root'
})
export class AuthorDataService {

  constructor(private http:HttpClient,) {}
  private readonly baseUrl = 'http://localhost:3000/api/author'
  getAuthors(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

}
