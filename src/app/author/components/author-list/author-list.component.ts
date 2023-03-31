import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthorCardModel } from 'src/app/author/models/author-card.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AuthorDashboardService } from '../../services/author-dashboard.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent {
  authors!: AuthorCardModel[];
  pageSize = 10;
  pageSizeOptions = [5, 10, 20];
  isLoading = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<AuthorCardModel>(this.authors);
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.authorDashboardService.getAuthors().subscribe((data) => {
      this.authors = data;
      this.isLoading = false;
    });
  }

  constructor(private authorDashboardService: AuthorDashboardService) {}
}
