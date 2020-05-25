import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
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
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      papel: ['', Validators.required]
    }, { validators: this.passwordValidator });
  }

  passwordValidator(group: FormGroup): { [key: string]: boolean } | null {
    console.log(group);
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmPassword');

    if (confirmPasswordControl.errors) {
      return;
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ senhaDiferente: true });
    } else {
      confirmPasswordControl.setErrors(null);
    }
  }

  salvarUsuario() {
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
