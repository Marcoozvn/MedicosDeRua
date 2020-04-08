import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersSubject = new BehaviorSubject<any>(null);

  constructor() { }

  public setUsers(users: any) {
    this.usersSubject.next(users);
  }

  public getUsers() {
    return this.usersSubject.asObservable();
  }
}
