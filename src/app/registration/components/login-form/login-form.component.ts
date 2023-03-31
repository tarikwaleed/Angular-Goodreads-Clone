import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignupFormComponent } from '../signup-form/signup-form.component';
import { AuthService } from '../../services/auth.service';
import { catchError, of, tap } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private authService: AuthService,
    private messageService: MessageService,
    private overlay: Overlay
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  openSignupForm() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(SignupFormComponent, {
      width: '30rem',
      height: '24rem',
      scrollStrategy: this.overlay.scrollStrategies.noop(),
    });
  }

  onSubmit() {
    this.authService
      .login(this.loginForm.value)
      .pipe(
        tap(() => {
          this.dialog.closeAll();
          this.messageService.add({
            life: 1000,
            severity: 'success',
            summary: 'Logged In successfully',
            detail: 'Welcome back!',
          });
        }),
        catchError((error) => {
          console.log(error);
          this.messageService.add({
            life: 1000,
            severity: 'error',
            summary: 'Invalid Credentials',
          });
          return of(null);
        })
      )
      .subscribe();
  }
}
