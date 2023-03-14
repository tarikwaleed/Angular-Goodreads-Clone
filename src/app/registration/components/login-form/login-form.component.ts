import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignupFormComponent } from '../signup-form/signup-form.component';
import { AuthService } from '../../services/auth.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  openSignupForm() {
    this.dialog.closeAll()
    const dialogRef = this.dialog.open(SignupFormComponent, {
      width: '400px',
      height: '300px'
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value)
      .pipe(
        tap(() => {
          console.log('Logged in successfully!');
          this.dialog.closeAll()
        }),
        catchError(error => {
          console.error(error);
          return of(null);
        })
      )
      .subscribe();
    this.authService.getUser().subscribe(user => console.log(user))
  }

}

