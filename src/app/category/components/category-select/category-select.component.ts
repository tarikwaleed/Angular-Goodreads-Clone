import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.css']
})
export class CategorySelectComponent {
  categories!: any[]
  @Input()
  selectedCategoryId!: string
  @Output()
  categorySelected = new EventEmitter<string>()
  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
      console.log(data);
    })
  }
  onCategorySelected() {
    this.categorySelected.emit(this.selectedCategoryId)


  }
}
