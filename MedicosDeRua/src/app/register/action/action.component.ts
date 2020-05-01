import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  acoes = [
    {nome: 'Ação 1', dataInicio: '01/05/2020', dataFinal: '10/05/2020'},
    {nome: 'Ação 2', dataInicio: '11/05/2020', dataFinal: '20/05/2020'},
    {nome: 'Ação 3', dataInicio: '21/05/2020', dataFinal: '30/05/2020'},
    {nome: 'Ação 4', dataInicio: '31/05/2020', dataFinal: '10/06/2020'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
