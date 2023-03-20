import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BookCardModel } from '../../models/book-card.model';
import { BookListService } from '../../services/book-list.service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  books!: BookCardModel[]
  pageSize = 10;
  pageSizeOptions = [5, 10, 20];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<BookCardModel>(this.books);
  constructor(private bookListService: BookListService) { }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.bookListService.getAllBooks().subscribe(data => {
      this.books = data;
      console.log(this.books);
    })

  }



}
