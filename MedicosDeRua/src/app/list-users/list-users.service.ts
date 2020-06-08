import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import Paciente from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  selectedUser = new BehaviorSubject<Paciente>(null);

  constructor(private http: HttpClient) { }

  findForms(id: string) {
    return this.http.get(`${environment.API_HOST}/form/${id}`);
  }

  selectUser(paciente: Paciente) {
    this.selectedUser.next(paciente);
  }

  getSelectedUser() {
    return this.selectedUser.asObservable();
  }


}
