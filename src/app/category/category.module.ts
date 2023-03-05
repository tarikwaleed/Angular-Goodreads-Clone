import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';



@NgModule({
  declarations: [
    CategoryCardComponent,
    CategoryListComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
