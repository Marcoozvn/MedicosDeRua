import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ListUsersService } from '../list-users/list-users.service';
import Paciente from '../models/paciente';
import Usuario from '../models/usuario';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  selectedUser: Paciente;
  loggedUser: Usuario;

  // tslint:disable-next-line: max-line-length
  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private listUsersService: ListUsersService, private authService: AuthService) {
    this.loggedUser = this.authService.getCurrentUser();
    this.listUsersService.getSelectedUser().subscribe( user => {
      this.selectedUser = user;
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
