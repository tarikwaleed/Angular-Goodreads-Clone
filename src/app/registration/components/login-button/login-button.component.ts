import { Component } from '@angular/core';
import { LoginFormComponent } from "../login-form/login-form.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {
  constructor(public dialog: MatDialog) { }

  openLoginForm() {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: '400px',
      height:'300px'
    });
  }

}
