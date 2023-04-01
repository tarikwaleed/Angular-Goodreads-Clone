import { Component } from '@angular/core';
import { CategoryService } from '../../../category/services/category.service';
import { Category } from '../../../category/models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  categories!: Category[];
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}
  ngOnInit() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories);
    });
  }
  navigateToCategoryDetails(categoryId: string) {
    this.router.navigate(['/category', categoryId]);
  }
}
