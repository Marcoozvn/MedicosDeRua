import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';
import { ListUsersService } from './list-users.service';
import { FormService } from '../shared/form.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  /*
  users = [
    {_id: '5e87b0825b511f2f7c414d16', nome: 'Marcos Vinicius', cpf: '000.000.000-00', dataNascimento: '07/03/1997'}
  ];
  */
 users = [];

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private listUsersService: ListUsersService,
              private formService: FormService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;

      if (!this.users) {
        this.route.navigate(['/app']);
      }
    });
  }

  searchForm(user: any) {
    console.log(user);
    this.listUsersService.findForms(user._id).subscribe( res => {
      this.formService.setForms(res);
      this.route.navigate(['../forms'], { relativeTo: this.activatedRoute });
    });
  }

}
