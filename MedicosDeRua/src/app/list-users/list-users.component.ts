import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  mock = [
    { name: 'Marcos Cesar', cpf: '000.000.000-00', birthDate: '07/03/1997' },
    { name: 'Marcos Cesar', cpf: '000.000.000-00', birthDate: '07/03/1997' },
    { name: 'Marcos Cesar', cpf: '000.000.000-00', birthDate: '07/03/1997' },
    { name: 'Marcos Cesar', cpf: '000.000.000-00', birthDate: '07/03/1997' },
    { name: 'Marcos Cesar', cpf: '000.000.000-00', birthDate: '07/03/1997' },
    { name: 'Marcos Cesar', cpf: '000.000.000-00', birthDate: '07/03/1997' },
    { name: 'Marcos Cesar', cpf: '000.000.000-00', birthDate: '07/03/1997' },
    { name: 'Marcos Cesar', cpf: '000.000.000-00', birthDate: '07/03/1997' }
  ];

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  searchForm(cpf: string) {
    this.route.navigate([cpf], { relativeTo: this.activatedRoute });
  }

}
