import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  findUsers(type: string, value: string): Observable<any>{
    return this.http.get(`${environment.API_HOST}/users?${type}=${value}`);
  }
}
