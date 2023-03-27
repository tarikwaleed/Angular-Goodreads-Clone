import { Component, Input } from '@angular/core';
import { Category } from '../../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input()
  category!: Category
  constructor(private router: Router) { }
  navigateToCategoryDetails(categoryId: string) {
    this.router.navigate(['/category', categoryId]);
  }

}
