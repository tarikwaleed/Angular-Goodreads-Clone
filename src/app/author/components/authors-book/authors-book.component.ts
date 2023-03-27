import { Component, Input } from '@angular/core';
import { BookDetailsService } from 'src/app/book/services/book-details.service';
import { UserBookService } from 'src/app/user/services/user-book.service';

@Component({
  selector: 'app-authors-book',
  templateUrl: './authors-book.component.html',
  styleUrls: ['./authors-book.component.css']
})
export class AuthorsBookComponent {
  @Input()
  bookId!: string
  book!: any
  constructor(private bookDetailsService: BookDetailsService, private userBookService: UserBookService) { }
  ngOnInit() {
    this.bookDetailsService.getBook(this.bookId).subscribe(data => {
      this.book = data
    })


  }


}
