import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, map, mapTo, tap } from 'rxjs/operators';
import { User } from 'src/app/user/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:3000/api/auth';
  private token: string | null = null;
  private user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user') ?? '{}');

    if (storedToken) {
      this.token = storedToken;
    }

    if (storedUser) {
      this.user$.next(storedUser);
    }

  }

  register(userData: any): Observable<any> {
    return this.http.post<{ token: string, user: User }>(`${this.API_URL}/register`, userData)
      .pipe(
        tap((response: any) => {
          const { token, user } = response;
          this.setToken(token);
          this.setUser(user);
        }),
        map(() => undefined)
      );
  }

  login(credentials: { email: string, password: string }): Observable<void> {
    return this.http.post<{ token: string, user: User }>(`${this.API_URL}/login`, credentials)
      .pipe(
        tap(response => {
          const { token, user } = response;
          this.setToken(token);
          this.setUser(user);
        }),
        map(() => undefined)
      );
  }


  getToken(): string | null {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(token: string | null): void {
    this.token = token;
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  private setUser(user: User | null): void {
    this.user$.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
  getUser(): Observable<User | null> {
    return this.user$.asObservable().pipe(filter(user => !!user));
  }

  logout(): void {
    this.token = null;
    this.user$.next(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }


  initAuth(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.setToken(token);
    }
    const user = JSON.parse(localStorage.getItem('user') ?? '{}');
    if (user) {
      this.setUser(user);
    }
  }
}
