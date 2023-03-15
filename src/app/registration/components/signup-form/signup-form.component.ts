import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { catchError, of, tap } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SignupFormComponent>,
    private authService: AuthService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.authService.register(this.signupForm.value)
      .pipe(
        tap(() => {
          this.messageService.add({ life: 1000, severity: 'success', summary: 'Registerd Successfully', detail: 'Welcome on Board 🙌' });
          this.dialogRef.close()
        }),
        catchError(error => {
          console.error(error);
          this.messageService.add({ life: 1000, severity: 'error', summary: 'Email Already esixts, try again' });
          return of(null);
        })
      )
      .subscribe();
  }


}
