import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorDetailsService } from '../../services/author-details.service';
import { BookRatingService } from 'src/app/book/services/book-rating.service';


@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  authorId!: string
  authorData: any
  authorBooks!: any[]
  isLoading = true
  constructor(
    private _ActivatedRoute: ActivatedRoute, private authorDetailsService: AuthorDetailsService,
    private bookRatingService: BookRatingService
  ) { }

  ngOnInit() {
    this.authorId = this._ActivatedRoute.snapshot.params['id'];
    this.getAuthorData()
    this.bookRatingService.bookRatingChanged.subscribe(() => {
      this.getAuthorData()
    })

  }
  private getAuthorData() {
    this.authorDetailsService.getAuthorDetails(this.authorId).subscribe(data => {
      this.authorData = data
      this.authorDetailsService.getAuthorBooks(this.authorData.books).subscribe(data => {
        console.log(data);
        this.authorBooks = data
        this.isLoading = false
      })
    })
  }
}
