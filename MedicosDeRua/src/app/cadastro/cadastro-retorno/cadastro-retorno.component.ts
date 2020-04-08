import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-retorno',
  templateUrl: './cadastro-retorno.component.html',
  styleUrls: ['./cadastro-retorno.component.scss']
})
export class CadastroRetornoComponent implements OnInit {

  usoDeSubstancias;

  constructor() { }
  drogas = [] = [{ nome: 'Cigarro' }, { nome: 'Cocaína' }, { nome: 'Maconha' }, { nome: 'LSD' }, { nome: 'Ecstasy' }, { nome: 'Lança perfume/cola' }]
  exames = ['Destro', 'Parcial de Urina', 'Hemograma', 'Ureia + Creatina', 'TGO + TGP', 'Bilirrubinas', 'Lipidograma', 'Hb glicada']
  testes = [] = ['Sífilis', 'HIV', 'Hepatite B', 'Hepatite C', 'Gravidez']
  
  encaminhamentos = [] = [{
    area: 'Odontologia',
    situacao1: 'Não quis/ foi necessário atendimento',
    situacao2: 'Atendido - ver ficha específica'
  },{
    area: 'Psicologia',
    situacao1: 'Não quis/ foi necessário atendimento',
    situacao2: 'Atendido - ver ficha específica'
  },{
    area: 'Jurídico',
    situacao1: 'Não quis/ foi necessário atendimento',
    situacao2: 'Atendido - ver ficha específica'
  }]

  ngOnInit() {
  }

}
