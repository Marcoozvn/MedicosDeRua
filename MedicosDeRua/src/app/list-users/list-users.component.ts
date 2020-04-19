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
    this.listUsersService.findForms(user._id).subscribe( res => {
      this.formService.setForms(res);
      this.route.navigate(['../forms'], { relativeTo: this.activatedRoute });
    });
  }

}
