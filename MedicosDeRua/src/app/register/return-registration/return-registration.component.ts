import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/shared/form.service';
import { Router } from '@angular/router';
import { ListUsersService } from 'src/app/list-users/list-users.service';
import { Location } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-return-registration',
  templateUrl: './return-registration.component.html',
  styleUrls: ['./return-registration.component.scss']
})
export class ReturnRegistrationComponent implements OnInit {

  usoDeSubstancias: any;
  registerForm: any;
  form: any;
  onlyView: boolean = false;
  paciente: any;
  prontuario: string;

  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, private location: Location, private formService: FormService, private router: Router, private listUsersService: ListUsersService) {
    this.listUsersService.getSelectedUser().subscribe(user => {
      if (user) {
        this.prontuario = uuidv4();
        this.paciente = { nome: user.nome, dataNascimento: user.dataNascimento };
      }
    });
    if (this.router.getCurrentNavigation().extras.state) {
      this.form = this.router.getCurrentNavigation().extras.state;
      if (this.router.getCurrentNavigation().extras.state.length > 1) {
        this.form = this.router.getCurrentNavigation().extras.state[0];
        this.onlyView = true;
      }
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
    if (!this.paciente) {
      this.router.navigate(['/app']);
    }
    this.registerForm = this.fb.group({
      prontuario: '',
      data: '',
      paciente: this.fb.group({
        nome: ['', Validators.required],
        dataNascimento: '',
        idade: '',
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
          tipoDeUso: { value: '', disabled: false },
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
    if(this.registerForm != null && this.registerForm.get('paciente')) {
      this.registerForm.get('paciente').patchValue(this.paciente);      
    }
    this.registerForm.get('prontuario').patchValue(this.prontuario);
    this.registerForm.get('prontuario').disable();
    this.registerForm.get('paciente').disable();

    if (this.form) {
      this.registerForm.patchValue(this.form);
    }

    if (this.onlyView) {
      this.registerForm.disable();
    }

  }

  submitForm() {
    this.registerForm.value = { ...this.registerForm.value, paciente: this.paciente, prontuario: this.prontuario };

    if (this.form) {
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

  goBack() {
    console.log('back', this.location);
    
    this.location.back();
  }
}
