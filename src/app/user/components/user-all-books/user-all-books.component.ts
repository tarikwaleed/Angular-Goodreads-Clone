import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { UserBook } from '../../models/user-book';
import { UserBookService } from '../../services/user-book.service';

@Component({
  selector: 'app-user-all-books',
  templateUrl: './user-all-books.component.html',
  styleUrls: ['./user-all-books.component.css']
})
export class UserAllBooksComponent {
  @ViewChild('dt') dt: Table | undefined;

  bookDialog!: boolean;

  books!: UserBook[];

  book!: UserBook;

  submitted!: boolean;

  constructor(private userBookService: UserBookService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    // this.userBookService.getUserBooks().subscribe(books => this.books = books)
    this.userBookService.getUserBooks().subscribe(books => console.log(books))
  }




  updateUserBook() {
    this.submitted = true;
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
    this.bookDialog = false;
  }


  editBook(book: UserBook) {
    this.book = { ...book };
    this.bookDialog = true;
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  hideDialog() {
    this.bookDialog = false;
    this.submitted = false;
  }

}
