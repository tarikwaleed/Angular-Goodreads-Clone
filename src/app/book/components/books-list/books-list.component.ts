import { Component } from '@angular/core';
import { Book } from 'src/app/book/models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  books: Book[]
  constructor() {
    this.books = [
      {
        id: 1,
        title: "The C Programming Language",
        author: {
          id: 1,
          name: "Dennis Richie",
          photo: "https://fakeimg.pl/200x100"

        },
        genre: {
          id: 1,
          name: "CS"
        },
        isbn: "iBd13489uyujfnUYH78hfee",
        summary: "This book covers the basic fundamentals of the c programming language",
        imageUrl: "https://fakeimg.pl/200x100"
      },
      {
        id: 1,
        title: "The C Programming Language",
        author: {
          id: 1,
          name: "Dennis Richie",
          photo: "https://fakeimg.pl/200x100"
        },
        genre: {
          id: 1,
          name: "CS"
        },
        isbn: "iBd13489uyujfnUYH78hfee",
        summary: "This book covers the basic fundamentals of the c programming language",
        imageUrl: "https://fakeimg.pl/200x100"
      },
      {
        id: 1,
        title: "The C Programming Language",
        author: {
          id: 1,
          name: "Dennis Richie",
          photo: "https://fakeimg.pl/200x100"
        },
        genre: {
          id: 1,
          name: "CS"
        },
        isbn: "iBd13489uyujfnUYH78hfee",
        summary: "This book covers the basic fundamentals of the c programming language",
        imageUrl: "https://fakeimg.pl/200x100"
      },
      {
        id: 1,
        title: "The C Programming Language",
        author: {
          id: 1,
          name: "Dennis Richie",
          photo: "https://fakeimg.pl/200x100"
        },
        genre: {
          id: 1,
          name: "CS"
        },
        isbn: "iBd13489uyujfnUYH78hfee",
        summary: "This book covers the basic fundamentals of the c programming language",
        imageUrl: "https://fakeimg.pl/200x100"
      }


    ]

  }
}
