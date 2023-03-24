import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/registration/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  isAdmin: Boolean = false

  // in the constructor inject authservice and toaster  service and router 
  constructor(private router: Router, private authService: AuthService) {
    this.authService.getUser().subscribe(data => {
      if (data?.role === 'admin') {
        this.isAdmin = true
      }
    })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAdmin) {
      return true;
    } else {
      this.router.navigate(['/not-auth-error']);
      return false;
    }
  }

}
