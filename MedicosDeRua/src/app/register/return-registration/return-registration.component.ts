import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/shared/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-registration',
  templateUrl: './return-registration.component.html',
  styleUrls: ['./return-registration.component.scss']
})
export class ReturnRegistrationComponent implements OnInit {

  usoDeSubstancias: any;
  registerForm: any;
  form: any;

  constructor(private fb: FormBuilder, private formService: FormService, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.form = this.router.getCurrentNavigation().extras.state;
    }
  }

  drogas = [] = [{ nome: 'Cocaína' }, { nome: 'Maconha' }, { nome: 'LSD' }, { nome: 'Ecstasy' }, { nome: 'Lança perfume' }]

  exames = [
    { nome: 'Destro' },
    { nome: 'Hemograma' },
    { nome: 'Parcial de Urina' },
    { nome: 'Ureia + Creatina' },
    { nome: 'TGO + TGP' },
    { nome: 'Bilirrubinas' },
    { nome: 'Lipidograma' },
    { nome: 'Hb glicada' },
    { nome: 'Sífilis' },
    { nome: 'HIV' },
    { nome: 'Hepatite B' },
    { nome: 'Hepatite C' },
    { nome: 'Gravidez' }]

  encaminhamentos = [] = [{
    area: 'Odontologia',
    situacao1: 'Não quis/ foi necessário atendimento',
    situacao2: 'Atendido - ver ficha específica'
  }, {
    area: 'Psicologia',
    situacao1: 'Não quis/ foi necessário atendimento',
    situacao2: 'Atendido - ver ficha específica'
  }, {
    area: 'Jurídico',
    situacao1: 'Não quis/ foi necessário atendimento',
    situacao2: 'Atendido - ver ficha específica'
  }]

  ngOnInit() {
    this.registerForm = this.fb.group({
      prontuario: [''],
      data: '',
      paciente: this.fb.group({
        nome: ['', Validators.required],
        dataNascimento: '',
      }),
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
      historiaMorbidaPregressa: this.fb.group({
        usoSubstancias: 'false',
        Alcool: this.fb.group({
          uso: false,
          tipoDeUso: {value: '', disabled: false},
          quantidade: '',
          frequencia: ''
        }),
        Cigarro: this.fb.group({
          uso: false,
          quantidade: '',
          tempoDeUso: ''
        }),
        Cocaína: this.fb.group({
          uso: false,
          tipoDeUso: '',
          quantidade: '',
          frequencia: ''
        }),
        Maconha: this.fb.group({
          uso: false,
          tipoDeUso: '',
          quantidade: '',
          frequencia: ''
        }),
        LSD: this.fb.group({
          uso: false,
          tipoDeUso: '',
          quantidade: '',
          frequencia: ''
        }),
        Ecstasy: this.fb.group({
          uso: false,
          tipoDeUso: '',
          quantidade: '',
          frequencia: ''
        }),
        'Lança perfume': this.fb.group({
          uso: false,
          tipoDeUso: '',
          quantidade: '',
          frequencia: ''
        }),
        medicacoesUsoContinuo: '',
        alergias: ''
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
        Destro: [false],
        Hemograma: [false],
        'Parcial de Urina': [false],
        'Ureia + Creatina': [false],
        'TGO + TGP': [false],
        Bilirrubinas: [false],
        Lipidograma: [false],
        'Hb glicada': [false],
        Sífilis: [false],
        HIV: [false],
        'Hepatite B': [false],
        'Hepatite C': [false],
        Gravidez: [false]
      }),
      medicamentos: this.fb.group({
        motivo: '',
        tipo: '',
        quantidade: ''
      }),
      encaminhamentos: this.fb.group({
        Odontologia: false,
        Psicologia: false,
        Jurídico: false
      })
    });

    if (this.form) {
      this.initializeFormValues();
    }
  }

  initializeFormValues() {
    this.registerForm.patchValue(this.form);
    this.registerForm.get('prontuario').disable();
    this.registerForm.get('paciente').disable();
  }

  submitForm() {
    if (this.form) {
      this.registerForm.value.paciente = { ...this.registerForm.value.paciente, nome: this.form.paciente.nome };
      this.formService.updateForm('return', this.registerForm.value, this.form._id).subscribe(
        data => {
          alert('Formulário atualizado com sucesso');
          this.router.navigate(['/app']);
        },
        error => alert('Ocorreu um erro ' + error)
      );
    } else {
      this.formService.saveForm('return', this.registerForm.value).subscribe(
        data => {
          alert('Formulário salvo com sucesso');
          this.router.navigate(['/app']);
        },
        error => alert('Ocorreu um erro ' + error));
      }
  }


}
