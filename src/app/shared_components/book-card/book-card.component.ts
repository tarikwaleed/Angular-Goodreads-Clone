import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  book: Book
  constructor() {
    this.book = {
      id: 1,
      title: "The C Programming Language",
      author: {
        id: 1,
        name: "Dennis Richie"
      },
      genre: {
        id: 1,
        name: "CS"
      },
      isbn: "iBd13489uyujfnUYH78hfee",
      summary: "This book covers the basic fundamentals of the c programming language",
      imageUrl: "https://fakeimg.pl/200x100"
    }

  }
}
