import { Component, Input, OnInit } from '@angular/core';
import { BookShelfModel } from '../../models/book-shelf.model';
import { HttpClient } from '@angular/common/http';
import { BookShelfService } from '../../services/book-shelf.service';
@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css']
})
export class BookShelfComponent implements OnInit {
  @Input()
  bookId!: string
  bookStatus!: string
  constructor(private bookShelfService: BookShelfService) { }
  ngOnInit(): void {
  }
  printSelection(event: any) {
    console.log(event.value);
  }
  changeBookStatus() {
    this.bookShelfService.changeBookStatus(this.bookId, this.bookStatus).subscribe(data => console.log(data))
  }
}
