
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
private url=""
  constructor(private _HttpClient:HttpClient) { }


  getAllBook():Observable<any>
  {
    return this._HttpClient.get(this.url)
  }

  getBookById(id:string):Observable<any>
   {
     return this._HttpClient.get(this.url)
   }

    editBook(id:string):Observable<any>
   {
     return this._HttpClient.post(this.url,id)
   }

   deleteBook(id:string):Observable<any>
  {
     return this._HttpClient.delete(this.url)
   }
  
   AddToFavorite(id:string):Observable<any>
   {
     return this._HttpClient.post(this.url,id)
   }
}





