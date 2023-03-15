import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/registration/services/auth.service';
import { User } from 'src/app/user/models/user';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  user!: User | null
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.getUser().subscribe(user => this.user = user)

  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

}
