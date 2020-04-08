import { Component, OnInit } from '@angular/core';
import { FormService } from '../shared/form.service';

@Component({
  selector: 'app-list-forms',
  templateUrl: './list-forms.component.html',
  styleUrls: ['./list-forms.component.scss']
})
export class ListFormsComponent implements OnInit {

  // Remover o mock depois
  mock = [
    { tipo: 'Anamnese', createdAt: '20/03/2020' },
    { tipo: 'Retorno', createdAt: '01/04/2020' },
    { tipo: 'Retorno', createdAt: '02/04/2020' },
    { tipo: 'Retorno', createdAt: '03/04/2020' }
  ];

  // Isso aqui vai ser utilizado para listar os forms
  forms: any[];

  constructor(private formsService: FormService) { }

  ngOnInit() {
    this.formsService.getForms().subscribe( res => {
      this.forms = res;
    });
  }

}
