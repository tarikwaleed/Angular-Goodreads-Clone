import { Component, OnInit } from '@angular/core';
import { AuthService } from './registration/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN-book-store';
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.initAuth()
  }

}
