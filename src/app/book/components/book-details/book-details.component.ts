import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserBookService } from 'src/app/user/services/user-book.service';
import { BookDetailsService } from '../../services/book-details.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BookReviewService } from '../../services/book-review.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  bookId!: string
  bookData!: any
  userBookData!: any
  reviewText!: string
  reviewForm!: FormGroup;

  constructor(private route: ActivatedRoute,
    private userBookService: UserBookService,
    private bookDetailsService: BookDetailsService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private bookReviewService: BookReviewService
  ) {

    this.reviewForm = this.formBuilder.group({
      reviewText: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.bookId = this.route.snapshot.params['id'];
    this.bookDetailsService.getBook(this.bookId).subscribe(data => {
      this.bookData = data
    })
    this.userBookService.getUserBook(this.bookId).subscribe(data => {
      this.userBookData = data
    })
  }
  submitReview() {
    if (this.reviewForm.valid) {
      console.log(this.reviewForm.value.reviewText);
      this.bookReviewService.addBookReview(this.bookId, this.reviewForm.value.reviewText).subscribe(data => {
        console.log(data);
      })
      this.messageService.add({ severity: 'success', summary: 'Done', detail: "Your review posted successfully", life: 2000 });
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Failed', detail: "Please Enter a review", life: 2000 });
    }
  }

}
