import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.css']
})
export class CategorySelectComponent {
  categories!: any[]
  selectedCategoryId!: string
  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
      console.log(data);
    })
  }
  printSelectedCategory() {
    console.log(this.selectedCategoryId);

  }
}
