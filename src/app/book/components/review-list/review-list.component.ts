import { Component, Input, OnInit } from '@angular/core';
import { BookReviewService } from '../../services/book-review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  @Input()
  bookId!: string
  reviews!: any[]
  constructor(private bookReviewService: BookReviewService) { }
  ngOnInit(): void {
    this.bookReviewService.getBookReviews(this.bookId).subscribe(data => {
      this.reviews=data
      console.log(this.reviews);
    })
  }

}
