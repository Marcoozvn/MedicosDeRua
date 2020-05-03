import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ListUsersService } from 'src/app/list-users/list-users.service';
import { UserService } from 'src/app/shared/user.service';
import Usuario from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userForm: any;
  error: string;

  papeis: string[] = ['Acadêmico', 'Médico', 'Jurídico', 'Odontologia', 'Nutrição', 'Enfermagem', 'Veterinária', 'Psicologia',
                      'Fisioterapia', 'Tutor'];

  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, private listUsersService: ListUsersService, private userService: UserService, private router: Router) {
    this.listUsersService.selectUser(null);
   }

  ngOnInit() {
    this.userForm = this.fb.group({
      nome: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.minLength(8)],
      confirmPassword: ['', Validators.minLength(8)],
      papel: ['', Validators.required]
    });
  }

  checkPasswords() {
    const password = this.userForm.get('password').value;
    const confirmPassword = this.userForm.get('confirmPassword').value;

    return password === confirmPassword ? true : false;
  }

  salvarUsuario() {
    if (!this.checkPasswords()) {
      this.error = 'As senhas não coincidem';
    } else {
      this.error = '';
      const { nome, login, password, papel } = this.userForm.value;

      this.userService.createUser(new Usuario(nome, login, password, papel)).subscribe(
        () => {
          alert('Usuário criado com sucesso');
          this.router.navigate(['/app']);
        },
        (error: HttpErrorResponse) => alert('Ocorreu um erro: ' + error.error.message)
      );
    }
  }

}
