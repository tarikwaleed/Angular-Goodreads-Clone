import { Component, OnInit } from '@angular/core';
import { BookShelfModel } from '../../models/book-shelf.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css']
})
export class BookShelfComponent implements OnInit {
books: BookShelfModel[] | undefined;
selectedBook: BookShelfModel[] | undefined;
  constructor(private _HttpClient:HttpClient) {

  this.books=[
  {bookStatus:'read',userID:'1',bookID:'1'},
  {bookStatus:'currentread',userID:'2',bookID:'2'},
  {bookStatus:'wanttoread',userID:'3',bookID:'3'}
  ]
  }

  ngOnInit() {
  // }
  // onSelectionChange(event: { option: { value: any; }; }) {
  //   const userId = 1; // Replace with actual user ID
  //   const bookId = 1; // Replace with actual book ID
  //   const status = event.option.value;

  //   this. _HttpClient.post('/api/books/status', { userId, bookId, status }).subscribe();
  // }
  }
}
