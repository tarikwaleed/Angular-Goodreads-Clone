import { Component, ViewChild } from '@angular/core';
import { Book } from 'src/app/book/models/book';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  books!: Book[]
  pageSize = 10;
  pageSizeOptions = [5, 10, 20];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Book>(this.books);
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }



  constructor() {
    this.books = [
      {
        id: 1,
        title: "The C Programming Language",
        author: {
          id: 1,
          name: "Dennis Richie",
          photo: "https://fakeimg.pl/200x100"

        },
        category: {
          id: "2",
          name: "CS"
        },
        isbn: "iBd13489uyujfnUYH78hfee",
        summary: "This book covers the basic fundamentals of the c programming language",
        imageUrl: "https://fakeimg.pl/200x100"
      },
      {
        id: 2,
        title: "The C Programming Language",
        author: {
          id: 1,
          name: "Dennis Richie",
          photo: "https://fakeimg.pl/200x100"
        },
        category: {
          id: "3",
          name: "CS"
        },
        isbn: "iBd13489uyujfnUYH78hfee",
        summary: "This book covers the basic fundamentals of the c programming language",
        imageUrl: "https://fakeimg.pl/200x100"
      },
      {
        id: 3,
        title: "The C Programming Language",
        author: {
          id: 1,
          name: "Dennis Richie",
          photo: "https://fakeimg.pl/200x100"
        },
        category: {
          id: "3",
          name: "CS"
        },
        isbn: "iBd13489uyujfnUYH78hfee",
        summary: "This book covers the basic fundamentals of the c programming language",
        imageUrl: "https://fakeimg.pl/200x100"
      },
      {
        id: 1,
        title: "The C Programming Language",
        author: {
          id: 1,
          name: "Dennis Richie",
          photo: "https://fakeimg.pl/200x100"
        },
        category: {
          id: "4",
          name: "CS"
        },
        isbn: "iBd13489uyujfnUYH78hfee",
        summary: "This book covers the basic fundamentals of the c programming language",
        imageUrl: "https://fakeimg.pl/200x100"
      },
      {
        id: 1,
        title: "The C Programming Language",
        author: {
          id: 1,
          name: "Dennis Richie",
          photo: "https://fakeimg.pl/200x100"

        },
        category: {
          id: "5",
          name: "CS"
        },
        isbn: "iBd13489uyujfnUYH78hfee",
        summary: "This book covers the basic fundamentals of the c programming language",
        imageUrl: "https://fakeimg.pl/200x100"
      },
      // {
      //   id: 1,
      //   title: "The C Programming Language",
      //   author: {
      //     id: 1,
      //     name: "Dennis Richie",
      //     photo: "https://fakeimg.pl/200x100"

      //   },
      //   genre: {
      //     id: 1,
      //     name: "CS"
      //   },
      //   isbn: "iBd13489uyujfnUYH78hfee",
      //   summary: "This book covers the basic fundamentals of the c programming language",
      //   imageUrl: "https://fakeimg.pl/200x100"
      // },
      // {
      //   id: 1,
      //   title: "The C Programming Language",
      //   author: {
      //     id: 1,
      //     name: "Dennis Richie",
      //     photo: "https://fakeimg.pl/200x100"

      //   },
      //   genre: {
      //     id: 1,
      //     name: "CS"
      //   },
      //   isbn: "iBd13489uyujfnUYH78hfee",
      //   summary: "This book covers the basic fundamentals of the c programming language",
      //   imageUrl: "https://fakeimg.pl/200x100"
      // },
      // {
      //   id: 1,
      //   title: "The C Programming Language",
      //   author: {
      //     id: 1,
      //     name: "Dennis Richie",
      //     photo: "https://fakeimg.pl/200x100"
      //   },
      //   genre: {
      //     id: 1,
      //     name: "CS"
      //   },
      //   isbn: "iBd13489uyujfnUYH78hfee",
      //   summary: "This book covers the basic fundamentals of the c programming language",
      //   imageUrl: "https://fakeimg.pl/200x100"
      // },
      // {
      //   id: 1,
      //   title: "The C Programming Language",
      //   author: {
      //     id: 1,
      //     name: "Dennis Richie",
      //     photo: "https://fakeimg.pl/200x100"
      //   },
      //   genre: {
      //     id: 1,
      //     name: "CS"
      //   },
      //   isbn: "iBd13489uyujfnUYH78hfee",
      //   summary: "This book covers the basic fundamentals of the c programming language",
      //   imageUrl: "https://fakeimg.pl/200x100"
      // },
      // {
      //   id: 1,
      //   title: "The C Programming Language",
      //   author: {
      //     id: 1,
      //     name: "Dennis Richie",
      //     photo: "https://fakeimg.pl/200x100"
      //   },
      //   genre: {
      //     id: 1,
      //     name: "CS"
      //   },
      //   isbn: "iBd13489uyujfnUYH78hfee",
      //   summary: "This book covers the basic fundamentals of the c programming language",
      //   imageUrl: "https://fakeimg.pl/200x100"
      // },
      // {
      //   id: 1,
      //   title: "The C Programming Language",
      //   author: {
      //     id: 1,
      //     name: "Dennis Richie",
      //     photo: "https://fakeimg.pl/200x100"

      //   },
      //   genre: {
      //     id: 1,
      //     name: "CS"
      //   },
      //   isbn: "iBd13489uyujfnUYH78hfee",
      //   summary: "This book covers the basic fundamentals of the c programming language",
      //   imageUrl: "https://fakeimg.pl/200x100"
      // },
      // {
      //   id: 1,
      //   title: "The C Programming Language",
      //   author: {
      //     id: 1,
      //     name: "Dennis Richie",
      //     photo: "https://fakeimg.pl/200x100"

      //   },
      //   genre: {
      //     id: 1,
      //     name: "CS"
      //   },
      //   isbn: "iBd13489uyujfnUYH78hfee",
      //   summary: "This book covers the basic fundamentals of the c programming language",
      //   imageUrl: "https://fakeimg.pl/200x100"
      // },


    ]

  }
}
