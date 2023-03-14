import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<SignupFormComponent>, private authService: AuthService) { }

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
          console.log('Registerd successfully!');
          this.dialogRef.close()
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
