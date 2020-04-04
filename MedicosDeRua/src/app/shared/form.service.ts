import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private formsSubject = new BehaviorSubject<any>(null);

  constructor() { }

  public setForms(forms: any) {
    this.formsSubject.next(forms);
  }

  public getForms() {
    return this.formsSubject.asObservable();
  }
}
