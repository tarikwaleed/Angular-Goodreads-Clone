import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ToastModule } from "primeng/toast";
import { NotAuthErrorComponent } from './components/not-auth-error/not-auth-error.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    NotAuthErrorComponent
  ],
  imports: [
    CommonModule,
    ToastModule

  ]
})
export class AdminModule { }
