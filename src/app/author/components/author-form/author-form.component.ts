import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AuthorFormService } from '../../services/author-form.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css'],
})
export class AuthorFormComponent {
  authorForm!: FormGroup;
  author: any;
  selectedFile!: File;
  isUpdate: boolean = false;
  submitted = false;
  fileSelected = false;

  constructor(
    private formBuilder: FormBuilder,
    private authorFormService: AuthorFormService,
    public dialog: MatDialog,
    private messageService: MessageService,
    @Inject(MAT_DIALOG_DATA) public data: { author: any }
  ) {}
  ngOnInit(): void {
    this.authorForm = this.formBuilder.group({
      authorName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
    });
    if (this.data) {
      this.isUpdate = true;
      const date = new Date(this.data.author.dateOfBirth);
      this.authorForm.patchValue({
        authorName: this.data.author.authorName,
        dateOfBirth: date,
      });
    }
  }
  onFileSelected(event: any): void {
    this.fileSelected = true;
    this.selectedFile = event.files[0];
    console.log('Selected file:', this.selectedFile);
  }

  onSubmit() {
    this.submitted = true;
    if (this.authorForm.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('authorName', this.authorForm.get('authorName')?.value);
    formData.append(
      'dateOfBirth',
      this.authorForm.get('dateOfBirth')?.value.toISOString()
    );
    if (this.isUpdate) {
      formData.append('_id', this.data.author.id);
      formData.append('photo', this.selectedFile);
      formData.append(
        'dateOfBirth',
        this.authorForm.get('dateOfBirth')?.value.toISOString()
      );
      console.log(formData);
      this.authorFormService.updateAuthor(formData).subscribe((data) => {
        console.log(data);
        this.dialog.closeAll();
        this.messageService.add({
          severity: 'success',
          summary: 'Done',
          detail: 'Author has been updated Successfully',
          life: 2000,
        });
      });
      this.authorFormService.updateAuthor(formData);
    } else {
      formData.append('photo', this.selectedFile);
      console.log(formData);
      this.authorFormService.addAuthor(formData).subscribe((data) => {
        console.log(data);
        this.dialog.closeAll();
        this.messageService.add({
          severity: 'success',
          summary: 'Done',
          detail: 'New Author has been added Successfully',
          life: 2000,
        });
      });
    }
  }
  onDateChange(event: any) {
    const date = event.value.toISOString();
    console.log(date);
  }
}
