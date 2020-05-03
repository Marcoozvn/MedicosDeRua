import { Component, OnInit } from '@angular/core';
import { ActionService } from './action.service';
import Acao from '../models/acao';
import { Router } from '@angular/router';
import { ListUsersService } from '../list-users/list-users.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  acoes: Acao[];

  constructor(private actionService: ActionService, private router: Router, private listUsersService: ListUsersService) { 
    this.listUsersService.selectUser(null);
  }

  ngOnInit() {
    this.actionService.listActions().subscribe(
      res => {
        this.acoes = res;
      }
    );
  }

  newAction() {
    this.router.navigate(['./app/new-action']);
  }

}
