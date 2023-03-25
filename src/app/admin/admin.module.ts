import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NotAuthErrorComponent } from './components/not-auth-error/not-auth-error.component';
import { BookDashboardComponent } from './components/book-dashboard/book-dashboard.component';
import { AuthorDashboardComponent } from './components/author-dashboard/author-dashboard.component';
import { CategoryDashboardComponent } from './components/category-dashboard/category-dashboard.component';
import { DashboardsSharedModule } from "../dashboards-shared/dashboards-shared.module";
import { AuthorModule } from "../author/author.module";
import { CategoryModule } from "../category/category.module";
import { BookFormComponent } from './components/book-form/book-form.component';
import { SharedModule } from "../shared/shared.module";




@NgModule({
  declarations: [
    AdminDashboardComponent,
    NotAuthErrorComponent,
    BookDashboardComponent,
    AuthorDashboardComponent,
    CategoryDashboardComponent,
    BookFormComponent,
  ],
  imports: [
    CommonModule,
    DashboardsSharedModule,
    AuthorModule,
    CategoryModule,
    SharedModule

  ],
})
export class AdminModule { }
