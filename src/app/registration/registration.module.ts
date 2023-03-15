import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from "../shared/shared.module";
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { AvatarModule } from "primeng/avatar";


@NgModule({
  declarations: [
    LoginFormComponent,
    LoginButtonComponent,
    SignupFormComponent,
    LogoutButtonComponent,
    UserAvatarComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule,
    AvatarModule
  ],
  exports: [
    LoginButtonComponent,
    LoginFormComponent,
    LogoutButtonComponent,
    UserAvatarComponent,

  ],
})
export class RegistrationModule { }
