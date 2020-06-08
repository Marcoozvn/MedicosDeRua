import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SearchService } from './search.service';
import { UserService } from '../shared/user.service';
import { ListUsersService } from '../list-users/list-users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  mask = '';
  placeholder = 'Informe o nome';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private searchService: SearchService,
              private userService: UserService,
              private listUsersService: ListUsersService) {
    this.listUsersService.selectUser(null);
    this.searchForm = this.formBuilder.group({
      input: ['', Validators.required],
      type: ['nome', Validators.required]
    });
  }

  ngOnInit() {
  }

  changeMask() {
    let minLength: number;
    switch (this.searchForm.get('type').value) {
      case 'nome':
        this.mask = '';
        this.placeholder = 'Informe o nome';
        minLength = 1;
        break;
      case 'cpf':
        this.mask = '000.000.000-00';
        this.placeholder = 'Informe o CPF';
        minLength = 11;
        break;
      case 'dataNascimento':
        this.mask = '00/00/0000';
        this.placeholder = 'Informe a data de nascimento';
        minLength = 8;
        break;
    }
    this.searchForm.get('input').setValidators([Validators.required, Validators.minLength(minLength)]);
    this.searchForm.get('input').reset();
  }

  search() {
    this.searchService.findUsers(this.searchForm.value.type, this.searchForm.value.input).subscribe(
      res => {
        this.userService.setUsers(res);
        this.router.navigate(['users'], { relativeTo: this.activatedRoute });
      }
    );
  }

}
