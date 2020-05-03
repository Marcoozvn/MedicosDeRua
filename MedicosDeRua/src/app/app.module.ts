import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuardService } from './auth/auth-guard.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';

import { SharedModule } from './shared/shared.module';
import { SearchComponent } from './search/search.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListFormsComponent } from './list-forms/list-forms.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReturnRegistrationComponent } from './register/return-registration/return-registration.component';
import { AnamneseGeralComponent } from './register/anamnese-geral/anamnese-geral.component';
import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { UserComponent } from './register/user/user.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ActionComponent } from './action/action.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewActionComponent } from './action/new-action/new-action.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    SearchComponent,
    ListUsersComponent,
    ListFormsComponent,
    ReturnRegistrationComponent,
    AnamneseGeralComponent,
    UserComponent,
    ActionComponent,
    NewActionComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgbModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [AuthGuardService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
