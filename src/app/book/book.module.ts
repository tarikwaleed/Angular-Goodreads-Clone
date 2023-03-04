import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksListComponent } from "./components/books-list/books-list.component";
import { BookCardComponent } from "./components/book-card/book-card.component";
import { SharedModule } from "../shared/shared.module";





@NgModule({
  declarations: [
    BookDetailsComponent,
    BooksListComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BookModule { }
