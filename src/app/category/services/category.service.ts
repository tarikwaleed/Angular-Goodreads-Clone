import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = `http://localhost:3000/api/genre`;
  constructor(private http: HttpClient,) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }
  createCategory(category: Category): Observable<Category> {
    const data = { name: category.name }
    return this.http.post<Category>(this.baseUrl, data)
  }
  updateCategory(cateory: Category) {
    const data = { id: cateory._id, name: cateory.name }
    return this.http.put<Category>(`${this.baseUrl}/${cateory._id}`, data)
  }
  deleteCategory(category: Category, successCallback: () => void, errorCallback: (message: string) => void) {
    this.http.delete<Category>(`${this.baseUrl}/${category._id}`)
      .subscribe(
        (response) => {
          successCallback();
        },
        (error: HttpErrorResponse) => {
          if (error.status === 409) {
            errorCallback('Category has related books');
          } else {
            errorCallback('An error occurred');
          }
        }
      );
  }



}