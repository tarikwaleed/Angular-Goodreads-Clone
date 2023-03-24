import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { SharedModule } from "../shared/shared.module";
import { CategorySelectComponent } from './components/category-select/category-select.component';



@NgModule({
  declarations: [
    CategoryCardComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    CategorySelectComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CategorySelectComponent
  ]

})
export class CategoryModule { }
