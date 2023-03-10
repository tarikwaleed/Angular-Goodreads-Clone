import { Component, OnInit, ViewChild } from '@angular/core';
import { Author } from 'src/app/author/models/author';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  authors!: Author[]
  pageSize = 10;
  pageSizeOptions = [5, 10, 20];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Author>(this.authors);
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {
    this.authors = [
      {
        id: 1,
        name: "Dennis Richie",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 2,
        name: "Brian Karenghan",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 3,
        name: "Donald Knuth",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 3,
        name: "Donald Knuth",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 3,
        name: "Donald Knuth",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 3,
        name: "Donald Knuth",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 3,
        name: "Donald Knuth",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 3,
        name: "Donald Knuth",
        photo: "https://fakeimg.pl/200x100"
      },
      {
        id: 3,
        name: "Donald Knuth",
        photo: "https://fakeimg.pl/200x100"
      },
    ]


  }


}
