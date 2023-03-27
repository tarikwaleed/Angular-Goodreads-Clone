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
  userAllBooks!: any
  isLoading = true
  constructor(private userBookService: UserBookService) { }

  ngOnInit() {
    this.userBookService.getUserBooks('a').subscribe(data => {
      this.userAllBooks = data
      this.isLoading=false
    })
  }
}
