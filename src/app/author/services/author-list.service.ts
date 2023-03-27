import { Injectable } from '@angular/core';
import { AuthorDataService } from './author-data.service';
import { AuthorDashboardService } from './author-dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorListService {

  constructor(private authorDataService: AuthorDataService,private authorDashboardService:AuthorDashboardService) { }
  
}
