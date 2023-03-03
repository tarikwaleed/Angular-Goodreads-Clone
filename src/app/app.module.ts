import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { SidenavComponent } from './shared_components/sidenav/sidenav.component';
import { BookCardComponent } from './book/components/book-card/book-card.component';
import { BooksListComponent } from './book/components/books-list/books-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from './shared_components/footer/footer.component';
import { MatListModule } from '@angular/material/list';
import { AuthorCardComponent } from './shared_components/author-card/author-card.component';
import { AuthorListComponent } from './shared_components/author-list/author-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BookCardComponent,
    BooksListComponent,
    HomePageComponent,
    FooterComponent,
    AuthorListComponent,
    AuthorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
