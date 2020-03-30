import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AnamneseComponent } from './anamnese/anamnese.component';
import { RetornoComponent } from './retorno/retorno.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'app', component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: 'anamnese', component: AnamneseComponent },
    { path: 'retorno', component: RetornoComponent }
  ]},
  { path: '**', redirectTo: 'app' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
