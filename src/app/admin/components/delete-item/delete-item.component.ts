import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { BookDashboardService } from '../../services/book-dashboard.service';

import { AuthorDashboardService } from 'src/app/author/services/author-dashboard.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css'],
})
export class DeleteItemComponent {
  item: any = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bookDashboardService: BookDashboardService,
    private authorDashboardService: AuthorDashboardService,
    public dialog: MatDialog,
    private messageService: MessageService
  ) {
    console.log(data);
    this.item = {
      itemId: data.data._id || data.data.id,
      itemName:
        data.data.title ||
        data.data.name ||
        `${data.data.first_name} ${data.data.last_name}`,
    };
  }

  deleteItem() {
    // this.data.close();
    if (this.data.type == 'book') {
      console.log('book');
      this.bookDashboardService
        .deleteBook(this.item.itemId)
        .subscribe((data) => {
          this.dialog.closeAll();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'book Deleted',
            life: 3000,
          });
          // console.log(data);
        });
    } else if (this.data.type == 'author') {
      console.log('author');
      this.authorDashboardService
        .deleteAuthor(this.item.itemId)
        .subscribe((data) => {
          this.dialog.closeAll();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'author Deleted',
            life: 3000,
          });
        });
    }
  }
}
