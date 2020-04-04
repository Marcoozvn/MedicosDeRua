import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, pipe } from 'rxjs';

const API = 'http://localhost:3333';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  findUsers(type: string, value: string): Observable<any>{
    return this.http.get(`${API}/users?${type}=${value}`);
  }
}
