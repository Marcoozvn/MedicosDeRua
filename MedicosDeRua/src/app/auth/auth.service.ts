import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private authenticate(username: string, password: string): Observable<any> {
    return this.http.post(`${environment.API_HOST}/login`, { username, password });
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('token') != null;
  }

  public getCurrentUser(): string {
    return localStorage.getItem('token');
  }

  public login(username: string, password: string): Observable<any> {
    return this.authenticate(username, password).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
        this.currentUserSubject.next(response.token);
        return response.token;
      })
    );
  }

  public logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
}
