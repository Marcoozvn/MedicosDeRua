import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CryptoService } from './crypto.service';
import * as jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cryptoService: CryptoService) { }

  private authenticate(login: string, password: string): Observable<any> {
    return this.http.post(`${environment.API_HOST}/login`, { login, password });
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('token') != null;
  }

  public getCurrentUser() {
    const token = this.cryptoService.decypher(localStorage.getItem('token'));
    return jwt_decode(token);
  }

  public getSessionVariable(key: string): string {
    const value = localStorage.getItem(key);
    return (value) ? this.cryptoService.decypher(value) : null;
}

  public login(login: string, password: string): Observable<any> {
    return this.authenticate(login, password).pipe(
      map(response => {
        localStorage.setItem('token', this.cryptoService.cypher(response.token));
        return response.token;
      })
    );
  }

  public logout() {
    localStorage.removeItem('token');
  }
}
