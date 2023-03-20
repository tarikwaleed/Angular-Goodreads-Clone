import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  constructor(private route: ActivatedRoute) { }
  bookId!: string

  ngOnInit() {
    this.bookId = this.route.snapshot.params['id'];
  }

}
