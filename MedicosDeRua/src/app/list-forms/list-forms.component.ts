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
    event.preventDefault();
    console.log('deletar form ', form);
  }

  editForm(form: any) {
    this.router.navigate(['app/return-registration'], { state: form });
  }

}
