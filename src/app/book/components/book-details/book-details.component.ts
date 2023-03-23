import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserBookService } from 'src/app/user/services/user-book.service';
import { BookDetailsService } from '../../services/book-details.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  constructor(private route: ActivatedRoute, private userBookService: UserBookService, private bookDetailsService: BookDetailsService) { }
  bookId!: string
  bookData!: any
  userBookData!: any
  reviewText!: string


  ngOnInit() {
    this.bookId = this.route.snapshot.params['id'];
    this.bookDetailsService.getBook(this.bookId).subscribe(data => {
      this.bookData = data
    })
    this.userBookService.getUserBook(this.bookId).subscribe(data => {
      this.userBookData = data
    })
  }
  submitReview(){
    console.log(this.reviewText);

  }

}
