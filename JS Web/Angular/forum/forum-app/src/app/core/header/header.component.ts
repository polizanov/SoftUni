import { Component } from '@angular/core';

import {AuthorizationService} from '../../authorization/authorization.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogged = false;
  constructor(public authService: AuthorizationService) { }

  login(): void {
    this.isLogged = true;
    this.authService.setToken();
  }

  logout(): void {
    this.isLogged = false;
    this.authService.removeToken();
  }
}
