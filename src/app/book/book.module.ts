import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksListComponent } from "./components/books-list/books-list.component";
import { BookCardComponent } from "./components/book-card/book-card.component";
import { SharedModule } from "../shared/shared.module";
import { DashboardsSharedModule } from "../dashboards-shared/dashboards-shared.module";
import { BookRatingComponent } from './components/book-rating/book-rating.component';
import { BookShelfComponent } from './components/book-shelf/book-shelf.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { BookReviewsComponent } from './components/book-reviews/book-reviews.component';




@NgModule({
  declarations: [
    BookDetailsComponent,
    BooksListComponent,
    BookCardComponent,
    BookRatingComponent,
    BookShelfComponent,
    BookReviewsComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardsSharedModule,
  ],
  exports: [
    BookShelfComponent
,
    InputTextareaModule
  ]
})
export class BookModule { }
