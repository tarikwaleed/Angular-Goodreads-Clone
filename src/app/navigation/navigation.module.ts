import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from "./components/footer/footer.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { NavigationRoutingModule } from "./navigation-routing.module";
import { RegistrationModule } from "../registration/registration.module";
import { UserModule } from "../user/user.module";




@NgModule({
  declarations: [
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NavigationRoutingModule,
    RegistrationModule,
    UserModule


  ],
  exports: [
    SidenavComponent
  ]
})
export class NavigationModule { }
