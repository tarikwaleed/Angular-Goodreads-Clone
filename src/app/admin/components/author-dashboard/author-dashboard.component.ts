import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { AuthorFormComponent } from 'src/app/author/components/author-form/author-form.component';
import { AuthorDashboardService } from 'src/app/author/services/author-dashboard.service';
import { AuthorFormService } from 'src/app/author/services/author-form.service';
import { DeleteItemComponent } from '../delete-item/delete-item.component';

@Component({
  selector: 'app-author-dashboard',
  templateUrl: './author-dashboard.component.html',
  styleUrls: ['./author-dashboard.component.css'],
})
export class AuthorDashboardComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  authors!: any[];
  constructor(
    private authorDashboardService: AuthorDashboardService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private authorFormService: AuthorFormService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getAuthors();
    this.authorFormService.authorAdded.subscribe(() => {
      this.getAuthors();
    });
    this.authorFormService.authorUpdated.subscribe(() => {
      this.getAuthors();
    });
    this.authorDashboardService.authorDeleted.subscribe(() => {
      this.getAuthors();
    });
  }
  private getAuthors() {
    this.authorDashboardService.getAuthors().subscribe((data) => {
      console.log('Authors:');
      console.log(data);
      this.authors = data;
    });
  }

  openAuthorForm() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(AuthorFormComponent, {
      width: '500px',
      height: '600px',
    });
  }

  editAuthor(author: any) {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(AuthorFormComponent, {
      width: '500px',
      height: '600px',
      data: { author },
    });
  }
  deleteAuthor(author: any) {
    let dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '30rem',
      height: '20rem',
      data: { data: author, type: 'author' },
    });
    // this.confirmationService.confirm({
    //   message: 'Are you sure you want to delete ' + author.authorName + '?',
    //   header: 'Confirm',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.authorDashboardService
    //       .deleteAuthor(author.id)
    //       .subscribe((data) => {
    //         console.log(data);
    //       });
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Successful',
    //       detail: 'Author Deleted',
    //       life: 3000,
    //     });
    //   },
    // });
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
