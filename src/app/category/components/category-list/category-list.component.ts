import { Component } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories: Category[]
  constructor() {
    this.categories = [
      {
        id:"1",
        name: "Computer Science"
      },
      {
        id:"1",
        name: "Computer Science"
      },
      {
        id:"1",
        name: "Computer Science"
      },
      {
        id:"1",
        name: "Computer Science"
      },
      {
        id:"1",
        name: "Computer Science"
      },
      {
        id:"1",
        name: "Computer Science"
      },
      {
        id:"1",
        name: "Computer Science"
      },
      {
        id:"1",
        name: "Computer Science"
      },
      {
        id:"1",
        name: "Computer Science"
      },
      {
        id:"1",
        name: "Computer Science"
      },
      {
        id:"1",
        name: "Computer Science"
      },
      {
        id:"1",
        name: "Computer Science"
      },
    ]
  }

}
