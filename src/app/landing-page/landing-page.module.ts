import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardsSharedModule } from '../dashboards-shared/dashboards-shared.module';
import { BookModule } from '../book/book.module';
import { AuthorModule } from '../author/author.module';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardsSharedModule,
    BookModule,
    AuthorModule,
  ],
  exports: [],
})
export class LandingPageModule {}
