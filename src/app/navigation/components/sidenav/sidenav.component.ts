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
  isAuthenticated!: boolean

  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    // this.authService.getUser().subscribe(user => this.user = user)
    this.authService.getUser().subscribe(user => {
      // here i'm checkeing for the existance of user.email because just chekcing for
      //user will always return true because user is store in local storage as {}
      this.isAuthenticated = !!user?.email;
      this.user = user;
    });
    console.log(this.isAuthenticated);
    console.log(!!this.user);

  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

}
