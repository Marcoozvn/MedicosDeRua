import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-anamnese-geral',
  templateUrl: './anamnese-geral.component.html',
  styleUrls: ['./anamnese-geral.component.scss']
})
export class AnamneseGeralComponent implements OnInit {

  anamneseForm: any;
  docsPessoais = [] = ['RG', 'CPF', 'Cart.Trab', 'CNH', 'Cert.Nasc', 'Cert.Cas'];
  drogas = [] = [{ nome: 'Cocaína' }, { nome: 'Maconha' }, { nome: 'LSD' }, { nome: 'Ecstasy' }, { nome: 'Lança perfume' }];
  servicos = [] = ['FAS', 'CREAS', 'Albergue', 'Centro Pop', 'CRAS', 'Internamento', 'CAPS']

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.anamneseForm = this.fb.group({
      paciente: this.fb.group({
        nome: ['', Validators.required],
        idade: '',
        dataNascimento: '',
        religiao: '',
        etnia: '',
        sexo: '',
        orientacao: '',
        situacaoConjugal: '',
        escolaridade: '',
        qualCursoTec: '',
        qualCursoSup: '',
        cidade: '',
        ultimaCidade: '',
        temDocsPessoais: '',
        documentosPessoais: this.fb.group({
          RG: [false],
          CPF: [false],
          'Cart.Trab': [false],
          CNH: [false],
          'Cert.Nasc': [false],
          'Cert.Cas': [false]
        }),
        contato: ''
      }),
      perfilSocioeconomico: this.fb.group({
        tempoDeRua: '',
        ondevive: '',
        nomeDarua: '',
        outrosRua: '',
        comQuemEstaNaRua: '',
        outrosCompainha: '',
        seAcompanhado: this.fb.group({
          numeroAdultos: '',
          numeroCriancas: '',
          ondeFicam:'',
          estudam: ''
        }),
        parentesEmCuritiba: '',
        localidadeParentes: '',
        temContato: '',
        renda:'',
        carteiraAssinada: '',
        ocupacaoClt: ''
      })
    })
  }

  submitForm() {
    console.log('Form: ', this.anamneseForm.value);
  }

}
