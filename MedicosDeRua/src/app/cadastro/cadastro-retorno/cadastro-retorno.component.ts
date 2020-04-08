import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro-retorno',
  templateUrl: './cadastro-retorno.component.html',
  styleUrls: ['./cadastro-retorno.component.scss']
})
export class CadastroRetornoComponent implements OnInit {

  usoDeSubstancias: any;
  registerForm: any;

  constructor(private fb: FormBuilder) { }

  drogas = [] = [{ nome: 'Cigarro' }, { nome: 'Cocaína' }, { nome: 'Maconha' }, { nome: 'LSD' }, { nome: 'Ecstasy' }, { nome: 'Lança perfume/cola' }]
  
  exames = [] = [
    { nome: 'Destro'}, 
    { nome: 'Hemograma'}, 
    { nome: 'Parcial de Urina'}, 
    { nome: 'Ureia + Creatina'}, 
    { nome: 'TGO + TGP'}, 
    {nome: 'Bilirrubinas'}, 
    { nome: 'Lipidograma'}, 
    { nome: 'Hb glicada'}, 
    { nome: 'Sífilis'}, 
    { nome: 'HIV'},
    { nome: 'Hepatite B'},
    { nome: 'Hepatite C'},
    { nome: 'Gravidez'}]

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
    this.registerForm = this.fb.group({
      prontuario: [''],
      nome: ['', Validators.required],
      data: '',
      idade: '',
      sinaisVitais: this.fb.group({
        freqCardiaca: '',
        freqRespiratoria: '',
        pressaoArterial: '',
        sat: '',
        temperatura: ''
      }),
      queixa: this.fb.group({
        descricao: '',
        tempo: '',
        inicio: '',
        melhora: ''
      }),
      historiaMorbidaAtual: this.fb.group({
        descricao: '',
        dordeDente: ''
      }),
      historiaMorbidaProgressa: this.fb.group({
        usoSubstancias: '',
      }),
      exameFisico: this.fb.group({
        descricao: '',
      }),
      analise: this.fb.group({
        descricao: '',
      }),
      plano: this.fb.group({
        descricao: '',
      }),
      examesLaboratoriais: this.fb.group({
       exames: ''
      }),
      medicamentos: this.fb.group({
        motivo: '',
        tipo: '',
        quantidade: ''
       }),
       encaminhamentos: this.fb.group({
        encaminhamentos: ''
       })
    })
  }

  submitForm(){
    console.log(this.registerForm.value);
  }


}
