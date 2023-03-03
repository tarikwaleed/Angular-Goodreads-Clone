import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  authors: Author[]

  constructor() {
    this.authors=[
    {
      id:1,
      name:"nor"
    },
    {
      id:2,
      name:"nor1"
    },
    {
      id:3,
      name:"nor22"
    }
    ]


   }


}
