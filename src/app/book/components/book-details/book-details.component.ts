import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserBookService } from 'src/app/user/services/user-book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  constructor(private route: ActivatedRoute, private userBookService: UserBookService) { }
  bookId!: string
  bookData!: any

  ngOnInit() {
    this.bookId = this.route.snapshot.params['id'];
    this.userBookService.getUserBook(this.bookId).subscribe(data => {
      this.bookData = data
      console.log(this.bookData);

    })
  }

}
