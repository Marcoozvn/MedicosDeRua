import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

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
    }
  }

}
