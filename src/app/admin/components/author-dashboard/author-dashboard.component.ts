import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { AuthorDashboardService } from 'src/app/author/services/author-dashboard.service';

@Component({
  selector: 'app-author-dashboard',
  templateUrl: './author-dashboard.component.html',
  styleUrls: ['./author-dashboard.component.css']
})
export class AuthorDashboardComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  authors!: any[]
  constructor(
    private authorDashboardService: AuthorDashboardService
  ) { }
  ngOnInit(): void {
    this.getAuthors()
  }

  private getAuthors() {
    this.authorDashboardService.getAuthors().subscribe(data => {
      console.log("Authors:");
      console.log(data);
      this.authors = data
    })
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
