import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  authorId:string | undefined
  authorData:any
  

  constructor(private _ActivatedRoute:ActivatedRoute) { }
  
  ngOnInit() {
    this.authorId = this._ActivatedRoute.snapshot.params['id'];
  }

}
