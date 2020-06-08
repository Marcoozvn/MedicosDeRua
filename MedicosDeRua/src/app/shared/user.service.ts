import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Usuario from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  public setUsers(users: any) {
    this.usersSubject.next(users);
  }

  public getUsers() {
    return this.usersSubject.asObservable();
  }

  public createUser(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.API_HOST}/register`, user);
  }
}
