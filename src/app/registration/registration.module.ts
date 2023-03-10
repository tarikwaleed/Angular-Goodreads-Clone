import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from "../shared/shared.module";
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';


@NgModule({
  declarations: [
    LoginFormComponent,
    LoginButtonComponent,
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule,
  ],
  exports: [
    LoginButtonComponent,
    LoginFormComponent
  ],
})
export class RegistrationModule { }
