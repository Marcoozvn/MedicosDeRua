import { Component, OnInit } from '@angular/core';
import { FormService } from '../shared/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-forms',
  templateUrl: './list-forms.component.html',
  styleUrls: ['./list-forms.component.scss']
})
export class ListFormsComponent implements OnInit {

  // Remover o mock depois
  /*
  mock = [
    { tipo: 'Anamnese', createdAt: '20/03/2020' },
    { tipo: 'Retorno', createdAt: '01/04/2020' },
    { tipo: 'Retorno', createdAt: '02/04/2020' },
    { tipo: 'Retorno', createdAt: '03/04/2020' }
  ];
  */

  // Isso aqui vai ser utilizado para listar os forms
  forms: any[];

  constructor(private formsService: FormService, private router: Router) { }

  ngOnInit() {
    this.formsService.getForms().subscribe( res => {
      this.forms = res;

      if (!this.forms) {
        this.router.navigate(['/app']);
      }
    });
  }

  deleteForm(event: Event, form: any) {
    const type = form.type === 'Retorno' ? 'return' : 'anamnese';
    this.formsService.deleteForm(type, form._id).subscribe( res => console.log(res));
    this.formsService.setForms(this.forms.filter(item => form._id !== item._id));
  }

  editForm(form: any) {
    console.log(form.type);
    if (form.type === 'Retorno') {
      this.router.navigate(['app/return-registration'], { state: form });
    }

    if (form.type === 'Anamnese inicial') {
      this.router.navigate(['app/anamnese-geral'], { state: form });
    }
  }

}
