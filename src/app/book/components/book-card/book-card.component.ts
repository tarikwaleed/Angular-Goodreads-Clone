import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BookCardModel } from '../../models/book-card.model';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input()
  book!: BookCardModel
  constructor(private router: Router) { }
  navigateToBookDetails(bookId: string) {
    this.router.navigate(['/book', bookId]);
  }
}

