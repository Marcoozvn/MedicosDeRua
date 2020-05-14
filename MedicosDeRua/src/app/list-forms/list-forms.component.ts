import { Component, OnInit } from '@angular/core';
import { FormService } from '../shared/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-forms',
  templateUrl: './list-forms.component.html',
  styleUrls: ['./list-forms.component.scss']
})
export class ListFormsComponent implements OnInit {

  // Isso aqui vai ser utilizado para listar os forms
  forms: any[];
  onlyView = true;

  constructor(private formsService: FormService, private router: Router) { }

  ngOnInit() {
    this.formsService.getForms().subscribe( res => {
      this.forms = res;
      console.log(this.forms);

      if (!this.forms) {
        this.router.navigate(['/app']);
      }
    });
  }

  deleteForm(event: Event, form: any) {
    event.preventDefault();
    const type = form.type === 'Retorno' ? 'return' : 'anamnese';
    this.formsService.deleteForm(type, form._id).subscribe( res => console.log(res));
    this.formsService.setForms(this.forms.filter(item => form._id !== item._id));
  }

  editForm(event: Event, form: any) {
    event.preventDefault();
    if (form.type === 'Retorno') {
      this.router.navigate(['app/return-registration'], { state: form });
    }

    if (form.type === 'Anamnese inicial') {
      this.router.navigate(['app/anamnese-geral'], { state: form });
    }
  }

  viewForm(form: any) {
    if (form.type === 'Retorno') {
      this.router.navigate(['app/return-registration'], { state: [form, this.onlyView] });
    }

    if (form.type === 'Anamnese inicial') {
      this.router.navigate(['app/anamnese-geral'], { state: [form, this.onlyView]});
    }
  }

}
