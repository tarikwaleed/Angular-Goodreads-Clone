import { Component } from '@angular/core';
import { LoginFormComponent } from "../login-form/login-form.component";
import { MatDialog } from '@angular/material/dialog';
import { SignupFormComponent } from '../signup-form/signup-form.component';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {
  constructor(public dialog: MatDialog) { }
  showLoginForm = true;
  showSignupForm = false;


  openLoginForm() {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: '400px',
      height: '300px'
    });
  }

}
