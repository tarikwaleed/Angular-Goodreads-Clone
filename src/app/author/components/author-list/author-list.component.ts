import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/author/models/author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  authors: Author[]

  constructor() {
    this.authors = [
      {
        id: 1,
        name: "Dennis Richie",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 2,
        name: "Brian Karenghan",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 3,
        name: "Donald Knuth",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 3,
        name: "Donald Knuth",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 3,
        name: "Donald Knuth",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 3,
        name: "Donald Knuth",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 3,
        name: "Donald Knuth",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 3,
        name: "Donald Knuth",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 3,
        name: "Donald Knuth",
        photo: "https://fakeimg.pl/200x100"
      },
    ]


  }


}
