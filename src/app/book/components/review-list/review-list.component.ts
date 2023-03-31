import { Component, Input, OnInit } from '@angular/core';
import { BookReviewService } from '../../services/book-review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
})
export class ReviewListComponent implements OnInit {
  @Input()
  bookId!: string;
  reviews!: any[];
  isLoading = true;
  constructor(private bookReviewService: BookReviewService) {}
  ngOnInit(): void {
    this.getReviews();
    this.bookReviewService.reviewAdded.subscribe(() => {
      this.getReviews();
    });
  }
  getReviews() {
    this.bookReviewService.getBookReviews(this.bookId).subscribe((data) => {
      this.reviews = data;
      this.isLoading = false;
      console.log(this.reviews);
    });
  }
}
