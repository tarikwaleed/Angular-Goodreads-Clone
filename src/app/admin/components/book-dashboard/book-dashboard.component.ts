import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Book } from 'src/app/book/models/book';
import { BookListService } from 'src/app/book/services/book-list.service';
import { MatDialog } from '@angular/material/dialog';
import { BookFormComponent } from '../book-form/book-form.component';
import { BookFormService } from '../../services/book-form.service';
import { BookDashboardService } from '../../services/book-dashboard.service';
import { DeleteItemComponent } from '../delete-item/delete-item.component';

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.css'],
})
export class BookDashboardComponent {
  @ViewChild('dt') dt: Table | undefined;
  books!: any[];

  constructor(
    private bookListService: BookListService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private bookFormService: BookFormService,
    public dialog: MatDialog,
    private bookDashboardService: BookDashboardService
  ) {}

  ngOnInit() {
    this.getBooks();
    this.bookFormService.bookAdded.subscribe(() => {
      this.getBooks();
      console.log(this.books);
    });
    this.bookFormService.bookUpdated.subscribe(() => {
      this.getBooks();
      console.log(this.books);
    });
    this.bookDashboardService.bookDeleted.subscribe(() => {
      this.getBooks();
      console.log(this.books);
    });
  }
  getBooks() {
    this.bookListService.getAllBooks().subscribe((data) => {
      this.books = data;
      console.log(data);
    });
  }

  editBook(book: Book) {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(BookFormComponent, {
      width: '500px',
      height: '600px',
      data: { book },
    });
  }

  openBookForm() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(BookFormComponent, {
      width: '500px',
      height: '600px',
    });
  }

  deleteBook(book: Book) {
    let dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '30rem',
      height: '20rem',
      data: { data: book, type: 'book' },
    });
    // this.confirmationService.confirm({
    //   message: 'Are you sure you want to delete ' + book.title + '?',
    //   header: 'Confirm',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.bookDashboardService.deleteBook(book._id).subscribe(data => {
    //       console.log(data);
    //     })
    //     this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'book Deleted', life: 3000 });
    //   }
    // });
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
