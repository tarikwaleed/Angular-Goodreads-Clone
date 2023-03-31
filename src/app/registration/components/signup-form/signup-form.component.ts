import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { catchError, of, tap } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Overlay } from '@angular/cdk/overlay';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SignupFormComponent>,
    private authService: AuthService,
    public dialog: MatDialog,
    private overlay: Overlay,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.authService
      .register(this.signupForm.value)
      .pipe(
        tap(() => {
          this.messageService.add({
            life: 1000,
            severity: 'success',
            summary: 'Registerd Successfully',
            detail: 'Welcome on Board 🙌',
          });
          this.dialogRef.close();
        }),
        catchError((error) => {
          console.error(error);
          this.messageService.add({
            life: 1000,
            severity: 'error',
            summary: 'Email Already esixts, try again',
          });
          return of(null);
        })
      )
      .subscribe();
  }

  openLoginForm() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: '28rem',
      height: '20rem',
      scrollStrategy: this.overlay.scrollStrategies.noop(),
    });
  }
}
