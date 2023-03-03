import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './book/components/books-list/books-list.component';
import { AuthorListComponent } from './shared_components/author-list/author-list.component';

const routes: Routes = [
  { path: 'books', component: BooksListComponent },
  { path: 'authors', component: AuthorListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
