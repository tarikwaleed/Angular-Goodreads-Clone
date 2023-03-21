import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-book-reviews',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.css']
})
export class BookReviewsComponent {
constructor(private http:HttpClient){}
reviews: string[] = [];
reviewText: string = '';
allReviews: string = '';

addReview(): void {
  this.reviews.push(this.reviewText);
  this.reviewText = '';
  this.allReviews = this.reviews.join('\n');
  console.log(this.reviews);
}

}
