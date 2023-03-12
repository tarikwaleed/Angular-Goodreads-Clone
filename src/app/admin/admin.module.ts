import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NotAuthErrorComponent } from './components/not-auth-error/not-auth-error.component';
import { TabViewModule } from "primeng/tabview";
import { BookDashboardComponent } from './components/book-dashboard/book-dashboard.component';
import { AuthorDashboardComponent } from './components/author-dashboard/author-dashboard.component';
import { CategoryDashboardComponent } from './components/category-dashboard/category-dashboard.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    NotAuthErrorComponent,
    BookDashboardComponent,
    AuthorDashboardComponent,
    CategoryDashboardComponent
  ],
  imports: [
    CommonModule,
    TabViewModule

  ]
})
export class AdminModule { }
