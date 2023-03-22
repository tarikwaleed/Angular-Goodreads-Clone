import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserBookService } from 'src/app/user/services/user-book.service';
import { BookDataService } from '../../services/book-data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  constructor(private route: ActivatedRoute, private userBookService: UserBookService, private bookDataService: BookDataService) { }
  bookId!: string
  bookData!: any
  userBookData!: any
  coverImage!: string

  ngOnInit() {
    this.bookId = this.route.snapshot.params['id'];
    this.bookDataService.getBook(this.bookId).subscribe(data => {
      this.bookData = data
      console.log(this.bookData);
      const originalCoverImage = this.bookData.coverImage.split('/')
      if (originalCoverImage[0] === 'uploads') {
        this.coverImage = originalCoverImage[1]
      }
      else {
        this.coverImage = originalCoverImage[0]
      }
    })

  }

}
