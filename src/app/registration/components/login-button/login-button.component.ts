import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css'],
})
export class LoginButtonComponent {
  constructor(public dialog: MatDialog, private overlay: Overlay) {}
  // showLoginForm = true;
  // showSignupForm = false;

  openLoginForm() {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: '28rem',
      height: '20rem',
      scrollStrategy: this.overlay.scrollStrategies.noop(),
    });
  }
}
