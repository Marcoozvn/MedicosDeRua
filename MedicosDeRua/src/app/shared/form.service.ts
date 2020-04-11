import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API = 'http://localhost:3333';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private formsSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  public setForms(forms: any) {
    this.formsSubject.next(forms);
  }

  public getForms() {
    return this.formsSubject.asObservable();
  }

  public saveForm(type: string, form: any) {
    return this.http.post(`${API}/form/${type}`, form);
  }

  public updateForm(type: string, form: any, id: string) {
    return this.http.put(`${API}/form/${type}/${id}`, form);
  }
}
