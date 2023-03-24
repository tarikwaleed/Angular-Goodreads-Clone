import { Component } from '@angular/core';
import { AuthorSelectService } from '../../services/author-select.service';

@Component({
  selector: 'app-author-select',
  templateUrl: './author-select.component.html',
  styleUrls: ['./author-select.component.css']
})
export class AuthorSelectComponent {
  authors!: any[]
  selectedAuthorId!: string
  constructor(private authorSelectService: AuthorSelectService) {
    this.authorSelectService.getAuthors().subscribe(data => {
      this.authors = data
    })
  }
  printSeletedAuthor() {
    console.log(this.selectedAuthorId);
  }

}
