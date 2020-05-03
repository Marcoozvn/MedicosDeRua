import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Acao from '../models/acao';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http: HttpClient) { }

  createAction(action: Acao): Observable<Acao> {
    return this.http.post<Acao>(`${environment.API_HOST}/action`, action);
  }

  listActions(): Observable<Acao[]> {
    return this.http.get<Acao[]>(`${environment.API_HOST}/action`);
  }
}
