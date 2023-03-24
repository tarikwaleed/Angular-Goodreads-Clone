import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { AuthorCardComponent } from "./components/author-card/author-card.component";
import { AuthorListComponent } from "./components/author-list/author-list.component";

import { BookModule } from '../book/book.module';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { AuthorSelectComponent } from './components/author-select/author-select.component';



@NgModule({
  declarations: [
    AuthorCardComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    AuthorSelectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookModule
  ],
  exports: [
    AuthorSelectComponent
  ]
})
export class AuthorModule { }
