import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorDetailsService } from '../../services/author-details.service';


@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  authorId!: string
  authorData: any


  constructor(private _ActivatedRoute: ActivatedRoute, private authorDetailsService: AuthorDetailsService) { }

  ngOnInit() {
    this.authorId = this._ActivatedRoute.snapshot.params['id'];
    this.authorDetailsService.getAuthorDetails(this.authorId).subscribe(data => {
      this.authorData = data
      console.log(data);
    })
  }

}
