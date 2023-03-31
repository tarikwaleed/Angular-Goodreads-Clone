import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BookCardModel } from '../../models/book-card.model';
import { BookListService } from '../../services/book-list.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent {
  books!: BookCardModel[];
  pageSize = 6;
  currentPage= 1;

  // pageSizeOptions = [5, 10, 20];
  isLoading = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<BookCardModel>(this.books);
  constructor(private bookListService: BookListService) {}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.bookListService.getAllBooks().subscribe((data) => {
      this.books = data;
      this.isLoading = false;
      console.log(this.books);
    });
  }


  get totalPages(): number {
    return Math.ceil(this.books.length / this.pageSize);
  }

  get pageBook(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.books.slice(startIndex, startIndex + this.pageSize);
  }

  get pages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
