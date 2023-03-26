import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { AuthorCardComponent } from "./components/author-card/author-card.component";
import { AuthorListComponent } from "./components/author-list/author-list.component";

import { BookModule } from '../book/book.module';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { AuthorSelectComponent } from './components/author-select/author-select.component';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { DashboardsSharedModule } from "../dashboards-shared/dashboards-shared.module";
import { MatDatepickerModule } from '@angular/material/datepicker';




@NgModule({
  declarations: [
    AuthorCardComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    AuthorSelectComponent,
    AuthorFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookModule, DashboardsSharedModule,MatDatepickerModule
  ],
  exports: [
    AuthorSelectComponent,
    AuthorFormComponent
  ]
})
export class AuthorModule { }
