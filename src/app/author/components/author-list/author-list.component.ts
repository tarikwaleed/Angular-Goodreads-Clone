import { Component, OnInit, ViewChild } from '@angular/core';
import { Author } from 'src/app/author/models/author';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AuthorDashboardService } from '../../services/author-dashboard.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  authors!: any[]
  pageSize = 10;
  pageSizeOptions = [5, 10, 20];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Author>(this.authors);
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.authorDashboardService.getAuthors().subscribe(data => {
      this.authors = data
    })
  }

  constructor(private authorDashboardService: AuthorDashboardService) { }



}
