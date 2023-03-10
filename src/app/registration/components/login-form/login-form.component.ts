import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignupFormComponent } from '../signup-form/signup-form.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  openSignupForm() {
    const dialogRef = this.dialog.open(SignupFormComponent, {
      width: '400px',
      height: '300px'
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
