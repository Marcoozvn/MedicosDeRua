import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: any;
  public error: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.error = false;
  }

  public submit(): void {
    this.authService.login(this.loginForm.value.login, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => this.router.navigate(['/app']),
        error => {
          this.error = true;
          this.loginForm.reset();
        }
      );
  }

}
