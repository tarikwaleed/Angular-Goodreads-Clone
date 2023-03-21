import { Component, Input, OnInit } from '@angular/core';
import { BookRatingService } from '../../services/book-rating.service';

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.css']
})
export class BookRatingComponent implements OnInit {
  @Input()
  bookId!: string
  rating!: number

  constructor(private bookRatingService: BookRatingService) { }

  ngOnInit() {
  }
  applyRating() {
    // this.bookRatingService.changeBookRating(this.bookId, this.rating)
    console.log(this.rating);
    

  }

}
