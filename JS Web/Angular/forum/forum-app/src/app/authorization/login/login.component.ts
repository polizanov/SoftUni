import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from "../authorization.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    public authService: AuthorizationService,
    private router: Router,
  ) { }

  login(): void {
    this.authService.setToken();
    this.router.navigate(["/"])
  }

}
