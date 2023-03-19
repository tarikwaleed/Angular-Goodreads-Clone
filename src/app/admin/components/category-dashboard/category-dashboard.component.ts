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
  isPostRequest: boolean = false
  errorMessage: string = ''

  constructor(private categoryService: CategoryService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  openNew() {
    this.isPostRequest = true
    this.category = { _id: "", name: "" };
    this.submitted = false;
    this.categoryDialog = true;
  }


  editCategory(category: Category) {
    this.isPostRequest = false
    this.category = { ...category };
    console.log(category);
    this.categoryDialog = true;
  }

  deleteCategory(category: Category) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + category.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        this.categoryService.deleteCategory(category,
          () => {
            this.errorMessage = '';
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'category Deleted', life: 1000 });
            this.categories = this.categories.filter(val => val._id !== category._id);
            this.category = { _id: "", name: "" };
          },
          (message) => {
            this.errorMessage = message;
            this.messageService.add({ severity: 'warn', summary: 'Failed', detail: this.errorMessage, life: 1000 });
          }
        );

      }
    });
  }

  hideDialog() {
    this.categoryDialog = false;
    this.submitted = false;
  }

  saveCategory() {
    this.submitted = true;
    if (this.isPostRequest) {
      this.categoryService.createCategory(this.category).subscribe(ceratedCategory => {
        this.categories.push(ceratedCategory);
        console.log(this.categories);
      })
    }
    else {
      //send PUT
      this.categories[this.findIndexById(this.category._id)] = this.category
      this.categoryService.updateCategory(this.category).subscribe(updatedCategory => {
        this.categories[this.findIndexById(this.category._id)] = updatedCategory
        console.log(this.categories);
      })
      console.log(`PUT ${this.category.name}??`);
    }


    this.categories = [...this.categories]
    this.categoryDialog = false;
    this.category = { _id: "", name: "" };
  }
  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i]._id === id) {
        index = i;
        break;
      }
    }

    return index;
  }


  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
