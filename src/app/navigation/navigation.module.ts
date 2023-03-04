import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from "./components/footer/footer.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { NavigationRoutingModule } from "./navigation-routing.module";




@NgModule({
  declarations: [
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NavigationRoutingModule

  ]
})
export class NavigationModule { }
