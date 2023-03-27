import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserReadBooksComponent } from './components/user-read-books/user-read-books.component';
import { UserCurrentlyReadingBooksComponent } from './components/user-currently-reading-books/user-currently-reading-books.component';
import { UserWantToReadBooksComponent } from './components/user-want-to-read-books/user-want-to-read-books.component';
import { DashboardsSharedModule } from "../dashboards-shared/dashboards-shared.module";
import { UserAllBooksComponent } from './components/user-all-books/user-all-books.component';
import { BookModule } from "../book/book.module";
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    UserProfileComponent,
    UserReadBooksComponent,
    UserCurrentlyReadingBooksComponent,
    UserWantToReadBooksComponent,
    UserAllBooksComponent,
  ],
  imports: [
    CommonModule,
    DashboardsSharedModule, BookModule,SharedModule
  ],
  exports: [
    UserReadBooksComponent,
    UserCurrentlyReadingBooksComponent,
    UserWantToReadBooksComponent,
    UserProfileComponent,
    UserAllBooksComponent,
  ]

})
export class UserModule { }
