import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { ProfileGuardService } from './auth/profile-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListFormsComponent } from './list-forms/list-forms.component';
import { ReturnRegistrationComponent } from './register/return-registration/return-registration.component';
import { AnamneseGeralComponent } from './register/anamnese-geral/anamnese-geral.component';
import { UserComponent } from './register/user/user.component';
import { ActionComponent } from './action/action.component';
import { NewActionComponent } from './action/new-action/new-action.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'app', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'search', component: SearchComponent },
      { path: 'users', component: ListUsersComponent },
      { path: 'forms', component: ListFormsComponent },
      { path: 'anamnese-geral', component: AnamneseGeralComponent },
      { path: 'return-registration', component: ReturnRegistrationComponent },
      { path: 'new-user', component: UserComponent, canActivate: [ProfileGuardService] },
      { path: 'action', component: ActionComponent, canActivate: [ProfileGuardService] },
      { path: 'new-action', component: NewActionComponent, canActivate: [ProfileGuardService] },
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
