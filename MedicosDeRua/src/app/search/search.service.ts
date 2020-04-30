import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListUsersService } from '../list-users/list-users.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private listUsersService: ListUsersService) {
    this.listUsersService.selectUser(null);
   }

  findUsers(type: string, value: string): Observable<any>{
    return this.http.get(`${environment.API_HOST}/users?${type}=${value}`);
  }
}
