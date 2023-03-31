import { Component, Input, OnInit } from '@angular/core';
import { BookShelfModel } from '../../models/book-shelf.model';
import { HttpClient } from '@angular/common/http';
import { BookShelfService } from '../../services/book-shelf.service';
import { LoginButtonComponent } from '../../../registration/components/login-button/login-button.component';
@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css'],
})
export class BookShelfComponent implements OnInit {
  @Input()
  bookId!: string;
  @Input()
  bookStatus!: string;
  constructor(
    private bookShelfService: BookShelfService,
    private loginButtonComponent: LoginButtonComponent
  ) {}
  ngOnInit(): void {}
  printSelection(event: any) {
    console.log(event.value);
  }
  changeBookStatus() {
    this.bookShelfService
      .changeBookStatus(this.bookId, this.bookStatus)
      .subscribe((data) => {
        console.log(data);
        if ((data = {})) {
          this.loginButtonComponent.openLoginForm();
        }
      });
  }
}
