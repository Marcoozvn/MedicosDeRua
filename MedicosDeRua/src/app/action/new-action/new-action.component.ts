import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionService } from '../action.service';
import Acao from 'src/app/models/acao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-action',
  templateUrl: './new-action.component.html',
  styleUrls: ['./new-action.component.scss']
})
export class NewActionComponent implements OnInit {

  actionForm: FormGroup;

  constructor(private fb: FormBuilder, private actionService: ActionService, private router: Router) { }

  ngOnInit() {
    this.actionForm = this.fb.group({
      titulo: ['', Validators.required],
      dataAcao: ['', Validators.required],
      inicioAcao: ['', [Validators.required, Validators.minLength(4)]],
      fimAcao: ['', [Validators.required, Validators.minLength(4)]]

    });
  }

  timeValidade() {
    if (!this.actionForm.value.inicioAcao || !this.actionForm.value.fimAcao) {
      return false;
    }

    const hhInicio = this.actionForm.value.inicioAcao.substring(0, 2);
    const mmInicio = this.actionForm.value.inicioAcao.substring(2, 4);

    const hhFim = this.actionForm.value.fimAcao.substring(0, 2);
    const mmFim = this.actionForm.value.fimAcao.substring(2, 4);

    const hhValid = (+hhInicio >= 0 && +hhInicio <= 23) && (+hhFim >= 0 && +hhFim <= 23);
    const mmValid = (+mmInicio >= 0 && +mmInicio <= 59) && (+mmFim >= 0 && +mmFim <= 59);

    return (this.actionForm.value.inicioAcao < this.actionForm.value.fimAcao) && hhValid && mmValid;
  }

  submit() {
    const data = this.actionForm.value.dataAcao as Date;
    const inicio = this.actionForm.value.inicioAcao;
    const fim = this.actionForm.value.fimAcao;

    const dataInicio = new Date(data.getFullYear(), data.getMonth() + 1, data.getDate(), inicio.substring(0, 2), inicio.substring(2, 4));
    const dataFim = new Date(data.getFullYear(), data.getMonth() + 1, data.getDate(), fim.substring(0, 2), fim.substring(2, 4));

    const action = new Acao(this.actionForm.get('titulo').value, dataInicio, dataFim);
    console.log(action);

    this.actionService.createAction(action).subscribe(
      res => {
        alert('Ação criada com sucesso');
        this.router.navigate(['/app/action']);
      },
      error => alert('Ocorreu um erro: ' + error.error.message)
    );
  }

}
