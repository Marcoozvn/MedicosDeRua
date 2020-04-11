import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListFormsComponent } from './list-forms/list-forms.component';
import { ReturnRegistrationComponent } from './register/return-registration/return-registration.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'app', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'search', component: SearchComponent },
      { path: 'users', component: ListUsersComponent },
      { path: 'forms', component: ListFormsComponent },
      { path: 'return-registration', component: ReturnRegistrationComponent },
      { path: '**', component: SearchComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
