import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    CategoryCardComponent,
    CategoryListComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CategoryModule { }
