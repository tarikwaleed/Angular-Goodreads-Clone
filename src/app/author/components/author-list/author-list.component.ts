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
  pageSize = 6;
  currentPage= 1;

  // pageSizeOptions = [5, 10, 20];
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


  get totalPages(): number {
    return Math.ceil(this.authors.length / this.pageSize);
  }

  get pagedAuthors(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.authors.slice(startIndex, startIndex + this.pageSize);
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
