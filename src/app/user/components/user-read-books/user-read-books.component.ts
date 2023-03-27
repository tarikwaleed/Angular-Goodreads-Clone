import { Component, ViewChild } from '@angular/core';
import { Product } from '../../../admin/product';
import { ProductService } from '../../../admin/product-service.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { UserBookService } from '../../services/user-book.service';

@Component({
  selector: 'app-user-read-books',
  templateUrl: './user-read-books.component.html',
  styleUrls: ['./user-read-books.component.css']
})
export class UserReadBooksComponent {
  @ViewChild('dt') dt: Table | undefined;
  userAllBooks!: any
  isLoading = true
  constructor(private userBookService: UserBookService) { }

  ngOnInit() {
    this.userBookService.getUserBooks('r').subscribe(data => {
      console.log(data);
      this.userAllBooks = data
    })
  }


}
