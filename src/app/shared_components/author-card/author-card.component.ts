import { Component, Input } from '@angular/core';
import { Author } from 'src/app/models/author';
@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCardComponent {

  @Input()
  author!: Author;

  constructor() {}



}
