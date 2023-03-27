import { Component, ViewChild } from '@angular/core';
import { Product } from '../../../admin/product';
import { ProductService } from '../../../admin/product-service.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { UserBookService } from '../../services/user-book.service';

@Component({
  selector: 'app-user-currently-reading-books',
  templateUrl: './user-currently-reading-books.component.html',
  styleUrls: ['./user-currently-reading-books.component.css']
})
export class UserCurrentlyReadingBooksComponent {
  @ViewChild('dt') dt: Table | undefined;
  userCurrentlyReadingBooks!: any
  isLoading = true
  constructor(private userBookService: UserBookService) { }

  ngOnInit() {
    this.userBookService.getUserBooks('c').subscribe(data => {
      console.log(data);
      this.userCurrentlyReadingBooks = data
    })
  }





}
