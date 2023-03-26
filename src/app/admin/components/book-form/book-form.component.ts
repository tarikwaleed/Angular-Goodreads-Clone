import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { BookFormService } from '../../services/book-form.service';

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
  isUpdate: boolean = false
  constructor(
    private formBuilder: FormBuilder,
    private bookFormService: BookFormService,
    public dialog: MatDialog,
    private messageService: MessageService,
    @Inject(MAT_DIALOG_DATA) public data: { book: any }
  ) { }
  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      isbn: ['', Validators.required],
      summary: ['', Validators.required],
    });
    if (this.data) {
      this.isUpdate = true
      this.bookForm.patchValue({
        title: this.data.book.title,
        summary: this.data.book.summary,
        isbn: this.data.book.isbn,
      })
    }
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
    formData.append('coverImage', this.selectedFile ?? this.data?.book.coverImage);
    formData.append('author', this.selectedAuthorId ?? this.data?.book.authorId);
    formData.append('genre', this.selectedCategoryId ?? this.data?.book.categoryId);
    if (this.data) {
      formData.append('_id', this.data.book._id)

    }
    console.log(formData);
    if (this.isUpdate) {
      this.bookFormService.updateBook(formData).subscribe(data => {
        console.log(data);
        this.dialog.closeAll()
        this.messageService.add({ severity: 'success', summary: 'Done', detail: "Book has been updated Successfully", life: 2000 });
      })

    }
    else {
      this.bookFormService.addBook(formData).subscribe(data => {
        console.log(data);
        this.dialog.closeAll()
        this.messageService.add({ severity: 'success', summary: 'Done', detail: "New book has been added Successfully", life: 2000 });
      })
    }


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
