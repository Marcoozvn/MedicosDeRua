import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: any;
  public error: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.error = null;
  }

  public submit(): void {
    this.authService.login(this.loginForm.value.login, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => this.router.navigate(['/app']),
        (error: HttpErrorResponse) => {
          this.error = error.error.message;
          this.loginForm.reset();
        }
      );
  }

}
