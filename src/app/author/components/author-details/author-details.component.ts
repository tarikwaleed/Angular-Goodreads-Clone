import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorDetailsService } from '../../services/author-details.service';
import { BookRatingService } from 'src/app/book/services/book-rating.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css'],
})
export class AuthorDetailsComponent implements OnInit {
  authorId!: string;
  authorData: any;
  authorBooks!: any[];
  pageSize = 6;
  currentPage = 1;
  isLoading = true;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private authorDetailsService: AuthorDetailsService,
    private bookRatingService: BookRatingService
  ) {}

  ngOnInit() {
    this.authorId = this._ActivatedRoute.snapshot.params['id'];
    this.getAuthorData();
    this.bookRatingService.bookRatingChanged.subscribe(() => {
      this.getAuthorData();
    });
  }
  private getAuthorData() {
    this.authorDetailsService
      .getAuthorDetails(this.authorId)
      .subscribe((data) => {
        this.authorData = data;
        this.authorDetailsService
          .getAuthorBooks(this.authorData.books)
          .subscribe((data) => {
            console.log(data);
            this.authorBooks = data;
            // console.log(this.authorBooks);
            this.isLoading = false;
          });
      });
  }

  get totalPages(): number {
    return Math.ceil(this.authorBooks.length / this.pageSize);
  }

  get pageBook(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.authorBooks.slice(startIndex, startIndex + this.pageSize);
  }

  get pages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
