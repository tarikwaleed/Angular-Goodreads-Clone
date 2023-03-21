import { Component, OnInit } from '@angular/core';
import { BookShelfModel } from '../../models/book-shelf.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css']
})
export class BookShelfComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  printSelection(event:any){
    console.log(event.value);
  }
}
