import { Component } from '@angular/core';
import { SignupFormComponent } from '../signup-form/signup-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
@Component({
  selector: 'app-register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.css'],
})
export class RegisterButtonComponent {
  constructor(public dialog: MatDialog, private overlay: Overlay) {}
  showLoginForm = true;
  showSignupForm = false;

  openSignupForm() {
    const dialogRef = this.dialog.open(SignupFormComponent, {
      width: '30rem',
      height: '24rem',
      scrollStrategy: this.overlay.scrollStrategies.noop(),
    });
  }
}
