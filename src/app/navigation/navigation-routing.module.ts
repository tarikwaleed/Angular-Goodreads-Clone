
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from '../book/components/books-list/books-list.component';
import { AuthorListComponent } from '../author/components/author-list/author-list.component';
import { CategoryListComponent } from '../category/components/category-list/category-list.component';
import { AdminDashboardComponent } from '../admin/components/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../admin/guards/auth/auth.guard';
import { NotAuthErrorComponent } from '../admin/components/not-auth-error/not-auth-error.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksListComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'admin', component: AdminDashboardComponent,canActivate:[AuthGuard] },
  { path: 'not-auth-error', component: NotAuthErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }