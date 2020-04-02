import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-forms',
  templateUrl: './list-forms.component.html',
  styleUrls: ['./list-forms.component.scss']
})
export class ListFormsComponent implements OnInit {

  mock = [
    { type: 'Anamnese', createdAt: '20/03/2020' },
    { type: 'Retorno', createdAt: '01/04/2020' },
    { type: 'Retorno', createdAt: '02/04/2020' },
    { type: 'Retorno', createdAt: '03/04/2020' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
