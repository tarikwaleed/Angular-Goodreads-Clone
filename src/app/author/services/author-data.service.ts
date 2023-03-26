import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

// import { Book} from '../';

@Injectable({
  providedIn: 'root'
})
export class AuthorDataService {

  constructor(private http: HttpClient,) { }
  private readonly baseUrl = 'http://localhost:3000/api/author'
  private readonly adminUrl = 'http://localhost:3000/api/admin/author'
  getAuthors(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  addAuthor(formData: any): Observable<any> {
    return this.http.post<any>(this.adminUrl, formData)
  }

}
