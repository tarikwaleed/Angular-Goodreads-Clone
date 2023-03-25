import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookDataService } from 'src/app/book/services/book-data.service';
import { AdminBookService } from '../../services/admin-book.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;
  submitted = false;
  book: any;
  selectedAuthorId!: string;
  selectedCategoryId!: string
  selectedFile!: File
  constructor(
    private formBuilder: FormBuilder,
    private adminBookService: AdminBookService,
    public dialog: MatDialog,
    private messageService: MessageService
  ) { }
  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      isbn: ['', Validators.required],
      summary: ['', Validators.required],
    });
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.files[0];
    console.log('Selected file:', this.selectedFile);
  }
  onSubmit() {
    this.submitted = true;
    if (this.bookForm.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('title', this.bookForm.get('title')?.value);
    formData.append('isbn', this.bookForm.get('isbn')?.value);
    formData.append('summary', this.bookForm.get('summary')?.value);
    formData.append('coverImage', this.selectedFile);
    formData.append('author', this.selectedAuthorId);
    formData.append('genre', this.selectedCategoryId);


    console.log(formData);

    this.adminBookService.addBook(formData).subscribe(data => {
      console.log(data);
      this.dialog.closeAll()
      this.messageService.add({ severity: 'success', summary: 'Done', detail: "New book has been added Successfully", life: 2000 });
    })


  }

  onAuthorSelected(authorId: string) {
    this.selectedAuthorId = authorId;
    console.log(`selected authorId is ${this.selectedAuthorId}`);
  }
  onCategorySelected(categoryId: string) {
    this.selectedCategoryId = categoryId;
    console.log(`selected category id is ${this.selectedCategoryId}`);
  }

}
