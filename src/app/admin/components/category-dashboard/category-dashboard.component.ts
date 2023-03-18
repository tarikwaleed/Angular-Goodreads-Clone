import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Category } from 'src/app/category/models/category';
import { CategoryService } from 'src/app/category/services/category.service';

@Component({
  selector: 'app-category-dashboard',
  templateUrl: './category-dashboard.component.html',
  styleUrls: ['./category-dashboard.component.css']
})
export class CategoryDashboardComponent {
  @ViewChild('dt') dt: Table | undefined;
  categoryDialog!: boolean;
  categories!: Category[];
  category!: Category;
  submitted!: boolean;

  constructor(private categoryService: CategoryService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  openNew() {
    this.category = { _id: "", name: "" };
    this.submitted = false;
    this.categoryDialog = true;
  }


  editCategory(category: Category) {
    this.category = { ...category };
    this.categoryDialog = true;
  }

  deleteCategory(category: Category) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + category.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categories = this.categories.filter(val => val._id !== category._id);
        this.category = { _id: "", name: "" };
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'category Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.categoryDialog = false;
    this.submitted = false;
  }

  saveCategory() {
    this.submitted = true;


    this.categoryDialog = false;
    this.category = { _id: "", name: "" };
  }



  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
