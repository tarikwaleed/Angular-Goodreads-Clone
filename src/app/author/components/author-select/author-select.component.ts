import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthorSelectService } from '../../services/author-select.service';

@Component({
  selector: 'app-author-select',
  templateUrl: './author-select.component.html',
  styleUrls: ['./author-select.component.css']
})
export class AuthorSelectComponent {
  @Output()
  authorSelected = new EventEmitter<string>();
  @Input()
  selectedAuthorId!: string
  authors!: any[]
  constructor(private authorSelectService: AuthorSelectService) {
    this.authorSelectService.getAuthors().subscribe(data => {
      this.authors = data
    })
  }
  printSeletedAuthor() {
    console.log(this.selectedAuthorId);
  }
  onSelectionChange() {
    this.authorSelected.emit(this.selectedAuthorId);
  }

}
