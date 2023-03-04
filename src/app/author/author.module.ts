import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { AuthorCardComponent } from "./components/author-card/author-card.component";
import { AuthorListComponent } from "./components/author-list/author-list.component";





@NgModule({
  declarations: [
    AuthorCardComponent,
    AuthorListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuthorModule { }
