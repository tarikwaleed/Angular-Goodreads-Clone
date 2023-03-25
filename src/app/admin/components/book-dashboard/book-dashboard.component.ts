import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Book } from 'src/app/book/models/book';
import { AdminBookService } from '../../services/admin-book.service';
import { BookListService } from 'src/app/book/services/book-list.service';
import { MatDialog } from '@angular/material/dialog';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.css']
})
export class BookDashboardComponent {
  @ViewChild('dt') dt: Table | undefined;
  bookDialog!: boolean;
  books!: any[];
  book!: any;
  selectedBooks!: any[];
  submitted!: boolean;

  constructor(private bookListService: BookListService,
    private adminBookService: AdminBookService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.bookListService.getAllBooks().subscribe((data) => {
      this.books = data;
      console.log(data);
    });
  }

  openNew() {
    this.book = {};
    this.submitted = false;
    this.bookDialog = true;
  }


  editBook(book: Book) {
    this.book = { ...book };
    this.bookDialog = true;
  }

  openBookForm() {
    this.dialog.closeAll()
    const dialogRef = this.dialog.open(BookFormComponent, {
      width: '500px',
      height: '600px'
    });
  }

  deleteBook(book: Book) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + book.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.books = this.books.filter(val => val._id !== book._id);
        this.book = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'book Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.bookDialog = false;
    this.submitted = false;
  }

  saveBook() {
    this.submitted = true;

    if (this.book.title?.trim()) {
      if (this.book._id) {
        this.books[this.findIndexById(this.book.id)] = this.book;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'book Updated', life: 3000 });
      }
      else {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'book Created', life: 3000 });
      }

      this.books = [...this.books];
      this.bookDialog = false;
      this.book = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i]._id === id) {
        index = i;
        break;
      }
    }

    return index;
  }


  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
