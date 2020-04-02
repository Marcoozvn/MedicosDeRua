import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:3333';

@Injectable({
  providedIn: 'root'
})
export class RetornoService {

  constructor(private http: HttpClient) { }

  public getAll(page: number = 1, perPage: number = 5): Observable<any> {
    return this.http.get(`${API}/return?page=${page}&perPage=${perPage}`, { observe: 'response' });
  }

  public create(form: any) {
    return this.http.post(`${API}/return`, form);
  }

  public delete(id: string) {
    return this.http.delete(`${API}/return/${id}`);
  }

  public update(id: string, form: any) {
    return this.http.put(`${API}/${id}`, form);
  }
}
