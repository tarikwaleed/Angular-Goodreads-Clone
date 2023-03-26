import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AuthorFormService } from '../../services/author-form.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent {
  authorForm!: FormGroup
  author: any
  selectedFile!: File
  isUpdate: boolean = false
  submitted = false;
  fileSelected = false


  constructor(
    private formBuilder: FormBuilder,
    private authorFormService: AuthorFormService,
    public dialog: MatDialog,
    private messageService: MessageService,
    @Inject(MAT_DIALOG_DATA) public data: { author: any }
  ) { }
  ngOnInit(): void {
    this.authorForm = this.formBuilder.group({
      authorName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
    });
    if (this.data) {
      this.isUpdate = true
      this.authorForm.patchValue({
        authorName: this.data.author.authorName,
        dateOfBirth: this.data.author.dateOfBirth,
      })
    }
  }
  onFileSelected(event: any): void {
    this.fileSelected = true
    this.selectedFile = event.files[0];
    console.log('Selected file:', this.selectedFile);
  }

  onSubmit() {
    this.submitted = true
    if (this.authorForm.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('authorName', this.authorForm.get('authorName')?.value);
    formData.append('dateOfBirth', this.authorForm.get('dateOfBirth')?.value.toISOString());
    formData.append('photo', this.selectedFile ?? this.data?.author.photo);
    if (this.data) {
      formData.append('_id', this.data.author._id)
    }
    console.log(formData);

    if (this.isUpdate) {
      // this.authorFormService.updateBook(formData).subscribe(data => {
      //   console.log(data);
      //   this.dialog.closeAll()
      //   this.messageService.add({ severity: 'success', summary: 'Done', detail: "Book has been updated Successfully", life: 2000 });
      // })
    }
    else {
      this.authorFormService.addAuthor(formData).subscribe(data => {
        console.log(data);
        this.dialog.closeAll()
        this.messageService.add({ severity: 'success', summary: 'Done', detail: "New book has been added Successfully", life: 2000 });
      })
    }


  }
  onDateChange(event: any) {
    const date = event.value.toISOString()
    console.log(date);

  }
}
