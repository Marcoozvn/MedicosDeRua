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

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(calendar: NgbCalendar, private fb: FormBuilder, private actionService: ActionService, private router: Router) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit() {
    this.actionForm = this.fb.group({
      titulo: ['', Validators.required]
    });
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  submit() {
    const action = new Acao(this.actionForm.get('titulo').value,
      new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day),
      new Date(this.toDate.year, this.toDate.month, this.toDate.day));

    this.actionService.createAction(action).subscribe(
      res => {
        alert('Ação criada com sucesso');
        this.router.navigate(['/app/action']);
      },
      error => alert('Ocorreu um erro: ' + error.error.message)
    );
  }

}
