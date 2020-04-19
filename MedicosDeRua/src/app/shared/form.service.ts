import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    return this.http.post(`${environment.API_HOST}/form/${type}`, form);
  }

  public updateForm(type: string, form: any, id: string) {
    return this.http.put(`${environment.API_HOST}/form/${type}/${id}`, form);
  }

  public deleteForm(type: string, id: string) {
    return this.http.delete(`${environment.API_HOST}/form/${type}/${id}`);
  }
}
