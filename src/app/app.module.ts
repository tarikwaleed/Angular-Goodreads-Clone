import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookModule } from "./book/book.module";
import { AuthorModule } from "./author/author.module";
import { NavigationModule } from "./navigation/navigation.module";
import { CategoryModule } from "./category/category.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BookModule,
    AuthorModule,
    NavigationModule,
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
