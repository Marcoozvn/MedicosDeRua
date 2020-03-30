import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:3333';

@Injectable({
  providedIn: 'root'
})
export class RetornoService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(`${API}/return`);
  }

  public create(form: any) {
    return this.http.post(`${API}/return`, form);
  }

  public delete(id: string) {
    return this.http.delete(`${API}/${id}`);
  }

  public update(id: string, form: any) {
    return this.http.put(`${API}/${id}`, form);
  }
}
